export default {
  type: 'object',
  name: 'bckgrdColorBlock',
  title: 'Background Options',
  fields: [
    {
      description: 'Pick a color this is optional',
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorlist', // required
      options: {
        borderradius: {
          outer: '100%',
          inner: '100%'
        },
        list: [
          {
            title: 'purple',
            value: '#968dff'
          },

          {
            title: 'purple-light',
            value: '#e9e8ff'
          },
          {
            title: 'teal',
            value: '#A8EBF3;
          },
          {
            title: 'teal-blue',
            value: '#81f9fd'
          },
          {
            title: 'blue',
            value: '#a8ddfb'
          },

          {
            title: 'seafoam',
            value: '#00f8f1'
          },
          {
            title: 'seafoam-light',
            value: '#6FD9B4'
          },
          {
            title: 'orange',
            value: '#ff8000'
          },
          {
            title: 'orange-p',
            value: '#f6ae65'
          },
          {
            title: 'orange-light',
            value: '#fdc791'
          },
          {
            title: 'ceren-orange',
            value: '#fbaa62'
          },
          {
            title: 'hot-pink',
            value: '#f600a5'
          },
          {
            title: 'hot-pink-light',
            value: '#ff7be3'
          },
          {
            title: 'pink-medium-light',
            value: '#ffc9f4'
          },
          {
            title: 'pink-extra-light',
            value: '#ffecf8'
          },
          {
            title: 'pink-alt',
            value: '#fcd6ce'
          },
          {
            title: 'yellow',
            value: '#fffc00'
          },
          {
            title: 'yellow-orange',
            value: '#ffd400'
          },
          {
            title: 'badge',
            value: '#f5f5f5'
          },
          {
            title: 'grey3',
            value: '#9b9b9b'
          },
          // {
          //     title: 'grey5',
          //     value: '#4a4a4a'
          // },

          { title: 'White', value: 'white' }
        ]
      }
    },
    {
      name: 'customColor',

      title: 'Custom Background Color',
      description: 'This uses a hex color',
      type: 'string' // make this a background choose your own
    }
  ]
  // preview: {
  //     select: {
  //         title: 'heading',
  //         disabled: 'disabled'
  //     },
  //     prepare({ title, disabled }) {
  //         return {
  //             title: `${disabled ? 'DISABLED: ' : ''}${'Color Options ' + title || 'Color Options'}`
  //         }
  //     }
  // }
}
