// Configuración de resaltado de sintaxis para Quetzal (.qz)
// Este archivo define las reglas de resaltado para el lenguaje Quetzal

// Palabras reservadas del lenguaje Quetzal
export const quetzalKeywords = [
  // Tipos de datos
  'numero', 'entero', 'decimal', 'cadena', 'booleano', 'caracter', 'lista', 'objeto', 'promesa',
  
  // Palabras de control
  'si', 'sino', 'mientras', 'para', 'desde', 'hasta', 'paso', 'hacer', 'repetir',
  'detener', 'continuar', 'devolver', 'intentar', 'capturar', 'lanzar', 'finalmente',
  
  // Funciones especiales
  'imprimir', 'imprimir_exito', 'imprimir_error', 'imprimir_advertencia',
  'entrada', 'entrada_numero', 'entrada_booleano',
  
  // Operadores lógicos
  'y', 'o', 'no', 'verdadero', 'falso', 'nulo',
  
  // Funciones asíncronas
  'asincrono', 'aguardar', 'tiempo_espera',
  
  // Otros
  'funcion', 'const', 'let', 'var', 'importar', 'exportar', 'como', 'de'
];

// Funciones integradas
export const quetzalBuiltins = [
  'cadena', 'numero', 'entero', 'decimal', 'booleano',
  'longitud', 'vacio', 'filtrar', 'mapear', 'reducir',
  'agregar', 'remover', 'contiene', 'indice_de',
  'dividir', 'unir', 'mayuscula', 'minuscula',
  'reemplazar', 'subcadena', 'comienza_con', 'termina_con'
];

// Expresiones regulares para el resaltado
export const quetzalGrammar = {
  // Comentarios
  comment: /\/\/.*$/m,
  blockComment: /\/\*[\s\S]*?\*\//,
  
  // Cadenas
  string: /"(?:[^"\\]|\\.)*"/,
  
  // Números
  number: /\b\d+\.?\d*\b/,
  
  // Booleanos
  boolean: /\b(?:verdadero|falso)\b/,
  
  // Null
  null: /\bnulo\b/,
  
  // Palabras reservadas
  keyword: new RegExp(`\\b(?:${quetzalKeywords.join('|')})\\b`),
  
  // Funciones integradas
  builtin: new RegExp(`\\b(?:${quetzalBuiltins.join('|')})\\b`),
  
  // Operadores
  operator: /[+\-*/%=!<>&|]+|y\b|o\b|no\b/,
  
  // Puntuación
  punctuation: /[{}[\]();,.]/,
  
  // Funciones (nombres seguidos de paréntesis)
  function: /\b\w+(?=\s*\()/,
  
  // Variables (identificadores)
  variable: /\b[a-zA-Z_áéíóúñüÁÉÍÓÚÑÜ][a-zA-Z0-9_áéíóúñüÁÉÍÓÚÑÜ]*\b/
};
