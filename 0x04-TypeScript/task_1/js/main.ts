interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};

interface Directors extends Teacher {
    numberOfReports: number;
}


const printTeacher = (firstName: string, lastName: string) => (
    `${firstName.split("")[0]}. ${lastName}`
)

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacherVar: printTeacherFunction = printTeacher;

interface IStudent {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface IStudentConstructor {
  new (firstName: string, lastName: string): IStudent;
}

const StudentClass: IStudentConstructor = class Student implements IStudent {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

