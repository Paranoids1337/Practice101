/*let firstName = "Ola"
let lastName = "Bobo"
console.log(firstName, lastName);

let age = 30
console.log(age);


const userdetails = {
    "ola": {
        firstName: 'Abagun',
        lastName: 'Omotoyosi',
        Email: 'Abagun@gmail.com',

        
    }
}

console.log(userdetails);


console.table({ username: 'Ola', password: 'Yooo', age: '30' })

const arr = [1, 2, 3, 4,] 
    arr.push(5)
console.log(arr);*/

const userdetails = {
    'Daddo123': {
        firstName: 'Ola',
        lastName: 'Bobo',
        email: 'Abagun@gmail.com',
        accActivated: 'True',
        password: "r00t@Bobo123"
    },
    'Bbaygirl': {
        firstName: 'prncess',
        lastName: 'Agre',
        email: 'Agre@gmail.com',
        accActivated: 'True',
        password: 'r00t@Bobo123'
    },
    'Daddo23': {
        firstName: 'Ola',
        lastName: 'Bobo',
        email: 'Abagun@gmail.com',
        accActivated: 'True',
        password: 'r00t@Bobo123',
    },
    'Daddo1234': {
        firstName: 'Ola',
        lastName: 'Bobo',
        email: 'Abagun@gmail.com',
        accActivated: 'True',
        password: "r00t@Bobo123"
    },
}



function displayuserdetails() {
    let username = prompt("Enter your username")
    while (validateusername(username) == false) {
        username = prompt("Invalid.Enter a valid username")
    }
    if (username == null) {
        return alert("Register boy!")
    }
    
    let password = prompt("Enter your password")
    while (validatepassword(password) == false) {
        password = prompt("Invalid.Enter a valid  password")
    }

    // confirm password
    let passwordconfirm = prompt("Confirm your password")
    if (passwordconfirm !== password) {
        passwordconfirm = prompt("Incorrect,Enter your password")
    }


    // check if user database contain the username
    const user = userdetails[username]


    if (user == undefined) {
        return alert("User not found!")
    }

    console.log(user);
    alert(`
        firstname: Bobo
        `)

    // console.log(username , password , passwordconfirm);
}


displayuserdetails()
alert("Everything is valid now")
alert("Thanks for the love and support.")


function validateusername(username) {
    if (username == null) {
        return true
    }
    if (username.length > 10) {
        return false
    } else {
        return true
    }
}
 

function validatepassword(password) {
    if (password == null) {
        return true
    }
    if (password.length < 6) {
        return false
    } else {
        return true
    }
}



// console.log(userdetails);
/*
console.table({ username: 'Daddo123', password: 'r00t@Bobo123', email: 'Abagun@gmail.com', accActivated: 'True' });
console.table({ username: 'Daddo13', password: 'r00t@Bobo123', email: 'Abagun@gmail.com', accActivated: 'True' });
console.table({ username: 'Daddo23', password: 'r00t@Bobo123', email: 'Abagun@gmail.com', accActivated: 'True' });
console.table({ username: 'Daddo1234', password: 'r00t@Bobo123', email: 'Abagun@gmail.com', accActivated: 'True' });
*/