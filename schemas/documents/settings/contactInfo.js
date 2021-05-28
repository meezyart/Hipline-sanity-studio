import { MdContactPhone } from 'react-icons/md'

export default {
    name: 'settingsContactInfo',
    title: 'Site Contact Info',
    type: 'document',
    icon: MdContactPhone,
    fields: [{
            name: 'contactInfo',
            title: 'Contact Information',
            type: 'object',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false // Defines if the fieldset should be collapsed by default or not
                    // columns: 2 // Defines a grid for the fields and how many columns it should have
            },
            fields: [{
                    name: 'companyEmail',
                    title: 'Email Address*',
                    type: 'string',
                    validation: Rule => Rule.required()
                },
                {
                    name: 'companyAddress',
                    title: 'Company Address',
                    type: 'text',
                    row: 2
                },
                {
                    name: 'companyPhone',
                    title: 'Company Phone Number',
                    type: 'number'
                },
                {
                    name: 'companyLocationLink',
                    title: 'Company Location Google Link',
                    type: 'url'
                }
            ]
        }
        // {
        //     name: 'companyLocation',
        //     title: 'Company Location (geopoint)',
        //     type: 'geopoint'
        // },
    ]
}
