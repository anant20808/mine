var canvas=new fabric.Canvas("myCanvas");

blockwidth=30;
blockheight=30;

playerx=10;
playery=10;

var playerobject="";
var blockobject="";

function updateplayer(){

 fabric.Image.fromURL("player.png",function(IMG){

     playerobject = IMG;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(140);
    playerobject.set({

              top:playery,
              left:playerx});


 

        canvas.add(playerobject);});

}

function newimage(get_image){

 fabric.Image.fromURL(get_image,function(IMG){
   
    blockobject=IMG;

    blockobject.scaleToWidth(blockwidth);
    blockobject.scaleToHeight(blockheight);
    blockobject.set({

 top:playery,
 left:playerx});

 canvas.add(blockobject);});


 }

window.addEventListener("keydown",my_keydown);
 
 function my_keydown(e){
    keypress=e.keyCode;
 
     if(e.shiftKey == true && keypress == '80'){


         blockwidth = blockwidth+10;
         blockheight = blockheight+10;
         document.getElementById("current_width").innerHTML=blockwidth;
         document.getElementById("current_height").innerHTML=blockheight;

     }
     if(e.shiftKey == true && keypress == '77'){


      blockwidth = blockwidth-10;
      blockheight = blockheight-10;
      document.getElementById("current_width").innerHTML=blockwidth;
      document.getElementById("current_height").innerHTML=blockheight;

  }
 if(keypress == '38'){

   up();
 }

 if(keypress == '40'){

   down();
 }
 if(keypress == '37'){

   left();
 }
 if(keypress == '39'){

   right();
 }

if(keypress == '87'){

   newimage("wall.jpg");
 }
 if(keypress == '84'){

   newimage("trunk.jpg");
 }
 if(keypress == '67'){
   console.log("Cloud");
   newimage("cloud.jpg");

 }
 if(keypress == '71'){

   newimage("ground.png");
 }
 if(keypress == '89'){

   newimage("yellow_wall.png");
 }
 if(keypress == '85'){

   newimage("unique.png");
 }
 if(keypress == '76'){

   newimage("light_green.png");
 }
 if(keypress == '68'){

   newimage("dark_green.png");
 }

 }


 function up(){
   if(playery >= 0){
   playery = playery - blockheight;
   canvas.remove(playerobject);
   updateplayer();
   }
 }

 function down(){
   if(playery <= 600){
  playery = playery + blockheight;
  canvas.remove(playerobject);
  updateplayer();
   }
}

function left(){
  if(playerx >= 0){
  playerx = playerx - blockwidth;
  canvas.remove(playerobject);
  updateplayer();
  }
}

function right(){
  if(playerx <=800){
  playerx = playerx + blockwidth;
  canvas.remove(playerobject);
  updateplayer();
  }
}