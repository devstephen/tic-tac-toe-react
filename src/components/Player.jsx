import { useState } from 'react'

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditing() {
    setIsEditing((editing) => !editing)
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className='player-name'>{playerName}</span>

  if (isEditing) {
    editablePlayerName = (
      <input type='text' value={playerName} onChange={handleChange} required />
    )
  }
  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span id='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
