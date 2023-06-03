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
    name: 'VueJS',
    image: 'vue',
    logoWidth: '60%',
    link: 'https://vuejs.org/',
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
    name: 'Spring',
    image: 'spring',
    logoWidth: '75%',
    link: 'https://spring.io',
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
    name: 'Firebase',
    image: 'firebase',
    logoWidth: '58%',
    link: 'https://firebase.google.com/',
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
  {
    name: 'Azure',
    image: 'azure',
    logoWidth: '55%',
    link: 'https://azure.microsoft.com/en-us',
  },
]

export const desktopSkills: Skill[] = [
  ...base,
  {
    name: 'After Effects',
    image: 'AE',
    logoWidth: '62%',
    link: 'https://www.adobe.com/products/aftereffects.html',
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
    name: 'After Effects',
    image: 'AE',
    logoWidth: '62%',
    link: 'https://www.adobe.com/products/aftereffects.html',
  },
]
