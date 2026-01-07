# ============================================
# Dockerfile seguro para Astro Starlight
# ============================================

# Etapa 1: Construcción
# Usar versión específica de Node (Alpine para menor superficie de ataque)
FROM node:22.16.0-alpine AS construccion

# Metadatos del contenedor
LABEL mantenedor="Equipo de Documentación Quetzal"
LABEL descripcion="Documentación del Lenguaje Quetzal"
LABEL version="1.0"

# Crear usuario no-root para la construcción
RUN addgroup -g 1001 -S nodejs && \
    adduser -S astro -u 1001 -G nodejs

WORKDIR /app

# Copiar solo archivos de dependencias primero (mejor caché de capas)
COPY --chown=astro:nodejs package.json package-lock.json ./

# Usar npm ci para instalación determinista y más segura
# --ignore-scripts previene ejecución de scripts potencialmente maliciosos
RUN npm ci --ignore-scripts && \
    npm cache clean --force

# Copiar el resto del código fuente
COPY --chown=astro:nodejs . .

# Cambiar a usuario no-root para la construcción
USER astro

# Construir la aplicación
RUN npm run build

# ============================================
# Etapa 2: Producción
# ============================================
FROM httpd:2.4.62-alpine AS produccion

# Metadatos
LABEL mantenedor="Equipo de Documentación Quetzal"
LABEL descripcion="Documentación del Lenguaje Quetzal - Producción"

# Instalar curl para verificación de salud y luego limpiar caché
RUN apk add --no-cache curl

# Crear usuario no-root para Apache
RUN addgroup -g 1001 -S www && \
    adduser -S www -u 1001 -G www

# Configuración de seguridad de Apache
RUN echo 'ServerTokens Prod' >> /usr/local/apache2/conf/httpd.conf && \
    echo 'ServerSignature Off' >> /usr/local/apache2/conf/httpd.conf && \
    echo 'TraceEnable Off' >> /usr/local/apache2/conf/httpd.conf && \
    echo 'Header always set X-Content-Type-Options "nosniff"' >> /usr/local/apache2/conf/httpd.conf && \
    echo 'Header always set X-Frame-Options "SAMEORIGIN"' >> /usr/local/apache2/conf/httpd.conf && \
    echo 'Header always set X-XSS-Protection "1; mode=block"' >> /usr/local/apache2/conf/httpd.conf && \
    echo 'Header always set Referrer-Policy "strict-origin-when-cross-origin"' >> /usr/local/apache2/conf/httpd.conf && \
    echo 'Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"' >> /usr/local/apache2/conf/httpd.conf

# Habilitar módulo de cabeceras para las cabeceras de seguridad
RUN sed -i 's/#LoadModule headers_module/LoadModule headers_module/' /usr/local/apache2/conf/httpd.conf

# Copiar archivos estáticos desde la etapa de construcción
COPY --from=construccion --chown=www:www /app/dist /usr/local/apache2/htdocs/

# Establecer permisos restrictivos
RUN chmod -R 755 /usr/local/apache2/htdocs/ && \
    chown -R www:www /usr/local/apache2/htdocs/

# Verificación de salud para monitoreo
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:80/ || exit 1

# Exponer puerto (solo documentación, no abre el puerto)
EXPOSE 80

# Apache se ejecuta como root para enlazar al puerto 80, pero los workers son www
# Para mayor seguridad, podrías usar un puerto alto (8080) y ejecutar todo como www
CMD ["httpd-foreground"]
