var chatStr = "";
var getp1Input = document.getElementById("p1Input");
var getp2Input = document.getElementById("p2Input");

function replaceEmojis(){
    chatStr = chatStr.replace(":)","<img class='emojis' src='Grandma.png'/>");
    chatStr = chatStr.replace(":(","<img class='emojis' src='Quill.png'/>");
    chatStr = chatStr.replace("shit","****");
    chatStr = chatStr.replace("fuck","****");
};

/*************************** p1 Chat ****************************/

function createChat(){
    chatStr = getp1Input.value;
    getp1Input.value = "";
    
    /*if (chatStr == ":)"){
        chatStr = "<img class='emojis' src='Grandma.png'/>";
    } else if (chatStr == ":("){
        chatStr = "<img class='emojis' src='Quill.png'/>";
    };*/
    
    replaceEmojis();
    
};

/*************************** p2 Chat ****************************/

function createChat2(){
    chatStr = getp2Input.value;
    getp2Input.value = "";
    
    /*if (chatStr == ":)"){
        chatStr = "<img class='emojis' src='Grandma.png'/>";
    } else if (chatStr == ":("){
        chatStr = "<img class='emojis' src='Quill.png'/>";
    };*/
    
    replaceEmojis();
    
};

/*************************** Display Chat ****************************/

function chatAppr(person){
    var newDiv = document.createElement("div");
    document.getElementById("ChatDisplay").appendChild(newDiv);
    newDiv.innerHTML = chatStr;
    if (person == "person1"){
        newDiv.style.backgroundColor = "rgba(255,152,0,1)";
    } else if (person == "person2"){
        newDiv.style.backgroundColor = "rgba(200,100,0,1)";
    };
    newDiv.style.padding = "0.5%";
};

/************************** RUMBLE!! ****************************/

getp1Input.addEventListener("keyup", function(ev){
    
    if (ev.keyCode == 13){
        createChat();
        chatAppr("person1");
    };
});

getp2Input.addEventListener("keyup", function(ev){
    
    if (ev.keyCode == 13){
        createChat2();
        chatAppr("person2");
    };
});