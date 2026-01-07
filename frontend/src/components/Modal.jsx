export default function Modal({children, onClose}){
    return(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40 animate-fade">
            <div className="bg-white p-6 rounded w-96 relative animate-scale">
                <button
                    onClick={onClose}
                    className="absolute top-2 rigt-2 text-gray-500 hover:text-black"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    )
}