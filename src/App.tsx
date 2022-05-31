import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PageOne from './components/PageOne';
import PageThree from './components/PageThree';
import PageTwo from './components/PageTwo';


function App() {

  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      {/* <Logo className='' /> */}
      <Header showNav={showNav} setShowNav={setShowNav} />
      <PageOne showNav={showNav} />
      <PageTwo />
      <PageThree />
      <Footer />
    </div>
  );
}

export default App;



/* <div className="bg-gray-200 flex w-64 h-64 items-end relative">
  <div className="bg-teal-300 w-16 h-48 absolute top-0">
    <p className="text-4xl border-b h-1/2 flex justify-center items-center">
      A
    </p>
    <p className="text-4xl border-b h-1/2 flex justify-center items-center">
      B
    </p>
  </div>

  <div className="bg-pink-300 w-16 h-48 absolute left-24">
    <p className="text-4xl border-b h-1/2 flex justify-center items-center">
      C
    </p>
    <p className="text-4xl border-b h-1/2 flex justify-center items-center">
      D
    </p>
  </div>

  <div className="bg-yellow-300 w-16 h-48 absolute top-0 right-0">
    <p className="text-4xl border-b h-1/2 flex justify-center items-center">
      E
    </p>
    <p className="text-4xl border-b h-1/2 flex justify-center items-center">
      F
    </p>
  </div>
</div> */