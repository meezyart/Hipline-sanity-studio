import { MdNextWeek } from 'react-icons/md'

export default {
    name: 'passBlock',
    title: 'Passes',
    type: 'document',
    icon: MdNextWeek,
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'passName',
            title: 'Pass Name',
            description: '',
            type: 'string',
            validation: Rule => Rule.required()
        },

        {
            name: 'passPrice',
            title: 'Pass Price',
            description: 'Price for this Pass, Enter 0 you will se the heart symbol',
            type: 'number'
        },
        {
            name: 'passDescription',
            title: 'Description',
            description: 'This text will go under price and above the bullets (optional)',

            type: 'excerptPortableText'
        },
        {
            name: 'passBullets',
            title: 'Bullet Points',
            description: 'This text will be used for bullets',

            type: 'array',
            of: [{ type: 'string' }]
        },

        {
            name: 'mbo',
            title: 'Mind Body Data Info',
            description: 'This is the info you get when you create a link in Mbo Backend',
            type: 'object',
            fields: [{
                    name: 'dataId',
                    title: 'Data id',
                    description: 'Look for prodId=166 at the end of the URL',
                    type: 'number'
                },
                {
                    name: 'dataType',
                    title: 'DataType',
                    description: 'Look for prodId=166 at the end of the URL',
                    type: 'string'
                },
                {
                    name: 'dataLinkClass',
                    title: 'Data Link Class',
                    description: 'Look for data-link-class="healcode-contract-text-link" enter just the name example:"healcode-contract-text-link"',
                    type: 'string'
                },
                {
                    name: 'buttonTitle',
                    title: 'Button Text',
                    description: 'What u want to Button text to be i.e "Buy Now"',
                    type: 'string'
                }
            ]
        },

        {
            name: 'passLink',
            title: 'Mind Body Link',
            description: 'Use the External Link for this (optional)',
            type: 'cta',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: true, // Defines if the fieldset should be collapsed by default or not
            },
        }
    ]
}
