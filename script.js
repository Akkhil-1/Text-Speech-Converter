let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click" , ()=>{
    let text = document.querySelector("textarea").value;
    if(text.trim() === ""){
        alert("PLease enter some text.")
    }
    else{
        speech.text = text;
        window.speechSynthesis.speak(speech);
        
    }    
})