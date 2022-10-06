resolvedPromise = () => {
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>{
        let success = {'message': 'delayed success!'}
        resolve(success)
    }, 500)
    })
    
}

resolvedPromise().then((success) =>{
    console.log(success)
}).catch((error) => {
    console.log( error)
})


rejectedPromise = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            try{
                throw new Error(`error: delayed exception!`)
            }catch(e){
                reject(e)
            }
        }, 500)
    })
    
}
rejectedPromise().then((resolve) =>{
    console.log(resolve)
}).catch((error) => {
    console.log(error)
})

