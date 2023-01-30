function sumOddNumbers(...a){
    if(a.length<5){
        return 'Enter 6 or more numbers ';
    }
    else if(!a.every(value=>value%2===0)){
          
        let sum=a.filter(value=> value%2!==0).reduce((accumulator,counter)=> accumulator+=counter)
        return sum;
    }
    else{
        return 'All are Even';
    }
}


console.log(sumOddNumbers(2,4,8,6,8))