const first = 2;
const second = "2";
if( first === second){
    console.log("condition is true") /** double equal hole true, triple equal hole false */
}
else{
    console.log("condition is false")
}

const first = 1;
const second = true;
if( first == second){
    console.log("condition is true") /** Only value will check */
}
else{
    console.log("condition is false")
}

const first = 0;
const second = false;
if( first === second){
    console.log("condition is true") /** both value and type will be check */
}
else{
    console.log("condition is false")
}