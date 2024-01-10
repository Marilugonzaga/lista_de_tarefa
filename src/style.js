import styled from 'styled-components'
import { FcCheckmark, FcEmptyTrash } from "react-icons/fc"

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TaskBoard = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    width: 540px;
    padding: 2em 1em;

    ul{
        padding: 0;
    }

    h3{
        text-align: center;
        margin-top: 1.5em;
    }
    
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 2.5em;
    width: 25em;
    margin-right: 5em;
    padding-left: 20px;
    
`

export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    height: 2.5em;
    width: 8em;
    color: #ffffff;
`

export const ToDoList = styled.div`
    background: ${props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 2.5em;
    padding: 0 1em;
    margin-bottom: 1.5em;

`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;

`

export const Check = styled(FcCheckmark)`
    cursor: pointer;

`