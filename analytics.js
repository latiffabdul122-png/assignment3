export function calculateCourseAverage(students, courseId) {
    const grades = students.flatMap(student => 
      student.courses
        .filter(course => course.courseId === courseId)
        .map(course => course.grade)
    );
  
    if (grades.length === 0) return 0;
    
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
  }
  
  export function getTopStudent(students) {
    if (students.length === 0) return null;
  
    return students.reduce((top, current) => {
      return current.getAverage() > top.getAverage() ? current : top;
    });
  }