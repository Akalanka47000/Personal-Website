export interface Skill {
  name: string
  image: string
  logoWidth: string
  link: string
}

const base: Skill[] = [
  {
    name: 'NextJS',
    image: 'next',
    logoWidth: '83%',
    link: 'https://nextjs.org/',
  },
  {
    name: 'Flutter',
    image: 'flutter',
    logoWidth: '53%',
    link: 'https://flutter.dev/',
  },
  {
    name: 'React Native',
    image: 'react',
    logoWidth: '63%',
    link: 'https://reactnative.dev/',
  },
  {
    name: 'VueJS',
    image: 'vue',
    logoWidth: '60%',
    link: 'https://vuejs.org/',
  },
  {
    name: 'Svelte',
    image: 'svelte',
    logoWidth: '49%',
    link: 'https://svelte.dev/',
  },
  {
    name: 'Angular',
    image: 'angular',
    logoWidth: '52%',
    link: 'https://angular.io/',
  },
  {
    name: 'NodeJS',
    image: 'node',
    logoWidth: '45%',
    link: 'https://nodejs.org/en/',
  },
  {
    name: 'Laravel',
    image: 'laravel',
    logoWidth: '50%',
    link: 'https://laravel.com/docs/9.x',
  },
  {
    name: 'NestJS',
    image: 'nest',
    logoWidth: '55%',
    link: 'https://nestjs.com/',
  },
  {
    name: 'MongoDB',
    image: 'mongo',
    logoWidth: '73%',
    link: 'https://www.mongodb.com/',
  },
  {
    name: 'MySQL',
    image: 'mysql',
    logoWidth: '73%',
    link: 'https://www.mysql.com/',
  },
  {
    name: 'GitHub Actions',
    image: 'actions',
    logoWidth: '51%',
    link: 'https://github.com/features/actions',
  },
  {
    name: 'Gitlab',
    image: 'gitlab',
    logoWidth: '55%',
    link: 'https://about.gitlab.com/',
  },
  {
    name: 'Kubernetes',
    image: 'kubernetes',
    logoWidth: '55%',
    link: 'https://kubernetes.io/',
  },
]

export const desktopSkills: Skill[] = [
  ...base,
  {
    name: 'Azure',
    image: 'azure',
    logoWidth: '55%',
    link: 'https://azure.microsoft.com/en-us',
  },
]

export const mobileSkills: Skill[] = [
  ...base,
  {
    name: 'Docker',
    image: 'docker',
    logoWidth: '61%',
    link: 'https://www.docker.com/',
  },
  {
    name: 'Azure',
    image: 'azure',
    logoWidth: '55%',
    link: 'https://azure.microsoft.com/en-us',
  },
]
