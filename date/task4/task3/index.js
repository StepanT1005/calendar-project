const studentsArray = [
    {name: 'Tom', birthDate: '01/15/2010'},
    {name: 'Ben', birthDate: '01/17/2008'},
    {name: 'Sam', birthDate: '03/15/2010'},
]


const studentsBirthDays = (students) => {
const month =
 ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const b = {'Jan': null,};
studentsArray.forEach((item) =>{
    b[(month[Number(item.birthDate.substr(0,2))])]

})
 console.log(b);
}
studentsBirthDays(studentsArray)

        // month[Number(birt.birthDate.substr(0,2))]
