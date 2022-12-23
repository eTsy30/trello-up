import React, { useState, useEffect, useSelector } from 'react'
import { Draggable } from '@hello-pangea/dnd'

import { AiOutlineCloseCircle, AiOutlineFieldTime } from 'react-icons/ai'
import { BsListTask } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { modalActive } from '../../../redux/reduser/modaiActiveReduser'
import { deliteCard } from '../../../redux/reduser/cardReduser'
import{Wrapper,MainContainer,Titul,TitleContainer,Status,Footer} from './CardMini.Style'
export const CardMini = (card) => {
    const { title, cardId, index, listId,position, cardData, bordID } = card
    const dispach = useDispatch()
    return (
        <>
            <Draggable
                draggableId={cardId + 'cardId'}
                index={index}
                type="card"
            >
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Wrapper>
                            <AiOutlineCloseCircle
                                onClick={() => {
                                    dispach(
                                        deliteCard({
                                            cardID: cardId,
                                            listID: listId,
                                            bordID: bordID,
                                        })
                                    )
                                }}
                        
                            />
                            <MainContainer
                                onClick={() => {
                                    return dispach(
                                        modalActive({
                                            cardId: cardId,
                                            listId: listId,
                                            bordID: bordID,
                                        })
                                    )
                                }}
                            >
                                <Titul>
                                   
                                    <TitleContainer>{title}</TitleContainer>
                                    <Status prioretty={cardData.prioretty}>
                                        {cardData.prioretty}
                                    </Status>
                                </Titul>

                                <Footer>
                                    <div>
                                        <AiOutlineFieldTime />
                                        {cardData.dataDeadline.slice(0, 10)}
                                    </div>
                                    <div>
                                        <BsListTask />

                                        {cardData.newTask.length}
                                    </div>
                                </Footer>
                            </MainContainer>
                        </Wrapper>
                    </div>
                )}
            </Draggable>
        </>
    )
}
