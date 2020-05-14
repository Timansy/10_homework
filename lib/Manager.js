// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(...args) {
    super(...args);
    this.role = "Manager";
    this.officeNumber = args[3];
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}


module.exports = Manager;
