const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() { // function interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
        const thirdNumber = 3;
      console.log(inner,myNumber, myGlobal);

      function result (){
        console.log(thirdNumber,inner, myNumber, myGlobal)
      }
      return result;
    }

    return child;
  }

  return parent;
}

myFunction() ()() ();