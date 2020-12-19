//Dec-18-2020

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.


//For Of loop 
var maximumWealth = function(accounts) {

    let max = 0;
    
    for(customer of accounts){
        let bankAccount = 0
        for(bank of customer){
            bankAccount += bank
        }
        //console.log("bankAccount", bankAccount)
        if(max < bankAccount) max = bankAccount
    }
    return max
};


/// MAP 
var maximumWealth = function(accounts) {

let max = 0
   
const customer = accounts.map( x =>  {
     
    bankAccount = 0
    
    x.map(y => bankAccount+=y )  
    
    if(max < bankAccount) max = bankAccount
    
    }
    )

    return max
}

//Reducer 1
var maximumWealth = function(accounts) {

    let max = 0

    for(customer of accounts){
        
        if(customer.reduce((sum, max) => sum + max) > max) max = customer.reduce((sum, max) => sum + max)
    
}
    return max
};

// reducer 2
var maximumWealth = function(accounts){ 
    let max = 0
    for(customer of accounts) {
        let sum = customer.reduce((sum, curr) => sum + curr)
        if (sum > max) max = sum
    }
    return max
};