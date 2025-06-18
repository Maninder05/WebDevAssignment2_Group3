"use client";
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';
import studentsData from '../data/students.json';
 
export default function Home() {
  const [students, setStudents] = useState([]);
 
  useEffect(() => {
    setStudents(studentsData);
  }, []);

  const AddStudent = (student) => {
    setStudents(prevStudents => [...prevStudents, student]);
  };
 
  return (
    <div>
      <Navbar />
      <div style={{backgroundColor: 'white', color:'black', height:'560px'}}>
      <main style={styles.container}>
        <h2 style={styles.title}>Student List  Display</h2>
        <StudentList students={students} />
        <h2 style={styles.title}>Add New Student</h2>
        <StudentForm onAdd={AddStudent} />
      </main>
      </div>
      <Footer />
    </div>
  );
}
 
const styles = {
  container: {
    padding: '50px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    margin: "5px 0px 2px 0px",
    fontSize: '24px',
    fontWeight: 'bold',
  },
};
 
