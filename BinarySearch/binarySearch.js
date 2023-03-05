// Binary Search Algorithm


// Ascending Order

var elements1 = [21,35,64,73,77,85,93,121,321,346,774];
var target = 321;

function binarySearch_asc(arr,key){

    let start = 0;
    let end = arr.length-1;
    let mid;

     while(start <= end ){

        mid = Math.floor((start+end)/2);
        
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

console.log(binarySearch_asc(elements1,target))


// Descending Order

var elements2 = [721,635,564,473,377,285,193,50,40,30,10];
var target = 30;

function binarySearch_desc(arr,key){
    let start = 0;
    let end = arr.length-1;
    let mid;

    while(start <= end){

        mid = Math.floor((start+end)/2);

        if(arr[mid] === key){
            return key+" found on the index number of "+mid;
        }else if(arr[mid] < key){
            start = mid - 1;
        }else{
            end = mid + 1;
        }
    }
    return "Not found";
} 

console.log(binarySearch_desc(elements2,target))


// Order-Agnostic Binary Search

function binarySearch_order_ag(arr,key){
    let start = 0;
    let end = arr.length-1;
    let mid;

    let isAsc = arr[0] < arr[end];
    console.log(isAsc);
    while(start <= end){

        mid = Math.floor((start+end)/2);

        if(arr[mid] === key){
            return key+" found on the index number of "+mid;
        }else if(arr[mid] < key){
             isAsc ? start = mid + 1 : end = mid - 1; 
        }else{
             isAsc ? end = mid - 1 : start = mid + 1;
        }
    }
    return "Not found";

}

console.log(binarySearch_order_ag(elements2,target))