import React, { useState } from 'react';
import { IonButton, IonToast } from '@ionic/react';
import './App.css';

function App() {
  const [showToast, setShowState] = useState(false);

  const handleClick = () => {
    setShowState(true);
    setTimeout(() => {
      setShowState(false);
    }, 1500);
  }

  return (
    <div >
      <header>
        Hello World
      </header>
      <main>
        <IonButton onClick={handleClick}>Click Me</IonButton>
        <IonToast isOpen={showToast} message="Hello World!"></IonToast>
      </main>
    </div>
  );
}

export default App;
