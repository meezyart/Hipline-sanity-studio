import { MdDescription } from 'react-icons/md'

export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    icon: MdDescription,
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
        // {
        //     name: 'slug',
        //     title: 'Slug',
        //     type: 'slug',
        //     options: {
        //         source: 'title',
        //         maxLength: 96
        //     },
        //     description: 'Used to determine the path of the page.',
        //     validation: Rule => Rule.custom(slug => {
        //         return slug.current === 'articles' ? 'A page has already been set with this slug.' : true
        //     })
        // },
        {
            name: 'pageSections',
            title: 'Page Sections',
            description: 'Add, edit, and reorder sections on the page.',
            type: 'array',
            // Insert page sections here
            of: [{
                    type: 'richTextSection'
                },
                {
                    type: 'latestArticlesSection'
                },
                {
                    type: 'faqSection'
                }
            ]
        },
        {
            name: 'linkChoice',
            title: 'Link',
            type: 'link',
            // description: 'testing links'
        }
    ]
}
