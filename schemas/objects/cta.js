export default {
    title: 'Call to action',
    name: 'cta',
    type: 'object',
    fieldsets: [{
        title: 'Link',
        name: 'link',
        description: 'Only the first value of these will be used'
    }],
    fields: [{
            title: 'Button Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Landing page (Internal Link)',
            name: 'landingPageRoute',
            type: 'reference',
            fieldset: 'link',
            to: [{ type: 'route' }]
        },
        {
            title: 'Path  (Internal Link)',
            name: 'route',
            fieldset: 'link',
            description: 'Example: /blog',
            type: 'string'
        },
        {
            title: 'External link',
            name: 'link',
            type: 'string',
            description: 'Example: https://www.myhipline.com',
            fieldset: 'link'
        },
        {
            name: 'openInNewTab',
            title: 'Open In New Tab?',
            description: 'Set to true if this link should open in a new tab.',
            type: 'boolean'
                // fieldset: 'externalLink'
        }
    ],
    preview: {
        select: {
            title: 'title',
            landingPage: 'landingPageRoute.slug.current',
            route: 'route',
            link: 'link'
        },
        prepare({ title, landingPage, route, link }) {
            let subtitle = 'Not set'
            if (landingPage) {
                subtitle = `Route: /${landingPage}`
            }
            if (route) {
                subtitle = `Route: ${route}`
            }
            if (link) {
                subtitle = `External: ${link}`
            }
            return {
                title,
                subtitle
            }
        }
    }
}
