// import { IoTicket } from 'react-icons/io'
import { MdHeart } from 'react-icons/md'

export default {
    name: 'dancerSection',
    title: 'Choreographer Section',
    type: 'object',
    icon: MdHeart,
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        }, {
            name: 'headline',
            title: 'Choreographer Headline',
            description: 'This is optional',
            type: 'string',
        },
        {
            name: 'dancerIntro',
            title: 'Choreographer Section Intro Text',
            description: 'This is optional',
            type: 'excerptPortableText'
        }
        // {
        //     name: 'passCategory',
        //     type: 'array',
        //     title: 'Pass Category/Section',
        //     description: 'Select the category for this section',
        //     of: [{
        //         type: 'reference',
        //         icon: MdCreate,
        //         to: [{ type: 'passCategory' }]
        //             // weak: true
        //     }],
        //     validation: Rule => Rule.unique()
        //         // options: {
        //         //     layout: 'tags'
        //         // }
        // }
    ],

    preview: {
        select: {
            title: 'headline',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${'Choreographer Section'}`
            }
        }
    }
}
