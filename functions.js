console.log(hoisted_add(1, 2));
console.log(var_declared_add(1, 2));



function hoisted_add(a, b) {
    return a + b;
}


const var_declared_add = function(a, b) {
    return a + b;
}

const arrow_add = (a,b) => {
    return a + b;
}




