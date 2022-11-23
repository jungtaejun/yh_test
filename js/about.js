var gugu = []; 
var i,j;
for(i=1;i<=100;i++){ 
    ///gugu[i]=i+1;
    gugu.push(i)
}
for(i=2;i<=9;i++){
    for(j=1;j<=9;j++){
        console.log(i + ' x ' + j + ' = ' + (gugu[(i*j)-1]))
    }
}