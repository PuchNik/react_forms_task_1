import './App.css'
import { useState } from 'react'


function App() {
  const [login, setLogin] = useState('')
  const [loginError, setLoginError] = useState(null)

  const onLoginChange = ({ target }) => {
    setLogin(target.value)

    let error = null

    if (!/^[\w_]*$/.test(target.value)) {
      error =
        'Неверный логин. Допустимые символы - буквы, цифры и нижнее подчёркивания'
    } else if (target.value.length > 20) {
      error = 'Неверный логин. Должно быть не больше 20 символов'
    }

    setLoginError(error)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(login)
  }

  const onLoginBlur = () => {
    if (login.length < 3) {
      setLoginError('Неверный логин. Должно быть не меньше 3 символов.')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="login"
          value={login}
          placeholder="Login"
          onChange={onLoginChange}
          onBlur={onLoginBlur}
        />

        {loginError && <div style={{ color: 'red' }}>{loginError}</div>}

        <button type="submit" disabled={loginError !== null}>
          Отправить
        </button>
      </form>
    </div>
  )
}

export default App
