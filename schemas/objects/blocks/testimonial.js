export default {
    name: 'testimonialBlock',
    type: 'object',

    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'author',
            title: 'Author',
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
                title: `${disabled ? 'DISABLED: ' : ''} ${'Author : ' + title  ||
          'Testimonials'}`
            }
        }
    }
}
