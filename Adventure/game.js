//Inventory
var inventory = {
    backpack:0,
    hatchet:0,
    book:0,
    pickaxe:0,
}

var checkInv = function(){
    alert("Hatchet: "+inventory.hatchet+"\n Book: "+inventory.book+"\n ???: "+inventory.pickaxe)
}
Game();

function Game(){
    
    alert("Game Title: Where is Ichabod?");
    
    var playerName = prompt("What is your name?");
    
    alert("Hello, User "+playerName+", I am HistoryBot! The interactive interface of all the known history of Imagin, The Thirteenth Plane of Artists! Today, we shall be going through the History of Artist 324, Ichabod, through the eyes of his brother, Sophales, but with his name replaced with your name, to add more immersion. You will also be able to get more possible endings outside of what actually happened. (Note: When you get an ending, refresh the page to try for a new ending or terminate window if yo are done.) Click OK to Start");
    
    IchabodsRoom();
    
    function IchabodsRoom(){
        var bedroom1 = prompt("You're brother, Ichabod, hasn't left their room for 5 days now, but since there's no window in his room, there's no way he snuck out. You decided to check on him, but when you opened the door... he's not there. The only thing in the small square room is their bed and a wooden #2 pencil. \n -Take Pencil \n -Leave Room").toLowerCase();
    
        
        //Lazy Bum Ending
        if(bedroom1 == "leave room" || bedroom1 == "leave"){
            alert("You just assume that Ichabod is just somewhere else in the house. You never assume anything else, in fact, since you don't seem to care enough to do anything else. If you were just gonna do THAT, why even bother playing this? ALL YOU HAD TO DO WAS PICK UP THE PENCIL AND YOU COULDN'T EVEN BE BOTHERED TO DO THAT! "+playerName+", you have GOT to be the most incompatent user I ever seen! You know what? I'm done for now, if you want to actually play this game, refresh the page, but until then, you get the LAZY BUM ENDING, you lazy A**Hole!");
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
                    alert("You dense little- FINE! You poke the OBVIOUSLY DANGEROUS THING at the base of the broken tube, because you're either an idiot or don't mind restarting this game for a cheap laugh, and guess what "+playerName+", it notices. You see it")
                }
            }
        }
    }
}