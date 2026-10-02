import { Student } from './models.js';
import { fetchStudentData } from './database.js';
import { calculateCourseAverage, getTopStudent } from './analytics.js';

const studentIds = [101, 102, 103];
const studentInstances = [];
let loadedCount = 0;

console.log('--- Starting University Course Management System ---');

studentIds.forEach(id => {
  fetchStudentData(id, (err, data) => {
    if (err) {
      console.error(`Error fetching student ${id}:`, err.message);
    } else {
      const student = new Student(data.id, data.name, data.courses);
      studentInstances.push(student);
      console.log(`Loaded student: ${student.name} (ID: ${student.id})`);
    }

    loadedCount++;
    if (loadedCount === studentIds.length) {
      runAnalytics();
    }
  });
});

function runAnalytics() {
  console.log('\n--- Analytics Report ---');
  
  studentInstances.forEach(student => {
    console.log(`${student.name}'s Average Grade: ${student.getAverage().toFixed(2)}`);
  });

  const cs101Avg = calculateCourseAverage(studentInstances, 'CS101');
  console.log(`CS101 Course Average: ${cs101Avg.toFixed(2)}`);

  const topStudent = getTopStudent(studentInstances);
  if (topStudent) {
    console.log(`Top Performing Student: ${topStudent.name} with average ${topStudent.getAverage().toFixed(2)}`);
  }
}