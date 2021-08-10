import React from 'react'
import ConditionalFields from '../../util/conditional-field'

export default {
    name: 'picContentSection',
    title: 'Pic/Content Section',
    type: 'object',
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Used as the main heading of this section. use span to change the color of text headline <span>hightlight</span>'
        },
        {
            name: 'mainContent',
            title: 'Main Content',
            type: 'richTextBlock'
        },
        {
            title: 'Select the Pic type',
            name: 'picType',
            type: 'object',

            fields: [{
                name: 'picLocation',
                title: 'Picture Location',
                type: 'string',
                initialValue: 'leftPic',
                options: {
                    list: [
                        { title: 'Left Side Pic', value: 'leftPic' },
                        { title: 'Right Side Pic', value: 'rightPic' },
                        { title: 'Top Side Pic', value: 'topPic' }
                    ],
                    layout: 'radio'
                }
            }]
        },
        {
            name: 'picImages',
            type: 'array',
            title: 'Images For Content post',
            description: 'Max of 3 images. The one on the top is the main. 2nd Image secondary and third is the smallest',
            of: [{ type: 'mainImage' }],
            validation: Rule => Rule.max(3)
        },
        {
            name: 'picIcons',
            type: 'object',

            // options: {
            //     collapsible: true, // Makes the whole fieldset collapsible
            //     collapsed: false // Defines if the fieldset should be collapsed by default or not
            //         // columns: 2 // Defines a grid for the fields and how many columns it should have
            // },
            inputComponent: ConditionalFields,

            fields: [{
                name: 'icons',
                type: 'array',
                title: 'Icons For Images (Optional)',
                description: 'These are icons that go on the pics',
                of: [{ type: 'icon' }],
                validation: Rule => Rule.max(4)
            }],
            options: {
                condition: (document, context) =>
                    context().picType.picLocation === 'leftPic' ||
                    context().picType.picLocation === 'rightPic'
            }
        },
        {
            type: 'object',
            name: 'bkgrdOpts',
            title: 'Background Options',
            inputComponent: ConditionalFields,
            fields: [{
                    name: 'halfColor',
                    title: 'Half Color',
                    description: 'This is to determine if this a half background',
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
                }
            ],
            options: {
                condition: (document, context) =>
                    context().picType.picLocation === 'leftPic' ||
                    context().picType.picLocation === 'rightPic'
            }
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
