export default {
    name: 'icon',
    type: 'object',
    options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false // Defines if the fieldset should be collapsed by default or not
            // columns: 2 // Defines a grid for the fields and how many columns it should have
    },
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'heading',
            title: 'Icon name',
            type: 'string',
            description: 'can be any name to referance'
        },
        {
            name: 'icon',
            type: 'image',
            title: 'Icon Image'
        },
        {
            name: 'iconDepth',
            type: 'number',
            title: 'Icon Depth'
        },
        {
            name: 'iconPosition',
            type: 'number',
            title: 'Icon Position'
        }
    ],
    preview: {
        select: {
            title: 'heading',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''} ${title || 'Pic Icon'}`
            }
        }
    }
}
