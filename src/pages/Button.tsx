import React from 'react';
import { Button } from '../components/Button';

interface ButtonPageProps {}

// TODO

export const ButtonPage: React.FC<ButtonPageProps> = ({}) => {
  function handleMouseClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    console.log(e);
  }

  return (
    <div>
      <h1>My Button Component</h1>
      <section>
        <h2>The Default Button</h2>
        <p>
          Comes default as the primary color in the color theme and comes with
          some animations
        </p>
        <Button>Default</Button>
        <br />
        <pre>
          <code lang="typescript">{`
import { Button } from "nates-ts-react-components";

export default function App() {
  return <Button>Default</Button>;
}
          `}</code>
        </pre>
      </section>
      <section>
        <h2>Disabled Button</h2>
        <p>
          Comes default as the primary color in the color theme and comes with
          some animations
        </p>
        <Button disabled>Disabled</Button>
        <br />
        <pre>
          <code lang="typescript">{`
import { Button } from "nates-ts-react-components";

export default function App() {
  return <Button disabled >Default</Button>;
}
          `}</code>
        </pre>
      </section>
      <section>
        <h2>Size </h2>
        <p>
          Comes default as the primary color in the color theme and comes with
          some animations
        </p>
        <Button size="xs">xs</Button>
        <Button size="sm">sm</Button>
        <Button size="md">md</Button>
        <Button>default</Button>
        <Button size="lg">lg</Button>
        <Button size="xl">xl</Button>
        <br />
        <pre>
          <code lang="typescript">{`
import { Button } from "nates-ts-react-components";

export default function App() {
  return (
    <>
      <Button size="xs">xs</Button>
      <Button size="sm">sm</Button>
      <Button size="md">md</Button>
      <Button>default</Button>
      <Button size="lg">lg</Button>
      <Button size="xl">xl</Button>
    </>
  );
}
          `}</code>
        </pre>
      </section>
      <section>
        <h2>Color Prop </h2>
        <p>
          This color prop has built in support for autofill with any valid theme
          color and any valid css named color. This will also accept any css
          valid color (hsl(a), rgb(a), hex, etc. )
        </p>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="hsl(250, 100%, 50%)">hsl(250, 100%, 50%)</Button>
        <br />
        <pre>
          <code lang="typescript">{`
import { Button } from "nates-ts-react-components";

export default function App() {
  return (
    <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="hsl(250, 100%, 50%)">hsl(250, 100%, 50%)</Button>
    </>
  );
}
          `}</code>
        </pre>
      </section>
      <section>
        <h2> Rounded </h2>
        <p>
          this should effect any kind of button that has any other kind of
          effect.
        </p>
        <Button rounded color="primary">
          Primary
        </Button>
        <Button rounded flat color="secondary">
          Secondary
        </Button>
        <Button rounded flat color="success">
          Success
        </Button>
        <Button rounded color="warning">
          Warning
        </Button>
        <Button rounded ghost color="error">
          Error
        </Button>
        <Button rounded color="hsl(250, 100%, 50%)">
          hsl(250, 100%, 50%)
        </Button>
        <br />
        <pre>
          <code lang="typescript">{`
import { Button } from "nates-ts-react-components";

export default function App() {
  return (
    <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="hsl(250, 100%, 50%)">hsl(250, 100%, 50%)</Button>
    </>
  );
}
          `}</code>
        </pre>
      </section>
      <section>
        <h2>Ghost </h2>
        <p>
          this should effect any kind of button that has any other kind of
          effect.
        </p>
        <Button ghost color="primary">
          Primary
        </Button>
        <Button rounded ghost color="secondary">
          Secondary
        </Button>
        <Button ghost color="success">
          Success
        </Button>
        <Button rounded ghost color="warning">
          Warning
        </Button>
        <Button rounded ghost color="error">
          Error
        </Button>
        <Button rounded ghost color="hsl(250, 100%, 50%)">
          hsl(250, 100%, 50%)
        </Button>
        <br />
        <pre>
          <code lang="typescript">{`
import { Button } from "nates-ts-react-components";

export default function App() {
  return (
    <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="hsl(250, 100%, 50%)">hsl(250, 100%, 50%)</Button>
    </>
  );
}
          `}</code>
        </pre>
      </section>
      <section>
        <h2>Ghost </h2>
        <p>
          this should effect any kind of button that has any other kind of
          effect.
        </p>
        <Button flat color="primary">
          Primary
        </Button>
        <Button flat rounded color="secondary">
          Secondary
        </Button>
        <Button flat color="success">
          Success
        </Button>
        <Button flat color="warning">
          Warning
        </Button>
        <Button flat color="error">
          Error
        </Button>
        <Button rounded flat color="hsl(250, 100%, 50%)">
          hsl(250, 100%, 50%)
        </Button>
        <br />
        <pre>
          <code lang="typescript">{`
import { Button } from "nates-ts-react-components";

export default function App() {
  return (
    <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="hsl(250, 100%, 50%)">hsl(250, 100%, 50%)</Button>
    </>
  );
}
          `}</code>
        </pre>
      </section>
      <br />
      <Button color="secondary" size="sm" onClick={handleMouseClick}>
        Hello
      </Button>
      <Button color="secondary">Default</Button>
      <Button color="secondary" size="lg">
        Default
      </Button>
      <Button color="secondary" size="xl">
        Default
      </Button>
      <Button color="secondary" size="2xl">
        Default
      </Button>
      <br />
      <Button ghost size="sm" color="secondary" onClick={handleMouseClick}>
        Hello
      </Button>
      <Button ghost color="secondary">
        Default
      </Button>
      <Button ghost color="secondary" size="lg">
        Default
      </Button>
      <Button ghost color="secondary" size="xl">
        Default
      </Button>
      <Button ghost color="secondary" size="2xl">
        Default
      </Button>
      <br />
      <Button color="error" size="sm" onClick={handleMouseClick}>
        Hello
      </Button>
      <Button color="error">Default</Button>
      <Button color="error" size="lg">
        Default
      </Button>
      <Button color="error" size="xl">
        Default
      </Button>
      <Button rounded color="error" size="2xl">
        Default
      </Button>
      <br />
      <Button onClick={handleMouseClick} disabled>
        Disabled
      </Button>
    </div>
  );
};
