import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Input } from '../components/Input/Input'
import { List } from '../components/List/List'
import {
    addCard,
    changePositionCard,
    deliteCard,
    setCard,
} from '../redux/reduser/cardReduser'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'

import { setAxiosList } from '../redux/reduser/listReduser'
import { Modal } from '../components/Modal/Modal'
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #a1d2ce;
`
export const ListPage = () => {
  
    const { id } = useParams()
    const dispach = useDispatch()
    const acvive = useSelector((state) => state.modal.active)
    const lists = useSelector((state) => state.lists.list)
    const cards = useSelector((state) => {
        return state.cards
    })
    useEffect(() => {
        dispach(setAxiosList({ bordID: id }))
    }, [acvive])

    const sortlist = (a, b) => {
        if (a.orderList > b.orderList) {
            return 1
        } else {
            return -1
        }
    }

    const getPositions = (arr, destination) => {
        let count = 0
       
        arr.forEach((el, index) => {
            if (destination.index + 1 === index) {
               
                count += Number(el.position)
            }
            if (destination.index - 1 === index) {
              
                count += Number(el.position)
            }
        })
        return count/2
    }
    const onDragEnd = (result, list) => {
        const { destination, source, draggableId, type, listID } = result
       
        if (!destination) {
            return
        }
        if (destination.droppableId === 'app') {
            return
        }
        if (destination.droppableId === source.droppableId) {
            const idlist = Array.from(destination.droppableId)[0]
            const card = cards[idlist]
            const [reorderedItem] = card.splice(source.index, 1)

            card.splice(destination.index, 0, reorderedItem)
            dispach(setCard(cards))
         
            console.log();
            dispach(
                changePositionCard({
                    bordID: id,
                    position:getPositions(card, destination) ,
                    listID: idlist,
                    cardID: reorderedItem.id,
                })
            )
           

            return
        }
        const idlistTO = Array.from(source.droppableId)[0]
        const idlistFrom = Array.from(destination.droppableId)[0]
        const card = cards[idlistTO]
        const [reorderedItem] = card.splice(source.index, 1)
      
        cards[idlistFrom].splice(destination.index, 0, reorderedItem)

        dispach(
            deliteCard({
                bordID: id,
                listID: idlistTO,
                cardID: reorderedItem.id,
            })
        )
        dispach(
            addCard({
                bordID: id,
                listID: idlistFrom,
                cardID: source.index,
                card: reorderedItem,
            })
        )
    }
    //sort(sortlist)
    return (
        <Container>
            <h1>{id}</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                {lists.sort(sortlist).map((list, index) => (
                    <Droppable
                        droppableId="app"
                        type="list"
                        direction="horizontal"
                        key={list.id}
                    >
                        {(provided) => {
                            return (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <List
                                        key={list.id}
                                        idList={list.id}
                                        idBoard={id}
                                        title={list.title}
                                        orderList={list.orderList}
                                        index={index}
                                    />
                                    {provided.placeholder}
                                </div>
                            )
                        }}
                    </Droppable>
                ))}
            </DragDropContext>
            {acvive ? <Modal /> : <></>}
            <Input type="list" bordID={id} />
        
        </Container>
    )
}
