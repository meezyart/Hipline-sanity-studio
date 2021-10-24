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
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'colorlist', // required
            options: {
                borderradius: {
                    outer: '100%',
                    inner: '100%'
                },
                list: [{
                        title: 'purple',
                        value: '#968dff'
                    },

                    {
                        title: 'purple-light',
                        value: '#e9e8ff'
                    },
                    {
                        title: 'teal',
                        value: '#81f9fd'
                    },
                    {
                        title: 'blue',
                        value: '#a8ddfb'
                    },

                    {
                        title: 'seafoam',
                        value: '#00f8f1'
                    },
                    {
                        title: 'seafoam-light',
                        value: '#c3ffe2'
                    },
                    {
                        title: 'orange',
                        value: '#ff8000'
                    },
                    {
                        title: 'orange-light',
                        value: '#fdc791'
                    },
                    {
                        title: 'ceren-orange',
                        value: '#fbaa62'
                    },
                    {
                        title: 'hot-pink',
                        value: '#ff0dcb'
                    },
                    {
                        title: 'hot-pink-light',
                        value: '#ff7be3'
                    },
                    {
                        title: 'pink-medium-light',
                        value: '#ffc9f4'
                    },
                    {
                        title: 'pink-extra-light',
                        value: '#ffecf8'
                    },
                    {
                        title: 'pink-alt',
                        value: '#fcd6ce'
                    },
                    {
                        title: 'yellow',
                        value: '#fffc00'
                    },
                    {
                        title: 'yellow-orange',
                        value: '#ffd400'
                    },
                    {
                        title: 'grey3',
                        value: '#9b9b9b'
                    },
                    {
                        title: 'grey5',
                        value: '#4a4a4a'
                    },

                    { title: 'White', value: 'white' }
                ]
            }
        },
        {
            name: 'customColor',

            title: 'Custom Background Color',
            description: 'This uses a hex color',
            type: 'string' // make this a background choose your own
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


        }, {
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
