import { FileSearchableSelect } from '../../components/FileSearchableSelect'

export default {
  name: 'fileAsset',
  type: 'object',
  title: 'File',
  inputComponent: FileSearchableSelect,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Filename'
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL'
    }
  ]
}
