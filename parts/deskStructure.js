import S from '@sanity/desk-tool/structure-builder'
import {
  MdDescription,
  MdCreate,
  MdApps,
  MdViewAgenda,
  MdMenu,
  MdLink,
  MdSettings,
  MdBuild,
  MdLanguage,
  MdPeople,
  MdShowChart
} from 'react-icons/md'

import {GoBrowser as PageIcon, GoHome, GoSettings} from 'react-icons/go'

const hiddenDocTypes = listItem =>
  ![
    'post',
    'page',
    'menu',
    'media.tag',
    'author',
    'category',
    'route',
    'sectionsHeader',
    'sectionsFooter',
    'settingsSeo',
    'settingsFavicons',
    'settingsSocial',
    'settingsAnalytics'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site Content')
    .items([
      S.divider(),
      S.documentTypeListItem('page')
        .title('Pages')
        .icon(MdDescription),
      // Use For Sample
      // S.listItem()
      // .title('Articles')
      // .icon(MdCreate)
      // .child(
      //     S.list()
      //     .title('Articles')
      //     .items([
      //         S.documentTypeListItem('article')
      //         .title('All Articles')
      //         .icon(MdCreate),
      //         S.listItem()
      //         .title('Articles By Category')
      //         .icon(MdCreate)
      //         .child(
      //             S.documentTypeList('articleCategory')
      //             .title('Articles By Category')
      //             .child(catId =>
      //                 S.documentList()
      //                 .schemaType('article')
      //                 .title('Articles')
      //                 .filter(
      //                     '_type == "article" && $catId in categories[]._ref'
      //                 )
      //                 .params({
      //                     catId
      //                 })
      //             )
      //         ),
      //         S.documentTypeListItem('articleCategory')
      //         .title('Categories')
      //         .icon(MdApps)
      //     ])
      // ),

      S.documentTypeListItem('route')
        .title('Page Routes')
        .icon(MdLink),
      S.documentTypeListItem('menu')
        .title('Menus')
        .icon(MdMenu),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.divider(),
      S.listItem()
        .title('Sections')
        .icon(MdViewAgenda)
        .child(
          S.list()
            .title('Site Sections')
            .items([
              S.listItem()
                .title('Header')
                .icon(MdViewAgenda)
                .child(
                  S.document()
                    .title('Header')
                    .schemaType('sectionsHeader')
                    .documentId('sectionsHeader')
                ),
              S.listItem()
                .title('Footer')
                .icon(MdViewAgenda)
                .child(
                  S.document()
                    .title('Footer')
                    .schemaType('sectionsFooter')
                    .documentId('sectionsFooter')
                )
            ])
        ),

      S.listItem()
        .title('Site Settings')
        .icon(GoSettings)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('SEO')
                .icon(MdBuild)
                .child(
                  S.document()
                    .title('SEO')
                    .schemaType('settingsSeo')
                    .documentId('settingsSeo')
                ),
              S.listItem()
                .title('Favicons')
                .icon(MdLanguage)
                .child(
                  S.document()
                    .title('Favicons')
                    .schemaType('settingsFavicons')
                    .documentId('settingsFavicons')
                ),
              S.listItem()
                .title('Social')
                .icon(MdPeople)
                .child(
                  S.document()
                    .title('Social')
                    .schemaType('settingsSocial')
                    .documentId('settingsSocial')
                ),
              S.listItem()
                .title('Analytics')
                .icon(MdShowChart)
                .child(
                  S.document()
                    .title('Analytics')
                    .schemaType('settingsAnalytics')
                    .documentId('settingsAnalytics')
                )
            ])
        )
    ])
