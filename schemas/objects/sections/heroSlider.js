export default {
  name: 'heroSliderSection',
  title: 'Hero Slider Banner',
  type: 'object',
  fields: [
    {
      name: 'disabled',
      title: 'Disable Page Hero?',
      type: 'boolean'
    },
    {
      name: 'heroSliders',
      title: 'Hero Slides',
      type: 'array',
      description: 'Add your Hero Slides here',
      of: [
        {
          type: 'reference',
          // name: 'loveClubForms',
          title: 'Hero Slides',
          to: [
            {
              type: 'heroSliderBlock'
            }
          ]
        }
      ],
      validation: Rule => Rule.unique()
    },
    
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `${disabled ? 'DISABLED: ' : ''} ${
          title ? 'Hero Slider Banner: ' + title : 'Hero Banner'
        }`
      }
    }
  }
}
