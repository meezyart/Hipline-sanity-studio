export default {
    name: 'timelineSection',
    title: 'Timeline Section',
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
            name: 'timelineSections',
            type: 'array',
            title: 'Timeline Sections',
            description: 'Create the timelines to be included in this section',
            of: [{
                type: 'timelineBlock'
            }]
        }
    ],
    preview: {
        select: {
            title: 'bulletHeading',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${title ?
                  'Timeline Section: ' + title :
          'Timeline Section'}`
            }
        }
    }
}
