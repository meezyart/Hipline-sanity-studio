export default {
    name: 'pageTitleSection',
    title: 'Page Title Section',
    type: 'object',
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
            description: 'Used as the main heading of this section.'
        }
    ],
    preview: {
        select: {
            title: 'title',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${
          title ? 'Page Title Section: ' + title : 'Page Title Section'
        }`
            }
        }
    }
}
