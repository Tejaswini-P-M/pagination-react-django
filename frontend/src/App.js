import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);       
  const [currentPage, setCurrentPage] = useState(1); 
  const recordsPerPage = 10;                   


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const bigData = Array(10).fill(response.data).flat();
        setUsers(bigData);
      })
     
  }, []);

  
  const indexOfLastRecord = currentPage * recordsPerPage;  
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; 
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord); 
  const totalPages = Math.ceil(users.length / recordsPerPage); 

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "40px" }}>
     
      <h2>TABLE DATA FETCHING TASK</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((user, index) => (
            <tr key={index}>
              <td>{indexOfFirstRecord + index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          style={{
            padding: "8px 12px",
            marginRight: "10px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
           Previous
        </button>

        <span style={{ margin: "0 15px", fontWeight: "bold" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          style={{
            padding: "8px 12px",
            marginLeft: "10px",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          Next 
        </button>
      </div>
    </div>
  );
}

export default App;
