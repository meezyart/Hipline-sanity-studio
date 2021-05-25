import {MdCreate} from 'react-icons/md'

export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  icon: MdCreate,
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      name: 'menuItemName',
      title: 'Menu Item Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Landing page',
      name: 'landingPageRoute',
      type: 'reference',
      fieldset: 'link',
      to: [{type: 'route'}]
    },
    {
      title: 'Path',
      name: 'route',
      fieldset: 'link',
      description: 'Example: /blog',
      type: 'string'
    },
    {
      title: 'External link',
      name: 'link',
      type: 'string',
      description: 'Example: https://www.sanity.io',
      fieldset: 'link'
    },

    {
      name: 'openInNewTab',
      title: 'Open In New Tab?',
      description: 'Set to true if this link should open in a new tab.',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'menuItemName',
      openInNewTab: 'openInNewTab',
      landingPage: 'landingPageRoute.slug.current',
      route: 'route',
      link: 'link'
    },
    prepare ({title, openInNewTab, route, landingPage, link}) {
      let subtitle = 'Not set'
      if (landingPage) {
        subtitle = `Route: /${landingPage}`
      }
      if (route) {
        subtitle = `Route: ${route}`
      }
      if (link) {
        subtitle = `External: ${link}`
      }
      return {
        openInNewTab,
        title: `${title}${openInNewTab ? ' (External)' : ''}`,
        subtitle
      }
    }
  }
}
