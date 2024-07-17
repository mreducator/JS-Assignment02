let num = [1,2,3,4,5,6,7,8,9,0];
function generateOTP(){
    let otp = '';
    for(let i = 0 ; i< num.length-6; i++){
        let randomNum = Math.floor(Math.random() * num.length)
        otp += num[randomNum];
    }
    console.log(`Your generated OTP is: ${otp}`)
}
generateOTP()