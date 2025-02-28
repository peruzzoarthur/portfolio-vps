import { GitHubIcon, LinkedInIcon } from '@/components/icons'

export const RESUME_DATA = {
    name: 'Arthur Peruzzo ',
    initials: 'AP',
    location: 'Pelotas, Brazil, GMT-3',
    locationLink: 'https://www.google.com/maps/place/Pelotas',
    about: 'Self-taught Junior Full Stack Developer and Geographic Information System (GIS) Analyst dedicated to building high-quality and detail oriented products.',
    summary:
        "As a Full Stack Engineer and GIS Analyst, I'm focused on taking products from concept to launch, applying my engineering skills seeking best practices and quality. I'm a fast learner and hard worker, dedicated to improve my abilities and looking forward to collaborate with projects. Currently, I work mostly with TypeScript, React, Nest.js, and PostgreSQL. I have over 8 years of experience working with GIS projects, collecting, processing and analyzing data for mapping and environmental modelling processes.",
    avatarUrl: 'https://avatars.githubusercontent.com/u/73316481?v=4',
    personalWebsiteUrl: 'https://ozzurep.up.railway.app/',
    contact: {
        email: 'peruzzoarthur@gmail.com',
        tel: '+5553981430660',
        social: [
            {
                name: 'GitHub',
                url: 'https://github.com/peruzzoarthur',
                icon: GitHubIcon,
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/arthur-peruzzo/',
                icon: LinkedInIcon,
            },
        ],
    },
    education: [
        {
            school: 'Universidade Federal de Pelotas',
            degree: "Bachelor's Degree in Environmental Engineering",
            start: '2011',
            end: '2018',
        },
        {
            school: 'Universidade Federal de Pelotas',
            degree: "Master's Degree in Environmental Sciences",
            start: '2020',
            end: '2022',
        },
        {
            school: 'Universidade de São Paulo',
            degree: "Master's of Business Administration in Software Engineering",
            start: '2024',
            end: null,
        },
    ],
    work: [
        {
            company: 'RESAM - Engenharia e Sustentabilidade',
            title: 'Environmental Engineer and GIS Analyst',
            start: '2018',
            end: '2020',
            link: '',
            badges: ['Remote'],
            description:
                'Developing projects related to environmental licences. Worked mostly with GIS technologies for creating maps for stakeholders and environmental entities.',
        },
        {
            company: 'Sperzo',
            title: 'Full stack developer and GIS Analyst',
            start: '2022',
            end: null,
            badges: ['Remote'],
            link: '',
            // logo: ParabolLogo,
            description:
                "My own company. Two years ago I decided to start my journey in web development and connect with my data analysis knowledge. In this moment I'm working on building zero to one products and as a freelancer.",
        },
    ],
    skills: [
        'JavaScript',
        'TypeScript',
        'React.js',
        'Nest.js',
        'PostgreSQL',
        'AWS',
        'Docker',
        'Terraform',
        'QGIS',
        'ESRI',
        'Python',
        'Data analysis',
        'Mapping',
        'Linux'

    ],
    projects: [
        {
            title: 'CS2D Demo Viewer',
            techStack: [
                'TypeScript',
                'React',
                'Nest.js',
                'PostgreSQL',
                'Prisma',
                'AWS',
                'Terraform',
            ],
            description:
                'Parse and watch cs2 pro demos from hltv.org in a 2D canvas.',
            link: {
                label: 'cs2d-demo-viewer',
                href: 'https://cs2d.up.railway.app/',
            },
        },
        {
            title: 'ozzurep.me',
            techStack: [
                'Typescript',
                'React.js',
                'Nest.js',
                'PostgreSQL',
                'Prisma',
            ],
            description: 'Personal portfolio website and blog.',
            link: {
                label: 'ozzurep',
                href: 'https://ozzurep.up.railway.app/',
            },
        },
        {
            title: 'cgis',
            techStack: ['React.js', 'GIS', 'Leaflet'],
            description:
                'A map viewer for geodata. Built with react-leaflet and loaded with geojson and shp files.',
            // logo: Logo,
            link: {
                label: 'cgis',
                href: 'https://cgis.up.railway.app/',
            },
        },
    ],
} as const
