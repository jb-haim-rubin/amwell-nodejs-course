const students = [
    //List of objects
    { firstName: 'Eran', course: 'Fullstack' },
    { firstName: 'Ido', course: 'Fullstack' },
    { firstName: 'Shir', course: 'Fullstack' },
    { firstName: 'Tai', course: 'Fullstack' },
    { firstName: 'Reem', course: 'Fullstack' },
    { firstName: 'Ariel', course: 'Fullstack' },
    { firstName: 'Sagi', course: 'Fullstack' },
    { firstName: 'Adam', course: 'Fullstack' },
]

for (let student of students) {
    //Going through any name
    console.log(student.firstName + ', ' + student.course)
}
