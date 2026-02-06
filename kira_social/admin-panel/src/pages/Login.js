import { useState } from "react";
import API from "../services/api";

export default function Login({setAuth}){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const login = async()=>{
    const res = await API.post("/auth/login",{email,password});
    const { role } = res.data;  // you can pass role from backend if needed
    if(role === "admin" || role === "owner"){
      localStorage.setItem("adminToken",res.data.token);
      setAuth(true);
    } else alert("Access denied, not admin/owner");
  }

  return (
    <div style={{padding:40}}>
      <h2>Admin / Owner Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
