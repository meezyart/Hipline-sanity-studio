import { MdPerson } from 'react-icons/md'

export default {
  name: 'socialSiteInstagram',
  title: 'Instagram',
  type: 'object',
  description: 'Only choose one',
  icon: MdPerson,
  fields: [
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      description: 'Full Instagram Url  - only use one',
      type: 'url'
      // validation: Rule => Rule.required()
    },
    {
      name: 'instagramReelUrl',
      title: 'Instagram Reel URL',
      description: 'Link to Reel Instagram Url - only use one     ',
      type: 'url'
      // validation: Rule => Rule.required()
    },
    {
      name: 'instagramHandle',
      title: 'Instagram Handle',
      description: 'the name after slash instagram.com/hipline" example: hipline - only use one',
      type: 'string'
    }
  ],
  preview: {
    select: {
      url: 'instagramUrl',
      reelUrl: 'instagramReelUrl',
      handle: 'instagramHandle'
    },
    prepare({ url, reelUrl, handle }) {

      return {
        title:
          url != undefined
            ? 'Instagram'
            : reelUrl != undefined
            ? 'Instagram Reel'
            : 'Instagram Handle',
        subtitle:
          url != undefined
            ? `Url: ${url}`
            : reelUrl != undefined
            ? `Reel Url: ${reelUrl}`
            : handle
            ? `Handle: /${handle}`
            : 'Nothing Set'
      }
    }
  }
}
