import { Button, Text } from "@/components";

import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <Text
        weight={900}
        size="30px"
        text="AITodo, a solution for your procrastination 💜"
      />
      <Text
        size="15px"
        weight={100}
        text="AITodo: Create complete lists from an idea with Artificial Intelligence."
      />
      <Text
        size="15px"
        weight={100}
        text="IATodo is born from the need to eliminate an extra step when making a task list for our next step.
        IATodo is born from the need to eliminate an extra step when making a task list for our next step."
      />
      <div className={styles.btnContainer}>
        <a href="https://cohere.ai/" target="_blank">
          <Button onClick={() => {}} text="Doc Cohere" />
        </a>
        <a target="_blank">
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
