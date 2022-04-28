import { Download, Features, SectionWrapper } from "./components";
import "./App.css"
import assets from "./assets"
import React, { useRef, useState, useEffect } from 'react';
import useIntersection from "./Hooks/useIntersection"
import styles from "./styles/Global";

const App = () =>  {

  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const [inScreen, setInScreen] = useState(false)
  const [inScreen2, setInScreen2] = useState(false)
  const [inScreen3, setInScreen3] = useState(false)
  const [inScreen4, setInScreen4] = useState(false)
 
  const inViewport = useIntersection(ref, "0px");
  const inViewport2 = useIntersection(ref2, "-50%");
  const inViewport3 = useIntersection(ref3, "-50%");
  const inViewport4 = useIntersection(ref4, "-50%");

  useEffect(() => { 
    if(inViewport){
      setInScreen(true)
    }
    else{
      setInScreen(false)
    }
  },[inViewport])

  useEffect(() => { 
    if(inViewport2){
      setInScreen2(true)
    }
    else{
      setInScreen2(false)
    }
  },[inViewport2])

  useEffect(() => { 
    if(inViewport3){
      setInScreen3(true)
    }
    else{
      setInScreen3(false)
    }
  },[inViewport3])

  useEffect(() => { 
    if(inViewport4){
      setInScreen4(true)
    }
    else{
      setInScreen4(false)
    }
  },[inViewport4])


  return (
    <div className="app-container">
      <div 
        className="app-entry"
        ref={ref}
        >
        <SectionWrapper 
          inScreen={inScreen}
          title="Your Own Store Of NFTS, Start Selling & Growing your Wealth Today"
          description="Buy, store, collect NFTS, exchange & earn crypto. Join 30+ millions of people using ProNef Marketplace"
          showBtn
          mockupImg={assets.homeHero}
          banner="banner"
        />
      </div>
      <div
        ref={ref2}
        className="app-ui"
        >
        <SectionWrapper
          inScreen={inScreen2}
          title="Smart User Interface Marketplace"
          description="Experience a true UI/UX smooth transition of a fluent UI Design Masterpiece"
          mockupImg={assets.homeCards}
          reverse
        />
      </div>
      <div className="app-features">
        <Features />
      </div>
      <div
        className="app-deployment"
        ref={ref4}
        >
        <SectionWrapper
          inScreen={inScreen4}
          title="Deployment"
          description="ProNef built with Expo, from Development to End User"
          mockupImg={assets.mockup}
          reverse
        />
      </div>
      <div
        ref={ref3}
        className={`app-showCase`}
        >
        <SectionWrapper 
          inScreen={inScreen3}
          title="Show casing my creativity"
          description="The App has two screens, a search section and section that shows more details of NFTS"
          reverse
          changeBgColor
          mockupImg={assets.feature}
          banner="banner02"
        />
      </div>
      <div className="app-download">
        <Download />
      </div>
      <div className="flex flex-row px-4 py-2 justify-center items-center bgPrimaryPurple">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by {" "}<span className={`bold ${styles.whiteText}`}>{" "}Kho</span>
        </p>
      </div>
    </div>
  );
}

export default App;
