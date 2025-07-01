import { useState } from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro'
import LangTools from './Components/LangTools';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
   <>


   <div  className='bg-white dark:bg-[#202020] min-h-screen w-full flex flex-col overflow-y-auto font-[Onest]'>

      <Header  />
      <Intro />
      <LangTools />
      <Projects />
      <Footer />
      
   </div>
   
  
   </>
  );
}

export default App;
