const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


let index = 0;
//keep track of index outside of the event handler

function init() {
  
  var body = document.body;
  
  body.addEventListener('keydown', function(e) {
    const key = e.key;
    // console.log(key);
  
    if (key === codes[index]) {
      index++;
      
      if (index === codes.length) {
        alert('HURRAY!');
        
        index = 0;
      }
    
    } else {
      index = 0;
    }
  });
}
