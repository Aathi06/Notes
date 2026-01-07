import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import Toast from "../components/Toast";

export default function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toast, setToast] = useState(null);
    const navigate = useNavigate();

    const submit = async(e) =>{
        e.preventDefault();
        try {
            await api.post("auth/register", {email,password});
            setToast({msg:"Registered successfully", type: "success"});
            setTimeout(()=> navigate("/",1200));
        } catch {
            setToast({msg:"User already exists", type: "error"});
        }
    };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 animate-fade">
            <Toast message={toast?.msg} type={toast?.type} />
            <form onSubmit={submit} className="bg-white p-6 rounded w-80 shadow">
                <h2 className="text-xl font-bold mb-4">Register</h2>
                    <input className="w-full mb-3 p-2 border rounded" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="w-full mb-3 p-2 border rounded"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />

                <button className="w-full bg-green-500 text-white py-2 rounded">    
                      Register
                </button>

                <p className="text-sm mt-3 text-center">
                    Already have an account? <Link to="/" className="text-blue-500">Login</Link>
                </p>
            </form>
        </div>
    )
}