
//exo 1

function myMap(arr, func){
    let newArray = [];

    for(let i = 0; i < arr.length; i++){
        var result = func(i);
        newArray.push(result);
    }

    return newArray;
}

function func(element){
    //Does something with the element recieved

    //Returns the element
}


//exo 2 :

function myFilter(array, func2){
    let filteredArr = [];

    for(let i = 0; i < array.length; i++){
        if(func2(i)){
            filteredArr.push(i);
        };
    }
    return filteredArr;
}

function func2(element){
    //Checks something about the element recieved

    //Returns true if the element corresponds to the verification (ex : number is even)
    //Else return false
}


//exo 3 :

function myReduce(array, func3, initialValue){
    initialValue = 0;
}