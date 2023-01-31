import styles from "./Input.module.css";

type InputProps = {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  placeholder: string;
};

export const Input = ({
  inputValue,
  handleChange,
  children,
  placeholder,
}: InputProps) => {
  return (
    <div className={styles.containerInput}>
      <input
        // placeholder="e.j: Plant a tomatoes "
        placeholder={placeholder}
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={handleChange}
      />
      {children}
      {/* <button onClick={handleSearchTodo} className={styles.btnSearch}>
        <FiSearch />
      </button> */}
    </div>
  );
};
