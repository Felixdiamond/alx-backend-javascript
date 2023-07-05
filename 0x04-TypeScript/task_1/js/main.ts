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
