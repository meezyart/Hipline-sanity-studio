export default {
  name: 'faqSection',
  title: 'FAQS',
  type: 'object',
  fields: [
    {
      name: 'disabled',
      title: 'Disable Section?',
      type: 'boolean'
    },
    {
      name: 'faqItems',
      title: 'Faq',
      type: 'array',
      of: [{type: 'simpleSection'}],
      description: 'Used For questions and Answers'
    }
  ],
  preview: {
    prepare () {
      return {
        title: 'FAQ Section'
      }
    }
  }
}
