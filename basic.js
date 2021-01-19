function inchToFeet(inch){
    var feet = inch/12;
    return feet;
    
}

// var result = inchToFeet(120);
// // console.log(result);

var inputArray =[120, 130, 150, 200];

for(var i=0; i<inputArray.length; i++){
        var takeInput = inputArray[i];
        var result  = inchToFeet(takeInput);
        console.log(result);
}