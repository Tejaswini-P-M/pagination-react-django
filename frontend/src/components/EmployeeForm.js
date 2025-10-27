import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EmployeeForm({ selected, fetchEmployees, setSelected }) {
  const [form, setForm] = useState({ name: "", email: "", position: "", salary: "" });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selected) {
      await axios.put(`http://127.0.0.1:8000/api/employees/${selected.id}/`, form);
    } else {
      await axios.post("http://127.0.0.1:8000/api/employees/", form);
    }
    setForm({ name: "", email: "", position: "", salary: "" });
    setSelected(null);
    fetchEmployees();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="position" value={form.position} onChange={handleChange} placeholder="Position" required />
      <input name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" required />
      <button type="submit">{selected ? "Update" : "Add"} Employee</button>
    </form>
  );
}
