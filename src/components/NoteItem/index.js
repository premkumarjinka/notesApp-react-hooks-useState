// Write your code here
import {Heading, Para, ListItem} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, notes} = details

  return (
    <ListItem>
      <Heading>{title}</Heading>
      <Para>{notes}</Para>
    </ListItem>
  )
}
export default NoteItem
