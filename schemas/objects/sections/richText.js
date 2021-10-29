export default {
    name: 'richTextSection',
    title: 'Rich Text',
    type: 'object',
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },

        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Used as the main heading of this section.'
        },
        {
            name: 'mainContent',
            title: 'Main Content',
            type: 'richTextBlock'
        },
        {
            name: 'padTop',
            title: 'Add Top Padding?',
            type: 'boolean',
            initialValue: true
        },
        {
            name: 'padBottom',
            title: 'Add Bottom Padding?',
            type: 'boolean'
        },
        {
            description: 'Pick a color this is optional',
            name: 'bkgrdColor',
            title: 'Background Color',
            type: 'bckgrdColorBlock'
        }
    ],
    preview: {
        select: {
            title: 'heading',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${title || 'Rich Text'}`
            }
        }
    }
}
