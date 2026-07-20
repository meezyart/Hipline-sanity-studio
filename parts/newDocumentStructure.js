import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = listItem =>
  ![
    'sectionsHeader',
    'sectionsFooter',
    'settingsSeo',
    'settingsFavicons',
    'settingsSocial',
    'settingsAnalytics',
    'settingsMomence'
  ].includes(listItem.getId())

export default [...S.defaultInitialValueTemplateItems().filter(hiddenDocTypes)]
