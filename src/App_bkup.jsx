import { useState } from "react"

import uniqid from "uniqid"
import { MdAdd, MdDelete } from "react-icons/md"

function App() {
  const [todoList, setTodoList] = useState([])
  const [todoItem, setTodoItem] = useState({ id: 0, value: "" })
  const [todoIsEmpty, setTodoIsEmpty] = useState(false)

  const handleInputChange = (e) => {
    setTodoItem({
      id: uniqid(),
      value: e.target.value,
    })
  }

  const handleAddItem = (e) => {
    e.preventDefault()

    if (!todoItem.value) {
      console.log(todoItem)
      setTodoIsEmpty(true)
      return
    }

    setTodoList([todoItem, ...todoList])
    setTodoItem({ id: 0, value: "" })
  }

  const handleDeleteItem = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id)
    setTodoList(newTodoList)
  }

  const handleClearTodolist = () => {
    setTodoList([])
  }

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ...'>
      <div className='w-4/12 bg-white p-10 rounded-xl'>
        <h1 className='font-bold text-4xl mb-8'>Todo App</h1>

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
        
        {todoIsEmpty && (
          <p className='text-red-500 text-base mb-4'>Input field is empty</p>
        )}

        <ul className='block flex-wrap text-xl mb-6'>
          {todoList.map((item) => (
            <li
              className='bg-gray-100 mb-6 p-3 flex items-center justify-between'
              key={item.id}
            >
              <span>{item.value}</span>
              <MdDelete
                className='text-red-500 cursor-pointer'
                onClick={() => handleDeleteItem(item.id)}
              />
            </li>
          ))}
        </ul>

        <div className='flex justify-between text-xl items-center'>
          <p>You have <span className="text-xl font-semibold text-red-500">{(todoList.length)}</span> pending tasks</p>
          <button
            className='bg-red-500 text-white p-3 rounded-md uppercase'
            onClick={handleClearTodolist}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
