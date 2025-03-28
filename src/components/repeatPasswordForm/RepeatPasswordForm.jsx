import { useState } from "react"


export const RepeatPasswordForm = (setError, password) => {
    const [repeatPassword, setRepeatPassword] = useState('')
    
    const onRepeatPasswordChange = ({ target }) => {
        setRepeatPassword(target.value)
    
        if (target.value !== password) {
          setError('Пароли не совпадают')
        } else if (password.length < 6) {
          setError('Минимальная длина Password состовляет 6 символов')
        } else {
          setError(null)
        }
      }
    
      const onRepeatPasswordBlur = () => {
        if (repeatPassword.length === 0) {
          setError(
            'Неверный повтор пароля. Поле Repeat password не должно быть пустым'
          )
        }
      }
    return {
        onRepeatPasswordChange,
        onRepeatPasswordBlur,
        repeatPassword
    }
}