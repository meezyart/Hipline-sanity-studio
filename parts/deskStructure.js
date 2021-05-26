import S from '@sanity/desk-tool/structure-builder'
import {
    MdDescription,
    MdCreate,
    MdApps,
    MdViewAgenda,
    MdMenu,
    MdCollectionsBookmark,
    MdLink,
    MdSettings,
    MdRssFeed,
    MdBuild,
    MdLanguage,
    MdPeople,
    MdShowChart
} from 'react-icons/md'


import { GoBrowser as PageIcon, GoHome, GoSettings } from "react-icons/go"


const hiddenDocTypes = listItem =>
    ![
        'post',
        'page',
        'menu',
        'media.tag',
        'author',
        'category',
        'route',
        'pressCategory',
        'sectionsHeader',
        'sectionsFooter',
        'settingsSeo',
        'article',
        'settingsFavicons',
        'settingsSocial',
        'settingsAnalytics'
    ].includes(listItem.getId())


export default () =>
S.list()
    .title('Site Content')
    .items([
        // S.divider(),
        S.documentTypeListItem('page')
        .title('Pages')
        .icon(MdDescription),
        // Use For Sample
        ...S.documentTypeListItems().filter(hiddenDocTypes),

        S.listItem()
        .title('Press')
        .icon(MdRssFeed)
        .child(
            S.list()
            .title('Articles')
            .items([
                S.documentTypeListItem('article')
                .title('All Articles')
                .icon(MdCollectionsBookmark),
                S.listItem()
                .title('Articles By Category')
                .icon(MdCollectionsBookmark)
                .child(
                    S.documentTypeList('pressCategory')
                    .title('Articles By Category')
                    .child(catId =>
                        S.documentList()
                        .schemaType('article')
                        .title('Articles')
                        .filter(
                            '_type == "article" && $catId in categories[]._ref'
                        )
                        .params({
                            catId
                        })
                    )
                ),
                S.documentTypeListItem('pressCategory')
                .title('Categories')
                .icon(MdApps)
            ])
        ),

        // S.documentTypeListItem('route')
        // .title('Page Routes')
        // .icon(MdLink),
        // S.documentTypeListItem('menu')
        // .title('Menus')
        // .icon(MdMenu),
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
        .title('Page Builder')
        .icon(MdDescription)
        .child(
            S.list()
            .title('Landing Pages')
            .items([
                S.listItem()
                .title('Navigation Menus')
                .icon(MdMenu)
                .schemaType('menu')
                .child(S.documentTypeList('menu').title('Navigation Menus')),
                S.listItem()
                .title('Page Routes')
                .schemaType('route')
                .child(
                    S.documentTypeList('route')
                    .title('Page Routes')
                    .child(documentId =>
                        S.document()
                        .documentId(documentId)
                        .schemaType('route')
                        .views([S.view.form()])
                    )
                ),
                S.listItem()
                .title('Pages')
                .schemaType('page')
                .child(
                    S.documentList('page')
                    .title('Pages')
                    .menuItems(S.documentTypeList('page').getMenuItems())
                    .filter('_type == "page"')
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
