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
            name: 'mbo',
            title: 'Mind Body Data Info',
            description: 'This is the info you get when you create a link in Mbo Backend',
            type: 'object',
            fields: [{
                    name: 'dataType',
                    title: 'Data Type',
                    description: 'Look for data-type="schedules" ',
                    type: 'string'
                },
                {
                    name: 'dataWidgetId',
                    title: 'Data Widget id',
                    description: 'Look for data-widget-id="3e1451730ab3" ',
                    type: 'string'
                },
                {
                    name: 'dataWidgetVer',
                    title: 'Data Widget version',
                    description: 'Look for data-widget-version="1" ',
                    type: 'number'
                }
            ]
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
