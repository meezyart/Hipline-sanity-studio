import { CgGirl } from 'react-icons/cg'

export default {
    name: 'choreographers',
    title: 'Choreographers',
    type: 'document',
    icon: CgGirl,
    fields: [{
            name: 'nickname',
            title: 'Choreographers Name',
            description: 'Use first name or nickname. This must match what is used in MBO → choreographers/nadia',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'object',
            // validation: Rule => Rule.required(),
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false, // Defines if the fieldset should be collapsed by default or not
                columns: 2 // Defines a grid for the fields and how many columns it should have
            },
            fields: [{
                    name: 'firstName',
                    title: 'First Name',
                    type: 'string'
                },
                {
                    name: 'lastName',
                    title: 'Last Name',
                    type: 'string'
                }
            ]
        },

        {
            name: 'quote',
            title: 'Quote',
            type: 'object',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false // Defines if the fieldset should be collapsed by default or not
                    // columns: 2 // Defines a grid for the fields and how many columns it should have
            },
            fields: [{
                    name: 'body',
                    title: 'Quote body',
                    type: 'excerptPortableText'
                },
                {
                    name: 'author',
                    title: 'Quote Author',
                    type: 'string'
                }
            ]
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'object',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false // Defines if the fieldset should be collapsed by default or not
                    // columns: 2 // Defines a grid for the fields and how many columns it should have
            },
            fields: [{
                    name: 'bioBody',
                    title: 'Body',
                    type: 'excerptPortableText'
                },
                {
                    name: 'bioLink',
                    title: 'Bio Link',
                    description: 'This is a Optional Field',
                    type: 'cta',
                    options: {
                        collapsible: true // Makes the whole fieldset collapsible
                            // collapsed: false // Defines if the fieldset should be collapsed by default or not
                            // columns: 2 // Defines a grid for the fields and how many columns it should have
                    }
                }
            ]
        },
        {
            name: 'dancerClass',
            title: 'Class Type',
            type: 'object',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false // Defines if the fieldset should be collapsed by default or not
                    // columns: 2 // Defines a grid for the fields and how many columns it should have
            },
            fields: [{
                    name: 'classBody',
                    title: 'Class Exceptions',
                    type: 'excerptPortableText'
                },
                {
                    name: 'classType',
                    title: 'Classes',
                    description: 'Choose the Classes that this Choreographer teaches',
                    type: 'array',
                    of: [{ type: 'string' }], // TODO change to class type
                    options: {
                        layout: 'tags'
                    },
                    validation: Rule => Rule.unique()
                }
            ]
        },
        {
            name: 'music',
            title: 'Music Related',
            type: 'object',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false // Defines if the fieldset should be collapsed by default or not
                    // columns: 2 // Defines a grid for the fields and how many columns it should have
            },
            fields: [{
                    name: 'bands',
                    title: 'Example Bands/musicians',
                    description: 'Limit 5',
                    type: 'array',
                    of: [{ type: 'string' }],
                    validation: Rule => Rule.unique()
                },
                {
                    name: 'spotify',
                    title: 'Spotify Playlist',
                    description: 'Url to your Spotify playlist',
                    type: 'url'
                }
            ]
        },
        {
            name: 'social',
            type: 'socialBlock',
            title: 'Social Media',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false // Defines if the fieldset should be collapsed by default or not
                    // columns: 2 // Defines a grid for the fields and how many columns it should have
            }
        },
        {
            name: 'coverVideos',
            type: 'array',
            title: 'Cover Video',
            description: 'Select Recommended dimensions - 537 x 429, Filesize - less than 500 k(800 k max)',
            of: [{ type: 'file' }]
        },
        {
            name: 'coverImages',
            type: 'array',
            title: 'Cover Images',
            description: 'Select Recommended dimensions - 537 x 429, Filesizea\n - less than 500 k(800 k max)',
            of: [{ type: 'mainImage' }]
        }
        // {
        //     name: 'slug',
        //     title: 'Slug',
        //     type: 'slug',
        //     options: {
        //         source: 'title',
        //         maxLength: 96
        //     },
        //     description: 'Used to determine the path of the page.',
        //     validation: Rule => Rule.custom(slug => {
        //         return slug.current === 'articles' ? 'A page has already been set with this slug.' : true
        //     })
        // },

        // {
        //   name: 'linkChoice',
        //   title: 'Link',
        //   type: 'link'
        //   // description: 'testing links'
        // }
    ]
}
