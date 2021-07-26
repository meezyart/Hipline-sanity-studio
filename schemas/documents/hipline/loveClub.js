import { IoMdHeart } from 'react-icons/io'
// import { MdHeart } from 'react-icons/md'

export default {
    name: 'loveClubBlock',
    title: 'Love Club Forms',
    type: 'document',
    icon: IoMdHeart,
    fields: [{
            name: 'headline',
            title: 'Love Club Headline',
            description: 'This is the title for the section',
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
            name: 'formLink',
            title: 'Form Link',
            type: 'cta'
        }
    ]

    // preview: {
    //     select: {
    //         title: 'heading',
    //         disabled: 'disabled'
    //     },
    //     prepare({ title, disabled }) {
    //         return {
    //             title: `${disabled ? 'DISABLED: ' : ''}${'Class Menu Section: ' + title ||
    //       'Class Menu Section'}`
    //         }
    //     }
    // }
}
