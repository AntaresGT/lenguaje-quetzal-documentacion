import { defineRouteMiddleware } from '@astrojs/starlight/route-data'

export const onRequest = defineRouteMiddleware((context) => {
    // Get the URL of the generated image for the current page using its ID and
    // append the `.png` file extension.
    const ogImageUrl = `${context.site}og/${context.locals.starlightRoute.id || 'index'}.png`

    // Get the array of all tags to include in the `<head>` of the current page.
    const { head } = context.locals.starlightRoute

    if (context.url.pathname === '/') {
        // Add the `<meta/>` tags for the Open Graph images.
        head.push({
            tag: 'meta',
            attrs: { property: 'og:image', content: 'https://lenguaje-quetzal.antaresgt.com/_astro/logo_lenguaje_quetzal.C5qLBa-3_Z1B27G5.webp' },
        })
        head.push({
            tag: 'meta',
            attrs: { name: 'twitter:image', content: 'https://lenguaje-quetzal.antaresgt.com/_astro/logo_lenguaje_quetzal.C5qLBa-3_Z1B27G5.webp' },
        })
    }
    else {
        // Add the `<meta/>` tags for the Open Graph images.
        head.push({
            tag: 'meta',
            attrs: { property: 'og:image', content: ogImageUrl },
        })
        head.push({
            tag: 'meta',
            attrs: { name: 'twitter:image', content: ogImageUrl },
        })
    }
})