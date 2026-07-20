import { MdNextWeek } from 'react-icons/md'

export default {
    name: 'passBlock',
    title: 'Passes',
    type: 'document',
    icon: MdNextWeek,
    fieldsets: [{
        name: 'purchase',
        title: 'Purchase',
        description: 'Manage where this pass sends customers to buy.',
        options: {
            collapsible: true,
            collapsed: false
        }
    }],
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
            title: 'Legacy provider data',
            description: 'Temporarily retained for migration. New purchases belong in the Purchase fields.',
            hidden: true,
            type: 'mboSection',
            
        },

        {
            name: 'passLink',
            title: 'Legacy purchase link',
            description: 'Temporarily retained for migration. Use Purchase URL for new changes.',
            hidden: true,
            type: 'cta',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: true, // Defines if the fieldset should be collapsed by default or not
            },
        },
        {
            name: 'purchaseProvider',
            title: 'Purchase provider',
            type: 'string',
            fieldset: 'purchase',
            initialValue: 'momence',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Momence', value: 'momence' },
                    { title: 'External HTTPS checkout', value: 'external' }
                ]
            }
        },
        {
            name: 'purchaseUrl',
            title: 'Purchase URL',
            description: 'Paste the approved Momence or external HTTPS purchase URL.',
            type: 'url',
            fieldset: 'purchase',
            validation: Rule => Rule.uri({ scheme: ['https'], allowRelative: false })
        },
        {
            name: 'purchaseButtonLabel',
            title: 'Purchase button label',
            type: 'string',
            fieldset: 'purchase',
            initialValue: 'Buy Now'
        },
        {
            name: 'purchasePresentation',
            title: 'Purchase display',
            type: 'string',
            fieldset: 'purchase',
            initialValue: 'popup',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Popup checkout', value: 'popup' },
                    { title: 'External link', value: 'external-link' }
                ]
            }
        },
        {
            name: 'momenceProductId',
            title: 'Momence product ID',
            description: 'Optional public Momence membership or product identifier.',
            type: 'string',
            fieldset: 'purchase',
            validation: Rule => Rule.regex(/^\d+$/, { name: 'numeric product ID' })
        },
        {
            name: 'purchaseOpenInNewTab',
            title: 'Legacy purchase presentation',
            description: 'Legacy presentation field retained for migration.',
            hidden: true,
            type: 'boolean',
            fieldset: 'purchase',
            initialValue: true
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
