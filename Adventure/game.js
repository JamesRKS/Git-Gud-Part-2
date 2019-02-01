Game();

function Game(){
    
    alert("Game Title: Where is Ichabod?");
    
    var playerName = prompt("What is your name?");
    
    alert("Hello, User "+playerName+", I am HistoryBot! The interactive interface of all the known history of Imagin, The Thirteenth Plane of Artists! Today, we shall be going through the History of Artist 324, Ichabod, through the eyes of his brother, Sophales, but with his name replaced with your name, to add more immersion. You will also be able to get more possible endings outside of what actually happened. (Note: When you get an ending, refresh the page to try for a new ending or terminate window if yo are done.) Click OK to Start");
    
    IchabodsRoom();
    
    function IchabodsRoom(){
        var bedroom1 = prompt("You're brother, Ichabod, hasn't left their room for 5 days now, but since there's no window in his room, there's no way he snuck out. You decided to check on him, but when you opened the door... he's not there. The only thing in the small square room is their bed and a wooden #2 pencil. \n -Take Pencil \n -Leave Room").toLowerCase();
    }
        
        //Lazy Bum Ending
        if(bedroom1 == "leave room" || bedroom1 == "leave"){
            alert("You just assume that Ichabod is just somewhere else in the house. You never assume anything else, in fact, since you don't seem to care enough to do anything else. If you were just gonna do THAT, why even bother playing this? ALL YOU HAD TO DO WAS PICK UP THE PENCIL AND YOU COULDN'T EVEN BE BOTHERED TO DO THAT! "+playerName+", you have GOT to be the most incompatent user I ever seen! You know what? I'm done for now, if you want to actually play this game, refresh the page, but until then, you get the LAZY BUM ENDING, you lazy A**Hole!");
        }
        else{
            Pencil();
        }
        //Pick Up Pencil
        function Pencil(){
            if(bedroom1 == "take pencil" || bedroom1 == "take"){
                var pencil = prompt("Power surges through your fingers, giving you sight to something not before seen, a floating black keyhole appears right before you and your instinct is to stick the pencil in the keyhole. \n -Stick in \n -Don't, like the wuss you are.").toLowerCase();
            }
            if(pencil == "stick in" || pencil == "use"){
                Voidroom();
            }
            //Wuss out
            if(pencil == "dont" || pencil == "wuss" || pencil == "wuss out"){
                var wuss = prompt("You Wussy Bum! Do you want to play this game or not?!").toLowerCase();
            }
                //Big Baby Ending
                if(wuss == "no"){
                    alert("Y'know what? I don't know why I put up with you, you idiot baby. I'm a HistoryBot, not a NurseryBot, so I don't need to take care of your STUPID BABY FACE! In fact, you've recieved the BIG BABY ENDING! If you've also gotten the Lazy Bum Ending beforehand, I don't know why you're even playing this.");
                }
                else if(wuss == "yes"){
                    alert("Then try again and act like it, "+playerName+"");
                    Pencil();
                    }
                }
        function Voidroom(){
            prompt("Almost instantly, you appear in a white void of what appears to be endless white")
        }
}
        
    
