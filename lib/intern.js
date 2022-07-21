const Employee = require("../lib/Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.titile = "Intern";
    }
    getSchool() {
        return this.school;
    }
    // getRole() {
    //     return this.title;
    // }
}
module.exports = Intern;