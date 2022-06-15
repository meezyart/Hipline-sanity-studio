import { RiSlideshowFill } from 'react-icons/ri'

export default {
  name: 'heroSliderBlock',
  title: 'Home Hero Slides',
  type: 'document',
  icon: RiSlideshowFill,
  fields: [
    {
      name: 'headline',
      title: 'Hero Heading',
      type: 'string',
      description: 'Used as the main heading of this section.',
      validation: Rule => Rule.required()
    },
    {
      name: 'subTitle',
      title: 'Hero Subtitle',
      type: 'string',
      description: 'Used as the subtitle of this section. ( This is Optional)'
    },
    {
      name: 'heroColor',
      title: 'Hero Text Color',
      type: 'string',
      initialValue: '',
      options: {
        list: [
          { title: 'White', value: '' },
          { title: 'Black', value: 'dark' },
          { title: 'Hipline Pink', value: 'primary' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'mainContent',
      title: 'Hero Section Text',
      description: 'Used as the main heading of this section.',
      type: 'excerptPortableText'
    },
    {
      name: 'heroImage',
      type: 'mainImage',
      title: 'Hero Image',
      description:
        'Select Recommended dimensions - 1920 x 700, Filesize\n - less than 1000 k(800 k max)',
      validation: Rule => Rule.required()
    },
    {
      name: 'sliderDelay',
      type: 'string',
      title: 'Slider Delay',
      description: 'Default is 9000 ms. You can update is need to make this slide hold longer'
    }
  ]
}
