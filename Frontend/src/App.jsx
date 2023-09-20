import { TaskForm } from "./components/TaskForm";
import { TaskCard } from "./components/taskCard";
import { useTask } from "./hooks/useTask";
function App() {
  const { tasks, addTask, deleteTask } = useTask();

  return (
    <section className="flex flex-col bg-slate-100 w-screen h-screen py-8 items-center overflow-auto">
      <h1 className="text-3xl font-bold mb-3">ToDo</h1>
      <div className="border w-[26rem] bg-white p-4 rounded-md">
        <TaskForm addTask={addTask} />
        {tasks?.map((task, i) => (
          <TaskCard key={i} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </section>
  );
}

export default App;
