import styles from "./Button.module.css";

type ButtonProps = {
  color?: "dark" | "";
  text: string;
  onClick: () => void;
};
export function Button({ color = "", text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btnGeneric} ${styles[color]}`}
    >
      {text}
    </button>
  );
}
