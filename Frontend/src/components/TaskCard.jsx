import trash from '../assets/trash.svg'

export const TaskCard = ({ task, deleteTask }) => {
  return (
    <div className="bg-[#c0d7e0] flex items-center p-2 rounded-md border border-gray-400 mb-2">
      <p>{ task.description }</p>
      <button onClick={() => deleteTask(task.id)} className='ml-auto'><img className='w-9 hover:bg-blue-900 p-2 border rounded-lg items-se bg-blue-800 ' src={trash} alt="" /></button>
    </div>
  );
}
