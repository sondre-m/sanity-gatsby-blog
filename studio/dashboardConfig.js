export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9719d25f432ea9b74f4f42',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cngccm2i',
                  apiId: '5718a8be-44a1-4a47-9cb7-2e1e379bed69'
                },
                {
                  buildHookId: '5d9719d264a4137c4b9fe17b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xy6qnr4r',
                  apiId: '51adeca6-1408-4766-bc68-9bb1872409c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sondre-m/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xy6qnr4r.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
