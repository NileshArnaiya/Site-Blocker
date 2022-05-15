console.log("funcking works");


// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     console.log(message)
//     return true
// });
const blockWords = ["porn", "porno", "lesbian", "sexy","sex", "xvid", "xvideos", "porntv"];
let url = window.location.href;
for(let i = 0; i < blockWords.length; i++){
    if (url.includes(blockWords[i]) ){
        chrome.extension.sendMessage({text:"getStuff"},function(reponse){
            //This is where the stuff you want from the background page will be
            if(reponse.type == "test")
              alert("PORN DETECTED, FUCK OFF FROM HERE BEFORE YOUR FUTURE SELF KILLS YOU");
          });
          break;
    }
    
}
