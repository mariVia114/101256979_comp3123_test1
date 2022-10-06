const mixedArray = ['PIZZA',10,true,25,false,'Wings']
lowerCaseWords = (arrayMix) => {
    let p = new Promise((resolve, reject) => {
        if(arrayMix.filter(elem => typeof elem ==='string')){
            const stringAr = arrayMix.filter(elem => typeof elem ==='string').map((element) => element.toLowerCase())
            // const res = stringAr.map(e => e.toLowercase())
            resolve(stringAr)
        }else{
            reject("No string found to lowercase")
        }
    })
    return p
};

lowerCaseWords(mixedArray).then((success) =>{
    console.log(success)
}).catch((error) => {
    console.log("Rejected:" + error)
})

