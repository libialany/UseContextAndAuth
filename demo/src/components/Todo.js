import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import '../App.css'
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase/firebase'
function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([])
    const fetchPost = async () => {
        await getDocs(collection(db, "todos")).then(
            (querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => (
                    { ...doc.data(), id: doc.id }

                ))
                setTodos(newData);
            }
        )
    }
    useEffect(() => {
    fetchPost();
    }, [todos])
    const addTodo = async () => {
        try {
            await addDoc(collection(db, "todos"), {
                id: uuidv4(),
                description: todo,
            });
            // console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            // console.log("Error Adding docs");
        }
    }
    const onInputChange = (e) => {
        setTodo(e.target.value);
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (todo !== "") {
            addTodo()
            setTodo("")
        }
        else {
            alert("Fill Name Input!")
        }
    }
    return (
        <section>
            <div>
                <form onSubmit={onHandleSubmit}>
                    <input onKeyDown={e => {
                        if (e.key === 'Enter') e.preventDefault();
                    }} onChange={e => onInputChange(e)} value={todo} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                {todos?.map((todo, index) =>
                    <p key={index}>
                        {todo.description}
                    </p>
                )}
            </div>
        </section>

    )
}

export default Todo
