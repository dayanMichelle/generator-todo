import styles from "./Text.module.css";
type TextProps = {
  text: string;
  weight: number;
  size:string
};
export function Text({ text, weight, size }: TextProps) {
  return (
    <p
      className={styles.container}
      style={{
        fontWeight: weight,
        fontSize:size
      }}
    >
      {text}
    </p>
  );
}
