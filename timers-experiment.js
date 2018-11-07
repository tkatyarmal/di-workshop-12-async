function sayHello() {
    console.log('Hello!')
}

function sayGoodbye() {
    console.log('Goodbye!')
    setTimeout(sayGoodbye, 200)
}
sayGoodbye()

