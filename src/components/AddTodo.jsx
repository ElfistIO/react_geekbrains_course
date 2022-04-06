import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddTodo = ({ onCreate }) => {
    const [value, setValue] = useState('')

    function submitHanlder(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form style={{ marginBottom: '1rem'}} onSubmit={submitHanlder}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">AddTodo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}