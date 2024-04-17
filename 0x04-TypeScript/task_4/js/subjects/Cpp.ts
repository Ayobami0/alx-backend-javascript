namespace Students {
	export class Cpp extends Subject {
		getRequirements(this: Cpp): string {
			return 'Here is the list of requirements for Cpp';
		}
		getAvailableTeacher(this: Cpp): string {
			return this.teacher.experienceTeachingC > 0
				? `Avaliable Teacher: ${this.teacher.firstName}`
				: 'No available teacher';
		}
	}
}
