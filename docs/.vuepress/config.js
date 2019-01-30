const gaId = process.env.GA_ID || 'UA-ID'

module.exports = {
  title: 'BlockScoped',
  description: 'Random coding questions by topic and difficulty',
  head: [
    ['link', { rel: 'icon', href:'/images/logo.png' }],
    ['link', { rel: 'manifest', href:'/manifest.json' }],
    ['script', { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}` }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', { 'anonymize_ip': true });
    `]
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
        text: 'Contributing',
        items: [
          { text: 'Overview', link: '/contributing/' },
          { text: 'Request New Question Topic', link: 'https://github.com/ah100101/BlockScoped/issues/new?title=New+Topic+Request:[topic%20name]&labels=enhancement&assignee=ah100101' },
          { text: 'Submit Issue', link: 'https://github.com/ah100101/BlockScoped/issues/new'},
          { text: 'View Current Issues', link: 'https://github.com/ah100101/BlockScoped/issues' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Privacy Policy', link: '/about/privacy/' }
        ]
      }
    ],
    lastUpdated: 'Last Updated',
    repo: 'ah100101/BlockScoped'
  }
}
