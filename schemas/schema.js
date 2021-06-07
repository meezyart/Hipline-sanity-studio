import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from './documents/page'

// hipline
import choreographers from './documents/hipline/choreographers'
import classMenu from './documents/hipline/classMenu'
import classPass from './documents/hipline/classPass'
import passCategory from './documents/hipline/passCategory'
import passBlock from './objects/hipline/pass'
import article from './documents/articles/article'
import articleCategory from './documents/articles/category'
import sectionsHeader from './documents/sections/header'
import sectionsFooter from './documents/sections/footer'
import menu from './documents/menu'
import route from './documents/route'
import settingsSeo from './documents/settings/seo'
import settingsFavicons from './documents/settings/favicons'
import settingsSocial from './documents/settings/social'
import settingsAnalytics from './documents/settings/analytics'
import settingsContactInfo from './documents/settings/contactInfo'
import settingsLogo from './documents/settings/logo'
import settingsAnnouncements from './documents/settings/announcements'

// Objects
import richTextBlock from './objects/blocks/richText'
// import imageBlock from './objects/blocks/image'
import youtubeBlock from './objects/blocks/youtube'
import vimeoBlock from './objects/blocks/vimeo'
import socialBlock from './objects/blocks/socialBlock'
import cta from './objects/cta'

import simpleBlockContent from './objects/blocks/simpleBlockContent'
// import bioPortableText from './objects/blocks/bioPortableText'
// import bodyPortableText from './objects/blocks/bioPortableText'
// import { instagram, videoEmbed } from './objects/blocks/embeds'
import excerptPortableText from './objects/blocks/excerptPortableText'
import link from './objects/blocks/link'
// import pageMetaData from './objects/pageMetaData'

import mainImage from './objects/blocks/mainImage'
import openGraph from './objects/blocks/openGraph'
import fileAsset from './objects/blocks/fileAsset'
import simpleSection from './objects/blocks/simpleSection'
import navLink from './objects/blocks/navLink'
import navPage from './objects/blocks/navPage'
import navSlug from './objects/blocks/navSlug'
import navDropDown from './objects/blocks/navDropdown'
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
    settingsContactInfo,
    settingsAnnouncements,
    settingsLogo,
    choreographers,
    classMenu,
    article,
    articleCategory,
    classPass,
    passBlock,
    passCategory,
    /* Objects */
    // bioPortableText,
    // bodyPortableText,
    link,
    navLink,
    navPage,
    navSlug,
    navDropDown,
    simpleBlockContent,
    excerptPortableText,
    // instagram,
    // videoEmbed,
    openGraph,
    richTextBlock,
    // imageBlock,
    youtubeBlock,
    vimeoBlock,
    socialBlock,
    simpleSection,
    richTextSection,
    faqSection,
    latestArticlesSection,
    menuItem,
    fileAsset,
    cta,
    mainImage,
    socialSiteFacebook,
    socialSiteTwitter,
    socialSiteInstagram,
    socialSiteYouTube
  ])
})
