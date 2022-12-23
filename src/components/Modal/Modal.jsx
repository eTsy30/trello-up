import React,{  useState } from 'react'
import { useSelector } from 'react-redux'

import {Wrapper,Container,Title,TitleInput,Description,
    WrapperDescription,
    NameFields,
    DescriptionTextarea,
        ContainerDescription,
        ContainerDate,
        WrapperData,
        StartrDate,
        InWorkDate,
        DeadLine,
        ContainerPrioritet,
        Option,
        Form,
        LabelForm,
        ButtomForm,
        ButtonSave,
} from './Modal.Style'
import { AiOutlineContainer } from 'react-icons/ai'
import { MdDateRange, MdPriorityHigh } from 'react-icons/md'
import {
    BsCalendar2Date,
    BsFillCalendarDateFill,
    BsFillArrowUpSquareFill,
    BsFillFileCheckFill,
} from 'react-icons/bs'

import { modalActive } from '../../redux/reduser/modaiActiveReduser'
import { useDispatch } from 'react-redux'
import { storage } from '../../fireBase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { TodoList } from '../Todo/TodoList'
import { TodoForm } from '../Todo/TodoForm'
import useTodoState from '../Todo/useTodoState'
import { putCard } from '../../redux/reduser/cardReduser'




export const Modal = () => {
    const dispach = useDispatch()
    const acvive = useSelector((state) => state.modal.active)
    const { cardId, listId, bordID } = acvive
    const cards = useSelector((state) => state.cards[listId])
    const dataCard = cards.filter((card) => card.id === cardId)
    const card = dataCard[0]
    const { todos, addTodo, deleteTodo } = useTodoState(card.newTask)
    const [titleInput, setTitleInput] = useState(card.title)
    const [isTitleInputActive, setIsTitleInputActive] = useState(true)
    const [textDescription, srtTextDescription] = useState(card.description)
    const [isTextDescription, setIsTextDescription] = useState(true)
    const [startData, setStartData] = useState(card.dataCreate.slice(0, 10))
    const [priorety, setPriorety] = useState('Medium')
    const [url, setUrl] = useState(card.addFile)
    const [deadLineData, setDeadLineData] = useState(
        card.dataDeadline.slice(0, 10)
    )
    const MIL_IN_DAAY = 86400000
    const timeDiff = Math.round(
        (Date.parse(card.dataCreate) - new Date().getTime()) / MIL_IN_DAAY
    )
    const [progress, setProgress] = useState(0)
    const formHandler = (e) => {
        e.preventDefault()
        const file = e.target[0].files[0]
        uploadFile(file)
    }
    
    const cardData = {
        title: titleInput,
        description: textDescription,
        dataCreate: startData,
        workTime: timeDiff,
        dataDeadline: deadLineData,
        prioretty: priorety,
        addFile: url,
        newTask: todos,
        position: card.position,
        id: cardId,
        listID: listId,
        bordID: bordID,
    }
   

    const uploadFile = (file) => {
        if (!file) return
        const storageRef = ref(storage, `/file/${file.name}`)
        const upliadTask = uploadBytesResumable(storageRef, file)
        upliadTask.on(
            'state_changed',
            (snashptshoot) => {
                const prog = Math.round(
                    (snashptshoot.bytesTransferred / snashptshoot.totalBytes) *
                        100
                )
                setProgress(prog)
            },
            (eror) => {
                console.log(eror)
            },
            () => {
                getDownloadURL(upliadTask.snapshot.ref).then((u) => {
                      setUrl([...url,{nameFile:file.name, url:u}])
               
                  
                })
            }
        )
    }
    if (!acvive) return null
    return (
        <Wrapper
            id="Wrapper"
            onClick={(e) => {
                if (e.target !== e.currentTarget) {
                    return
                }
                dispach(modalActive(false))
            }}
        >
            <Container id="Container">
                {isTitleInputActive ? (
                    <Title
                        onClick={() =>
                            setIsTitleInputActive(!isTitleInputActive)
                        }
                    >
                        {titleInput}
                    </Title>
                ) : (
                    <TitleInput
                        type="text"
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                        onBlur={() =>
                            setIsTitleInputActive(!isTitleInputActive)
                        }
                    ></TitleInput>
                )}
                <ContainerDescription>
                    <WrapperDescription>
                        <AiOutlineContainer />
                        <NameFields>Descriptionе:</NameFields>
                    </WrapperDescription>

                    {isTextDescription ? (
                        <Description
                            onClick={() =>
                                setIsTextDescription(!isTextDescription)
                            }
                        >
                            {textDescription}
                        </Description>
                    ) : (
                        <DescriptionTextarea
                            value={textDescription}
                            onChange={(e) => {
                                srtTextDescription(e.target.value)
                            }}
                            onBlur={() =>
                                setIsTextDescription(!isTextDescription)
                            }
                        ></DescriptionTextarea>
                    )}
                </ContainerDescription>
                <ContainerDate>
                    <>
                        <WrapperData>
                            <NameFields>
                                <MdDateRange />
                                Date Created
                            </NameFields>
                            <StartrDate
                                type={'date'}
                                onChange={(e) => setStartData(e.target.value)}
                                value={startData}
                            />
                        </WrapperData>
                        <WrapperData>
                            <NameFields>
                                <BsCalendar2Date />
                                Day at work
                            </NameFields>
                            <InWorkDate>{timeDiff} day</InWorkDate>
                        </WrapperData>
                        <WrapperData>
                            <NameFields>
                                <BsFillCalendarDateFill />
                                Date Finished
                            </NameFields>
                            <DeadLine
                                type={'date'}
                                onChange={(e) =>
                                    setDeadLineData(e.target.value)
                                }
                                value={deadLineData}
                            ></DeadLine>
                        </WrapperData>

                        <WrapperData>
                            <NameFields>
                                <MdPriorityHigh />
                                Priorety
                            </NameFields>

                            <ContainerPrioritet
                                onChange={(e) => setPriorety(e.target.value)}
                                defaultValue="Medium"
                            >
                                <Option value="High">High</Option>
                                <Option value="Medium">Medium</Option>
                                <Option value="Low">Low</Option>
                            </ContainerPrioritet>
                        </WrapperData>

                        <NameFields>
                            <BsFillArrowUpSquareFill />
                            add files
                        </NameFields>
                        <Form onSubmit={formHandler}>
                            <LabelForm>
                                <input type="file" />
                                <BsFillFileCheckFill></BsFillFileCheckFill>
                            </LabelForm>
                            <h3>{progress}%</h3>
                            <ButtomForm type="submit">Upload</ButtomForm>
                        </Form>
                       {card.addFile.map(linkArray=>( 
                      
                       <a  key={linkArray.url} target="_blank" rel="noreferrer" href={linkArray.url}>
                        {linkArray.nameFile}
                        </a> 
                    ))}
                       
                    
                    </>
                </ContainerDate>

                <TodoForm
                    saveTodo={(todoText) => {
                        const trimmedText = todoText.trim()

                        if (trimmedText.length > 0) {
                            addTodo(trimmedText)
                        }
                    }}
                />
                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                />
                <ButtonSave
                    onClick={() => {
                        console.log(todos,'todos',card.newTask,cardData);
                        
                        dispach(putCard(cardData))
                        dispach(modalActive(false))
                    }}
                >
                    Сохранить
                </ButtonSave>
               
            </Container>
        </Wrapper>
    )
}
