import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { useTodos } from "./hooks/useTodos";
import { ATodo } from "./pages/ATodo";
import { MyTodos } from "./pages/MyTodos";

function App() {
  const { todos, getTodoById, handleCheckedTodo, handleSelectedIdTodo } =
    useTodos();
  console.log({ todos });

  return (
    <div>
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
