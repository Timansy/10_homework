// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(...args) {
    super(...args);
    this.role = "Intern";
    this.school = args[3];
  }

  getSchool() {
    return this.school;
  }
}


module.exports = Intern;
