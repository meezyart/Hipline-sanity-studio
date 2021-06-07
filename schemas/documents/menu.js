import { MdMenu } from 'react-icons/md'

export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: MdMenu,
  fields: [
    {
      name: 'menuTitle',
      title: 'Menu Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'navPage'
        },
        {
          type: 'navLink'
        },
        {
          type: 'navSlug'
        },
        {
          type: 'navDropDown'
        }
      ]
    }
  ]
}
