import { useState } from "react"

import ItemAddForm from "./component/ItemAddForm"
import ItemList from "./component/ItemList"
import Notification from "./component/Notification"

function App() {
  const [todoList, setTodoList] = useState([])
  const [todoIsEmpty, setTodoIsEmpty] = useState(false)

  const handleAddItem = (newItem) => {
    if (!newItem.value) {
      setTodoIsEmpty(true)
      return
    }

    setTodoList([newItem, ...todoList])
  }

  const handleDeleteItem = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id)
    setTodoList(newTodoList)
  }

  const handleClearTodolist = () => {
    setTodoList([])
  }

  const handleCompleteItem = (status, id) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: status }
      }
      return item
    })

    setTodoList(updatedTodoList)
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
      <div className='w-4/12 bg-white p-10 rounded-xl'>
        <h1 className='font-bold text-4xl mb-8'>Todo App</h1>

        <ItemAddForm addItem={handleAddItem} />

        {todoIsEmpty && (
          <p className='text-red-500 text-base mb-4'>Input field is empty</p>
        )}

        <ItemList
          items={todoList}
          deleteItem={handleDeleteItem}
          setStatus={handleCompleteItem}
        />

        <Notification
          clearAll={handleClearTodolist}
          totalItems={todoList.length}
        />
      </div>
    </div>
  )
}

export default App
