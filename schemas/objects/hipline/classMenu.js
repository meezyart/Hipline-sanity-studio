export default {
    name: 'classMenuSection',
    title: 'Class Menu Section',
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
            name: 'classMenuSections',
            type: 'array',
            title: 'Class Menu Sections',
            description: 'Select the Class Menus to be included in this section',
            of: [{
                title: 'Class Menu Sections',
                type: 'reference',
                to: [{ type: 'classMenu' }]
            }]
        }
    ],
    preview: {
        select: {
            title: 'heading',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${'Class Menu Section: ' + title ||
          'Class Menu Section'}`
            }
        }
    }
}
