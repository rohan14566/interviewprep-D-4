/* <h4>What is callback hell</h4> */
function callbackhell(){
    setTimeout(()=>{
        console.log("1")
          setTimeout(()=>{
           console.log("2")
            setTimeout(()=>{
              console.log("3")
              setTimeout(()=>{
                  console.log("4")
                 setTimeout(()=>{
                     console.log("5")
                   setTimeout(()=>{
                      console.log("6")
                      setTimeout(()=>{
                        console.log("7")
                  },7000);
                },6000);
              },5000);
            },4000);
          },3000);
       },2000);
    }, 1000);
}
callbackhell();

/* <h4>Give an example of async/await</h4> */
async function test() {
    console.log("2:Message");
    await  console.log("3:Message");
    console.log("4:Message");
  }
    console.log("1:Message");
    test();
    console.log("5:Message")

    // <h4>What are promises and why do we need them?</h4>
    const root = (resolve,reject) => {
        let a = 10
        if(a < 9){
            resolve("resolved")
        }
        else reject("rejected")
      }
      let x = new Promise(root)
      function func1(message){
        console.log(message)
      }
      function func2(message){
        console.log(message)
      }
      x.then(func1).catch(func2)

    //   <h4>What is promise chaining</h4>
    const PrintNumber=(time,value)=>{
        return new Promise ((resolved,rejected)=>{
            setTimeout(()=>{
                console.log(value)
                resolved();
            },time);
        })
    }
     PrintNumbers(5000,"5")
     .then(()=> PrintNumbers(4000,"4"))
     .then(()=> PrintNumbers(4000,"3"))
     .then(()=> PrintNumbers(4000,"2"))
     .then(()=> PrintNumbers(4000,"1"))

    //  <h4>What are pure functions?</h4>
    function add(a,b){
        console.log(a+b);
    }
    add(3,4);
    add(3,5);