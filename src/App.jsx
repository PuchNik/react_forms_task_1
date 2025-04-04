import { useState, useRef, useEffect } from 'react'
import styles from './App.module.css'
import {
  EmailForm,
  PasswordForm,
  RepeatPasswordForm,
  StoreForm,
} from './components/index'


function App() {
  const [error, setError] = useState(null)
  const buttonRef = useRef(null)

  // Деструктуризация функции и значения из компонентов форм
  const { onEmailChange, onEmailBlur, email } = EmailForm(setError)
  const { onPasswordChange, onPasswordBlur, password } = PasswordForm(setError)
  const { onRepeatPasswordChange, onRepeatPasswordBlur, repeatPassword } = RepeatPasswordForm(setError, password)
  const { updatedStore, setStore } = StoreForm(password, email, repeatPassword)

  // Перевод фокуса на кнопку при валидности всех полей формы
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
  }, [error, email, password, repeatPassword])

  // Обработки отправки формы (проверка валидности данных и обновление store)
  const onSubmit = (event) => {
    event.preventDefault()

    if (error) {
      return
    }

    setStore(updatedStore)
    console.log(updatedStore)
  }

  return (
    <div className={styles['form-container']}>
      <div className={styles.title}>Регистрационная форма</div>
      <form onSubmit={onSubmit} className={styles['registration-form']}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="E-mail"
          onChange={onEmailChange}
          onBlur={onEmailBlur}
          className={styles['input-field']}
        />

        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
          className={styles['input-field']}
        />

        <input
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          placeholder="Repeat password"
          onChange={onRepeatPasswordChange}
          onBlur={onRepeatPasswordBlur}
          className={styles['input-field']}
        />

        {error && <div className={styles['error-message']}>{error}</div>}

        <button
          type="submit"
          ref={buttonRef}
          disabled={error !== null}
          className={styles['submit-button']}
        >
          Отправить
        </button>
      </form>
    </div>
  )
}

export default App
