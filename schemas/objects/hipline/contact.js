export default {
    name: 'contactSection',
    title: 'Contact Section',
    type: 'object',
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'contactSubTitle',
            title: 'Contact Sub Headline',
            description: 'Used as the sub heading of this section.',
            type: 'string'
        },
        {
            name: 'contactTitle',
            title: 'Contact Headline',
            description: 'Used as the main heading of this section.',
            type: 'string'
        },
        {
            name: 'contactPhoto',
            title: 'Contact Photo',
            description: 'Used as the main Photo of this section.',
            type: 'mainImage'
        },

        {
            name: 'contactHoursFull',
            title: 'Hours of Operation',
            // description: 'This is optional',
            type: 'array',
            of: [{
                title: 'Day/Hours',
                type: 'object',
                fields: [{
                        name: 'day',
                        title: 'Day of the Week',
                        type: 'string',
                    },
                    { name: 'time', title: 'Hours', description: 'example: 9:00am-5:00pm', type: 'string' }
                ]
            }]
        }
    ],
    preview: {
        select: {
            disabled: 'disabled'
        },
        prepare({ disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${'Contact Section: '}`
            }
        }
    }
}
