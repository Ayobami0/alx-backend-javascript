interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = { firstName: 'Ayobami', lastName: 'Oludemi', age: 24, location: 'Akure' }
const student2: Student = { firstName: 'Emmanuel', lastName: 'Ilerioluwa', age: 22, location: 'Lagos' }

const studentsList: Array<Student> = [student1, student2]

studentsList.forEach((student) => {
	const trow = document.createElement('tr');
	const fNameCol = document.createElement('td')
	const lNameCol = document.createElement('td')
	const ageCol = document.createElement('td')
	const locCol = document.createElement('td')

	fNameCol.innerText = student.firstName
	lNameCol.innerText = student.lastName
	ageCol.innerText = student.age.toString()
	locCol.innerText = student.location

	trow.appendChild(fNameCol)
	trow.appendChild(lNameCol)
	trow.appendChild(ageCol)
	trow.appendChild(locCol)

	document.getElementById('students').append(trow)
})
