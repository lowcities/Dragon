var slaying = true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying) {
    if( youHit == 1 ) {
        console.log("ZipZapZow! You hit the Dragoon!");
        totalDamage += damageThisRound;
            if( totalDamage >=4){
                console.log("Zippity ZowWOW! You have sleighed the Dragoon! You ar tha Mightiest Waryer of dem haalll!!");
            slaying = false;    
                }
            else{
              youHit = Math.floor(Math.random()*2);  
                }
        }
    else{
        console.log("Ahh Shiat! That there Dragoon Keeled yah!");
          
    slaying = false;
    }
}    
