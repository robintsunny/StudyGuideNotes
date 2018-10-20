// Complete the maxInversions function below.
function maxInversions(prices) {
    let inv = 0;


    // for (let i = 0; i < length; i++) {
    //     for (let j = i+1; j < length; j++) {
    //         for (let k = j+1; k < length; k++) {
    //             if (prices[i] > prices[j] && prices[j] > prices[k]) {
    //                 inv++;
    //             }
    //         }
    //     }
    // } 
    console.log('inv before loop', inv)

    for (let i = 0; i < prices.length; i++) {
        console.log('inv coming in', inv)

        console.log('i', i)
        console.log('price', prices[i])

        const left = prices.slice(0, i)
        console.log('left', left)
        
        const right = prices.slice(i + 1)
        console.log('right', right)
        
        const more = left.filter(price => price > prices[i])
        console.log('more', more)
        
        const less = right.filter(price => price < prices[i])
        console.log('less',less)
        
        console.log('more*less', more.length*less.length)
        inv = inv + less.length * more.length;
        console.log('inv going out',inv)

    }
    return inv;

}

const a = [4, 3, 7, 9, 6, 9, 6, 3, 7, 9];
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
maxInversions(a)