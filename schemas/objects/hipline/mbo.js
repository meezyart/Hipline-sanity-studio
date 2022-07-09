export default {
  name: 'mboSection',
            title: 'Mind Body Data Info',
            description: 'This is the info you get when you create a link in Mbo Backend',
            type: 'object',
            fields: [{
                    name: 'dataId',
                    title: 'Data Service id',
                    description: 'Look for data-service-id="166" ',
                    type: 'number'
                },
                {
                    name: 'dataType',
                    title: 'Data Type',
                    description: 'Look for data-type="pricing-link" ',
                    type: 'string'
                },
                {
                    name: 'dataLinkClass',
                    title: 'Data Link Class',
                    description: 'Look for data-link-class="healcode-contract-text-link" enter just the name example:"healcode-contract-text-link"',
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
