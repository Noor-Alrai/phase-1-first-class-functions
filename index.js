function receivesAFunction(callBack){
    console.log(callBack());
}
receivesAFunction(function  () { return 0});

function returnsANamedFunction(){
    return (function named (){
        
    });
}

function returnsAnAnonymousFunction(){
    return (function () {});
}