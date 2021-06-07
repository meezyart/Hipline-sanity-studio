import { MdPerson } from 'react-icons/md'

export default {
  name: 'socialSiteTwitter',
  title: 'Twitter',
  type: 'object',
  icon: MdPerson,
  fields: [
    {
      name: 'twitterUrl',
      title: 'Twitter URL',
      description: 'Full Twitter Url only one used',
      type: 'url'
      // validation: Rule => Rule.required()
    },
    {
      name: 'twitterHandle',
      title: 'Twitter Handle',
      description: 'the name after slash Twitter.com/hipline" example: hipline',
      type: 'string'
    }
  ],
  preview: {
    select: {
      url: 'twitterUrl',
      handle: 'twitterHandle'
    },
    prepare({ url, handle }) {
      return {
        title: 'Twitter',
        subtitle: url ? `Url: ${url}` : null || handle ? `Handle: /${handle}` : 'Nothing Set'
      }
    }
  }
}
