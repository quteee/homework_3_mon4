import { useState } from 'react'
import Todo from './Todo'
import TodoForm from "./TodoForm";

function App() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    return (
    <div className='App'>
        <header>
            <h1>Список задач</h1>
        </header>
        <TodoForm addTask={addTask} />
        {todos.map((todo) => {
            return (
                <Todo
                todo={todo}
                key={todo.id}    />
            )
        })}
    </div>
    );
}

export default App;