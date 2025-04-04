import { useState } from 'react'

export const RepeatPasswordForm = (setError, password) => {
  const [repeatPassword, setRepeatPassword] = useState('')

  // Отслеживание изменнений в Input. Проверка валидности при вводе знаечния
  const onRepeatPasswordChange = ({ target }) => {
    setRepeatPassword(target.value)
    setError(null)
  }

  // Проверка валидности после пермещения курсора
  const onRepeatPasswordBlur = ({ target }) => {
    if (password.length < 6) {
      setError('Минимальная длина Password состовляет 6 символов')
    } else if (repeatPassword.length === 0) {
      setError(
        'Неверный повтор пароля. Поле Repeat password не должно быть пустым'
      )
    } else if (target.value !== password) {
      setError('Пароли не совпадают')
    }
  }

  return {
    onRepeatPasswordChange,
    onRepeatPasswordBlur,
    repeatPassword,
  }
}
