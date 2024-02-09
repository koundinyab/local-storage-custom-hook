import { useEffect, useState } from "react";
export default function useLS(value) {
    const [toStoreValue, setToStoreValue] = useState([]);
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        setToStoreValue(todos);
    }, []);
    function putStoreVal(todo) {
        setToStoreValue((prev) => [...prev, todo]);
        let current = JSON.parse(localStorage.getItem("todos"));
        if (current) {
            current = [...current, todo];
        } else {
            current = [todo];
        }
        localStorage.setItem("todos", JSON.stringify(current));
    }
    function removeStoreVaL(todo) {
        setToStoreValue((prev) => {
            const updatedTodos = prev.filter((p) => p.id !== todo.id);
            return updatedTodos;
        });
        let current = JSON.parse(localStorage.getItem("todos"));
        if (current) {
            current = current.filter((c) => c.id !== todo.id);
        }
        localStorage.setItem("todos", JSON.stringify(current));
    }
    return [toStoreValue, putStoreVal, removeStoreVaL];
}
