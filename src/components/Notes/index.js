// Write your code here
import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  Container,
  Heading,
  Title,
  NotesL,
  Button,
  Img,
  Para,
  ContainerList,
  Cont,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setList] = useState('')

  console.log(notesList)

  const a = notesList.length > 0

  const onTitleChange = event => {
    setTitle(event.target.value)
  }

  const onNotesChange = event => {
    setNotes(event.target.value)
  }

  const onFormSubmit = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      notes,
    }
    setList(prevState => [...prevState, newNotes])
    setTitle('')
    setNotes('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <Container onSubmit={onFormSubmit}>
        <Title
          placeholder="Title"
          type="text"
          onChange={onTitleChange}
          value={title}
        />
        <NotesL
          placeholder="Take a Note..."
          type="text"
          rows="6"
          onChange={onNotesChange}
          value={notes}
        />
        <Button type="submit">Add</Button>
      </Container>
      <ContainerList>
        {a ? (
          notesList.map(eachItem => (
            <NoteItem details={eachItem} key={eachItem.id} />
          ))
        ) : (
          <>
            <Cont>
              <Img
                src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
                alt="notes empty"
              />
              <Heading>No Notes Yet</Heading>
              <Para>Notes you add will appear here</Para>
            </Cont>
          </>
        )}
      </ContainerList>
    </MainContainer>
  )
}
export default Notes
