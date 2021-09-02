export default {
    name: 'timelineBlock',
    type: 'object',

    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'bulletHeading',
            title: 'Bullet Heading',
            type: 'string',
            description: 'Used as the Blue Bullet heading of this section.'
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Used as the heading of this section.'
        },
        {
            name: 'mainContent',
            title: 'Time Line Content',
            type: 'excerptPortableText',
            description: 'Used as the content of this section.'
        },
        {
            name: 'mainImage',
            title: 'Time Line Image',
            type: 'mainImage',
            description: 'Used for the image to the opposite side of the image constrained to 500px*350px'
        }
    ],
    preview: {
        select: {
            title: 'bulletHeading',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''} ${
          title ? 'Timeline Block : ' + title : 'Timeline  Block'
        }`
            }
        }
    }
}
