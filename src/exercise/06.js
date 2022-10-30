// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    const userName = inputRef.current.value
    onSubmitUsername(userName)
  }

  const handleChange = event => {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    if (isValid) {
      setError(null)
    } else {
      setError('Username must be lower case')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          ref={inputRef}
          onChange={handleChange}
        />
        {error ? (
          <div role="alert" style={{color: 'red'}}>
            {error}
          </div>
        ) : null}
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
