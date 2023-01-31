import { Button, Text } from "src/components";

import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <Text
        weight={900}
        size="30px"
        text="AITodo, a solution to save time in planning 🕣"
      />
      <Text
        size="15px"
        weight={100}
        text="AITodo: Create complete lists from an idea with Artificial Intelligence."
      />
      <Text
        size="15px"
        weight={100}
        text="Don't know where to start your new idea, plan or project? IATodo is born from the need to eliminate an extra step when making a to-do list for our next goal. Just write your plan and see the magic ✨"
      />
      <div className={styles.btnContainer}>
        <a href="https://cohere.ai/" target="_blank">
          <Button onClick={() => {}} text="Doc Cohere" />
        </a>
        <a
          target="_blank"
          href="https://github.com/midudev/midu-cohere-hackathon"
        >
          <Button onClick={() => {}} text="Midudev repo" color="dark" />
        </a>
      </div>
      <div className={styles.contact}>
        <a
          target="_blank"
          className={styles.contact}
          href="https://www.linkedin.com/in/dayan-arango/"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
            width="20px"
          />
          Dayan Arango
        </a>
        <a
          target="_blank"
          className={styles.contact}
          href="https://www.linkedin.com/in/jhan-bayer/"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
            width="20px"
          />
          Jhan Bayer
        </a>
      </div>
    </div>
  );
}
