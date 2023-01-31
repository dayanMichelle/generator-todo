import styles from "./TodoList.module.css";

type TodoListProps = {
  children: React.ReactNode;
};

export function TodoList({ children }: TodoListProps) {
  return <div className={styles.table}>{children}</div>;
}
