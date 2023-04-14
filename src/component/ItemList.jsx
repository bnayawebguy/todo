import { MdDelete } from "react-icons/md"

function ItemList({ items, deleteItem, setStatus }) {
  return (
    <ul className='block flex-wrap text-xl mb-6'>
      {items.map((item) => (
        <li
          className='bg-gray-100 mb-6 p-3 flex items-center justify-between'
          key={item.id}
        >
          <span>
            <input
              type='checkbox'
              className='mr-2 cursor-pointer'
              onChange={(e) => {
                setStatus(e.target.checked, item.id)
              }}
            />
            {item.isComplete && <span className='line-through italic text-gray-400'>{item.value}</span>}
            {!item.isComplete && <span className=''>{item.value}</span>}
          </span>
          <MdDelete
            className='text-red-500 cursor-pointer'
            onClick={() => deleteItem(item.id)}
          />
        </li>
      ))}
    </ul>
  )
}

export default ItemList
