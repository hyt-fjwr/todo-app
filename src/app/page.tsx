"use client";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css"; // Assuming you have this CSS file in your project

export default function Home() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodos = () => {
    if (text) {
      setTodos((prev) => [...prev, { id: Date.now(), text }]);
      setText("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <main>
      <div className="text-center">
        <h1 className="text-4xl mt-3">APIテスト</h1>
        <input
          className="relative text-gray-900 border-collapse m-2 p-1.5 rounded-lg"
          type="text"
          value={text}
          onChange={changeText}
        />
        <button
          onClick={addTodos}
          className="bg-slate-400 p-1.5 rounded-lg hover:text-orange-300 hover:bg-slate-700 duration-150"
        >
          追加
        </button>
      </div>
      <div>
        <ul className="flex flex-col justify-center m-2 w-3/12 mx-auto overflow-hidden">
          <TransitionGroup>
            {todos.map((todo) => (
              <CSSTransition timeout={1000} classNames="todo" key={todo.id}>
                <li className="bg-slate-100 rounded-lg p-2 flex justify-between duration-500 m-2">
                  <p className="text-gray-800">{todo.text}</p>
                  <button
                    className="bg-gray-500 rounded-lg ml-1 p-1 hover:text-lg hover:text-orange-300 duration-300"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    完了
                  </button>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </div>
    </main>
  );
}