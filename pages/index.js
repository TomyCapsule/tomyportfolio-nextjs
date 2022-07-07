import React, {useState, useEffect} from 'react';
import Home from './components/Home';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import MyNavi from './components/MyNavi';
import ReactPageScroller from 'react-page-scroller';
import 'react-awesome-slider/dist/styles.css';
import Image from 'next/image';


function App() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    const handleResize = () =>{
      if(window.innerWidth < 926 || window.innerHeight < 500){
        setIsMobile(true);
      }else{
        setIsMobile(false);
      }
    }
    if(window.innerWidth < 926 || window.innerHeight < 500){
      setIsMobile(true);
    }
    window.addEventListener('resize',handleResize);

    return () => {
      window.removeEventListener('resize',handleResize);
    }
  },[]);

  const [currentPage,setCurrentPage] = useState(null);
  let handlePageChange = page =>{
    console.log('page',page)
    setCurrentPage(page);
  }


  if(!isMobile){
    return (
        <div className="App container-fluid">
          <MyNavi handlePageChange={handlePageChange}/>
          <ReactPageScroller
            pageOnChange={handlePageChange}
            customPageNumber={currentPage}
            animationTimer={300}
            animationTimerBuffer={0}>
              <Home handlePageChange={handlePageChange} />
              <Works />
              <About />
              <Contact />      
          </ReactPageScroller> 
        </div> 
    );
  }else{
    return(
      <div className="App container-fluid d-flex flex-column justify-content-center align-items-center" style={{height: '100vh',background:'#2c2c54',color:'#FFFFFF'}}>
        <p style={{zIndex:1}}>Bonjour ! Merci d'être venu sur ma page cependant le portfolio n'est pas encore prêt pour mobile, c'est pour bientôt, promis !</p>
        <p style={{zIndex:1}}>- Tomy Visouthiphongs</p>
        <img layout="fill" src="/sorry.png" alt="sorry-icon" style={{width:'100vw',maxWidth: '500px',position:'fixed',top:'35vh', opacity:0.2}} />
      </div>
    )
  }
}

export default App;
