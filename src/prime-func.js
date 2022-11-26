export function prime (x){
const array = []; 
for (let i = 1; i<=x; i +=1){
    if(x%i === 0){
        array.push(i)
    }   
}
if (array.length === 2){
    return true
} else {
    return false
}
}
console.log(prime(9)); 