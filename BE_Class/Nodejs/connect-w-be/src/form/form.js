import React, { useEffect, useState } from "react";
import "./form.css";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [allData, setAllData] = useState([]);
  const [find, setFind] = useState();

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await axios.get("http://localhost:8080/");
        setAllData(response.data);
      };
      fetchUser();
    } catch (error) {
      console.log("Error In Fetching Data!", error);
    }

  }, []);

  
  async function handleClick() {

    if (!name || !email || !number) {
      alert("All Fields are Required!");
      return;
    }

    try{
      const response = await axios.post("http://localhost:8080/addUser", {name, email, number});
      setAllData(prev => [...prev, response.data.newUser]);
      console.log(response);
      alert("New User Is Created SuccessFully!")
      setName("");
      setEmail("");
      setNumber("");
    } catch (error) {
      console.log("Error in Posting Data", error);
    }

  }

  function handleSearch() {
    if (!find) {
      setAllData(allData);
      return;
    }

    const findUser = allData.filter((user) =>
      user.name.toLowerCase().includes(find.toLowerCase())
    );
    setAllData(findUser);
  }

  return (
    <div className="form-main">
      <div className="form">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your Number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
      <div className="srchBar">
        <h3>Search Your Name:</h3>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={find}
          onChange={(e) => setFind(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="usr-list">
        <table>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Number</th>
          </tr>
          {allData.map((item, index) => (
            <tr key={index}>
              <td className="snum">{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default Form;
