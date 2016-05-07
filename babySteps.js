
var input= process.argv;
var inputSize = input.length;
var sum = 0;
for(i=2;i < inputSize; i++){
	sum = sum + Number(input[i]);
}

console.log(sum);