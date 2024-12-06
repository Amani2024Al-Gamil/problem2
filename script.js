 
 const helloWorldFunction = createHelloWorld();
 console.log(helloWorldFunction());  // Output: "Hello World"
 function createHelloWorld (){
     return(
         ()=>{
             return(
                 "Hello World"
             )
         }
     )
 
 }
     
 console.log(createHelloWorld);
