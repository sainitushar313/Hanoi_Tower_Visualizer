function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  //.......................................................................................................
  
  
  //function that actually solves hanoi tower problem with animation effects 
  async function make_hidden() {
  
    var no_disks = document.getElementById("no_disks").value;        //input from user
    var speed = document.getElementById("anime_speed").value;        //input from user
    var timeout = 1000/speed;
  
    if(no_disks > 10 || no_disks<1 )alert("Please choose a number between 1 to 10");
    else if(speed < 1)alert("Please choose speed greater than 1");
  
    else{
      
      var List1= [];
      List1.push(document.getElementById("baseDisk1"));
      List1.push(document.getElementById("disk1"));
      List1.push(document.getElementById("disk2"));
      List1.push(document.getElementById("disk3"));
      List1.push(document.getElementById("disk4"));
      List1.push(document.getElementById("disk5"));
      List1.push(document.getElementById("disk6"));
      List1.push(document.getElementById("disk7"));
      List1.push(document.getElementById("disk8"));
      List1.push(document.getElementById("disk9"));
      List1.push(document.getElementById("disk10"));
  
      //now List1 has all disks.............................................................
      //only display disks that are given by user...................................................
      var i;
      for(i=10; i>no_disks; i--){
        List1[i].style.visibility="hidden";
      }
  
      for(i=10; i>no_disks; i--){
        List1.pop();
      }
      
      //making to other lists for pole2 and ploe3...................................
      var List2=[];
      var List3=[];
      
      //solving trick;)
      if(no_disks%2==1){
        List2.push(document.getElementById("baseDisk2"));
        List3.push(document.getElementById("baseDisk3")); 
      }
  
      else {
        List2.push(document.getElementById("baseDisk3"));
        List3.push(document.getElementById("baseDisk2"));
      }
      
      
      //calculating total number of moves needed....................................
      var move = Math.pow(2 ,no_disks) - 1;
      var j=1;
      
  
      //doing all moves one by one..............................................
      for(let i=1; i<=move; i=i+1){
        
        var n1 = List1.length;
        var n2 = List2.length;
        var n3 = List3.length;
  
        var disk1_x = List1[n1-1].getAttribute("x");          //string , x cooordi of top disk in pole1
        var disk1_y = List1[n1-1].getAttribute("y");          //string
        var disk1_width = List1[n1-1].getAttribute("width");  //string , width of top disk in pole1
   
        var disk2_x = List2[n2-1].getAttribute("x");            //string  , x coordi od top disk in pole2
        var disk2_y = List2[n2-1].getAttribute("y");            //string
        var disk2_width = List2[n2-1].getAttribute("width");    //string
  
        var disk3_x = List3[n3-1].getAttribute("x");            //string
        var disk3_y = List3[n3-1].getAttribute("y");            //string
        var disk3_width = List3[n3-1].getAttribute("width");    //string
  
        var base1x = 70;
        var base2x = 400;
        var base3x = 730;
  
        var disk1x = (disk1_x.match(/(\d+)/))[0];   //still string
        var disk2x = (disk2_x.match(/(\d+)/))[0];
        var disk3x = (disk3_x.match(/(\d+)/))[0];
        disk1x = parseInt(disk1x,10);               //now its a number
        disk2x = parseInt(disk2x,10);
        disk3x = parseInt(disk3x,10);
      
  
        var disk1y = (disk1_y.match(/(\d+)/))[0];    //still string
        var disk2y = (disk2_y.match(/(\d+)/))[0];  
        var disk3y = (disk3_y.match(/(\d+)/))[0];
        disk1y = parseInt(disk1y, 10);               //now its a number
        disk2y = parseInt(disk2y, 10);        
        disk3y = parseInt(disk3y, 10);
  
        var disk1width = (disk1_width.match(/(\d+)/))[0];         //still string
        var disk2width = (disk2_width.match(/(\d+)/))[0];
        var disk3width = (disk3_width.match(/(\d+)/))[0];
        disk1width = parseInt(disk1width, 10);                    //now its a number
        disk2width = parseInt(disk2width, 10);
        disk3width = parseInt(disk3width, 10);
      
        var new_x;
        var new_y;
        document.getElementById("moves").value = j;               //no of moves that has been done
        j++;
  
        //....................MAGIC.........................................
  
        if(i%3 == 1){
          if(disk1width < disk2width){
            new_x = base2x + (260 - disk1width)/2 +"px" ;
            new_y = disk2y - 20 + "px";
  
            List1[n1-1].setAttribute("x", new_x);
            List1[n1-1].setAttribute("y", new_y);
            List2.push(List1.pop());
          }
          else {
            new_x = base1x + (260 - disk2width)/2 + "px";
            new_y = disk1y - 20 + "px";
  
            List2[n2-1].setAttribute("x", new_x);
            List2[n2-1].setAttribute("y", new_y);
            List1.push(List2.pop());
          }
        }
  
        else if(i%3==2){
          if(disk1width < disk3width){
            new_x = base3x + (260 - disk1width)/2 + "px";
            new_y = disk3y - 20 + "px";
          
            List1[n1-1].setAttribute("x", new_x);
            List1[n1-1].setAttribute("y", new_y);
            List3.push(List1.pop());
          }
          else{
            new_x = base1x + (260 - disk3width)/2 + "px";
            new_y = disk1y - 20 + "px";
  
            List3[n3-1].setAttribute("x", new_x);
            List3[n3-1].setAttribute("y", new_y);
            List1.push(List3.pop());
          }
        }
  
        else if(i%3==0){
          if(disk2width < disk3width){
            new_x = base3x + (260 - disk2width)/2 + "px";
            new_y = disk3y - 20 + "px" ;
  
            List2[n2-1].setAttribute("x", new_x);
            List2[n2-1].setAttribute("y", new_y);
            List3.push(List2.pop());
          }
          else{
            new_x = base2x + (260 - disk3width)/2 + "px";
            new_y = disk2y - 20 + "px";
  
            List3[n3-1].setAttribute("x", new_x);
            List3[n3-1].setAttribute("y", new_y);
            List2.push(List3.pop());
          }
        }
        await sleep(timeout);             //it was necessary :(
      }
    }
  }