import { Link } from "react-router-dom";
import { ProgressBar } from "~/components";
import styles from "./TodoCard.module.css";

type CardTodoProps = {
  title: string;
  date: string;
  checkedTodo: number;
  totalTodo: number;
  id: string;
};

export function TodoCard({
  title,
  date,
  checkedTodo,
  totalTodo,
  id,
}: CardTodoProps) {
  return (
    <Link to={`/my-todos/${id}`}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.date}>{date}</span>
        <div className={styles.containerInfo}>
          <div>
            {checkedTodo} of {totalTodo}
          </div>
          <ProgressBar
            quantity={checkedTodo}
            total={totalTodo}
            indicatorColor="black"
            trackColor="#eaeaea"
          />
        </div>
      </div>
    </Link>
  );
}
