import {MdAssignment} from 'react-icons/md'

export default {
  name: 'passBlock',
  title: 'Passes',
  type: 'document',
  icon: MdAssignment,
  fields: [
    {
      name: 'passName',
      title: 'Pass Name',
      description: '',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'passPrice',
      title: 'Pass Price',
      description: 'Price for this Pass',
      type: 'number'
    },
    {
      name: 'passDescription',
      title: 'Description',
      type: 'excerptPortableText'
    },
    {
      name: 'passLink',
      title: 'Mind Body Link',
      description: 'Use the External Link for this',
      type: 'cta'
    },
    {
      name: 'passImage',
      type: 'mainImage',
      title: 'Pass Image'
      // description: 'Select Recommended dimensions - 537 x 429, Filesizea\n - less than 500 k(800 k max)',
    }
  ]
}
