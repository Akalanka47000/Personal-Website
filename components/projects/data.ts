interface Project {
    name: string
    description: string
    toolsUsed: string[]
    link?: string
}

const projects: Project[] = [
    {
        name: 'Spades',
        description:
            'Web based solution to revolutionize the dine in payment industry',
        toolsUsed: ['NextJS', 'NodeJS', 'Kubernetes', 'Azure', 'Gitlab', 'Apache Kafka', '.NET Core'],
        link: 'https://www.spadesapp.io/',
    },
    {
        name: 'Curfox DMS',
        description:
            'Software for courier companies to build manage and grow their network',
        toolsUsed: ['Laravel', 'VueJS', 'Flutter', 'Docusaurus', 'Github Actions'],
        link: 'https://curfox.com',
    },
    {
        name: 'LetMeKnow',
        description:
            'Mobile application and Web portal for the healthcare industry. A portable and cost-efficient solution where consultants would be able to stream the patient vital signs in real time regardless of their location, which helps them to understand their patients and prioritize their visits to the clinics / hospitals',
        toolsUsed: ['Flutter', 'Angular', 'NodeJS', 'AWS'],
    },
    {
        name: 'QickTeam',
        description:
            'A platform for individuals of similar interests to attend the same activity together and create great experiences. Users can use the app to alert others of his activity / game or event. The other users interested in being at the event/game will then indicate their availability. As soon as this phase is completed, the individuals can then meet up and enjoy the moment',
        toolsUsed: ['Flutter', 'NodeJS', 'AWS'],
    },
    {
        name: 'Covid-Alert',
        description:
            'Web portal and Mobile Application for marking and tracking Covid-19 patients with a real time notification and tracking system. Built for a mini-hackathon at university',
        toolsUsed: ['Flutter', 'Angular', 'NodeJS', 'AWS'],
        link: 'https://github.com/Akalanka47000/Covid-alert',
    },
    {
        name: 'FCM-Server',
        description:
            'An open source Node.js based server with a single endpoint to broadcast a message to a given set of devices',
        toolsUsed: ['Flutter', 'Firebase'],
        link: 'https://github.com/Akalanka47000/FCM-Server',
    },
    {
        name: 'Google Maps Replica',
        description:
            'Mobile application to show directions to a particular destination with automated distance alerts between time intervals',
        toolsUsed: ['Flutter', 'GCP'],
    },
    {
        name: 'AI-Motion',
        description:
            'Desktop prototype and mobile application that uses machine learning to estimate poses and teach people to dance. It interactively increases user engagement and allows the user to also have fun while learning through the application. Project is still a work in progress',
        toolsUsed: ['Flutter', 'Firebase'],
    },
]

export default projects