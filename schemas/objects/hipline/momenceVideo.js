export default {
  name: 'momenceVideoSection',
  title: 'Momence Video Library',
  type: 'object',
  fields: [
    {
      name: 'disabled',
      title: 'Disable section?',
      type: 'boolean'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'On-Demand Video Library',
      validation: Rule => Rule.required()
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'excerptPortableText'
    },
    {
      name: 'videoLibraryUrl',
      title: 'Video Library URL override',
      description: 'Leave blank to use the site-level Momence setting.',
      type: 'url',
      validation: Rule =>
        Rule.uri({ scheme: ['https'], allowRelative: false }).custom(value => {
          if (!value) return true

          try {
            const host = new URL(value).hostname
            return host === 'momence.com' || host.endsWith('.momence.com')
              ? true
              : 'Use an HTTPS Momence URL.'
          } catch (error) {
            return 'Use a valid HTTPS Momence URL.'
          }
        })
    },
    {
      name: 'frameTitle',
      title: 'Accessible frame title',
      type: 'string',
      initialValue: 'Hipline on-demand video library'
    },
    {
      name: 'fallbackLabel',
      title: 'Fallback link label',
      type: 'string',
      initialValue: 'Open the Video Library'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `${disabled ? 'DISABLED: ' : ''}${title || 'Momence Video Library'}`
      }
    }
  }
}
