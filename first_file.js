console.log("Hello World");

if (true) {
    var leaked_Var = "leaked variable";

    let block_scoped_var = "block scoped variable";
    console.log(block_scoped_var);
    block_scoped_var = "block scoped variable has changed";
    console.log("block scoped variable has changed and is now = ", block_scoped_var);

}

console.log(leaked_Var);

if (true){
    const constant_var = "constant variable";
    console.log(constant_var);
    constant_var = "constant variable has changed";
    console.log("constant variable has changed and is now = ", constant_var);
}


