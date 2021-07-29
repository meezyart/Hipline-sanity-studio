import { MdViewAgenda } from 'react-icons/md'

export default {
    name: 'sectionsFooter',
    title: 'Footer',
    type: 'document',
    icon: MdViewAgenda,
    fields: [{
            name: 'addressSection',
            title: 'Address Section',
            type: 'object',
            fields: [{
                    name: 'showAddress',
                    title: 'Show Address ',
                    initialValue: true,
                    type: 'boolean'
                },
                {
                    name: 'showSocial',
                    title: 'Show Social Media Icons ',
                    initialValue: true,
                    type: 'boolean'
                }
            ]
        },
        {
            name: 'footerSection1',
            title: 'Footer Section 1',
            type: 'object',
            fields: [{
                    name: 'showFooterMenu1',
                    title: 'Show Footer Menu 1',
                    initialValue: true,
                    type: 'boolean'
                },
                {
                    name: 'footerMenuTitle1',
                    title: 'Footer Menu Title 1',
                    type: 'string'
                },

                {
                    name: 'footerMenu1',
                    title: 'Footer Menu 1',
                    type: 'reference',
                    description: 'Select the menu that will be used in the footer 1.',
                    to: [{
                        type: 'menu'
                    }]
                }
            ]
        },
        {
            name: 'footerSection2',
            title: 'Footer Section 2',
            type: 'object',
            fields: [{
                    name: 'showFooterMenu2',
                    title: 'Show Footer Menu 2',
                    initialValue: true,
                    type: 'boolean'
                },
                {
                    name: 'footerMenuTitle2',
                    title: 'Footer Menu Title 2',
                    type: 'string'
                },
                {
                    name: 'footerMenu2',
                    title: 'Footer Menu 2',
                    type: 'reference',
                    description: 'Select the menu that will be used in the footer 2.',
                    to: [{
                        type: 'menu'
                    }]
                }
            ]
        }
    ]
}
