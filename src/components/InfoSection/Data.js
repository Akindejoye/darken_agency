import CarImg from '../../images/svg-6.svg';
import LogInImg from '../../images/svg-1.svg';
import PhoneMark from '../../images/svg-4.svg';


export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transaction with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: CarImg,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: LogInImg,
    alt: 'Login',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go.',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: PhoneMark,
    alt: 'Paper',
    dark: false,
    primary: false,
    darkText: true
}
