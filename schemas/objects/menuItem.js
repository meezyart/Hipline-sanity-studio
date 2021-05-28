import client from 'part:@sanity/base/client'
import {MdCreate} from 'react-icons/md'

function myAsyncSlugifier (input) {
  const query = '*[_id == $id][0]'
  const params = {id: input._ref}
  return client.fetch(query, params).then(doc => {
    return doc.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .slice(0, 200)
  })
}

export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  icon: MdCreate,
  fieldsets: [
    {
      title: 'Internal Link',
      name: 'interalLink',
      description: 'Only the first value of these will be used'
    },
    {
      title: 'External Link',
      name: 'externalLink',
      description: 'Only the first value of these will be used'
    },
    {
      title: 'Visibility',
      name: 'visibility'
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
      fieldset: 'interalLink',
      to: [{type: 'route'}]
    },
    {
      name: 'slug',
      type: 'slug',
      description: 'This is the website path the page will accessible on',
      title: 'Path',
      validation: Rule =>
        Rule.required().custom(slug => {
          if (slug && slug.current && slug.current === '/') {
            return 'Cannot be /'
          }
          return true
        }),
      options: {
        source: 'landingPageRoute',
        // Read more: https://www.sanity.io/docs/slug-type
        slugify: myAsyncSlugifier
      }
    },
    {
      title: 'Url',
      name: 'link',
      type: 'url',
      description: 'Example: https://www.sanity.io',
      fieldset: 'externalLink'
    },

    {
      name: 'openInNewTab',
      title: 'Open In New Tab?',
      description: 'Set to true if this link should open in a new tab.',
      type: 'boolean',
      fieldset: 'externalLink'
    }
    // {
    //     title: 'Include in sitemap',
    //     description: 'For search engines. Will be generateed to /sitemap.xml',
    //     name: 'includeInSitemap',
    //     type: 'boolean',
    //     fieldset: 'visibility'
    // },
    // {
    //     title: 'Disallow in robots.txt',
    //     description: 'Hide this route for search engines like google',
    //     name: 'disallowRobots',
    //     type: 'boolean',
    //     fieldset: 'visibility'
    // }
  ],
  preview: {
    select: {
      title: 'menuItemName',
      openInNewTab: 'openInNewTab',
      landingPage: 'landingPageRoute.slug.current',
      route: 'route',
      link: 'slug'
    },
    prepare ({title, openInNewTab, slug, landingPage, link}) {
      let subtitle = 'Not set'
      if (landingPage) {
        subtitle = `Route: /${landingPage}`
      }
      if (slug) {
        subtitle = `Route: ${slug}`
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
