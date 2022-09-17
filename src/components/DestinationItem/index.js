import './index.css'

const DestinationItem = props => {
  const {destinationDetails, deleteTodo} = props
  const {id, imgUrl, name, genre, duration} = destinationDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="destination-item">
      <img alt="track" src={imgUrl} className="destination-image" />
      <p className="name">{name}</p>
      <p>{genre}</p>
      <p>{duration}</p>
      <button
        type="button"
        testid="delete"
        className="delete-btn"
        onClick={onDeleteTodo}
      >
        Delete
      </button>
    </li>
  )
}

export default DestinationItem
