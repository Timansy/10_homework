const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(...args) {
    // super(args[0],args[1],args[2]);
    super(...args);
    this.role = "Engineer";
    this.github = args[3];
    // if (args.length >=4){
    //     this.gitHubAcct = args[3];
    // }
  }

  getGithub() {
    return this.github;
  }
}


module.exports = Engineer;
