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
            description: 'Price for this Pass, Enter 0 you will see the heart symbol',
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
            type: 'mboSection',
            
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
    ],
    preview: {
        select: {
            title: 'passName',
            price: 'passPrice',
            disabled: 'disabled'
        },
        prepare({ title, price, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${  title +  ' - $'+ price}`
            }
        }
    }
}
