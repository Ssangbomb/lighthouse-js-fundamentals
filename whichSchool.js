const age = 14;

function whichSchoole() {
  if (age < 13){
    console.log("I am going to Elementary School");
  } else if (age >13 && age < 18) {
    console.log("I am going to Secondary School");
  } else {
    console.log("I am going to Lighthouse Labs School");
  }
  return;
}

console.log(whichSchoole(15));

