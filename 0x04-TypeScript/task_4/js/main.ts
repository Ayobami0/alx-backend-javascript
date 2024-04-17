/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

export const cTeacher: Students.Teacher = { firstName: 'Ayobami', lastName: 'Oludemi', experienceTeachingC: 10 }

export const cpp = new Students.Cpp()
export const java = new Students.Java()
export const react = new Students.React()

cpp.teacher = cTeacher;
java.teacher = cTeacher;
react.teacher = cTeacher;

cpp.getRequirements()
cpp.getAvailableTeacher()

java.getRequirements()
java.getAvailableTeacher()

react.getRequirements()
react.getAvailableTeacher()
