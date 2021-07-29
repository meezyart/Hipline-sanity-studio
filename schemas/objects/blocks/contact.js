export default {
    name: 'contactBlock',
    type: 'object',

    fields: [{
            name: 'disabled',
            title: 'Disable Section?',
            type: 'boolean'
        },
        {
            name: 'name',
            title: 'Name or Title',
            type: 'string',
            description: 'Enter name or title for contact page.'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'cta'
        },
        {
            name: 'phone',
            title: 'Phone Number ',
            type: 'string',
            description: 'This is optional'
        }
    ],
    preview: {
        select: {
            title: 'name',
            email: 'email',
            disabled: 'disabled'
        },
        prepare({ title, disabled, email }) {
            return {
                title: `${disabled ? 'DISABLED: ' : ''} ${'Contact Info : ' + title + ': ' + email ||
          'Contact Info'}`
            }
        }
    }
}
