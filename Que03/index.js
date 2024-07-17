const students = [
    {
        name:"Mithun",
        marks:95
    },{
        name:"Prabir",
        marks:75,
    },{
        name:"Alka",
        marks:92
    },{
        name:"Shivam",
        marks:70
    }
]


function checkResult(name){
  students.filter((student)=>{
   if(student.name == name){
       if(student.marks>90){
        console.log(`Congrats ${student.name} u are Passed`)
       }  
     }
    if(student.name == name){
        if(student.marks< 90){
         console.log(`Sorry  ${student.name} u are not cleared exam.`)
        }  
    }
})

}
checkResult("Prabir")