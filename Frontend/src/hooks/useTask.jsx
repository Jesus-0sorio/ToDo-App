import { useEffect, useState } from 'react';
import { taskService } from '../services/taskService';

export const useTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const addTask = (task) => {
    setLoading(true);
    taskService.post(task).then(() => setLoading(false));
  };

  const deleteTask = (id) => {
    setLoading(true);
    taskService.delete(id).then(() => setLoading(false));
  };

  useEffect(() => {
    (async () => {
      const { data } = await taskService.getAll();
      setTasks(data);
    })();
  }, [loading]);

  return { addTask, deleteTask, tasks };
};
