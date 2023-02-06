import React from "react";
import styles from "./styles/Home.module.scss";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return <div className={styles.home}>Home</div>;
};

export default Home;
