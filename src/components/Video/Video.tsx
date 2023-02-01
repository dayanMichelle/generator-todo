import styles from "./Video.module.css";

export const Video = () => {
  return (
    <div className={styles.containerVideo}>
      <img src="/iphone.png" className={styles.iphoneImage} />
      <video
        src="/use-video.mov"
        autoPlay
        loop
        muted
        className={styles.video}
        preload="auto"
        playsInline
      />
    </div>
  );
};
