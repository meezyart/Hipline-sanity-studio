// import { IoTicket } from 'react-icons/io'
import { MdHeart } from 'react-icons/md'

export default {
    name: 'loveClubSection',
    title: 'Love Club Section',
    type: 'object',
    icon: MdHeart,
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        }, {
            name: 'headline',
            title: 'Love Club Headline',
            description: '',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'loveClubIntro',
            title: 'Love Club Section Intro Text',
            // description: 'This is optional',
            type: 'excerptPortableText'
        },
        {
            name: 'loveClubForm',
            type: 'array',
            title: 'Love Club Forms',
            description: 'Select the forms for this section',
            of: [{
                type: 'reference',
                // name: 'loveClubForms',
                title: 'Love Club Forms',
                to: [{
                    type: 'loveClubBlock'
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
    ],

    preview: {
        select: {
            title: 'headline',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${title? 'Love Club Section: ' + title :
          'Love Club Section'}`
            }
        }
    }
}
