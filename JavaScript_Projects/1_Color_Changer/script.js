const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


// 1st Approach

// buttons.forEach(function (button) {
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });


// 2nd Approach

// buttons.forEach(function (button) {
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     } else if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     } else if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     } else if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     } else {
//       body.style.backgroundColor = 'white'
//     }
    
//   });
// });


// 3rd Approach

// buttons.forEach(function (button) {
//     button.addEventListener('click', function (e) {
//         switch (e.target.id) {
//             case 'grey':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case 'white':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case 'blue':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             case 'yellow':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             default:
//                 body.style.backgroundColor = 'white'
//                 break;
//         }
//     });
// });

// 4th Approach

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;    
  });
});

//5th Approach

// buttons.forEach(function (button) {
//     button.addEventListener('click', function (e) {
//       body.style.backgroundColor = button.id;    
//     });
//   });