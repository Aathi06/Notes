export default function NoteCard({note, onView, onEdit, onDelete}){
    return (
        <div
            onClick={onView}
            className="border p-3 rounded mb-2 cursor-pointer hover:bg-gray-50 transition animate-fade"
        >
            <div className="flex justify-between items-center ">
                <h3 className="font-semibold text-lg truncate max-w-[220px]">
                    {note.title}
                </h3>
                <p className="truncate max-w-[70%]">{note.contnet}</p>
                <div className="flex gap-2">
                    <button
                        onClick={(e)=>{
                            e.stopPropagation();
                            onEdit();
                        }}
                        className="hover:scale-110 transition"
                    >
                        ✏️
                    </button>
                    <button
                        onClick={(e)=>{
                            e.stopPropagation();
                            onDelete();
                        }}
                        className="hover:scle-110 transition"
                    >
                        🗑
                    </button>
                </div>
            </div>
        </div>
    )
}