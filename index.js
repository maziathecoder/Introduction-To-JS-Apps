var choice = prompt("welcome to area calculator. \n please enter your choice \n1.Area of rectangle \n2.Area of triangle \n3.Are of circle \n4.parallelogram");

if(choice=='1') {   
   var l = prompt("enter the lenght");
   var b = prompt("enter the breagth");
   var result = Number(l)*Number(b);
   alert("the area is "+ result);
}

if(choice=='2') {   
   var h = prompt("enter the hieght");
   var b = prompt("enter the base");
   var result = Number(h)*Number(b)/2;
}

if(choice=='3') {   
   var r = prompt("enter the radius");
   var result = 3.14*Number(r)*Number(r);
   atert("the area is "+ result);
}

if(choice=='4') {   
   var h = prompt("enter the hieght");
   var cb = prompt("enter the corresponding base");
   var result = Number(h)*Number(cb);
   alert("the area is "+ result);
}