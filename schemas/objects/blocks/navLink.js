export default {
    title: 'External Link',
    name: 'navLink',
    type: 'object',
    fields: [{
            title: ' Link Title',
            name: 'title',
            type: 'string',
            description: 'Display Text'
        },
        {
            title: 'URL',
            name: 'url',
            type: 'url',

            description: 'enter an external URL',
            validation: Rule => Rule.uri({ scheme: ['tel', 'mailto', 'http', 'https'] })
        },
        {
            name: 'openInNewTab',
            title: 'Open In New Tab?',
            description: 'Set to true if this link should open in a new tab.',
            type: 'boolean'
                // fieldset: 'externalLink'
        }
    ]
}
