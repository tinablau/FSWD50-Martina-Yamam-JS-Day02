var colors = ['#00FFFF', '#008080', '#0000FF'];

var changeBackground = function() {
   document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
};

changeBackground();