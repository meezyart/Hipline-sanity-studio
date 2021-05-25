import React from 'react'
import conditionalFields from '../../util/saneConditionalField'

export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'Link Label',
      name: 'label',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Select the link type',
      name: 'aFieldWithCondition',
      type: 'object',
      inputComponent: conditionalFields,
      fields: [
        {
          type: 'object',
          name: 'input',
          fields: [
            {
              name: 'condition',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Internal, inside this website',
                    value: 'linkInternal'
                  },
                  {
                    title: 'External, outside this website',
                    value: 'linkExternal'
                  },
                  { title: 'Slug', value: 'linkPath' }
                ],
                layout: 'radio' // <-- leave out to make it a dropdown menu
              }
            }
          ]
        },
        {
          type: 'object',
          name: 'options',
          fields: [
            {
              title: 'Landing page',
              name: 'linkInternal',
              type: 'reference',

              to: [{ type: 'route' }]
            },
            {
              name: 'linkExternal',
              title: 'URL',
              type: 'url',
              description: 'Example: https://www.meezyart.com',
              validation: false
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: 'parent.title',
                maxLength: 96
              },
              description: 'Used to determine the path of the page.',
              validation: Rule =>
                Rule.custom(slug => {
                  return slug.current === 'articles'
                    ? 'A page has already been set with this slug.'
                    : true
                })
            }
            // {
            //   title: 'Path',
            //   description: 'Example: /blog',
            //   name: 'linkPath',
            //   type: 'string'
            // }
          ]
        }
      ]
    },
    {
      name: 'openInNewTab',
      title: 'Open In New Tab?',
      description: 'Set to true if this link should open in a new tab.',
      type: 'boolean'
    }
  ]
}
