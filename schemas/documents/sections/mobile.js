import { MdViewAgenda } from 'react-icons/md'

export default {
    name: 'sectionsMobile',
    title: 'Mobile',
    type: 'document',
    icon: MdViewAgenda,
    fields: [{
            name: 'mobileMenu',
            title: 'Mobile Menu',
            type: 'reference',
            description: 'Select the menu that will be used for the Mobile Menu.',
            to: [{
                type: 'menu'
            }]
        }, {
            name: 'menuImage',
            type: 'mainImage',
            title: 'Mobile Menu Image',
            description: 'This will be the side background image. Its a vertical Image 360x760'
        },

    ]
}
