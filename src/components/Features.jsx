import React from 'react';
import assets from "../assets";
import styles from "../styles/Global"

const FeaturedCard = ({ iconUrl, iconText }) => {
  return (<div className={styles.featureCard}>
    <img 
      src={iconUrl} 
      alt="icon"
      className={`${styles.featureImg}`}
      />
      <p className={`${styles.featureText}`}>
        {iconText}
      </p>
  </div>)
}

const Features = () => {
  return (
    <div
      className={`${styles.section} ${styles.bgPrimary} banner03`}
      >
      <div className={`${styles.subSection}
        flex-col text-center
        `}>
        <h1 
          className={`${styles.h1Text} ${styles.whiteText}`}
          >Technologies</h1>
        <p className={`${styles.pText} ${styles.whiteText}`}
          >
            ProNef Has been developed using following technologies React-Native and cross-platform compatible</p>
      </div>
      <div className={`${styles.flexWrap}`}>
        <FeaturedCard 
          iconUrl={assets.react}
          iconText="React Native"
        />
        <FeaturedCard 
          iconUrl={assets.javascript}
          iconText="Javascript"  
        />
      </div>
    </div>
  )
}

export default Features