namespace Students {
	export class React extends Subject {
		getRequirements(this: React): string {
			return 'Here is the list of requirements for React';
		}
		getAvailableTeacher(this: React): string {
			return this.teacher.experienceTeachingReact !== null
				|| this.teacher.experienceTeachingReact > 0
				? `Avaliable Teacher: ${this.teacher.firstName}`
				: 'No available teacher';
		}
	}
}
