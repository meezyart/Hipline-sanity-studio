import React from 'react'
import ConditionalFields from '../../util/conditional-Field'

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
            fields: [{
                    name: 'halfColor',
                    title: 'Half Color',
                    description: 'This is to determine if this a half background',
                    type: 'boolean'
                },
                {
                    name: 'backgroundColor',
                    title: 'Background Color',
                    description: 'This uses a hex color',
                    type: 'string' // make this a background choose your own
                }
            ]
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
