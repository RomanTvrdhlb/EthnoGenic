let vh = window.innerHeight;

document.documentElement.style.setProperty('--vh', `${vh}px`);

// (function init100vh(){
//     function setHeight() {
//       var vh = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty('--vh', `${vh}px`);
//     }
//     setHeight();
//     window.addEventListener('resize', setHeight);
//   })();

// module.exports = {
//     plugins: [
//   +   require('postcss-100vh-fix'),
//       require('autoprefixer')
//     ]
//   }