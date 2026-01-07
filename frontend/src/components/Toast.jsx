export default function Toast({message, type}){
    if(!message) return null;

    const colors ={
        success: "bg-green-500",
        errror: "bg-red-500",
        info: "bg-blue-500"
    }

    return (
        <div
            className={`${colors[type]} animate-slide text-white px-4 py-2 rounded fixed top-5 right-5 shadow z-50`}>
            {message}
        </div>
    )
}