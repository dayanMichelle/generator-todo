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
  const isCompleted = checkedTodo === totalTodo;
  return (
    <div className={`${styles.container}  ${isCompleted && styles.completed}`}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.date}>{date}</span>
      <div className={styles.containerInfo}>
        <div>
          {checkedTodo} of {totalTodo}
        </div>
        <div className={styles.counter}>O</div>
      </div>
    </div>
  );
}
