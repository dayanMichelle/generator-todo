import { Button } from "../../components/Button/Button";
import { Text } from "../../components/Text/Text";
import styles from "./Home.module.css";
export function Home() {
  return (
    <div className={styles.container}>
      <Text weight={900} size='30px' text="NAME OF THE APP" />
      <Text
        weight={100}
        text="Estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
      />
      <div className={styles.btnContainer}>
        <a href="https://cohere.ai/" target="_blank">
          <Button onClick={() => {}} text="Doc Cohere" />
        </a>
        <a target="_blank">
          <Button onClick={() => {}} text="Midudev repo" color="black" />
        </a>
      </div>
      <div className={styles.contact}>
        <a
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
          className={styles.contact}
          href="https://www.linkedin.com/in/dayan-arango/"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
            width="20px"
          />
          Jhan Mora
        </a>
      </div>
    </div>
  );
}
