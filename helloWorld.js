console.log("hello World")

for (var i = 1; i <= 25; i++){
    console.log(i*i);
    foo(i - 15)
}

function foo(num) {
    if (num <= 0) {
        console.log("Please enter a positive number");
    }
}

