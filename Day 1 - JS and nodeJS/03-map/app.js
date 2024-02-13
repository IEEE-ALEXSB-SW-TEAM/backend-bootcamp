// MAP Method
const formResponses = [
  {
    name: 'bob',
    gradYear: 2024,
    dep: 'CSE',
  },
  {
    name: 'anna',
    gradYear: 2025,
    dep: 'CCE',
  },
  {
    name: 'susy',
    gradYear: 2028,
    dep: 'ECE',
  },
  {
    name: 'john',
    gradYear: 2026,
    dep: 'CSE',
  },
];

const getGradYears = (student) => {
  return student.gradYear
}

const gradYears = formResponses.map(getGradYears);
console.log(gradYears);

const students = formResponses.map((item) => {
  return {
    firsName: item.name.toUpperCase(),
    gradYear: item.gradYear-1,
  };
});
console.log(students);

const names = formResponses.map((student) => `<h2>${student.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join('')
