import componentsImg from '../assets/components.png';
import propsImg from '../assets/config.png';
import jsxImg from '../assets/jsx-ui.png';
import stateImg from '../assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
    code: "-They are the basic building blocks of \n-usually stored in seperrate files \n-the more usable they are the better"
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    code:"-jsx is basically the comination of JAVASCRIPT  and HTML \n-JSX at the end is converted into basic HTML and JS \n-JSX in the uses React Engine to do this"

  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
      code:"-Props are Object which contains all the values which have beeen passed \n-as propert value to the funnction \n-props.name this sytax is used to acess the \n-the value in side the prop whoes name is  \"name\" "
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    code:"-this is an in Built hook which is used to manage the renderign of the Variables \n-it takes an array as an  argument in which you can  \n-put the variable name and the fuctiion call back name using which \n-you can change the value of that function \n-the name of this callback is generally set out to be \" setName\" where name is the \nname of the variable"
  },
];


