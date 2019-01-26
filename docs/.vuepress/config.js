module.exports = {
  title: 'BlockScoped',
  description: 'Random coding questions by topic and difficulty',
  head: [
    ['link', { rel: 'icon', href:'/images/logo.png' }],
    ['link', { rel: 'manifest', href:'/manifest.json' }]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { 
        text: 'Home', 
        link: '/' 
      },
      {
        text: 'Sections',
        items: [
          { text: 'Javascript', link: '/javascript/' },
          { text: 'HTML', link: '/html/' },
          { text: 'CSS', link: '/css/'}
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Contributing', link: '/about/contributing/' },
          { text: 'Privacy Policy', link: '/about/privacy/' },
          { text: 'Contact', link: '/about/contact/' },
          { text: 'Request New Question Topic', link: 'https://github.com/ah100101/BlockScoped/issues/new?title=New+Topic+Request:[topic%20name]&labels=enhancement&assignee=ah100101' },
          { text: 'Submit Issue', link: 'https://github.com/ah100101/BlockScoped/issues/new'},
          { text: 'View Current Issues', link: 'https://github.com/ah100101/BlockScoped/issues' }
        ]
      }
    ],
    lastUpdated: 'Last Updated',
    repo: 'ah100101/BlockScoped'
  }
}