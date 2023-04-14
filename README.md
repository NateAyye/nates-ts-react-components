# Nates-ts-react-components

![badmath](https://img.shields.io/badge/typescript-100%25-%233178C6?style=for-the-badge&logo=typescript)
![badmath](https://img.shields.io/badge/Styled_Components-100%25-DB7093?style=for-the-badge&logo=styledcomponents&logoWidth=20)
![badmath](https://img.shields.io/badge/React-100%25-61DAFB?style=for-the-badge&logo=react)

![badmath](https://img.shields.io/badge/NPM-grey?style=flat&logo=npm&link&left=https://www.npmjs.com/package/nates-ts-react-components)

[NPM Package](https://www.npmjs.com/package/nates-ts-react-components)

React Components made with styled components and typescript.

- Looking into making a none styled components version for less dependencies:
  - CSS modules?
  - Class Components?
  - Creating stylesSheets?

I have been wanting to abstract my components into a reusable package for a while now and I have finally figured it out so I will now slowly be Adding more and more to this Component Library as I Grow as a developer.

Mainly Want to get a better understanding of typescript and the proccess of making a component library for react using vite and its built in rollup features

Current Components:

- Button
- Input
- Select
- Form (Form, Form.Container)
- FlexContainer

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [License](#license)

## Installation

Install the library by running this (npm) command: // can replace npm will your preffered package manager
`npm i nates-ts-react-components`

## Usage

### In Order to have the components to use the theme that comes with the package Make sure to wrap your \<App/> component in the \<NatesThemeProvider/>

Wrapping Your App in the theme provider is not necessary since their are fall back values for the components. but the default theme adds a lot of default colors and sizes that you can now use where ever

**Theme Provider**

```js
import { NatesThemeProvider } from 'nates-ts-react-components'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NatesThemeProvider> // default theme is already provided
      <App />
    </NatesThemeProvider>
  </React.StrictMode>,
);
```

<em>P.S. Support for overriding themes are going to be coming soon</em>

## Credits

[Idea for the Select Component Came from this video](https://www.youtube.com/watch?v=bAJlYgeovlg)  
_P.S. More Coming Soon_

- dynamic Option - Allow for you to enter in your own options with a text input.

\
[Youtube Video Used for making the vite Component Library(Made slight tweaks)](https://www.youtube.com/watch?v=XKfeczZyEzc&list=PLWDAbPjFu21GFqVgGim1a4QyuBmOT9vZc&index=2)

## License

[MIT License Refer to the License file within the Repo](https://github.com/NateAyye/nates-ts-react-components/blob/main/LICENCE)

## Features

# Button

The button component is supposed to be your all purpose button for everything.
It has a default ripple effect when you first add it(can be turned off with the ripple prop).

```js
import { Button } from 'nates-ts-react-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
  radi?: string; // Change the Border Raduis of the button default: (.25rem .5rem)
  icon?: string; // You can choose if you want in Icon displayed next to the text
  noIcon?: boolean; // If you don't want any default Icons added
  errorIcon?: string; // You can speciffy the Icon displayed on Error Buttons
  ripple?: boolean // turn off the ripple effect
  size?: 'xs' | 'sm' | 'lg' | 'xl'; // Designated Sizes for the button
  /** Will Change the style a little bit and display an error icon if you don't want an Icon set the errorIcon */
  error?: boolean;
  sColor?: string; // Change the background color of the element
}


const App = () => {
  return (
    <div className="app">
      <Button radi='.25rem .5rem' icon='🎉' >My Button</Button>
    </div>
  );
};
```

# Form

The Form.Container if only really meant to be used when the form is the only thing that is on the page. If it is not I'd recommend using just the Form By Itself.

```js
import { Form } from 'nates-ts-react-components';


export interface FormProps {
  title?: string;
  self?: boolean;
  children?: React.ReactNode | React.ReactNode[] | undefined;
  inputs: IInputProps[];
  element?: React.ReactElement | React.ReactElement[] | undefined;
}

const inputs = [
    {
        id: '1',
        name: 'email'
        preview: 'Email:',
        type: 'email'
    }
]

const FormComponent = () => {
  return (
    <Form.Container>
      <Form
        inputs={inputs}
      />
    </Form.Container>
  );
};



```

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Tests Comming Soon!!
