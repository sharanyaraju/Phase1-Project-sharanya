//with Masonry
try{
new Masonry("#posts .grid",{
    itemSelector: '.grid-item',
    gutter:20
});
}

catch(err){
    console.log("Masonry not needed for current page")
}

function append(){
    var d = new Date().toDateString();
    var name=document.getElementById("fullname").value;
    alert("Hi "+name+"!! Thank you for your comments.")
    var text=document.getElementById("msg").value;

    var divTag=document.getElementById("comments");
    var subdivTag=document.createElement("div");

     var hTag=document.createElement("H4");
    var htagContent=document.createTextNode(name);
    hTag.appendChild(htagContent);

    var spanTag=document.createElement("span");
    var spantagContent=document.createTextNode(d);
    spanTag.appendChild(spantagContent);
    var brTag=document.createElement("br");
    var pTag=document.createElement("p");
    var pTagContent=document.createTextNode(text);
    pTag.appendChild(pTagContent);

    subdivTag.appendChild(hTag);
    subdivTag.appendChild(spanTag);
    subdivTag.appendChild(brTag);
    subdivTag.appendChild(pTag);   
    divTag.appendChild(subdivTag); 
    reset();
}


function reset(){
    document.getElementById("fullname").value="";
    document.getElementById("msg").value="";
    document.getElementById("email").value="";
}