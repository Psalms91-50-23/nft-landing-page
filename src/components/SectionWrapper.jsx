import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button'; 
import React from 'react';

const SectionWrapper = ({ 
    title, 
    description, 
    showBtn, 
    mockupImg,
    banner,
    reverse,
    inScreen,
    notReverse
}) => {

  return (
      <>
      {inScreen ? (
        <div 
            className={`min-h-screen 
            ${styles.section}
            ${reverse ? styles.bgWhite: notReverse ? " bgWhite" : "" } 
            ${banner}`
            }
            >
            <div className={`flex items-center 
            ${reverse? styles.boxReverseClass : styles.boxClass} 
            w-11/12 sm:w-full minmd:w-3/4`}>
                <div className={`${styles.descDiv}
                    ${reverse || notReverse?  " fadeRightMini" : " fadeLeftMini"}
                    ${reverse || notReverse ? styles.textRight : styles.textLeft}
                `}>
                    <h1 className={`
                    ${reverse || notReverse ? styles.blackText : styles.whiteText}
                    ${styles.h1Text}
                    `}>{title}</h1>
                    <p className={`${styles.descriptionText}`}>{description}</p>
                    {showBtn && (
                        <Button 
                            assetUrl={assets.expo}
                            link="https://expo.dev/@khothach/nft-market-place?serviceType=classic&distribution=expo-go"
                        />
                    )}
                </div>
                <div 
                    className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
                <img 
                    className={`${reverse ? " fadeLeftMini" : " fadeRightMini"} ${styles.sectionImg}`}
                    src={mockupImg} 
                    alt="mockup"
                />
                </div>
            </div>
        </div>
      )
        :
        <div className="scroll"></div>
      } 
      </>
  )
}

export default SectionWrapper