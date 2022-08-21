function addTen(input){


    const prices = [98.99,15.2,20,1026]


    let neArray = []
    for(i = 0; i < prices.length; i++){
        let result = prices[i] + input

neArray.push(result)


    }

    console.log(neArray)
}


addTen(10)