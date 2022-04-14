import React from 'react'
import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download Source code</h1>
        <p className={`${styles.pText} ${styles.blackText}`}>Get all the source code</p>
        <div className="button-container">
          <button 
            className={`${styles.btnPrimary} horizontal-margin`}
            onClick={() => window.open("https://github.com/Psalms91-50-23/nft-landing-page", "_blank")}
            >
            Landing Page Source Code
          </button>
          <button 
            className={`${styles.btnPrimary} horizontal-margin`}
            onClick={() => window.open("https://github.com/Psalms91-50-23/nft-marketplace-react-native", "_blank")}
            >
            NFT React Native App Source Code
          </button>
        </div>
      <div className={`${styles.flexCenter}`}>
        <img 
          src={assets.scene}
          alt="download_png"
          className={styles.fullImg}
        />
      </div>
      </div>
    </div>
  )
}

export default Download