function calculateTotalCartValue(...prices){
    let totalAmmount =  prices.reduce((prev,crr)=>{
       //console.log(`prev:${prev} and crruent:${crr}`)
       return prev+crr
     },0)
     console.log(`total cart value is: Rs.${totalAmmount}`)
      test = totalAmmount;
   }
   calculateTotalCartValue(30,20,125)
   
   console.log(test)