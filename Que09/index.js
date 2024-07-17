function uniqueCharacterCheck(userName){
    const charSet = new Set();

    for (let char of userName){
        if(charSet.has(char)){
            console.log("Input string duplicates")
            return false;

        }
        charSet.add(char)
    }
    console.log("Input contain unique characters")
}
uniqueCharacterCheck("anurag")