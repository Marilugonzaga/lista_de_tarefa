import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  Container,
  TaskBoard,
  Input,
  Button,
  ToDoList,
  Check,
  Trash,
} from './style'

function App() {
  const [list, setList] = useState([])
  const [work, setWork] = useState('')

  function change(element) {
    setWork(element.target.value)
  }

  function clicked() {
    if (work) {
      const toClicked = [...list, { id: uuidv4(), task: work, status: false }]

      setList(toClicked)
    }
  }

  function checkClick(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    )

    setList(newList)
  }

  function trashClick(id) {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }

  return (
    <Container>
      <TaskBoard>
        <Input type="text" placeholder="Digite sua tarefa" onChange={change} />
        <Button onClick={clicked}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ToDoList key={uuidv4()} isFinished={item.status}>
                <Check onClick={() => checkClick(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => trashClick(item.id)} />
              </ToDoList>
            ))
          ) : (
            <h3>Não há itens na lista</h3>
          )}
        </ul>
      </TaskBoard>
    </Container>
  )
}

export default App
