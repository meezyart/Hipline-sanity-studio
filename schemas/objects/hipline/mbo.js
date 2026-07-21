export default {
  name: 'mboSection',
            title: 'Legacy Provider Data',
            description: 'Retained only so older documents remain readable. New purchases are managed with Momence fields.',
            type: 'object',
            fields: [{
                    name: 'dataId',
                    title: 'Legacy Service ID',
                    type: 'number'
                },
                {
                    name: 'dataType',
                    title: 'Legacy Data Type',
                    type: 'string'
                },
                {
                    name: 'dataLinkClass',
                    title: 'Legacy Link Class',
                    type: 'string'
                },
                {
                    name: 'buttonTitle',
                    title: 'Button Text',
                    description: 'What u want to Button text to be i.e "Buy Now"',
                    type: 'string'
                }
            ]

}
