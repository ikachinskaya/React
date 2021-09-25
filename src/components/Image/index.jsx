import { Component } from "react";
import styles from "./image.module.css";

class Image extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <div className={styles.imgWrapper}>
        <img className={styles.image} src={src} alt={alt} />
      </div>
    );
  }
}

export default Image;
