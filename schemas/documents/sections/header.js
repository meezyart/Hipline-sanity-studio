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
                title: 'Show Mind Body Login Button',
                description: '',
                type: 'boolean'
            }, {
                name: 'showCart',
                title: 'Show Cart Button',
                description: '',
                type: 'boolean'
            }, {
                name: 'showButton',
                title: 'Show Top Nav Button',
                description: '',
                type: 'boolean'
            }]
        },
        {
            name: 'topAccount',
            title: 'Top Account Button',
            description: 'This is the Mbo account link',
            type: 'mboSection'
        },
        {
            name: 'topCtaLink',
            title: 'Top Nav Button',
            description: 'Top nav pink button  ',
            type: 'cta'
        }
    ]
}
