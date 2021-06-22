export default {
    name: 'testimonialSection',
    title: 'Testimonials Section',
    type: 'object',
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string'
                // description: 'Used as the main heading of this section. use span to change the color of text headline <span>hightlight</span>'
        },
        {
            name: 'version',
            title: 'Testimonials version',
            type: 'string',
            options: {
                list: [
                    { title: 'Version 1', value: 'version1' },
                    { title: 'Version 2', value: 'version2' }
                ],
                layout: 'radio'
            }
        }, {
            name: 'author',
            title: 'Author',
            type: 'string'
                // description: 'Used as the main heading of this section. use span to change the color of text headline <span>hightlight</span>'
        },
        {
            name: 'content',
            title: 'Testimonial Content',
            type: 'simpleSection'
        },

        {
            name: 'authorImage',
            title: 'Author Image',
            type: 'mainImage'
        }
    ],
    preview: {
        select: {
            title: 'heading',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''} ${title || 'Pic Content'}`
            }
        }
    }
}
