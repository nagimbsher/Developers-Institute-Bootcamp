const func = (a, b) => {
    let result;
    try {
        result = a / b
        if (b == 0) {
            throw new Error('Cannot divide by Zero');
        }
    } catch (err) {
        if (err instanceof ReferenceError) {
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        } else {
            console.log("Other Error")
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        }
    } finally {
        console.log("Function done")
    }
}

func(3, 0)
