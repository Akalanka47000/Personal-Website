import SkillCard from './skillCard'

const skillSet = [
  {
    name: 'Flutter',
    image: 'flutter',
    logoWidth: '53%',
    link: 'https://flutter.dev/'
  },
  {
    name: 'React',
    image: 'react',
    logoWidth: '65%',
    link: 'https://reactjs.org/'
  },
  {
    name: 'Vue',
    image: 'vue',
    logoWidth: '65%',
    link: 'https://vuejs.org/'
  },
  {
    name: 'Angular',
    image: 'angular',
    logoWidth: '52%',
    link: 'https://angular.io/'
  },
  {
    name: 'Node',
    image: 'node',
    logoWidth: '45%',
    link: 'https://nodejs.org/en/'
  },
  {
    name: 'Laravel',
    image: 'laravel',
    logoWidth: '50%',
    link: 'https://laravel.com/docs/9.x'
  },
  {
    name: 'Java',
    image: 'java',
    logoWidth: '62%',
    link: 'https://www.java.com/en/'
  },
  {
    name: 'MongoDB',
    image: 'mongo',
    logoWidth: '73%',
    link: 'https://www.mongodb.com/'
  },
  {
    name: 'MySQL',
    image: 'mysql',
    logoWidth: '73%',
    link: 'https://www.mysql.com/'
  },
  {
    name: 'Firebase',
    image: 'firebase',
    logoWidth: '58%',
    link: 'https://firebase.google.com/'
  },
  {
    name: 'Github Actions',
    image: 'ghactions',
    logoWidth: '58%',
    link: 'https://github.com/features/actions'
  },
  {
    name: 'After Effects',
    image: 'AE',
    logoWidth: '65%',
    link: 'https://www.adobe.com/products/aftereffects.html'
  },
]
const Skills = (): JSX.Element => {
  return (
    <>
      <div
        id="skill-section"
        className="font-bold text-5xl xl:text-6xl 2xl:text-7xl text-white blink text-center mx-6 cursor-default transition ease-in mt-20 lg:mt-36"
        data-aos="fade-left"
      >
        My Arsenal
      </div>
      <div className="w-full pt-20 lg:pt-36 py-36 pb-24 lg:pb-36 px-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 gap-y-16 lg:gap-y-24 place-items-center">
        {skillSet.map((skill, index) => {
          return (
            <div
              data-aos={index % 2 == 0 ? 'fade-right' : 'fade-left'}
              key={index}
            >
              <SkillCard
                name= {skill?.name || ''}
                logo={skill?.image || ''}
                width={skill?.logoWidth || ''}
                link={skill?.link || ''}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Skills
