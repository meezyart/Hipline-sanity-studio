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
        },

    ]
}
