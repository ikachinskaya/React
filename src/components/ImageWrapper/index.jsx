import React from "react";
import styles from "./ImageWrapper.module.scss";

const ImageWrapper = (props) => {
  // const { children, style, onClick } = props;
  // return (
  //   <div className={styles.wrapper} style={style} onClick={onClick}>

  //     {children}
  //   </div>
  // );

  return <div className={styles.wrapper} {...props} />;
};

export default ImageWrapper;
