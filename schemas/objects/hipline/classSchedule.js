export default {
    name: 'classScheduleSection',
    title: 'Class Schedule Section',
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
            name: 'classSchedule',
            title: 'class Schedule',
            type: 'text',
            row: 10,
            description: 'Paste the MBO html code here '
        }

    ],
    preview: {
        select: {
            title: 'heading',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${'Class Schedule Section: ' + title ||
          'Class Schedule Section'}`
            }
        }
    }
}
