import { IoTicket } from 'react-icons/io'
import { MdCreate } from 'react-icons/md'

export default {
    name: 'passesMenu',
    title: 'Pass Section',
    type: 'document',
    icon: IoTicket,
    fields: [{
            name: 'passHeadline',
            title: 'Passes Section Headline',
            description: '',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'passIntro',
            title: 'Passes Section Intro Text',
            description: 'This is optional',
            type: 'excerptPortableText'
        },
        {
            name: 'passes',
            type: 'array',
            title: 'Passes',
            description: 'Select the passes for this section',
            of: [{
                type: 'reference',
                name: 'passes',
                title: 'Passes',
                to: [{
                    type: 'passBlock'
                }]
            }],
            validation: Rule => Rule.unique()
                // options: {
                //     layout: 'tags'
                // }
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
    ]
}
