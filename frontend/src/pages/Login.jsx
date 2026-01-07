import { use, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import Toast from "../components/Toast";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toast, setToast ] = useState(null);
    const navigate = useNavigate();

    const submit = async(e)=>{
        e.preventDefault();
        try{
            const res = await api.post("/auth/login",{email, password});
            localStorage.setItem("token",res.data.token);
            setToast({message:"Login successful", type: "success"});
            setTimeout(()=> navigate("/dashboard"), 1000);

        } catch(err){
            setToast({message:"Invalid credentials", type: "error"});
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 animate-fade">
            <Toast message={toast?.message} type={toast?.type}/>

            <form onSubmit={submit}>
                <h2 className="text-xl font-bold mb-4">Login</h2>

                <input className="w-full mb-3 p-2 border rounded" placeholder="Email"
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <input type="password" className="w-full mb-3 p-2 border rounded" placeholder="password"
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <button className="w-full bg-blue-500 text-white py-2 rounded">
                    Login
                </button>

                <p className="text-sm mt-3 text-center">
                    No account? <Link to="/register" className="text-blue-500">Register</Link>
                </p>
            </form>
        </div>
    )
}