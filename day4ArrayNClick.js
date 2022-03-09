var nums = [1,2,8,22,54,128]
let i = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  ellipse(200,200,nums[i],nums[i])
}

function mousePressed(){
  i++;
  if(i===nums.length){
    i=0;
  }
}

//BerraFFS </3
