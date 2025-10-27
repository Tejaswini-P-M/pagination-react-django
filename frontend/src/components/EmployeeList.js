import React from "react";

export default function EmployeeList({ employees, editEmployee, deleteEmployee }) {
  return (
    <table border="1" width="100%" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Email</th><th>Position</th><th>Salary</th><th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.position}</td>
            <td>{emp.salary}</td>
            <td>
              <button onClick={() => editEmployee(emp)}>Edit</button>
              <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
