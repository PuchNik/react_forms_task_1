import { useState } from 'react'

export const PasswordForm = (setError, repeatPassword) => {
  const [password, setPassword] = useState('')

  const onPasswordChange = ({ target }) => {
    setPassword(target.value)
  }

  const onPasswordBlur = () => {
    if (password.length === 0) {
      setError('Поле Password не может быть пустым')
    } else if (password.length < 6) {
      setError('Минимальная длина Password состовляет 6 символов')
    } else if (repeatPassword && repeatPassword !== password) {
      setError('Пароли не совпадают')
    } else {
      setError(null)
    }
  }
  return {
    onPasswordChange,
    onPasswordBlur,
    password,
  }
}
