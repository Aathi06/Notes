import { useEffect, useState } from "react";
import api from "../api/axios";
import NoteCard from "../components/NoteCard";
import Modal from "../components/Modal";
import useNaviagte from "react-router-dom";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState(null); // add | edit | view | delete
  const [msg, setMsg] = useState("");
  const navigate = useNaviagte();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await api.get("/notes");
    setNotes(res.data);
  };

  const showMsg = (text) => {
    setMsg(text);
    setTimeout(() => setMsg(""), 2000);
  };

  const addNote = async () => {
    await api.post("/notes", { title, content });
    showMsg("Note added ✅");
    setMode(null);
    setTitle("");
    setContent("");
    fetchNotes();
  };

  const updateNote = async () => {
    await api.put(`/notes/${selected._id}`, { title, content });
    showMsg("Note updated ✏️");
    setMode(null);
    fetchNotes();
  };

  const deleteNote = async () => {
    await api.delete(`/notes/${selected._id}`);
    showMsg("Note deleted 🗑");
    setMode(null);
    fetchNotes();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Notes 📝</h1>
        <button
          onClick={logout}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>

      {/* Toast message */}
      {msg && (
        <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded animate-bounce z-50">
          {msg}
        </div>
      )}

      {/* Empty State */}
      {notes.length === 0 && (
        <div className="text-center text-gray-500 mt-20">
          <p className="text-xl">No notes yet 📭</p>
          <p className="text-sm mt-1">Click + to add your first note</p>
        </div>
      )}

      {/* Notes */}
      <div className="grid md:grid-cols-3 gap-4">
        {notes.map((n) => (
          <NoteCard
            key={n._id}
            note={n}
            onView={() => {
              setSelected(n);
              setMode("view");
            }}
            onEdit={() => {
              setSelected(n);
              setTitle(n.title);
              setContent(n.content);
              setMode("edit");
            }}
            onDelete={() => {
              setSelected(n);
              setMode("delete");
            }}
          />
        ))}
      </div>

      {/* ➕ Floating Add Button */}
      <button
        onClick={() => {
          setTitle("");
          setContent("");
          setMode("add");
        }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white text-3xl shadow-lg hover:scale-110 transition"
      >
        +
      </button>

      {/* ADD / EDIT MODAL */}
      {(mode === "add" || mode === "edit") && (
        <Modal onClose={() => setMode(null)}>
          <h2 className="text-lg font-bold mb-3">
            {mode === "add" ? "Add Note" : "Edit Note"}
          </h2>

          <input
            className="w-full border p-2 rounded mb-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full border p-2 rounded mb-3"
            rows={4}
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button
            onClick={mode === "add" ? addNote : updateNote}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            {mode === "add" ? "Add" : "Update"}
          </button>
        </Modal>
      )}

      {/* VIEW MODAL */}
      {mode === "view" && (
        <Modal onClose={() => setMode(null)}>
          <h2 className="text-xl font-bold mb-2">{selected.title}</h2>
          <p className="whitespace-pre-wrap text-gray-700">
            {selected.content}
          </p>
        </Modal>
      )}

      {/* DELETE CONFIRM MODAL */}
      {mode === "delete" && (
        <Modal onClose={() => setMode(null)}>
          <p className="mb-4">Delete this note?</p>
          <div className="flex gap-3">
            <button
              onClick={deleteNote}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => setMode(null)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
