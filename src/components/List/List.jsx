import React, { useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Input } from '../Input/Input'
import { CardMini } from '../Card/CardMini/CardMini'
import { useDispatch, useSelector } from 'react-redux'
import { setAxiosCard } from '../../redux/reduser/cardReduser'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import { delList } from '../../redux/reduser/listReduser'

const Wrapper = styled.div`
    width: 300px;
    height: auto;
    background: #50858b;
    background-color: #78cad2;
    border-radius: 15px;
    padding: 15px;
    margin: 0px 15px;
    cursor: grab;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    & > svg {
        height: 20px;
        width: 20px;
    }
    & > svg:hover {
        height: 25px;
        width: 25px;
        color: red;
    }
`
const Label = styled.p`
    color: white;
`
export const List = ( { title, idBoard, idList, index }) => {
    
    const dispach = useDispatch()
    const dataCards = useSelector((state) => {
        return state.cards[idList]
    })
    useEffect(() => {
        dispach(setAxiosCard({ bordID: idBoard, listID: idList }))
      
    }, [])

    const sortlist = (a, b) => {
        if (a.position > b.position) {
            return 1
        } else {
            return -1
        }
    }
    return (
        <Draggable draggableId={idList + 'idList'} index={index} type="list1">
            {(provided) => (
                <>
                    <div {...provided.draggableProps} ref={provided.innerRef}>
                        <Wrapper {...provided.dragHandleProps}>
                            <HeaderContainer>
                                <Label>{title}</Label>
                                <AiOutlineCloseCircle
                                    onClick={() => {
                                        dispach(
                                            delList({
                                                bordID: idBoard,
                                                listID: idList,
                                            })
                                        )
                                    }}
                                />
                            </HeaderContainer>
                            <Droppable droppableId={idList + 'idList'}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        {dataCards &&
                                            dataCards
                                                .sort(sortlist)
                                                .map((card, index) => {
                                                    return (
                                                        <CardMini
                                                            key={card.id}
                                                            title={card.title}
                                                            cardId={card.id}
                                                            index={index}
                                                            cardData={card}
                                                            listId={idList}
                                                            bordID={idBoard}
                                                            position={
                                                                card.position
                                                            }
                                                        />
                                                    )
                                                })}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                            <Input
                                type="card"
                                listID={idList}
                                bordID={idBoard}
                            />
                        </Wrapper>
                    </div>
                </>
            )}
        </Draggable>
    )
}
