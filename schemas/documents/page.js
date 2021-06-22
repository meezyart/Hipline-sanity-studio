import { MdDescription } from 'react-icons/md'

export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    icon: MdDescription,
    fieldsets: [{
        title: 'Visibility',
        name: 'visibility',
        options: {
            collapsible: true
        }
    }],
    fields: [{
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        // {
        //     name: 'navMenu',
        //     type: 'reference',
        //     title: 'Navigation menu',
        //     // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
        //     to: [{ type: 'menu' }],
        //     description: 'Which nav menu should be shown, if any',
        // },
        {
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            description: '(required)',
            options: {
                source: 'title',
                maxLength: 96
            },
            description: 'Used to determine the path of the page.',
            validation: Rule =>
                Rule.custom(slug => {
                    if (slug && slug.current && slug.current === '/') {
                        return 'Cannot be /'
                    }
                    return true
                })
        },
        {
            title: 'Use site title?',
            description: 'Use the site settings title as page title instead of the title on the referenced page',
            name: 'useSiteTitle',
            type: 'boolean'
        },
        {
            name: 'pageSections',
            title: 'Page Sections',
            description: 'Add, edit, and reorder sections on the page.',
            type: 'array',
            // Insert page sections here
            of: [{
                type: 'richTextSection'
            }, {
                type: 'picContentSection'
            }, {
                type: 'faqSection'
            }, {
                type: 'testimonialSection'
            }]
        },
        {
            title: 'SEO / Share Settings',
            name: 'openGraph',
            description: 'These values populate meta tags',
            type: 'openGraph'
        },
        {
            title: 'Include in sitemap',
            description: 'For search engines. Will be generateed to /sitemap.xml',
            name: 'includeInSitemap',
            type: 'boolean',
            fieldset: 'visibility'
        },
        {
            title: 'Disallow in robots.txt',
            description: 'Hide this route for search engines like google',
            name: 'disallowRobots',
            type: 'boolean',
            fieldset: 'visibility'
        }
        // {
        //     name: 'linkChoice',
        //     title: 'Link',
        //     type: 'link',
        //     // description: 'testing links'
        // }
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug'
        },
        prepare({ title = 'Untitled', slug = {} }) {
            const path = `/${slug.current}`
            return {
                title,
                subtitle: slug.current ? path : '(missing slug)'
            }
        }
    }
}
