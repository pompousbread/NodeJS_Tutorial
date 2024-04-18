const { isUtf8 } = require('buffer');
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }

        const second = result;
        writeFile('./content/result-async.txt', 
            `Here is my result : ${first}, ${second}\n`,
            (err, result) => {
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })

})
console.log('starting next task')