import { useEffect,useState } from "react";
import API from "../services/api";

export default function Users(){
  const [users,setUsers]=useState([]);

  const load = async()=>{
    const res = await API.get("/admin/users");
    setUsers(res.data);
  };

  useEffect(()=>{load();},[]);

  const ban = async id=>{ await API.put(`/admin/ban/${id}`); load(); }
  const unban = async id=>{ await API.put(`/admin/unban/${id}`); load(); }
  const makeCreator = async id=>{ await API.put(`/admin/make-creator/${id}`); load(); }

  return (
    <div>
      <h2>Users</h2>
      {users.map(u=>(
        <div key={u._id}>
          {u.username} ({u.role}) {u.banned?"❌ BANNED":"✅ ACTIVE"}
          {!u.banned?<button onClick={()=>ban(u._id)}>Ban</button>:<button onClick={()=>unban(u._id)}>Unban</button>}
          <button onClick={()=>makeCreator(u._id)}>Make Creator</button>
        </div>
      ))}
    </div>
  );
}
