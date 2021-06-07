function myAsyncSlugifier(input) {
  const query = '*[_id == $id][0]'
  const params = { id: input._ref }
  return client.fetch(query, params).then(doc => {
    return doc.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .slice(0, 200)
  })
}

export default {
  title: 'Path/slug (Internal Link)',
  name: 'navSlug',
  type: 'object',
  fields: [
    {
      title: 'Page Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Path  (Internal Link)',
      name: 'slug',
      description: 'Example: /blog',
      type: 'slug'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)'
      }
    }
  }
}
