import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Main from './components/Main';
import Footer from './components/footer';
import Section from './components/Section';
import Button from './components/Button';

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  function toggleInstructions() {
    setShowInstructions((prev) => !prev);
  }

  function handleClick() {
    alert('Click');
  }

  return (
    <div className="app">
      <Header
        showInstructions={showInstructions}
        toggleInstructions={toggleInstructions}
      />

      <Instructions showInstructions={showInstructions} />
      <Main>
        <Section title="Variants">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="gradient">Gradient</Button>
          <Button variant="outline">Outline</Button>
        </Section>

        <Section title="Sizes">
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button variant="primary" size="medium">
            Medium
          </Button>
          <Button variant="primary" size="large">
            Large
          </Button>
        </Section>
        <Section title="Button States">
          <Button>Default</Button>
          <Button isDisabled>Disabled</Button>
        </Section>
        <Section title="Full Width Button">
          <Button fullWidth variant="secondary">
            FULL WIDTH
          </Button>
        </Section>
        <Section title="With fn">
          <Button variant="primary" onClick={handleClick}>
            Click me
          </Button>
        </Section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
