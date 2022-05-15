console.log("h")
// chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
//     document.write(`<h3>The tabs you're on are:</h3>`);
//     document.write('<ul>');
//     for (let i = 0; i < tabs.length; i++) {
//       document.write(`<li>${tabs[i].url}</li>`);
//     }
//     document.write('</ul>');
//   });

chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
    if(message.text == "getStuff"){
        chrome.tabs.query({currentWindow:true, active: true }, function(tabs) {
            chrome.tabs.remove(tabs[0].id);
       });
      sendResponse({type:"test"});
    }
  });

// chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//     console.log(tabs[0].url);
//     console.log(tabs[0].id);
    
//     chrome.tabs.sendMessage(tabs[0].id, "your message");  
// });

// chrome.extension.onMessage.addListener(

//     function(request, sender, sendResponse) {
//         chrome.pageAction.show(sender.tab.id);
//     });




// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     console.log("THis is" + tabs[0].query);
//     chrome.tabs.sendMessage(tabs[0].id, "your message");  
//     });
