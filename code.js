// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//sayHello function
function sayHello(input) {
    if (input === "Jane") {
        return "Hello, Jane!"
    } else if (input === "Alex") {
        return "Hello, Alex!"
    } else if (input === "Pat") {
        return "Hello, Pat!"
    }
    // #6 Implement the refactor
    if (input === undefined) {
        return "Hello!"
    } else if (input === true || input === false){
        return "Hello, World!"
    } else {
        return( "Hello, " + input + "!");
    }
        }
        //Define isFive as a function
function isFive(input) {
    if ( input === 5 || input === "5"){
        return true }
    else {
        return false
    }
}


