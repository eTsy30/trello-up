import React from 'react'
import { BsFillFileExcelFill } from 'react-icons/bs'
import styled from 'styled-components'
const ToDoContainer = styled.div`
    width: 100%;
    height: 250px;
    overflow: auto;
`
const ToDoInput = styled.input`
    margin-right: 15px;
`
const ToDoLabel = styled.label`
    margin-right: 15px;
    color: white;
    width: 100%;
    border: none;
`
const Wrapper = styled.div`
    background-color: #78cad2;
    padding: 5px;
    margin-bottom: 5px;
    display: flex;
    border-radius: 5px;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    & > svg {
        position: absolute;
        right: 5px;
        color: white;
    }
`
export const TodoList = ({ todos, deleteTodo }) => (
    <ToDoContainer>

        {todos.map((todo, index) => (
            <Wrapper key={index}>
                <ToDoInput
                    type="checkbox"
                    id={index.toString()}
                    name="vehicle1"
                    value={todo}
                />
                <ToDoLabel htmlFor={index.toString()}> {todo}</ToDoLabel>

                <BsFillFileExcelFill
                    onClick={() => {
                        deleteTodo(index)
                    }}
                />
            </Wrapper>
        ))}
    </ToDoContainer>
)
