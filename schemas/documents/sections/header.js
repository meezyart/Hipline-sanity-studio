import { MdViewAgenda } from 'react-icons/md'

export default {
    name: 'sectionsHeader',
    title: 'Header',
    type: 'document',
    icon: MdViewAgenda,
    fields: [{
            name: 'headerMenu',
            title: 'Header Menu',
            type: 'reference',
            description: 'Select the menu that will be used in the header.',
            to: [{
                type: 'menu'
            }]
        },
        {
            name: 'loginInfo',
            title: 'Login Information',
            type: 'object',
            fields: [{
                name: 'showLogin',
                title: 'Show Account Sign-In Icon',
                description: 'Shows the Momence account sign-in icon in the header.',
                type: 'boolean'
            }, {
                name: 'showCart',
                title: 'Show Cart Icon',
                description: 'Shows the cart icon in the header.',
                type: 'boolean'
            }, {
                name: 'showButton',
                title: 'Show Top Nav Button',
                description: '',
                type: 'boolean'
            }]
        },
        {
            name: 'topCtaLink',
            title: 'Top Nav Button',
            description: 'Top nav pink button  ',
            type: 'cta'
        }
    ]
}
