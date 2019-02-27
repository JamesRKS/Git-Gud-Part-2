//Inventory
var inventory = {
    backpack:0,
    hatchet:0,
    knowledgeofbrother:0,
}

var checkInv = function(){
    alert("Hatchets: "+inventory.hatchet)
}
Game();

function Game(){
    
    alert("Game Title: Where is Ichabod?");
    
    var playerName = prompt("What is your name?");
    
    while(!confirm("Are you sure "+playerName+" is right?")){
        playerName = prompt("What is your REAL name then?");
    }
    
    alert("Hello, User "+playerName+", I am HistoryBot! The interactive interface of all the known history of Imagin, The Thirteenth Plane of Artists! Today, we shall be going through the History of Artist 324, Ichabod, through the eyes of his brother, but with his name replaced with your name, to add more immersion. You will also be able to get more possible endings outside of what actually happened. (Note: When you get an ending, refresh the page to try for a new ending or terminate window if you are done.) Click OK to Start");
    
    IchabodsRoom();
    
    function IchabodsRoom(){
        var bedroom1 = prompt("You're brother, Ichabod, hasn't left their room for 5 days now, but since there's no window in his room, there's no way he snuck out. You decided to check on him, but when you opened the door... he's not there. The only thing in the small square room is their bed and a wooden #2 pencil. \n -Take Pencil \n -Leave Room").toLowerCase();
    
        
        //Lazy Bum Ending
        if(bedroom1 == "leave room" || bedroom1 == "leave"){
            alert("You just assume that Ichabod is just somewhere else in the house. You never assume anything else, in fact, since you don't seem to care enough to do anything else. If you were just gonna do THAT, why even bother playing this? ALL YOU HAD TO DO WAS PICK UP THE PENCIL AND YOU COULDN'T EVEN BE BOTHERED TO DO THAT! "+playerName+", you have GOT to be the most incompatent user I ever seen! You know what? I'm done for now, if you want to actually play this game, refresh the page, but until then, you get the LAZY BUM ENDING.");
        }
        if(bedroom1 == "take pencil" || bedroom1 == "take"){
            Pencil();
        }
        
        else{
            alert("I don't understand");
            IchabodsRoom();
        }
        //Pick Up Pencil
        function Pencil(){
                var pencil = prompt("Power surges through your fingers, giving you sight to something not before seen, a floating black keyhole appears right before you and your instinct is to stick the pencil in the keyhole. \n -Stick in \n -Don't, like the wuss you are.").toLowerCase();
            
            //Stick in
            if(pencil == "stick in" || pencil == "use" || pencil == "stick"){
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
            else{
                alert("I don't understand");
                Pencil();
            }
                }
        function Voidroom(){
            var voidroom = prompt("You're now in a white void, without the pencil, the only objects in the abyss is a door and an empty backpack. \n -take backpack \n -open door").toLowerCase();
            
            //Take Backpack
            if(voidroom == "take backpack" || voidroom == "take"){
                if(inventory.backpack == 0){
                inventory.backpack = 1;
                alert("You have recieved Inventory. You can check inventory at anytime by typing 'Inventory' into the prompt box. Keep this in mind, because it will not be listed as an option at all time.");
                Voidroom();
            }
            
                if(inventory.backpack == 1){
                    alert("You already have the backpack, stupid.");
                    Voidroom();
                }
            }
            
            //Open Door
            if(voidroom == "open door" || voidroom == "open"){
                if(inventory.backpack == 0){
                    alert("You should take that backpack first, "+playerName+".");
                    Voidroom();
                }
                
                if(inventory.backpack == 1){
                    Tubes();
                }
            }
            
            //Check Inventory
            if(voidroom == "inventory"){
               checkInv();
            }
            
            else{
                alert("I don't understand")
                Voidroom();
            }
        }
        
        function Tubes(){
            var tubes = prompt("You open the door to a darker room, illuminated by dim green lights and a few flashing red lights. These lights are coming from the bases of three giant glass tubes, the central tube being the one with red lights, which probably has to do with the fact the glass is broken and leaking fluid all over the floor. At the base of the broken tube is something pale, wet and squishy. Probably would be bad to get the attention of it without a weapon or something, good thing you notice a hatchet mounted on the wall next to you. There's a door on the eastern wall (your facing north btw) and that seems like your only way out of this room without backtracking. \n -Take Hatchet \n -Poke it \n -Go to west door \n -Go back").toLowerCase();
            
            //Take Hatchet
            if(tubes == "take hatchet" || tubes == "take"){
                inventory.hatchet = 1;
                alert("You take the Hatchet, it's been added to your inventory");
                Tubes();
            }
            
            //Poke it
            if(tubes == "poke it" || tubes == "poke"){
                if(inventory.hatchet == 0){
                    alert("You dense little- FINE! You poke the OBVIOUSLY DANGEROUS THING at the base of the broken tube, because you're either an idiot or don't mind restarting this game for a cheap laugh, and guess what "+playerName+", it notices. You see its' deformed face turn towards you. It has a big mouth with LOTS of sharp teeth. You want to know what it's gonna do with them? Eat your freaking face off, because your an idiot and didn't, at the very least, ARM YOURSELF with the hatchet on the wall. You gained the STUPID DEATH ENDING, have fun restarting the game, dumba**!")
                }
                
                if(inventory.hatchet == 1){
                    alert("You poke the thing... really hard... with your hatchet... it's dead. I guess there's nothing else in here to do, so you walk to the west door and open it, entering the room.")
                    Puzzle();
                }
            }
             if(tubes == "Go to west door" || tubes == "west door" || tubes == "door"){
                 alert("You quietly sneak to the west door, thankfully not getting it's attention, and you enter the next room.")
                 Puzzle();
             }
            
            if(tubes == "Go back" || tubes == "back"){
                Voidroom();
            }
            
            else{
                alert("I don't understand")
                Tubes();
            }
        }
        
        function Puzzle(){
            var puzzle = prompt("It's a small room with two buttons on the left wall, a green one and a red one, and across the room is a metal door that can't be opened. \n -press green button \n - press red button \n Hint: You can use the Hatchet Item in this room.").toLowerCase();
            
            if(puzzle == "press green button" || puzzle == "green button"){
                alert("Ding Dong! That's wrong.");
                Puzzle();
            }
            
            if(puzzle == "press red button" || "red button"){
                alert("That's the right one, the door opens and again, since there's nothing else to do in this room, I'll just automatically send you to the next room.")
                Brother();
            }
            
             if(puzzle == "use hatchet" || puzzle == "hatchet"){
                 if(inventory.hatchet == 1){
                     alert("You decide that you don't care about puzzles, you just care about your brother, so you decide to move on by FORCE, and break down the door via your hatchet, despite the fact the door is metal.")
                     Brother();
                 }
                 if (inventory.hatchet == 0){
                     alert("You don't have one, stupid!")
                     Puzzle();
                 }
             }
            
            if(puzzle == "go back" || puzzle == "back"){
                if(inventory.knowledgeofbrother == 1 && inventory.hatchet == 0){
                    Tubes2();
                }
                
                 if(inventory.hatchet == 1){
                    alert("There's nothing in there for you, you already have the hatchet, go do what you need to actually do.")
                    Puzzle();
                }
                
                if(inventory.knowledgeofbrother == 0){
                    alert("Why would you do that? There's a creepy and probably dangerous thing in there. I'm NOT doing that! It's not like you need anything from there, right? If you really needed something in there, I would of told you. Just figure out the puzzle for now!")
                    Puzzle();
                }
            }
            
            else{
                alert("I don't understand")
                Puzzle();
            }
        }
        
        function Brother(){
            inventory.knowledgeofbrother = 1;
            var brother = prompt("When you enter the big room, the first and only thing you notice is a glass tube, much like the ones a couple rooms back. Inside the tube is your brother! Ichabod's right there, floating in some weird fluid! All you need to do is get him out! \n -Get Ichabod Out \n -Go back").toLowerCase;
            
            if(brother == "get ichabod out" || brother == "get ichabod" || brother == "get"){
                if(inventory.hatchet == 1){
                    var end = prompt("This will be the end of the game, are you sure you want to "+playerName+"?").toLowerCase;
                    if(end == "yes" || end == "y"){
                        TrueEnding();
                    }
                        
                    if(end == "no" || end == "n"){
                        alert("Then take your time, no rush. Sure, there's nothing else to do if you're seeing this, but take your time.")
                        Brother();
                    }
                }
                if(inventory.hatchet == 0){
                    alert("You look for a way to get Ichabod out, searching for a button or something, but you just can't find anything in here that would release your brother. Then you realize, you need to break the glass tube to get your brother out! The only thing that can break the tube is the Hatchet back in the room with the other tubes. Quick! Go back there with great haste!");
                    Brother();
                }
            }
            
            if(brother == "go back" || brother == "go"){
                Puzzle();
            }
            
            else{
                alert("I don't understand");
                Brother();
            }
        }
        
        function Tubes2(){
            var tubes2 = prompt("The room of tubes is mostly the same as how you left it, dimly lit and full of glass tubes with the central one broken, with the exception of one thing. That Thing. It's gone, it must have moved or something, and since you didn't see it in the other rooms, it must be in that void room you came from. The door to said room is slightly ajar, so it's not out of the question. Next to that is the Hatchet, mounted on the wall. Quickly! Get it! \n -GRAB HATCHET!").toLowerCase;
            
            if(tubes2 == "grab hatchet" || tubes2 == "grab" || tubes2 == "get"){
                inventory.hatchet = 1;
                var tubes2mon = prompt("You recieved the Hatchet... \n but then you hear the sound of pained breathing close by, going down your neck. You turn around and see... nothing... until the Thing turns off it's invisiblity, exposing it's twisted, distorted face right in front of yours, and that Thing looks hungry for flesh. \n -Hit with Hatchet \n -RUN!!! \n WARNING! IF YOU DON'T SPELL THIS RIGHT, YOU WILL DIE!").toLowerCase;
                
                if(tubes2mon == "hit with hatchet" || tubes2mon == "hit"){
                    alert("You instinctually hit the Thing with your Hatchet, hitting it square in the face. It recoils back from your attack, bleeding some black ooze. That gives you enough time to, oh I don't know, RUN FOR YOUR LIFE BACK TO THE ROOM WITH YOUR BROTHER! I'm not even gonna let you try anything else, you just run back, closing all the doors behind you.");
                    Brother();
                }
                
                if(tubes2mon == "run"){
                    alert("You try to run, but it grabs you with some odd claw from behind it's back, yoinking you away and biting your head off. Congratuations, you've recieved THE LEAST STUPID BAD ENDING! You had no way to know that running away wouldn't be a valad option, so it's okay that you got this ending compared to other bad endings. So... Congrats? You still died tho.");
                }
                
                else{
                    alert("I don't understand, I can't hear you over the sound of your head being crunched on by that Thing. Here's the TYPO ENDING, I guess.");
                }
            }
            
            else{
                
            }
        }
    }
}