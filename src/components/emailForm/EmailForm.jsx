import { useState } from 'react'

export const EmailForm = (setError) => {
  const [email, setEmail] = useState('')

  // Отслеживание изменнений в Input. Проверка валидности при вводе знаечния
  const onEmailChange = ({ target }) => {
    setEmail(target.value)

    if (!/[a-zA-Z0-9_.@]+$/.test(target.value)) {
      setError(
        'E-mail может содержать только буквы(латиницы), цифры, знаки "_", "." и "@"'
      )
    } else if (target.value.length > 20) {
      setError('Максимальная длина E-mail состовляет 20 символов')
    } else {
      setError(null)
    }
  }

  // Проверка валидности после пермещения курсора
  const onEmailBlur = ({ target }) => {
    if (email.length < 9) {
      setError('Минисальная длина E-mail состовляет 9 символов')
    } else if (!/^(?=.*@)/.test(target.value)) {
      setError('В поле E-mail обязательно должен присутствовать символ "@"')
    }
  }

  return {
    onEmailChange,
    onEmailBlur,
    email,
  }
}
