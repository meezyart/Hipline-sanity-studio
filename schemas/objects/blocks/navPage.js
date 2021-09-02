export default {
    title: 'Landing page (Internal Link)',
    name: 'navPage',
    type: 'object',
    fields: [{
            title: 'Link Title',
            name: 'title',
            type: 'string',
            description: 'Display Text',
            validation: Rule => Rule.required()
        },
        {
            title: 'Page',
            name: 'page',
            type: 'reference',
            description: 'Select a page from the dropdown list.',
            to: [{ type: 'page' }]
        }
    ],
    preview: {
        select: {
            title: 'title',
            page: 'page.slug.current'
        },
        prepare({ title, page }) {
            let subtitle = 'Page Route Not set'
            if (page) {
                subtitle = `Page Route: /${page}`
            }
            return {
                title,
                subtitle
            }
        }
    }
}
