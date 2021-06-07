import { MdDonutSmall } from 'react-icons/md'

export default {
  name: 'settingsLogo',
  title: 'Logo',
  type: 'document',
  icon: MdDonutSmall,
  fields: [
    {
      name: 'darkLogo',
      title: 'Dark Logo',
      type: 'image',
      description: 'Add dark logo for lighter backgrounds'
    },
    {
      name: 'lightLogo',
      title: 'Light Logo',
      type: 'image',
      description: 'Add light logo for Darker backgrounds'
    }
  ]
}
