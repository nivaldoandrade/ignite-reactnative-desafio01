import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    };

    setTasks((state) => [...state, data]);
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const taskMarkerDone = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        };
      }

      return task;
    });

    setTasks(taskMarkerDone);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const taskRemoveFilter = tasks.filter((task) => task.id !== id);

    setTasks(taskRemoveFilter);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
});
