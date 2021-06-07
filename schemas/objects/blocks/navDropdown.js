export default {
  title: 'Dropdown',
  name: 'navDropDown',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Text to Display',
      validation: Rule => Rule.required()
    },
    {
      title: 'Dropdown Items',
      name: 'dropdownItems',
      type: 'array',
      of: [{ type: 'navPage' }, { type: 'navLink' }, { type: 'navSlug' }]
    }
  ]
}