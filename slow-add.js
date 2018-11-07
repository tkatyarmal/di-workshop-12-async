function add(a, b) {
    return a + b
}

function slowAdd(a, b, callback) {
    var result = a + b
    setTimeout(function () {
        callback(result)
    }, 2000)
}

slowAdd(13, 4, function (theanswer) {
    console.log(theanswer)
})