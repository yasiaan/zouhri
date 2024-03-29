// config.js
module.exports = {
    github: {
        username: 'yasiaan', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'zouhri-yassine',
        twitter: 'yasiaan',
        facebook: 'nobody.soya',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://yasiaan.github.io/zouhri',
        phone: '0632699706',
        email: 'yzouhri.e@gmail.com'
    },
    skills: [
        'R',
        'Python',
        'Data Governance',
        'Data Architecture',
        'Data Analysis',
        'Machine learning',
        'Automation',
        'Airflow',
        'Spark',
        'PHP',
        'Symfony',
        'JavaScript',
        'Angular.js',
        'React.js',
        'ReactNative.js',
        'Node.js',
        'Express.js',
        'Jquery',
        'SQL',
        'MongoDB    ',
        'MySQL',
        'Git',
        'Docker',
        'CSS',
        'Bootstrap',
    ],
    experiences: [
        { 
            company: 'Automation of the key performance indicator (KPI) calculation flow ',
            position: 'Banque Centrale Populaire',
            from: 'March 2022',
            to: 'July 2022'
        },
        { 
            company: 'An artificial intelligence model for explosives detection',
            position: 'SI2M Laboratory',
            from: 'July 2021',
            to: 'September 2021'
        },
        { 
            company: 'Implementation of a data dissemination website',
            position: 'High Planning Commission',
            from: 'June 2020',
            to: 'July 2020'
        }
    ],
    education: [
        { 
            institution: 'Engineering cycle at the National Institute of Statistics and Applied Economics, Rabat',
            degree: 'Data and Software Engineering',
            from: '2018',
            to: 'June 2022'
        },
        { 
            institution: 'Preparatory classes for engineering schools. CPGE Moulay Idriss, Fez',
            degree: 'MPSI/MP',
            from: '2015',
            to: '2018',
        },
        { 
            institution: 'Baccalaureate. Ibn Al Haytam High School, Fez',
            degree: 'Mathematical Sciences-B',
            from: '2014',
            to: '2015'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'yasiaan',
        limit: 2 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id
    },
    hotjar: {
        id: '', //  Please remove this and use your own id
        snippetVersion : 6
    },
    themeConfig: {
        default: 'cupcake',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
