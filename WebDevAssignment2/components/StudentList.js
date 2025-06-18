export default function StudentList({ students }) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.firstName} {student.lastName}, DOB: {student.dob}, Grade: {student.grade}
        </li>
      ))}
    </ul>
  );
}
 
