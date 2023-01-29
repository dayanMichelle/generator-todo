type ButtonProps = {
  color: string;
  text: string;
};
import styles from "./Button.module.css";
export function Button({ color, text }: ButtonProps) {
  const colorBF = color == "black" ? "dark" : "";
  return (
    <button className={`${styles.btnGeneric} ${styles[colorBF]}`}>
      {text}
    </button>
  );
}
