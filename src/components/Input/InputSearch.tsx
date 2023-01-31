import { FiSearch } from "react-icons/fi";
import { Input } from "../../components";
import styles from "./InputSearch.module.css";

type InputSearchProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  handleSearchTodo: () => void;
};

export const InputSearch = ({
  handleChange,
  inputValue,
  handleSearchTodo,
}: InputSearchProps) => {
  return (
    <Input
      placeholder="e.j: Plant a tomatoes "
      handleChange={handleChange}
      inputValue={inputValue}
    >
      <button onClick={handleSearchTodo} className={styles.btnSearch}>
        <FiSearch />
      </button>
    </Input>
  );
};
