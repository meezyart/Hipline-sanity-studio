// import { IoTicket } from 'react-icons/io'
import { MdInfo } from 'react-icons/md'

export default {
    name: 'infoBoxSection',
    title: 'Info Box Section',
    type: 'object',
    icon: MdInfo,
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        }, {
            name: 'headline',
            title: 'Info Box Main Headline',
            description: '',
            type: 'string',

        },
        {
            name: 'introText',
            title: 'Info Box Section Intro Text',
            description: 'This is optional',
            type: 'excerptPortableText'
        },
        {
            name: 'padTop',
            title: 'Add Top Padding?',
            type: 'boolean',
            initialValue: true
        },
        {
            name: 'padBottom',
            title: 'Add Bottom Padding?',
            type: 'boolean'
        },
        {
            description: 'Pick a color this is optional',
            name: 'bkgrdColor',
            title: 'Background Color',
            type: 'bckgrdColorBlock',
        }, {
            name: 'boxCount',
            title: 'Box Count',
            description: 'This is the amount of boxes showing on the desktop view',
            type: 'string',
            options: {
                list: [
                    { title: '2 up', value: '2' },
                    { title: '3 up', value: '3' },
                    { title: '4 up', value: '4' }
                ],
                layout: 'radio'
            }


        },
        {
            name: 'infoBoxes',
            type: 'array',
            title: 'Info Boxes',
            description: 'a min of 3 is needed and max of 8 for ',

            of: [{
                type: 'object',
                icon: MdInfo,
                fields: [{
                        name: 'headline',
                        title: 'Info Box Headline',
                        description: '',
                        type: 'string',
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'pic',
                        title: 'Info Box Pic',
                        description: 'pic or icon',
                        type: 'mainImage'
                    },
                    {
                        name: 'text',
                        title: 'Info Box Text',
                        // description: 'This is optional',
                        type: 'excerptPortableText'
                    }, {
                        name: 'cta',
                        title: 'Call to Action - optional',
                        type: 'cta',
                    }
                ]

            }],
            validation: Rule => Rule.min(3).max(6)
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
                title: `${disabled ? 'DISABLED: ' : ''}${title? 'Info Boxes Section: ' + title :
          'Info Boxes Section'}`
            }
        }
    }
}
