export default {
    name: 'heroSection',
    title: 'Hero Banner',
    type: 'object',
    fields: [{
            name: 'disabled',
            title: 'Disable Page Hero?',
            type: 'boolean'
        },
        {
            name: 'heading',
            title: 'Hero Heading',
            type: 'string',
            description: 'Used as the main heading of this section.'
        },
        {
            name: 'headingTextPos',
            title: 'Header Text pos',
            type: 'string',
            initialValue: 'center',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                    { title: 'Center', value: 'center' }
                ],
                layout: 'radio'
            }
        },
        {
            name: 'heroImage',
            type: 'mainImage',
            title: 'Hero Image',
            description: 'Select Recommended dimensions - 1920 x 500, Filesizea\n - less than 1000 k(800 k max)'
        }
    ],
    preview: {
        select: {
            title: 'heading',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''} ${title ? 'Hero Banner: ' + title : 'Hero Banner'}`
            }
        }
    }
}
