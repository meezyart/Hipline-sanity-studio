// import { IoTicket } from 'react-icons/io'
import { MdHeart } from 'react-icons/md'

export default {
    name: 'pressSection',
    title: 'Press Section',
    type: 'object',
    icon: MdHeart,
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        }, {
            name: 'title',
            title: 'Press Headline',
            description: '',
            type: 'string',
            // validation: Rule => Rule.required()
        },
        {
            name: 'pressIntro',
            title: 'Press Section Intro Text',
            description: 'This is optional',
            type: 'excerptPortableText'
        },
        {
            name: 'pressBlockCount',
            type: 'string',
            title: 'Press Box Amount',
            description: 'Select how many press boxes you want showing',
            options: {
                layout: 'radio',
                list: [{
                    title: 'Show All',
                    value: 'all'
                }, {
                    title: 'Latest 3',
                    value: '3'
                }, {
                    title: 'As a Slider',
                    value: 'slider'
                }]
            }
            // options: {
            //     layout: 'tags'
            // }
        }, {
            name: 'bkgrdColor',
            title: 'Section Background Color',
            description: 'This is optional.',
            type: 'bckgrdColorBlock'
        },
    ],

    preview: {
        select: {
            title: 'title',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''}${title? 'Press Section: ' + title :
          'Press Section'}`
            }
        }
    }
}
