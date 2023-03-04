// Binary Search Algorithm


// Ascending Order

var elements = [21,35,64,73,77,85,93,121,321,346,774];
var target = 321;

function binarySearch(arr,key){

    var start = 0;
    var end = arr.length-1;

     while(start <= end ){

        var mid = Math.floor((start+end)/2);
        
        if(arr[mid]===key){
            return key+" found on the index number of "+mid;
        }else if( arr[mid] < key ){
            start = mid+1;
        }else{
            end = mid-1;
        }

     }

     return "Not found";

}

console.log(binarySearch(elements,target))


// Descending Order