//Find the second LArgest Number in an Array//


function secondLargest(arr){
    if(arr.length<2){
        return "atleast two elements are required";
    }
    let largestNumber=-Infinity;
    let secondLargestNumber=-Infinity;
    for(let i =0; i<arr.length;i++){
        if(arr[i]>largestNumber){
            secondLargestNumber = largestNumber;
        largestNumber=arr[i]
    }else if (arr[i]>secondLargestNumber && arr[i]!==largestNumber){
           secondLargestNumber=arr[i];
    }
    } 
    return secondLargestNumber;
}



let arr = [12, 35, 1, 10, 34, 1];
console.log(secondLargest(arr));