import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase-client";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  async function fetchTasks() {
    const { data, error } = await supabase.from("Tasks").select("*");
    if (!error) setTasks(data);
  }

  useEffect(() => {
    async function loadTasks() {
      await fetchTasks();
    }

    loadTasks();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      console.error("User not logged in!");
      return;
    }
    const { error } = await supabase.from("Tasks").insert([
      {
        title: newTaskTitle,
        description: newTaskDescription,
        email: user.email,
      },
    ]);

    if (!error) {
      setNewTaskTitle("");
      setNewTaskDescription("");
      fetchTasks();
    }
  }

  async function handleDelete(taskId) {
    await supabase.from("Tasks").delete().eq("id", taskId);
    fetchTasks();
  }

  async function saveEdit(taskId) {
    const { error } = await supabase
      .from("Tasks")
      .update({
        title: editingTask.title,
        description: editingTask.description,
      })
      .eq("id", taskId);

    if (!error) {
      setEditingTask(null);
      fetchTasks();
    }
  }

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        🎯 Task Manager CRUD
      </h1>

      {/* ADD TASK FORM */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          background: "#f8f8f8",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          marginBottom: "30px",
        }}
      >
        <input
          value={newTaskTitle}
          type="text"
          placeholder="Task title"
          onChange={(e) => setNewTaskTitle(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <textarea
          value={newTaskDescription}
          placeholder="Task description"
          onChange={(e) => setNewTaskDescription(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            minHeight: "70px",
          }}
        />
        <button
          style={{
            padding: "12px",
            background: "#4caf50",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ➕ Add Task
        </button>
      </form>

      {/* TASK LIST */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "15px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* EDIT MODE */}
            {editingTask?.id === task.id ? (
              <>
                <input
                  value={editingTask.title}
                  onChange={(e) =>
                    setEditingTask({ ...editingTask, title: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginBottom: "10px",
                  }}
                />
                <textarea
                  value={editingTask.description}
                  onChange={(e) =>
                    setEditingTask({
                      ...editingTask,
                      description: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    minHeight: "60px",
                  }}
                />
                <div
                  style={{ marginTop: "10px", display: "flex", gap: "10px" }}
                >
                  <button
                    onClick={() => saveEdit(task.id)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      background: "#2196f3",
                      color: "white",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    💾 Save
                  </button>
                  <button
                    onClick={() => setEditingTask(null)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      background: "#9e9e9e",
                      color: "white",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    ✖ Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 style={{ margin: "0 0 10px" }}>{task.title}</h2>
                <p style={{ marginBottom: "15px", color: "#555" }}>
                  {task.description}
                </p>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() =>
                      setEditingTask({
                        id: task.id,
                        title: task.title,
                        description: task.description,
                      })
                    }
                    style={{
                      flex: 1,
                      padding: "10px",
                      background: "#ffc107",
                      color: "white",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    ✏ Edit
                  </button>

                  <button
                    onClick={() => handleDelete(task.id)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      background: "#f44336",
                      color: "white",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    🗑 Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
