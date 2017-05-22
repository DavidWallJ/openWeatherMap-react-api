/**
 * Created by david on 5/21/17.
 */
function examplePromise (a, b) {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            const c = a + b;
            if (typeof c === 'number') {
                resolve(c);
            } else {
                reject("At least one argument isn't a number");
            }
        }, 2000);
    });
}

examplePromise(5, 5).then(function (sum) {
   console.log('promise success: ', sum);
}, function (err) {
    console.log('promise failed: ', err);
});