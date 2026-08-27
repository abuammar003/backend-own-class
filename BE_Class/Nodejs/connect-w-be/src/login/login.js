import React, {useEffect, useState } from "react";
import "./login.css";
import axios from "axios";

const LogIn = () => { 
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confPass, setConfPass] = useState("");
        const [message, setMessage] = useState("");
        const [allData, setAllData] = useState([]);
        const [showMess, setShowMess] = useState(false);

        useEffect(() => {
                async function fetchData() {
                        const response = await axios.get("http://localhost:8081/");
                        setAllData(response.data);
                }
                fetchData();
        });

        async function submitForm() {
                try{
                        const response = await axios.post("http://localhost:8081/login", {name, email, password, confPass});
                        setAllData((prev) => [...prev, response.data.newUser]);
                        setName("");
                        setEmail("");
                        setPassword("");
                        setConfPass("");
                        setMessage("LogIn SuccessFull!");
                        setShowMess(false);
                }catch (error) {
                        if(error.response) {
                                setMessage(error.response.data.error);
                                setShowMess(true);
                        } else {
                                console.log("Somthing Went Wrong!");
                        }
                }
        
        }
        

   return(
        
        <div className="login_main">
                <h1>Login Form</h1>
                <div className="login_box">

                {showMess && (
                        
                        <div className="popupBox">   
                                <p className="popup_Text">{message}</p>
                                <button className="popup_Btn" onClick={() => setShowMess(false)}>Close</button>
                        </div>
                       
                )}
                        <input type="text" placeholder="User Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" placeholder="Password" value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        <input type="text" placeholder="Confirm Password" value={confPass}
                                onChange={(e) => setConfPass(e.target.value)}/>
                        <button onClick={submitForm}>LogIn</button>

                </div>
                <table>
                        <tr>
                                <th>Sr.</th>
                                <th>User Name</th>
                                <th>E-mail</th>
                        </tr>
                        {allData.map((item, index) => (
                                <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                </tr>
                        )
                        )}
                </table>

        </div>
   );     

}
export default LogIn; 