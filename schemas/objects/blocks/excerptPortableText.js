export default {
    name: 'excerptPortableText',
    type: 'array',
    title: 'Excerpt',
    of: [{
        title: 'Block',
        type: 'block',
        styles: [{
                title: 'Normal',
                value: 'normal'
            },
            {
                title: 'H1',
                value: 'h1'
            },
            {
                title: 'H2',
                value: 'h2'
            },
            {
                title: 'H3',
                value: 'h3'
            },
            {
                title: 'H4',
                value: 'h4'
            }
        ],
        lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' }
        ],
        marks: {
            decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' }
                // {title: 'Code', value: 'code'}
            ],
            annotations: [{
                    name: 'internalLink',
                    type: 'object',
                    title: 'Internal link',
                    blockEditor: {
                        icon: FiLink
                    },
                    fields: [{
                            name: 'reference',
                            type: 'reference',
                            title: '(A) Internal Page',
                            to: [{ type: 'article' }, { type: 'page' }]
                        },
                        {
                            title: 'Style as Button?',
                            name: 'isButton',
                            type: 'boolean'
                        }
                    ]
                },
                {
                    name: 'link',
                    type: 'object',
                    title: '(B) External URL',
                    blockEditor: {
                        icon: FiExternalLink
                    },
                    fields: [{
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                            description: 'This link will open in a new tab.'
                        },
                        {
                            title: 'Style as Button?',
                            name: 'isButton',
                            type: 'boolean'
                        }
                    ]
                }
            ]
        }
    }]
}
