const _ = require("lodash");

var users = [
{
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: "male",
},
{
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female",
},
{
    id: 3,
    firstName: "Jim",
    lastName: "Carrey",
    age: 54,
    gender: "male",
},
{
    id: 4,
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female",
},
];

function getUsers() {
    var output = "";
    for (let i = 0; i < users.length; i++) {
        output += users[i].id + " - " + users[i].firstName + " " + users[i].lastName + " is " + users[i].age + ", " + users[i].gender;
    }

    // console.log(getUsers(output));
    return output;
}

function findUserById(id) {
    try {
        let user = _.find( users, { id: id } );
        let iFindUser = user.id + " - " + user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender;

        return iFindUser;

    } catch (error) {

        // console.log("Cannot read property 'id'");
        return "Cannot read property 'id'";

    }
}

// console.log(findUser(1));

getUsers();
findUserById(1);

module.exports = findUserById;