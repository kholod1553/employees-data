// Employee Data Objects
const employee1 = 
{
    name: "John Doe",
    age: 30,
    jobTitle: "Software Engineer",
    isManager: false,
    location: {
        country: "السعودية",
        city: "الرياض"
    },
    skills: ["JavaScript","HTML", "CSS", "Node.js"],
    salary: [6000, 6200, 5800],
};

const employee2 = {
    name: "فاطمة محمد",
    age: 35,
    jobTitle: "مدير مشروع",
    isManager: true,
    location: {
        country: "الإمارات",
        city: "دبي"
    },
    skills: ["إدارة فريق", "تخطيط", "تحليل بيانات", "تواصل"],
    salary: [8500, 8700, 8400]
};

const employee3 = {
    name: "خالد سعيد",
    age: 25,
    jobTitle: "مصمم جرافيك",
    isManager: false,
    location: {
        country: "مصر",
        city: "القاهرة"
    },
    skills: ["Photoshop", "Illustrator", "InDesign", "UX/UI"],
    salary: [4500, 4800, 4600]
};
// Array اسمها allEmployees تضم الموظفين الثلاثة.
const allEmployees = [employee1, employee2, employee3];

//الجمل اللي هتطبع ف الconsole 
//اسم الموظف ووظيفته.
console.log(employee1.name+" "+employee1.jobTitle);
console.log( employee2.name+" "+ employee2.jobTitle);
console.log(employee3.name+" "+employee3.jobTitle);
//هل هو Manager ولا لأ.
console.log(employee1.isManager);
console.log(employee2.isManager);
console.log(employee3.isManager);
//عدد المهارات اللي عند
console.log(employee1.skills.length);
console.log(employee2.skills.length);
console.log(employee3.skills.length);
//متوسط راتبه.
const averageSalary = (salaryArray) => {
    const total = salaryArray.reduce((acc, curr) => acc + curr, 0);
    return total / salaryArray.length;
};

console.log(averageSalary(employee1.salary));
console.log(averageSalary(employee2.salary));
console.log(averageSalary(employee3.salary));
//مجموع مرتب الموظف الاول  علي مدار شهرين
const totalSalaryEmployee1 = employee1.salary[0] + employee1.salary[1];
console.log(totalSalaryEmployee1);
// احسب مجموع الرواتب لكل الموظفين مع بعض (يعني total company salary).
const totalCompanySalary = allEmployees.reduce((total, employee) => {
    const employeeTotalSalary = employee.salary.reduce((acc, curr) => acc + curr, 0);
    return total + employeeTotalSalary;
}, 0);

console.log(totalCompanySalary);
//نوع بيانات كل خاصية باستخدام typeof.
console.log(typeof allEmployees);
//احسب متوسط الراتب لكل موظف باستخدام الـ Array الخاصة بيه.
allEmployees.forEach(employee => {
    const avgSalary = averageSalary(employee.salary);
    console.log(`متوسط الراتب للموظف ${employee.name} هو: ${avgSalary}`);
});


