import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from './documents/page'
// import article from './documents/articles/article'
// import articleCategory from './documents/articles/category'
import sectionsHeader from './documents/sections/header'
import sectionsFooter from './documents/sections/footer'
import menu from './documents/menu'
import route from './documents/route'
import settingsSeo from './documents/settings/seo'
import settingsFavicons from './documents/settings/favicons'
import settingsSocial from './documents/settings/social'
import settingsAnalytics from './documents/settings/analytics'

// Objects
import richTextBlock from './objects/blocks/richText'
import mainImage from './objects/blocks/mainImage'
import youtubeBlock from './objects/blocks/youtube'
import vimeoBlock from './objects/blocks/vimeo'
import cta from './objects/cta'

import simpleBlockContent from './objects/blocks/simpleBlockContent'
import excerptPortableText from './objects/blocks/excerptPortableText'
import link from './objects/blocks/link'
// import imageBlock from './objects/blocks/image'
// import bioPortableText from './objects/blocks/bioPortableText'
// import bodyPortableText from './objects/blocks/bioPortableText'
// import { instagram, videoEmbed } from './objects/blocks/embeds'
// import pageMetaData from './objects/pageMetaData'
import openGraph from './objects/blocks/openGraph'
import simpleSection from './objects/blocks/simpleSection'
import faqSection from './objects/sections/faq'
import richTextSection from './objects/sections/richText'
import latestArticlesSection from './objects/sections/latestArticles'
import menuItem from './objects/menuItem'
import socialSiteFacebook from './objects/settings/facebook'
import socialSiteTwitter from './objects/settings/twitter'
import socialSiteInstagram from './objects/settings/instagram'
import socialSiteYouTube from './objects/settings/youtube'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /* Documents */
    page,
    sectionsHeader,
    sectionsFooter,
    menu,
    route,
    settingsSeo,
    settingsFavicons,
    settingsSocial,
    settingsAnalytics,
    // article,
    // articleCategory,

    /* Objects */
    // bioPortableText,
    // bodyPortableText,
    link,
    simpleBlockContent,
    excerptPortableText,
    // instagram,
    // videoEmbed,
    openGraph,
    richTextBlock,
    // imageBlock,
    youtubeBlock,
    vimeoBlock,
    simpleSection,
    richTextSection,
    faqSection,
    latestArticlesSection,
    menuItem,
    cta,
    mainImage,
    socialSiteFacebook,
    socialSiteTwitter,
    socialSiteInstagram,
    socialSiteYouTube

    // Client
  ])
})
