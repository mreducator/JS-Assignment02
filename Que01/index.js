let listOfUsers = ["Raman", "Mithun", "Rohit", "Sumit", "Krishna"];
console.log(listOfUsers)


function isUserPresent(user){
   
    if(user.includes("Raman")){
        console.log("Yes, Raman is a vaild user");
     }else if(user.includes("Mithun")){
      console.log("Yes, Mithun is a vaild user");
     }else if(user.includes("Rohit")){
        console.log("Yes, Rohit is a vaild user");
    }else if(user.includes("Sumit")){
        console.log("Yes, Sumit is a vaild user");
    }else if(user.includes("Krishna")){
        console.log("Yes, Krishna is a vaild user");
    }else{
        console.log("Invalid users")
    }
     
  
}
isUserPresent("Raman")
