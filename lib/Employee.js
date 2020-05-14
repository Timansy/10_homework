// TODO: Write code to define and export the Employee class
class Employee {
  constructor(...args) {
    this.role = "Employee";
    if (args.length >= 1) {
      this.name = args[0];
    }
    if (args.length >= 2) {
      this.id = args[1];
    }
    if (args.length >= 2) {
      this.email = args[2];
    }
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }


}



module.exports = Employee;
