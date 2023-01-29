type ButtonProps = {
  color: string;
  text: string;
  onClick: () => void
};
import styles from "./Button.module.css";
export function Button({ color, text, onClick }: ButtonProps) {
  const colorBF = color == "black" ? "dark" : "";
  return (
    <button onClick={() => onClick} className={`${styles.btnGeneric} ${styles[colorBF]}`}>
      {text}
    </button>
  );
}
