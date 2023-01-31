import { Routes, Route } from "react-router-dom";
import { Home, MyTodos, ATodo, CreateTodo, NotFound } from "src/pages";
import { Navbar } from "src/components";
import { useTodos } from "src/hooks";

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
    handleDragEnd,
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
                handleDragEnd={handleDragEnd}
              />
            }
          />
          <Route
            path="create-todo"
            element={<CreateTodo handleAddTodo={handleAddTodo} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
