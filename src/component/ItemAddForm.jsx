import { useState } from "react"

import uniqid from "uniqid"
import { MdAdd } from "react-icons/md"

function ItemAddForm({ addItem }) {
  const [todoItem, setTodoItem] = useState({
    id: 0,
    value: "",
    isComplete: false,
  })

  const handleInputChange = (e) => {
    setTodoItem({
      id: uniqid(),
      value: e.target.value,
      isComplete: false,
    })
  }

  const handleAddItem = (e) => {
    e.preventDefault()
    addItem(todoItem)
    setTodoItem({ id: 0, value: "", isComplete: false })
  }

  return (
    <form
      className='mb-6 flex gap-x-2 align-items-stretch'
      onSubmit={handleAddItem}
    >
      <input
        className='border-2 p-2 text-xl flex-1'
        type='text'
        placeholder='Add you new todo'
        value={todoItem.value}
        onChange={handleInputChange}
      />
      <button className='bg-indigo-500 text-white px-4' type='submit'>
        <MdAdd />
      </button>
    </form>
  )
}

export default ItemAddForm
