import React from "react";
import Link from "next/link";
import styles from "./button.module.scss";
const Button = ({ href, text, type = "primary", target, external }) => {
  const types = {
    primary: "is-primary",
    success: "is-success",
    danger: "is-danger",
    dark: "is-dark",
    light: "is-light",
  };

  const buttonClass = `button ${types[type]}`;

  if (external) {
    return (
      <div className={styles.button}>
        <a className={buttonClass} target={target} href={href}>
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className={styles.button}>
      <Link href={href}>
        <a className={buttonClass} target={target}>
          {text}
        </a>
      </Link>
    </div>
  );
};

export default Button;
