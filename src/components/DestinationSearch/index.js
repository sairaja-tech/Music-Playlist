import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  deleteTodo = id => {
    const {destinationsList} = this.state
    const updatedTodosList = destinationsList.filter(
      eachTodo => eachTodo.id !== id,
    )

    this.setState({
      destinationsList: updatedTodosList,
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destinations-search-container">
          <h1 className="EdSheeran">Ed Sheeran</h1>
          <p>Singer</p>
          <h1 className="EdSheeran">Songs Playlist</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          {searchResults.length > 0 ? (
            <ul className="destinations-list">
              {searchResults.map(eachDestination => (
                <DestinationItem
                  key={eachDestination.id}
                  destinationDetails={eachDestination}
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </ul>
          ) : (
            <p>No Songs Found</p>
          )}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
