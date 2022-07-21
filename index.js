// require packages needed (inquirer, path, fs)
// / INDEX.JS //
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");

// require all of your classes/constructors, (Manager, Engineer, Intern)
const employee = require("./lib/employee");
const { manager } = require("./lib/manager");
const { engineer } = require("./lib/engineer");
const { intern } = require("./lib/intern");

const generateHTML = require("./src/generateHTML");
// set up an empty array for the Team Members
let teamArray = [];
let teamStr = "";
// set up functions for iniitalizing the app, creating a manager, determining which type of employee the user wants to add, adding each member type, and building the team

// function for INITIALIZING ////////////////
    // first thing you'll probably want to do is add a function for creating a manager, since that's the first thing you have to do
    // function for CREATING A MANAGER ///////////////
    // use inquirer
    // and prompt to ask questions

    function createManager() {
        const questions = [
        inquirer.prompt([
            { type: "input", name: "name", message: "What is your employee's name?" },
            { type: "input", name: "id", message: "what is your employee's id?" },
            { type: "input", name: "email", message: "what is your employee's email?" },
        ]),
     // once you finish your questions, you'll probably want to send those answers to a new instance of Manager (one of the classes you'll create and require above
     ].then((answers) => {
    const manager = new manager(answers.name, answers.id, answers.email, answers.getName(), answers.getId(), answers.getEmail(), answers.getRole());
    team.push(manager);
    console.log(team);
    init();
    });
     }
    // then you will need to push this new manager to the empty team array you set up above
    // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
    createTeam();


// function for DETERMINING TYPE OF EMPLOYEE //////////////////
// use inquirer
// and prompt to ask questions - such as what type of employee they would like to add

function createTeam() {
    inquirer.prompt([
        { type: "list", name: "employee", message: "What type of employee would you like to add?", choices: ["Engineer", "Intern", "Employee", "Manager", "None"] },
        // then, based on their choice, run the function associated with adding that employee type  // conditional that runs function for employee type that the user selected
        // if they choose Intern, run addIntern function
        // if they no longer want to add members, you'll need to run the function that actually builds the team (creates the file, etc)
    ]).then((answers) => {
        if (answers.employee === "engineer") {
            createEngineer();
        } else if (answers.employee === "intern") {
            createIntern();
        // } else if (answers.employee === "Employee") {
        //     createEmployee();
        } else if (answers.employee === "manager") {
            createManager();
        } else if (answers.employee === "None") {
            console.log("Your team is complete!");
            console.log(team);
            writeToFile();  
        }
        });
    }
    // function for ADDING A MEMBER /////////////////
    // a seperate function for each member type  // use inquirer
    // and prompt to ask questions
    // take the answers, create a new instance of Intern, and add those answers to that new Intern
    // push this new member into you team array
    function addIntern() {
        inquirer.prompt([
            { type: "input", name: "school", message: "What is your intern's School Name?" }
        ]).then((answers) => {
            const intern = new intern(answers.name, answers.id, answers.email, answers.getName(), answers.getId(), answers.getEmail(), answers.getSchool(), answers.getRole());
            team.push(intern);
            console.log(team);
            init();
        });
        }
        // function addEmployee() {
        //     inquirer.prompt([
        //         { type: "input", name: "name", message: "What is your employee's name?" }
        //     ]).then((answers) => {
        //         const employee = new Employee(answers.name, answers.id, answers.email, anwsers.getName(), answers.getID(), answers.getEmail(), answers.getRole());
        //         team.push(employee);
        //         console.log(team);
        //         init();
        //     });
        //     }
            function addEngineer() {
                inquirer.prompt([
                    { type: "input", name: "github", message: "What is your engineer's Github Username?" }
                ]).then((answers) => {
                        const engineer = new engineer(answers.name, anwsers.id, answers.email, answers.getName(), answers.getId(), answers.getEmail(), answers.getRole(), answers.getGithub(), answers.getGithub());
                        team.push(engineer);
                        console.log(team);
                        init();
                    });
                }
            function addManager() {
                inquirer.prompt([
                    { type: "input", name: "officeNumber", message: "What is your manager's Office Number?" }
                ]).then((answers) => {
                        const manager = new manager(answers.name, anwsers.id, answers.email, anwsers.getName(), anwsers.getId(), anwsers.getEmail(), answers.getRole(), anwsers.getOfficeNumber());                        team.push(manager);
                        console.log(team);
                         init();
                        });
                    }
        
                    
// function for BUIDING THE TEAM //////////////////
    // creating the file, adding your team to it
    // probably call a function, passing in your team members array - send it to another js file 
    function buildTeam( filename,team) {
        fs.writeFileSync(path.join(process.cwd(), filename), generateHTML(team), "utf8");
    }
    function init() {
        inquirer
        .prompt([
            { type: "input", name: "name", message: "what is the name of your team?"},
         ]) .then((answers) => {
            writeToFile("./src/index.html", generateHTML(team));
            console.log("Your team has been built!");
        });
    }
   

