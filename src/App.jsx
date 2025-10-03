import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Instructions from './components/Instructions';
import Main from './components/Main';
import Footer from './components/footer';

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  return (
    <div className="app">
      <Header
        showInstructions={showInstructions}
        toggleInstructions={toggleInstructions}
      />

      <Instructions showInstructions={showInstructions} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
