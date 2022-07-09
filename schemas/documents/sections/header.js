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
                title: 'Show Login Button',
                description: '',
                type: 'boolean'
            }, {
                name: 'showCart',
                title: 'Show Cart Button',
                description: '',
                type: 'boolean'
            }]
        },
        {
            name: 'topCtaLink',
            title: 'Top Nav Button',
            description: 'Top nav button Connected to Mind Body',
            type: 'mboSection'
        }
    ]
}
