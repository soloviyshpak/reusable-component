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
        <Section>
          <Button onClick={handleClick} isDisabled>
            Some text
          </Button>
          <Button onClick={handleClick} fullWidth>
            Some text 2
          </Button>
          <Button onClick={handleClick} variant="secondary">
            Some text 3
          </Button>
          <Button onClick={handleClick} variant="secondary" size={'large'}>
            Some text 3
          </Button>
        </Section>
        <Section handleClick={handleClick}>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </Section>
        <Section handleClick={handleClick}>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </Section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
