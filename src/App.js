import { useRef } from "react";
import useLS from "./localStorageHook";
import "./App.css";

function App() {
    const textRef = useRef();
    const [storeTodos, setStoredTodos, removeStoreTodos] = useLS();
    function handleAddTodo() {
        const newTodo = {
            id: Math.random() + textRef.current.value,
            value: textRef.current.value,
        };
        setStoredTodos(newTodo);
        textRef.current.value = "";
    }
    function handleCheckBoxChange(st, e) {
        if (e.target.checked) {
            removeStoreTodos(st);
            e.preventDefault();
        }
    }
    return (
        <>
            <h1>Todo list app</h1>
            <input
                type='text'
                placeholder='Add a new todo'
                ref={textRef}
            ></input>
            <button onClick={() => handleAddTodo()}>Add</button>
            <ul>
                {storeTodos.map((st, index) => {
                    return (
                        <div key={st + index} className='container'>
                            <input
                                type='checkbox'
                                onChange={(e) => handleCheckBoxChange(st, e)}
                            ></input>
                            <li>{st.value}</li>
                        </div>
                    );
                })}
            </ul>
        </>
    );
}

export default App;
