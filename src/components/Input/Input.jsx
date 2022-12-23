import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AiOutlinePlus, AiOutlineCloseCircle } from 'react-icons/ai'
import { addList } from '../../redux/reduser/listReduser'
import { addAxiosCard } from '../../redux/reduser/cardReduser'
const Wrapper = styled.button`
    border-radius: 15px;
    border: 2px solid #5497a7;
    min-width: 300px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #78cad2;
    & > svg {
        margin: 0 auto;
        height: 20px;
        width: 20px;
    }
    & > svg:hover {
        height: 25px;
        width: 25px;
        color: red;
    }
`
const Textarea = styled.input`
    min-width: 300px;
    box-sizing: border-box;
    padding: 5px;
    min-height: 30px;
    border-radius: 5px;
`
const AddButton = styled.div`
    background-color: #5497a7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    min-width: 300px;
    min-height: 30px;
`
const Container = styled.div`
    padding: 5px 0px;
    align-items: center;
`
const ContainerInput = styled.div`
    width: 300px;
    min-height: 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    & > svg {
        margin: 0 auto;
        height: 20px;
        width: 20px;
        color: white;
    }
    & > svg:hover {
        height: 25px;
        width: 25px;
        color: #bb2649;
    }
`
export const Input = ({ type, bordID, listID }) => {
    const [isVisible, setVisible] = useState(false)
    const [inputValue, setInputVAlue] = useState('')
    const dispach = useDispatch()
    if (!isVisible)
        return (
            <Wrapper
                onClick={() => {
                    setVisible(!isVisible)
                }}
            >
                <AiOutlinePlus style={{ color: 'white' }} />
            </Wrapper>
        )

    return (
        <>
            {isVisible && (
                <ContainerInput>
                    <Textarea
                        placeholder="Empty"
                        value={inputValue}
                        onChange={(e) => setInputVAlue(e.target.value)}
                    />
                    <Container>
                        <AddButton
                            onClick={() => {
                                if (type === 'list')
                                    return dispach(
                                        addList({
                                            bordID: bordID,
                                            name: inputValue,
                                        })
                                    )
                                dispach(
                                    addAxiosCard({
                                        bordID: bordID,
                                        name: inputValue,
                                        listID: listID,
                                    })
                                )
                                setVisible(!isVisible)
                                setInputVAlue('')
                            }}
                        >
                            + add {type}
                        </AddButton>
                    </Container>
                    <AiOutlineCloseCircle
                        onClick={() => {
                            setVisible(!isVisible)
                            setInputVAlue('')
                        }}
                    />
                </ContainerInput>
            )}
        </>
    )
}
