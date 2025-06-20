import React from 'react'

const StudentsList = async () => {
    const students = await fetch("http://localhost:3001/users/students");

  return (
    <div>{JSON.stringify(students)}</div>
  )
}

export default StudentsList