import { useState } from 'react'
import { storeData } from '../../helpers/storData'

// Управление состоянием данных формы
export const StoreForm = (password, email, repeatPassword) => {
  const [store, setStore] = useState(storeData)

  const updatedStore = store.map((item) => {
    if (item.name === 'email') {
      return { ...item, value: email }
    } else if (item.name === 'password') {
      return { ...item, value: password }
    } else if (item.name === 'repeatPassword') {
      return { ...item, value: repeatPassword }
    }
    return item
  })

  return {
    updatedStore,
    setStore,
  }
}
