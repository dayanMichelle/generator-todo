import { Routes, Route } from "react-router-dom";
import { Home, MyTodos, ATodo, CreateTodo } from "./pages";
import { Navbar } from "./components";

import { useTodos } from "./hooks";
import "./App.css";

function App() {
  const {
    todos,
    getTodoById,
    handleCheckedTodo,
    handleSelectedIdTodo,
    handleDeleteTodo,
    handleAddTodo,
    addStepAtTodo,
    deleteStepAtTodo,
  } = useTodos();

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="my-todos" element={<MyTodos todos={todos} />} />
          <Route
            path="my-todos/:id"
            element={
              <ATodo
                getTodoById={getTodoById}
                handleCheckedTodo={handleCheckedTodo}
                handleSelectedIdTodo={handleSelectedIdTodo}
                handleDeleteTodo={handleDeleteTodo}
                addStepAtTodo={addStepAtTodo}
                deleteStepAtTodo={deleteStepAtTodo}
              />
            }
          />
          <Route
            path="create-todo"
            element={<CreateTodo handleAddTodo={handleAddTodo} />}
          />
          <Route path="*" element={<h3>Error</h3>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
