

var colors = ['red','blue','white','black'];
var target = 'white';

function linearSearch(arr,target){
    for (let i = 0; i < colors.length; i++) {
        if(arr[i]===target){
            return "The index of "+target+" color is "+i;
        }
        
    }
    return "The Color Not Found..!"
}

console.log(linearSearch(colors,target))