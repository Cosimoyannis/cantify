import * as React from "react";


export default function MensaSelectionPage() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  
  document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});
  
  return (
    <div className="page">
      

     <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      
    

      
      
    
      
     
    
      
      
      
  
      
      
      
      
      
      
      
    </div>
    
    
    
    
    
    
    
  );
}
