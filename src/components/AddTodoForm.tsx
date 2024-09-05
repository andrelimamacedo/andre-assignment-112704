import React, { useState } from "react";

interface AddTodoFormProps {
    addTodo: (title: string, desc: string) => void;
}


/*
 * AddTodoForm: Create two input fields for title, and description string fields
 * As well as a submit button which creates the new To Do via addTodo 
 */
function AddTodoForm({ addTodo }: AddTodoFormProps) {
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {        
        event.preventDefault(); //prevent the page from refreshing
        addTodo(title, desc);
        setTitle('');
        setDesc('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    placeholder="Provide a title for the new To Do"
                    onChange={(e) => setTitle(e.target.value)}
                    value = {title} //bind the input's value to the state
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={desc}
                    placeholder="Briefly describe the To Do task"
                    onChange={(e) => setDesc(e.target.value)}                    
                    required
                />
            </div>
            <button type="submit">Add To Do</button>
        </form>
    );
}

export default AddTodoForm;