import { useState } from "react";

export const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      description: task,
    };
    addTask(newTask);
    setTask("");
  };

  return (
    <>
      <form
        onClick={(e) => e.stopPropagation()}
        className="flex w-full gap-3 mb-16"
        action="submit"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full border-blue-400 py-1 px-2 outline-2 outline-blue-600 border  rounded-md"
          type="text"
          name="task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          autoComplete="off"
          required
        />
        <button
          className="bg-blue-500 px-[1.3rem] py-[0.43rem] rounded-md text-white hover:bg-blue-700"
        >
          Add
        </button>
      </form>
    </>
  );
};
