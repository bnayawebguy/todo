function Notification({ clearAll, totalItems }) {
  return (
    <div className='flex justify-between text-xl items-center'>
      <p>
        You have{" "}
        <span className='text-xl font-semibold text-red-500'>
          {totalItems}
        </span>{" "}
        pending tasks
      </p>
      <button
        className='bg-red-500 text-white p-3 rounded-md uppercase'
        onClick={clearAll}
      >
        Clear All
      </button>
    </div>
  )
}

export default Notification
