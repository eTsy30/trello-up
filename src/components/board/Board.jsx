import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { delAxiosBoard } from '../../redux/reduser/boardReduser'
import {createStartList}from '../../redux/reduser/listReduser'
import { AiOutlineCloseCircle } from 'react-icons/ai'
const Wrapper = styled.button`
    border-radius: 15px;
    border: 2px solid #5497a7;
    width: 250px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #78cad2;
    position: relative;
    & > .iconExit {
        display: none;
        height: 20px;
        width: 20px;
        position: absolute;
        right: 5px;
        top: 5px;
    }
    :hover .iconExit {
        display: block;
    }
`
const Label = styled.p`
    font-size: 26px;
    color: white;
    text-decoration: none;
`
export const Board = ({ name, id}) => {
    const dispatch = useDispatch()
    return (
        <Wrapper>
            <AiOutlineCloseCircle
                onClick={() => dispatch(delAxiosBoard(id))}
                className="iconExit"
            />
            <Link
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to={`/list/${id}`}
            >
                <Label>{name}</Label>
            </Link>
        </Wrapper>
    )
}
