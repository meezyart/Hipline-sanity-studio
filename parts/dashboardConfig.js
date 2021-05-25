export default {
    widgets: [{
            name: 'structure-menu'
        },
        {
            name: 'project-info',
            options: {
                data: [{
                        title: 'Sanity Repo',
                        value: 'https://github.com/meezyart/Hipline-sanity-studio',
                        category: 'Code'
                    },
                    {
                        title: 'Website Repo',
                        value: 'https://github.com/meezyart/meezyart-11ty-starter',
                        category: 'Code'
                    }
                ]
            }
        },
        {
            name: 'netlify',
            options: {
                title: 'Netlify Deploys',
                description: 'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
                sites: [{
                        buildHookId: '6041599a1dd2e419a608eae5',
                        title: 'Sanity Studio',
                        name: 'hipline-sanity-11-ty-studio',
                        apiId: 'e6e9e62f-f363-4bba-a984-5b9ef6145507'
                    },
                    {
                        buildHookId: '6041599a5936a717e2a5c3ac',
                        title: 'Blog Website',
                        name: 'hipline-sanity-11-ty',
                        apiId: '9eacabf1-2d57-45b0-b4f7-34e6bf6f9f7c'
                    }
                ]
            }
        },
        {
            name: 'project-users'
        }
    ]
}