
class Employee {

    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.isActive = true;
    }

    giveRaise(amount) {

        if (!this.isActive) {
            return "Employee is inactive.";
        }

        if (amount <= 0) {
            return "Raise amount must be greater than zero.";
        }

        this.salary = this.salary + amount;

        return "Raise successfully given.New salary: " + this.salary;
    }

    deactivate() {

        if (!this.isActive) {
            return "Employee is already inactive.";
        }

        this.isActive = false;

        return "Employee deactivated successfully.";
    }

    displayInfo() {

        return "ID: " + this.id +
            "\nName: " + this.name +
            "\nDepartment: " + this.department +
            "\nSalary: $" + this.salary +
            "\nStatus: " +
            (this.isActive ? "Active" : "Inactive");
    }
}

class Company {

    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {

        for (let i = 0; i < this.employees.length; i++) {

            if (this.employees[i].id === employee.id) {
                return "Employee ID already exists.";
            }
        }

        this.employees.push(employee);

        return "Employee added successfully.";
    }

    removeEmployee(id) {

        for (let i = 0; i < this.employees.length; i++) {

            if (this.employees[i].id === id) {

                this.employees.splice(i, 1);

                return "Employee removed successfully.";
            }
        }

        return "Employee does not exist.";
    }

    findEmployee(id) {

        for (let i = 0; i < this.employees.length; i++) {

            if (this.employees[i].id === id) {
                return this.employees[i];
            }
        }

        return null;
    }

    getDepartmentEmployees(department) {

        let result = [];

        for (let i = 0; i < this.employees.length; i++) {

            if (
                this.employees[i].department.toLowerCase() ===
                department.toLowerCase()
            ) {

                result.push(this.employees[i]);
            }
        }

        return result;
    }

    calculateTotalSalary() {

        let total = 0;

        for (let i = 0; i < this.employees.length; i++) {

            total += this.employees[i].salary;
        }

        return total;
    }

    showEmployees() {

        if (this.employees.length === 0) {
            return "No employees found.";
        }

        let result = "";

        for (let i = 0; i < this.employees.length; i++) {

            let employee = this.employees[i];

            result +=
                employee.id + " - " +
                employee.name + " - $" +
                employee.salary + " - " +
                (employee.isActive ? "Active" : "Inactive") +
                "\n";
        }

        return result;
    }
}



let company = new Company();



let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {

    menu.classList.toggle("hidden");

});



let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let findBtn = document.getElementById("findBtn");
let raiseBtn = document.getElementById("raiseBtn");
let deactivateBtn = document.getElementById("deactivateBtn");
let departmentBtn = document.getElementById("departmentBtn");
let showAllBtn = document.getElementById("showAllBtn");
let salaryBtn = document.getElementById("salaryBtn");
let exitBtn = document.getElementById("exitBtn");


addBtn.addEventListener("click", function () {

    let id = Number(prompt("Enter employee ID:"));
    let name = prompt("Enter name:");
    let department = prompt("Enter department:");
    let salary = Number(prompt("Enter salary:"));

    if (!id || !name || !department || !salary) {

        alert("Please enter valid information.");
        return;
    }

    let employee =
        new Employee(id, name, department, salary);

    alert(company.addEmployee(employee));

});


removeBtn.addEventListener("click", function () {

    let id = Number(prompt("Enter employee ID:"));

    alert(company.removeEmployee(id));

});



findBtn.addEventListener("click", function () {

    let id = Number(prompt("Enter employee ID:"));

    let employee = company.findEmployee(id);

    if (employee === null) {

        alert("Employee does not exist.");

    } else {

        alert(employee.displayInfo());
    }

});



raiseBtn.addEventListener("click", function () {

    let id = Number(prompt("Enter employee ID:"));
    let amount = Number(prompt("Enter raise amount:"));

    let employee = company.findEmployee(id);

    if (employee === null) {

        alert("Employee does not exist.");

    } else {

        alert(employee.giveRaise(amount));
    }

});


deactivateBtn.addEventListener("click", function () {

    let id = Number(prompt("Enter employee ID:"));

    let employee = company.findEmployee(id);

    if (employee === null) {

        alert("Employee does not exist.");

    } else {

        alert(employee.deactivate());
    }

});


departmentBtn.addEventListener("click", function () {

    let department = prompt("Enter department:");

    let employees =
        company.getDepartmentEmployees(department);

    if (employees.length === 0) {

        alert("No employees found.");

        return;
    }

    let result =
        "Employees in " + department + ":\n\n";

    for (let i = 0; i < employees.length; i++) {

        result +=
            employees[i].id +
            " - " +
            employees[i].name +
            " - $" +
            employees[i].salary +
            "\n";
    }

    alert(result);

});



showAllBtn.addEventListener("click", function () {

    alert(company.showEmployees());

});



salaryBtn.addEventListener("click", function () {

    let total = company.calculateTotalSalary();

    alert("Total Salary: $" + total);

});


exitBtn.addEventListener("click", function () {

    menu.classList.add("hidden");

    alert("Employee Management System closed.");

});