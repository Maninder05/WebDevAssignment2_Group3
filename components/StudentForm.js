"use client";
import { useState } from 'react';

export default function StudentForm({ onAdd }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    grade: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {   //method to validate each of the vals entered by the user
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!form.dob || isNaN(Date.parse(form.dob))) {
      newErrors.dob = 'Valid date of birth is required'; //birth date format must be in accordance with type="date"
    }

    if (!form.grade || isNaN(form.grade) || form.grade < 0 || form.grade > 4) {
      newErrors.grade = 'Grade must be a number between 0.0 and 4.0';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAdd({ ...form, id: Date.now() });
      setForm({ firstName: '', lastName: '', dob: '', grade: '' }); //setForm() will set the newly added vals into the list
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <div>
        First Name:&nbsp;&nbsp;&nbsp;<input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="placeholder-black mb-2 border border-gray-400 px-3 py-2 rounded w-200"
        />
        {/* error msg will be highlighted only if the validate method fails approval */}
        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>} 
      </div>

      <div>
        Last Name:&nbsp;&nbsp;&nbsp;<input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="placeholder-black mb-2 border border-gray-400 px-3 py-2 rounded w-200"
        />
        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
      </div>

      <div>
          Date of Birth: <input
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
          className="placeholder-black mb-2 border border-gray-400 px-3 py-2 rounded w-200"
        />
        {errors.dob && <span style={{ color: 'red' }}>{errors.dob}</span>}
      </div>

      <div>
        Enter Grade: <input
          name="grade"
          placeholder="Grade"
          value={form.grade}
          onChange={handleChange}
          className="placeholder-black mb-2 border border-gray-400 px-3 py-2 rounded w-200"
        />
        {errors.grade && <span style={{ color: 'red' }}>{errors.grade}</span>}
      </div>
      <center>
        <button type="submit" style={{ marginTop: '1rem', padding: '10px 20px',backgroundColor: '#155e75', color: 'black',border: 'none',borderRadius: '6px',cursor: 'pointer',fontWeight: '600',fontSize: '14px',  }}>Add Student</button>
      </center>
    </form>
  );
}
