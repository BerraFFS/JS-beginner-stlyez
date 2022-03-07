var i = 0;
var startN = 1234343;
var n;
function threeX(){
  let n = startN
  while (n > 1){
    if (n%2!=0){
   		n = (3 * n) + 1;
	  i++;
    }
    if(n%2==0){
      n = n / 2;
	  i++;
    }
  }
}

//BerraFFS </3
