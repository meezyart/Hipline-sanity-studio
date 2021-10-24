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
            name: 'subTitle',
            title: 'Sub Title',
            type: 'string',
            description: 'Used as the subtitle of this section. use span to change the color of text headline <span>hightlight</span>'
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            // description: 'Used as the main heading of this section. use span to change the color of text headline <span>hightlight</span>'
        },
        {
            name: 'version',
            title: 'Testimonials version',
            type: 'string',
            options: {
                list: [
                    { title: 'Version 1', value: 'version1' },
                    { title: 'Version 2', value: 'version2' },
                    { title: 'Version 3', value: 'version3' },
                ],
                layout: 'radio'
            }
        },
        // {
        //     name: 'Intro',
        //     title: 'Testimonials Section Intro Text',
        //     description: 'This is optional',
        //     type: 'excerptPortableText'
        // },
        {
            name: 'bkgrdColor',
            title: 'Section Background Color',
            description: 'This is optional default is #f5f5f5',
            type: 'bckgrdColorBlock'
        },
        {
            name: 'testimonials',
            title: 'Testimonials Blocks',
            type: 'array',
            description: 'Add your Testimonies here',
            of: [{
                type: 'reference',
                // name: 'loveClubForms',
                title: 'Testimonials',
                to: [{
                    type: 'testimonialBlock'
                }]
            }],
            validation: Rule => Rule.unique()
                // options: {
                //     layout: 'tags'
                // }
        }
    ],
    preview: {
        select: {
            title: 'heading',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {

            return {
                title: `${disabled ? 'DISABLED: ' : ''} ${title ? 'Testimonials Section: ' + title : 'Testimonials Section'}`
            }
        }
    }
}
