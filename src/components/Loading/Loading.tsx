import styles from "./Loading.module.css";
export function Loading() {
  return (
    <>
      <div className={styles.skcubegrid}>
        <div className={`${styles.skcube} ${styles.skcube1}`}></div>
        <div className={`${styles.skcube} ${styles.skcube2}`}></div>
        <div className={`${styles.skcube} ${styles.skcube3}`}></div>
        <div className={`${styles.skcube} ${styles.skcube4}`}></div>
        <div className={`${styles.skcube} ${styles.skcube5}`}></div>
        <div className={`${styles.skcube} ${styles.skcube6}`}></div>
        <div className={`${styles.skcube} ${styles.skcube7}`}></div>
        <div className={`${styles.skcube} ${styles.skcube8}`}></div>
        <div className={`${styles.skcube} ${styles.skcube9}`}></div>
      </div>
    </>
  );
}
