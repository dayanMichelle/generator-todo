import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { useTodos } from "./hooks/useTodos";
import { ATodo } from "./pages/Atodo/ATodo";
import { MyTodos } from "./pages/MyTodo/MyTodos";
import "./App.css";
function App() {
  const {
    todos,
    getTodoById,
    handleCheckedTodo,
    handleSelectedIdTodo,
    handleDeleteTodo,
  } = useTodos();

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <div>
                <p>home</p>
              </div>
            }
          />
          <Route path="my-todos" element={<MyTodos todos={todos} />} />
          <Route
            path="my-todos/:id"
            element={
              <ATodo
                getTodoById={getTodoById}
                handleCheckedTodo={handleCheckedTodo}
                handleSelectedIdTodo={handleSelectedIdTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            }
          />
          <Route
            path="create-todo"
            element={
              <div>
                <p>Create Todo</p>
              </div>
            }
          />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<h3>Error</h3>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
