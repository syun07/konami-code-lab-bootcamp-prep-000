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


var index = [];

function init() {
  
  var body = document.body;
  
  body.addEventListener('keydown', function(e) {
    const key = e.key;
    console.log(key)
  
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



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   let index = 0;

//   document.body.addEventListener('keydown', onKeyDownHandler);

//   function onKeyDownHandler(e) {
//     const key = e.key;

//     if (codes[i] == key) {
//       i++;
//       if (i === codes.length) {
//         alert('Hurray!');

//         i = 0;
//       }
//     } else {
//       i = 0;
//     }
//   }
// }

// init();
