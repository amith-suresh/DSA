function reverseInteger(x){
let xCopy=x;
x=Math.abs(x);
let rev=0;
while(x>0){
    let last = x%10;
    rev=(rev*10)+last;
    x=Math.floor(x/10);
}
let limit = Math.pow(2,31);
if(rev>limit-1 || rev<-limit)return 0;
return (xCopy<0?-rev:rev);
}