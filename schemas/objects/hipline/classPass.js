export default {
    name: 'classPassSection',
    title: 'Class Pass Section',
    type: 'object',
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'passHeadline',
            title: 'Passes Section Headline',
            description: 'Used as the main heading of this section.',
            type: 'string',
            validation: Rule => Rule.required()
        },
        // {
        //     name: 'classPassSections',
        //     type: 'array',
        //     title: 'Class Pass Sections',
        //     description: 'Select the Class Pass to be included in this section',
        //     of: [{
        //         title: 'Class Pass Sections',
        //         type: 'reference',
        //         to: [{ type: 'classPass' }]
        //     }]
        // },

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
    ],
    preview: {
        select: {
            title: 'passHeadline',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${'Class Pass Section: ' + title ||
          'Class Pass Section'}`
            }
        }
    }
}
