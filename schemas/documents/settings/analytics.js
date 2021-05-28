import {MdShowChart} from 'react-icons/md'

export default {
  name: 'settingsAnalytics',
  title: 'Analytics',
  type: 'object',
  icon: MdShowChart,
  fields: [
    {
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'Created and obtained from the Google Analytics dashboard.'
    }
  ]
}
