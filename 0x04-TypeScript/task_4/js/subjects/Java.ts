namespace Students {
	export class Java extends Subject {
		getRequirements(this: Java): string {
			return 'Here is the list of requirements for Java';
		}
		getAvailableTeacher(this: Java): string {
			return this.teacher.experienceTeachingJava !== null
				|| this.teacher.experienceTeachingJava > 0
				? `Avaliable Teacher: ${this.teacher.firstName}`
				: 'No available teacher';
		}
	}
}
