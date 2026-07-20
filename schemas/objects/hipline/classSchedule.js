export default {
    name: 'classScheduleSection',
    title: 'Momence Schedule Section',
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
            name: 'introduction',
            title: 'Introduction',
            type: 'excerptPortableText'
        },
        {
            name: 'fallbackUrl',
            title: 'Schedule fallback URL',
            type: 'url',
            validation: Rule => Rule.uri({ scheme: ['https'], allowRelative: false })
        },
        {
            name: 'fallbackLabel',
            title: 'Fallback link label',
            type: 'string',
            initialValue: 'Open the schedule'
        },
        {
            name: 'momence',
            title: 'Momence Schedule Plugin',
            description: 'Leave Host ID blank to use the site-level Momence schedule defaults.',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false
            },
            fields: [{
                    name: 'hostId',
                    title: 'Host ID',
                    type: 'string',
                    validation: Rule => Rule.regex(/^\d+$/, { name: 'numeric host ID' })
                },
                {
                    name: 'teacherIds',
                    title: 'Teacher IDs',
                    type: 'array',
                    of: [{ type: 'string', validation: Rule => Rule.regex(/^\d+$/) }],
                    validation: Rule => Rule.unique()
                },
                {
                    name: 'locationIds',
                    title: 'Location IDs',
                    type: 'array',
                    of: [{ type: 'string', validation: Rule => Rule.regex(/^\d+$/) }],
                    validation: Rule => Rule.unique()
                },
                {
                    name: 'tagIds',
                    title: 'Tag IDs',
                    type: 'array',
                    of: [{ type: 'string', validation: Rule => Rule.regex(/^\d+$/) }],
                    validation: Rule => Rule.unique()
                },
                {
                    name: 'defaultFilter',
                    title: 'Default filter',
                    type: 'string',
                    validation: Rule => Rule.regex(/^[a-z0-9-]+$/i)
                },
                {
                    name: 'locale',
                    title: 'Locale',
                    type: 'string',
                    validation: Rule => Rule.regex(/^[a-z]{2}(-[A-Z]{2})?$/)
                }
            ]
        },
        {
            name: 'mbo',
            title: 'Legacy provider data',
            description: 'Temporarily retained for migration. New schedule changes belong in Momence settings.',
            hidden: true,
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
                title: `${disabled ? 'DISABLED: ' : ''}${'Momence Schedule Section: ' + title ||
          'Momence Schedule Section'}`
            }
        }
    }
}
