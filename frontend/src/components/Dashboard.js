import React, { useState, useEffect } from 'react';
import taskService from '../services/taskService';
import styles from './Dashboard.module.css';

const Dashboard = ({ user, onLogout }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await taskService.getTasks();
      setTasks(data);
      setError('');
    } catch (err) {
      setError('Failed to load tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    
    if (!newTask.trim()) return;

    try {
      const task = await taskService.createTask(newTask);
      setTasks([task, ...tasks]);
      setNewTask('');
      setError('');
    } catch (err) {
      setError('Failed to create task');
      console.error(err);
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      const updated = await taskService.updateTask(task._id, {
        isCompleted: !task.isCompleted
      });
      setTasks(tasks.map(t => t._id === task._id ? updated : t));
      setError('');
    } catch (err) {
      setError('Failed to update task');
      console.error(err);
    }
  };

  const handleStartEdit = (task) => {
    setEditingId(task._id);
    setEditText(task.title);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const handleSaveEdit = async (taskId) => {
    if (!editText.trim()) {
      handleCancelEdit();
      return;
    }

    try {
      const updated = await taskService.updateTask(taskId, {
        title: editText
      });
      setTasks(tasks.map(t => t._id === taskId ? updated : t));
      setEditingId(null);
      setEditText('');
      setError('');
    } catch (err) {
      setError('Failed to update task');
      console.error(err);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await taskService.deleteTask(taskId);
      setTasks(tasks.filter(t => t._id !== taskId));
      setError('');
    } catch (err) {
      setError('Failed to delete task');
      console.error(err);
    }
  };

  const completedCount = tasks.filter(t => t.isCompleted).length;
  const totalCount = tasks.length;

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>✓ Todo</h1>
            <p className={styles.userEmail}>{user.email}</p>
          </div>
          <button onClick={onLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </header>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{totalCount}</span>
            <span className={styles.statLabel}>Total Tasks</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{completedCount}</span>
            <span className={styles.statLabel}>Completed</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{totalCount - completedCount}</span>
            <span className={styles.statLabel}>Remaining</span>
          </div>
        </div>

        <form onSubmit={handleAddTask} className={styles.addTaskForm}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className={styles.addTaskInput}
          />
          <button type="submit" className={styles.addTaskBtn}>
            Add
          </button>
        </form>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.taskList}>
          {loading ? (
            <div className={styles.loading}>Loading tasks...</div>
          ) : tasks.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No tasks yet. Add one to get started!</p>
            </div>
          ) : (
            tasks.map(task => (
              <div key={task._id} className={styles.taskItem}>
                <div className={styles.taskLeft}>
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => handleToggleComplete(task)}
                    className={styles.checkbox}
                    id={`task-${task._id}`}
                  />
                  
                  {editingId === task._id ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveEdit(task._id);
                        if (e.key === 'Escape') handleCancelEdit();
                      }}
                      className={styles.editInput}
                      autoFocus
                    />
                  ) : (
                    <label
                      htmlFor={`task-${task._id}`}
                      className={`${styles.taskText} ${task.isCompleted ? styles.completed : ''}`}
                    >
                      {task.title}
                    </label>
                  )}
                </div>

                <div className={styles.taskActions}>
                  {editingId === task._id ? (
                    <>
                      <button
                        onClick={() => handleSaveEdit(task._id)}
                        className={styles.actionBtn}
                        title="Save"
                      >
                        ✓
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className={styles.actionBtn}
                        title="Cancel"
                      >
                        ✕
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleStartEdit(task)}
                        className={styles.actionBtn}
                        title="Edit"
                      >
                        ✎
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task._id)}
                        className={styles.actionBtn}
                        title="Delete"
                      >
                        🗑
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
