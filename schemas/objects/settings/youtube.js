import { MdPerson } from 'react-icons/md'

export default {
    name: 'socialSiteYouTube',
    title: 'YouTube',
    type: 'object',
    icon: MdPerson,
    fields: [{
            name: 'youtubeUrl',
            title: 'YouTube URL',
            description: 'Full YouTube Url only one used',
            type: 'url'
                // validation: Rule => Rule.required()
        },
        {
            name: 'youTubeHandle',
            title: 'YouTube Handle',
            description: 'the name after slash youtube.com/hipline" example: hipline',
            type: 'string'
        }
    ],
    preview: {
        select: {
            url: 'youTubeUrl',
            handle: 'youTubeHandle'
        },
        prepare({ url, handle }) {
            return {
                title: 'YouTube',
                subtitle: url ?
                    `Url: ${url}` : null || handle ?
                    `Handle: /${handle}` : 'Nothing Set'
            }
        }
    }
}
