import React, { useState } from "react";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    function signUp()
    {
        let item =  {name,email,password}
        console.warn(item);
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>User Sign Up</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name" />
            <br />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
            <br />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
            <br />
            <button onClick={signUp} className="btn btn-info">Sign Up</button>
        </div>
    )
}

export default Register;