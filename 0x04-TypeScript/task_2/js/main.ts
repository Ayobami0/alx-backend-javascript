type Employee = Teacher | Director;
type Subjects = 'Math' | 'History';

interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}
	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}
	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

function createEmployee(salary: string | number): Employee {
	return typeof salary !== 'string' && salary < 500 ? new Teacher() : new Director();
}

function isDirector(employee: Employee): employee is Director {
	return employee instanceof Director;
}

function executeWork(employee: Employee) {
	if (employee instanceof Director) {
		employee.workDirectorTasks();
	} else {
		employee.workTeacherTasks();
	}
}

function teachClass(todayClass: Subjects): string {
	return `Teaching ${todayClass}`
}
