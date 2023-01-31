import styles from "./Text.module.css";
type TextProps = {
  text: string;
  weight?: number;
  size?: string;
  align?: "center" | "left" | "right";
};
export function Text({ text, weight, size, align }: TextProps) {
  return (
    <p
      className={styles.container}
      style={{
        fontWeight: weight,
        fontSize: size,
        textAlign: align,
      }}
    >
      {text}
    </p>
  );
}
