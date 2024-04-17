interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[property: string]: any;
};

interface Directors extends Teacher {
	numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]}. ${lastName}`
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

class StudentClass {
	firstName: string;
	lastName: string;
	workOnHomework(): string {
		return 'Currently working';
	}
	displayName(this: StudentClass): string {
		return this.firstName;
	}
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

