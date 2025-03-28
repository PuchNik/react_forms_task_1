import './App.css'
import { useState, useRef, useEffect } from 'react'
import {
  EmailForm,
  PasswordForm,
  RepeatPasswordForm,
  StoreForm,
} from './components/index'

function App() {
  const [error, setError] = useState(null)

  const { onEmailChange, onEmailBlur, email } = EmailForm(setError)
  const { onPasswordChange, onPasswordBlur, password } = PasswordForm(setError)
  const { onRepeatPasswordChange, onRepeatPasswordBlur, repeatPassword } =
    RepeatPasswordForm(setError, password)
  const { updatedStore, setStore } = StoreForm(
    setError,
    password,
    email,
    repeatPassword
  )

  const buttonRef = useRef(null)

  useEffect(() => {
    if (
      !error &&
      email &&
      password &&
      repeatPassword &&
      password.length >= 6 &&
      repeatPassword === password
    ) {
      buttonRef.current.focus()
    }
  }, [error, email, password, repeatPassword]) // Зависимости для useEffect

  const onSubmit = (event) => {
    event.preventDefault()
    setStore(updatedStore)
    console.log(updatedStore)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="E-mail"
          onChange={onEmailChange}
          onBlur={onEmailBlur}
        />

        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
        />

        <input
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          placeholder="Repeat password"
          onChange={onRepeatPasswordChange}
          onBlur={onRepeatPasswordBlur}
        />

        {error && <div style={{ color: 'red' }}>{error}</div>}

        <button type="submit" ref={buttonRef} disabled={error !== null}>
          Отправить
        </button>
      </form>
    </div>
  )
}

export default App
