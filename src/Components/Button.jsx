import styles from "../Components/component.module.css";

const Button = ({ children, variant }) => {
  return (
    <>
      <button className={styles[variant]}>{children}</button>
    </>
  );
};

export default Button;
