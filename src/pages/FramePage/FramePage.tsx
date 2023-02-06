import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../Home";

import styles from "./styles/FramePage.module.scss";

export interface FramePageInterface {}

const FramePage: React.FC<FramePageInterface> = () => {
  return (
    <div className={styles.framePage}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<div>settings</div>} />
      </Routes>
    </div>
  );
};

export default FramePage;
