import { MdPerson } from 'react-icons/md'

export default {
    name: 'socialSiteFacebook',
    title: 'Facebook',
    type: 'object',
    icon: MdPerson,
    fields: [{
            name: 'facebookUrl',
            title: 'Facebook URL',
            description: 'Full facebook Url only one used',

            type: 'url'
                // validation: Rule => Rule.required()
        },
        {
            name: 'facebookHandle',
            title: 'Facebook Handle',
            description: 'the name after slash facebook.com/hipline" example: hipline',
            type: 'string'
        }
    ],
    preview: {
        select: {
            url: 'facebookUrl',
            handle: 'facebookHandle'
        },
        prepare({ url, handle }) {
            return {
                title: 'Facebook',
                subtitle: url ? `Url: ${url}` : null || handle ? `Handle: /${handle}` : 'Nothing Set'
            }
        }
    }
}
