import { MdHearing } from 'react-icons/md'

export default {
    name: 'settingsAnnouncements',
    title: 'Site Announcements',
    type: 'document',
    icon: MdHearing,
    fields: [{
            name: 'announcementBody',
            title: 'Announcement Body',
            type: 'excerptPortableText',
            description: `Leave this blank if you don\'t want
            an announcement to drop down.After a user clicks on the
            announcement link or closes it, they won\'t see it again for
            another 7 days, or until you change the announcement text.
            `
        },
        {
            name: 'announcementLink',
            title: 'Announcement Link',
            type: 'cta',
            description: "Either a full external URL (https://...) or an internal URL starting with a slash (/classes). Be sure to test it on the site if you're not sure!"
        }
    ]
}
