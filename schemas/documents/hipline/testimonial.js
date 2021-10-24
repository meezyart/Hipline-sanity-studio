import { GiTalk } from 'react-icons/gi'

export default {
    name: 'testimonialBlock',
    title: 'Testimonials',
    type: 'document',
    icon: GiTalk,
    fields: [{
            name: 'disabled',
            title: 'Disable Testimonial?',
            type: 'boolean'
        },
        {
            name: 'title',
            title: 'Testimonial Title ',
            type: 'string',
            description: 'Used as the Title of this section. Only in Version 2'
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'position',
            title: 'Occupation ',
            type: 'string'
                // description: 'Used as the main heading of this section. use span to change the color of text headline <span>hightlight</span>'
        },
        {
            name: 'mainContent',
            title: 'Testimonial Content',
            type: 'excerptPortableText',
            description: 'Used as the content of this section.'
        },
        {
            name: 'authorImage',
            title: 'Author Image',
            type: 'mainImage'
        }
    ],
    preview: {
        select: {
            title: 'author',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''} ${'Author : ' + title || 'Testimonials'}`
            }
        }
    }
}
