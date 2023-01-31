type ErrorProps = {
  text: string;
};
import styles from './Error.module.css'

export function Error({ text }: ErrorProps) {
  return (
    <div className={styles.container}>
      <img src='https://cdn-icons-png.flaticon.com/128/6358/6358129.png'/>
      <p className={styles.p}>{text}</p>
    </div>
  );
}
