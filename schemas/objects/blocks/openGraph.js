export default {
  title: 'Open Graph (Seo)',
  name: 'openGraph',
  type: 'object',
  options: {
    collapsible: true
  },
  fields: [
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      description: 'Title used for search engines and browsers.',
      validation: Rule => Rule.max(50).warning('Longer titles may be truncated by search engines')
    },
    {
      title: 'Meta Description',
      name: 'metaDesc',
      type: 'text',
      rows: 3,
      description: 'Description for search engines.',
      validation: Rule =>
        Rule.max(150).warning('Longer descriptions may be truncated by search engines')
    },
    {
      title: 'Share Title',
      name: 'shareTitle',
      type: 'string',
      description: 'TItle used for social sharing cards.',
      validation: Rule => Rule.max(50).warning('Longer titles may be truncated by social sites')
    },
    {
      title: 'Share Description',
      name: 'shareDesc',
      type: 'text',
      rows: 3,
      description: 'Description for social sharing cards.',
      validation: Rule =>
        Rule.max(150).warning('Longer descriptions may be truncated by social sites')
    },
    {
      title: 'Share Graphic',
      name: 'shareGraphic',
      type: 'image',
      description: 'Share graphics will be cropped to 1200x630'
    },
    {
      title: 'Keywords',
      description: 'Enter Descriptive names',
      name: 'keywords',
      type: 'array',
      rows: 3,
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      validation: Rule => Rule.unique()
    } // You can add videos to Open Graph tags too
    // {
    //     name: 'video',
    //     title: 'Video',
    //     type: 'mux.video'
    // }
  ],
  preview: {
    select: {
      title: 'title',
      route: 'route.slug.current',
      link: 'link'
    },
    prepare({ title, route, link }) {
      return {
        title,
        subtitle: route ? `Route: /${route}/` : link ? `External link: ${link}` : 'Not set'
      }
    }
  }
}
