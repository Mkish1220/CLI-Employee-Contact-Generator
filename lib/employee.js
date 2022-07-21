
class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee"
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
        return this.title;
    }
}
    // constructor() {
  
    // }
  
    // each method for getting the information you'll be taking in for this employee
  
    // getName() {
  
    // }
  
  
  module.exports = employee;
  
  // reference activities 21 - 26