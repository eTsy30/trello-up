import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Board } from '../components/board/Board'
import { InputBoard } from '../components/Input/InputBoard'
import { setAxiosBoard } from '../redux/reduser/boardReduser'
const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    background-color: #a1d2ce;
`
const Label = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 48px;
    text-align: center;
    padding-top: 50px;
    color: white;
`
const BoardContainer = styled.div`
    display: flex;
    gap: 15px;
    width: 80%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 30px;
`
export const BoardPage = () => {
    useEffect(() => {
        dispach(setAxiosBoard())
    }, [])

    const boards = useSelector((state) => state.boards.board)
    const dispach = useDispatch()

    return (
        <Wrapper>
            <Label>Board</Label>
            <BoardContainer>
                {boards &&
                    boards.map((board) => (
                        <Board
                            key={board.id}
                            id={board.id}
                            name={board.boardName} 
                                            />
                    ))}
                <InputBoard />
            </BoardContainer>
        </Wrapper>
    )
}
