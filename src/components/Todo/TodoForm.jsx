import React from 'react'
import { Form } from 'react-router-dom'
import styled from 'styled-components'
import useInputState from './useInputState'
const ToDoFormInput = styled.input`
    width: 100%;
    height: 20px;
    border-radius: 5px;
    padding-left: 5px;
    border: none;
`
const Forma = styled.form`
    width: 100%;
    margin: 15px;
` 
export const TodoForm = ({ saveTodo})  => {
    const { value, reset, onChange } = useInputState()

    return (
        <Forma
            onSubmit={(event) => {
                event.preventDefault()

                saveTodo(value)
                reset()
            }}
        >
            <ToDoFormInput
                variant="outlined"
                placeholder="Add todo"
                margin="normal"
                onChange={onChange}
                value={value}
            />
        </Forma>
    )
}
