"use client";

import React, { useState } from "react";
import styles from "./darkModeToggle.module.css";

const DarkModeToggle = () => {
  const [mode, setMode] = useState("light")
  const toggle =() => {
    setMode("dark");
  }
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
