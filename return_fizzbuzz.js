// Fizzbuzz solution

for (var i = 1; i <= 20; i++){
    if(check_both(i)){
        console.log("fizzbuzz")
    }else if(check3(i)){
        console.log("fizz");
    }else if(check5(i)){
        console.log("buzz");
    }else{
        console.log(i);
    }
}

function check_both(value){
    return (value % 3 === 0 && value % 5 === 0);
}

function check3(value){
    return (value % 3 === 0);
}

function check5(value){
    return (value % 5 === 0);
}