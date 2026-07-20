export default {
  name: 'externalServiceSection',
  title: 'External Service Section',
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
      type: 'string'
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'excerptPortableText'
    },
    {
      name: 'providerLabel',
      title: 'Provider name',
      description: 'Shown to visitors in fallback actions.',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'presentation',
      title: 'Display as',
      type: 'string',
      initialValue: 'inline',
      options: {
        layout: 'radio',
        list: [
          { title: 'On the page', value: 'inline' },
          { title: 'Popup', value: 'popup' },
          { title: 'External link', value: 'external-link' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'embedUrl',
      title: 'Secure iframe URL',
      description: 'Required for on-page and popup displays. The hostname must also be approved in Momence settings.',
      type: 'url',
      validation: Rule => Rule.uri({ scheme: ['https'], allowRelative: false })
    },
    {
      name: 'fallbackUrl',
      title: 'External fallback URL',
      type: 'url',
      validation: Rule => Rule.required().uri({ scheme: ['https'], allowRelative: false })
    },
    {
      name: 'frameTitle',
      title: 'Accessible frame title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'actionLabel',
      title: 'Button label',
      type: 'string'
    },
    {
      name: 'desktopHeight',
      title: 'Desktop height in pixels',
      type: 'number',
      initialValue: 720,
      validation: Rule => Rule.integer().min(320).max(1200)
    },
    {
      name: 'mobileHeight',
      title: 'Mobile height in pixels',
      type: 'number',
      initialValue: 640,
      validation: Rule => Rule.integer().min(320).max(1000)
    }
  ],
  preview: {
    select: { title: 'heading', provider: 'providerLabel', disabled: 'disabled' },
    prepare({ title, provider, disabled }) {
      return {
        title: `${disabled ? 'DISABLED: ' : ''}${title || provider || 'External Service'}`,
        subtitle: provider || 'External service'
      }
    }
  }
}
