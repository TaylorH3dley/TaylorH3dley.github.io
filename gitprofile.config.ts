// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'TaylorH3dley', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['TaylorH3dley/genometest', 'TaylorH3dley/microbiome'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Biotechnology presentation on Fungal Bioremediation',
          description:
            'An insight into how fungal bioremediation can be used to save our planet.',
          imageUrl:
            'https://github.com/TaylorH3dley/TaylorH3dley.github.io/raw/main/biotech.png',
          link: 'https://github.com/TaylorH3dley/TaylorH3dley.github.io/raw/main/biotech presentation.pptx',
        },
        {
          title: 'Microbiology paper about Toxoplasma Gondii',
          description:
            'A research paper about the microbe Toxoplasma Gondii.',
          imageUrl:
            'https://github.com/TaylorH3dley/TaylorH3dley.github.io/raw/main/toxo.png',
          link: 'https://github.com/TaylorH3dley/TaylorH3dley.github.io/raw/main/disease paper (1).pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Taylor Hedley projects',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Taylor Hedley',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'Taylor.Hedley2@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/TaylorH3dley/TaylorH3dley.github.io/raw/main/new.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PCR',
    'Bioinformatics',
    'Microbiology',
  ],
  experiences: [
    {
      company: 'In-N-Out Burger',
      position: 'Level 6 Associate',
      from: 'April 2019',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Merced College',
      degree: 'A.S Health sciences',
      from: '2019',
      to: '2021',
    },
    {
      institution: 'CSU Stanislaus',
      degree: 'B.S in Biological sciences',
      from: '2023',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'Genome Sequence of the Antibiotic-Resistant Pathogen Elizabethkingia miricola DSM 14571 Isolated from a Russian Space Station',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Lillyanna Azevedo, Julian Garcia, Priscilla Garcia, Taylor Hedley, Tricia Van Laar',
      link: 'https://github.com/TaylorH3dley/TaylorH3dley.github.io/raw/main/MRA_template_prokaryotic-eukaryotic_genome.pdf',
      description:
        'This is a manuscript in submission. Elizabethkingia miricola DSM 14571 was isolated from condensation water aboard a Russian space station and cultured on cysteine-lactose-electrolyte-deficient medium agar before genome sequencing, which revealed 4,064 predicted genes including virulence and resistance-associated elements.',
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
