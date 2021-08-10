export default {
    name: 'simpleSection',
    title: 'Header and Content Section',
    type: 'object',
    description: 'Used as for simple header/Content uses.',
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Used as the heading of this section.'
        },
        {
            name: 'mainContent',
            title: 'Main Content',
            type: 'excerptPortableText',
            description: 'Used as the content of this section.'
        }
    ],
    preview: {
        select: {
            title: 'heading',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${title || 'FAQ'}`
            }
        }
    }
}
