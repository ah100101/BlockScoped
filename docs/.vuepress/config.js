module.exports = {
  title: 'BlockScoped',
  description: 'Random coding questions by topic and difficulty',
  head: [
    ['link', { rel: 'icon', href:'/images/logo.png' }]
  ],
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
      }
    ],
    lastUpdated: 'Last Updated',
    repo: 'ah100101/BlockScoped',
    questions: []
  }
}