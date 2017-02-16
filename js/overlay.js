/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// you can access arguments passed to your iframe like so
var num = t.arg('rand');

t.render(function(){
  // this function we be called once on initial load
  // and then called each time something changes that
  // you might want to react to, such as new data being
  // stored with t.set()
});

// close overlay if user clicks outside our content
document.addEventListener('click', function(e) {
  if(e.target.tagName == 'BODY') {
    t.closeOverlay().done();
  }
});

// close overlay if user presses escape key
document.addEventListener('keyup', function(e) {
  if(e.keyCode == 27) {
    t.closeOverlay().done();
  }
});

document.getElementById('json-url').addEventListener('change', (e) => {
  console.log(e.target.value);
})

// document.getElementById('add-to-card').addEventListener('click', () => {
//   var url = document.getElementById('json-url').value;
//   var path = document.getElementById('json-path').value;

//   t.set('card', 'shared', {})
// })
