let user1 = {
    firstName: "Alexander",
    lastName: "Mysnyk"
}

let user2 = {
    firstName: "Dima",
    lastName: "Grishenko"
}

function myBind(bindFunction, newThis){
    return (arg) => bindFunction.call(newThis, arg)
}

function sayHello(event){
    console.log(`${this.firstName} ${this.lastName} ${event.target.textContent}`);
}

// user1.say = myBind(sayHello, user1);
// user2.say = myBind(sayHello, user2);

// user1.say("Hello JS");
// user2.say("Hello C#");

let userFirstSay = myBind(sayHello, user1);
// userFirstSay('');

let button = document.querySelector('#but');
button.addEventListener('click', userFirstSay); 


