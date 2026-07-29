/* View a video in the youtube

1. adv
2. related videos*/


function playVideo(y,x){ // parameters x=1, y=2 // y=1 , x=2

console.log("Play the youtube video");

x() // stage1 :  advertisment         stage2 : 
y() // stage1 : showrelatedVideso     stage2 : adv

}


function adv(){ // sub function1

    console.log("Play Advertisement");
    
}

function showRelatedVideos(){ // sun function2

    console.log("Show related videos");
    

}


playVideo(adv,showRelatedVideos) // argument ==> adv = 1, showRelatedVideos = 2 


// When I call a main function the sub function should be invoked

//Here we are passing functions as an argument to the main function


/* Stage1 :
function playVideo(x,y){

console.log("Play the youtube video");

x() // advertisment
y() // showrelated


}

x=adv
y= showRelatedVideos 

Output :

Play the youtube video
Play Advertisement
Show related videos*/

/* Stage2 :
function playVideo(x,y){

console.log("Play the youtube video");

x() // advertisment
y() // showrelated


}

x=adv
y= showRelatedVideos 

Output :

Play the youtube video
Play Advertisement
Show related videos*/