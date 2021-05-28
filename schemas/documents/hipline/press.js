import {GoDeviceCamera} from 'react-icons/go'

export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  icon: GoDeviceCamera,
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      description: '',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'pressIntro',
      title: 'Intro Text',
      type: 'excerptPortableText'
    },
    {
      name: 'pressBlocks',
      type: 'array',
      title: 'Choreographers',
      description: 'This is for each of the press articles',
      of: [
        {
          type: 'simpleContent'
        }
      ]
      // options: {
      //     layout: 'tags'
      // }
    },
    {
      name: 'classLink',
      title: 'Sign Up Link',
      type: 'cta'
    },
    {
      name: 'classVideos',
      type: 'array',
      title: 'Cover Video',
      description:
        'Select Recommended dimensions - 537 x 429, Filesize - less than 500 k(800 k max)',
      of: [{type: 'file'}]
    },
    {
      name: 'classImages',
      type: 'array',
      title: 'Cover Images',
      description:
        'Select Recommended dimensions - 537 x 429, Filesizea\n - less than 500 k(800 k max)',
      of: [{type: 'mainImage'}]
    }
  ]
}
