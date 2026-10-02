export function fetchStudentData(studentId, callback) {
    const dummyDatabase = {
      101: { id: 101, name: 'Ali', courses: [{ courseId: 'CS101', grade: 85 }, { courseId: 'MATH101', grade: 90 }] },
      102: { id: 102, name: 'Zeynep', courses: [{ courseId: 'CS101', grade: 92 }, { courseId: 'PHYS101', grade: 88 }] },
      103: { id: 103, name: 'Ahmet', courses: [{ courseId: 'MATH101', grade: 78 }, { courseId: 'PHYS101', grade: 82 }] }
    };
  
    setTimeout(() => {
      const student = dummyDatabase[studentId];
      if (student) {
        callback(null, student);
      } else {
        callback(new Error(`Student with ID ${studentId} not found`), null);
      }
    }, 500);
  }
  