# Nates-ts-react-components

![badmath](https://img.shields.io/badge/typescript-100%25-%233178C6?style=for-the-badge&logo=typescript)
![badmath](https://img.shields.io/badge/Styled_Components-100%25-DB7093?style=for-the-badge&logo=styledcomponents&logoWidth=20)
![badmath](https://img.shields.io/badge/React-100%25-61DAFB?style=for-the-badge&logo=react)

![badmath](https://img.shields.io/badge/NPM-grey?style=flat&logo=npm&link&left=https://www.npmjs.com/package/nates-ts-react-components)

[NPM Package](https://www.npmjs.com/package/nates-ts-react-components) ---
[Github Repository](https://github.com/NateAyye/nates-ts-react-components)

React Components made with styled components and typescript.

- Looking into making a none styled components version for less dependencies:
  - CSS modules?
  - Class Components?
  - Creating stylesSheets?
  - Custom Components?

I have been wanting to abstract my components into a reusable package for a while now and I have finally figured it out so I will now slowly be Adding more and more to this Component Library as I Grow as a developer.

Mainly Want to get a better understanding of typescript and the proccess of making a component library for react using vite and its built in rollup features

Current Components:

- Button
- Input
- Select
- Form (Form, Form.Container)
- FlexContainer

> ---
>
> # **!! Anouncment**
>
> Currently I am taking a break from updates to get a better understanding of aria and WAI standards so that I can give everyone an accessible Library
> I want all the Accessibility built in. Which means some components are gonne have props required in order to make that happen.
> -- Thanks For being patient and understanding

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Getting Started]()
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [License](#license)

## Installation

Install the library by running this (npm) command: // can replace npm will your preffered package manager
`npm i nates-ts-react-components`

## Usage

<center>
<strong id='getting-started' style='font-size: 50px;'>Getting Started</strong>
</center>

In order to use this Component Library You are going to want to wrap your \<App/> with the NatesThemeProvider Component That is provided within the package.

> ---
>
> # **!! Important**
>
> Most of the styling and looks of each component are going to be heavily based off of the theme provider.
> But the components do all have a fallback value that they go to but it will probably not be the best looking

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

```tsx
import { Button } from 'nates-ts-react-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode | React.ReactNode[];
  radi?: string; // Change the Border Raduis of the button default: (.25rem .5rem)
  icon?: string; // You can choose if you want in Icon displayed next to the text
  noIcon?: boolean; // If you don't want any default Icons added
  errorIcon?: string; // You can speciffy the Icon displayed on Error Buttons
  ripple?: boolean; // turn off the ripple effect
  size?: 'xs' | 'sm' | 'lg' | 'xl'; // Designated Sizes for the button
  /** Will Change the style a little bit and display an error icon if you don't want an Icon set the errorIcon */
  error?: boolean;
  sColor?: string; // Change the background color of the element
}

const App = () => {
  return (
    <div className="app">
      <Button radi=".25rem .5rem" icon="🎉">
        My Button
      </Button>
    </div>
  );
};
```

# Form

The Form.Container if only really meant to be used when the form is the only thing that is on the page. If it is not I'd recommend using just the Form By Itself.

```tsx
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

# Input

Currently trying to figure out how I want to make this component to support all types of inputs.

- Will come with a Label automatically built in - Going to add a label prop to define if you want a label or not so that you can add your own if you'd like

```tsx
import { Input } from 'nates-ts-react-components';

export type CustomTypeProps = 'default' | 'noir' | 'shadow' | 'toggle';

export interface IInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string;
  preview: string;
  fw?: CSSProperties['fontWeight'];
  type?: React.HTMLInputTypeAttribute | CustomTypeProps | undefined;
  labelProps?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>;
  radi?: string;
}

const App = () => {
  return (
    <div className="app">
      <Input type="text" id="name" preview="Name: " />
    </div>
  );
};
```

Input Types Currently Working:

- [x] Text
- [ ] Button
- [ ] Checkbox
- [ ] Color
- [ ] Date
- [ ] Datetime-local
- [x] Email
- [ ] File
- [ ] Hidden
- [ ] Image
- [ ] Month
- [ ] Number
- [x] Password
- [ ] Radio
- [ ] Range (May just make a seperate Progress Component)
- [ ] Reset
- [ ] Search
- [ ] Submit
- [ ] Tel
- [ ] Text
- [ ] Time
- [ ] Url
- [ ] Week

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Tests Comming Soon!!
