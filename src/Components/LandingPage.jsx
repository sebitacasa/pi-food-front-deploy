import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import images from '../images/pexels-cottonbro-3298637.jpg'

var imagen = {backgroundImage: `url(${images})`}

export default function LandingPage() {
  return (
    <body className={styles.bodyLanging} style={imagen}>
     
        <div className={styles.ldn}>
          <h1 className={styles.title}>Welcome to the kitchen</h1>

          <Link to="/home">
            <button className={styles.btn}>Enter</button>
          </Link>
        </div>
      
    </body>
  );
}
