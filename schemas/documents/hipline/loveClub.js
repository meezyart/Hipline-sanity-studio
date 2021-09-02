import { IoMdHeart } from 'react-icons/io'
// import { MdHeart } from 'react-icons/md'

export default {
    name: 'loveClubBlock',
    title: 'Love Club Forms',
    type: 'document',
    icon: IoMdHeart,
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'headline',
            title: 'Love Club Headline',
            description: 'This is the title for the section',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'mainImage',
            type: 'mainImage',
            title: 'Love Club Image',
            description: 'Select Image will be Constrained to dimensions - 500 x (imageHeight), Filesizea\n - less than 500 k(800 k max)'
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
    ],

    preview: {
        select: {
            title: 'headline',

            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${title ? 'Love Club: ' + title : 'Love Club'}`
            }
        }
    }
}
