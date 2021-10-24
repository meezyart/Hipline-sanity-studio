import { HiQuestionMarkCircle } from 'react-icons/hi'

export default {
    name: 'faqSection',
    title: 'FAQS',
    type: 'object',
    icon: HiQuestionMarkCircle,
    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Used as the main heading of this section.'
        },
        {
            name: 'faqItems',
            title: 'Faq',
            type: 'array',
            of: [{ type: 'simpleSection' }],
            description: 'Used For questions and Answers'
        }
    ],
    preview: {
        select: {
            title: 'heading',
            disabled: 'disabled'
        },
        prepare({ title, disabled }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''} ${title ? 'FAQ Section: ' + title : 'FAQ Section'}`
            }
        }
    }
}
