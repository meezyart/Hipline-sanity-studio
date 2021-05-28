import {MdPerson} from 'react-icons/md'

export default {
  name: 'socialSiteInstagram',
  title: 'Instagram',
  type: 'object',
  icon: MdPerson,
  fields: [
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      description: 'Full Instagram Url only one used',
      type: 'url'
      // validation: Rule => Rule.required()
    },
    {
      name: 'instagramHandle',
      title: 'Instagram Handle',
      description:
        'the name after slash instagram.com/hipline" example: hipline',
      type: 'string'
    }
  ],
  preview: {
    select: {
      url: 'instagramUrl',
      handle: 'instagramHandle'
    },
    prepare ({url, handle}) {
      return {
        title: 'Instagram',
        subtitle: url
          ? `Url: ${url}`
          : null || handle
            ? `Handle: /${handle}`
            : 'Nothing Set'
      }
    }
  }
}
