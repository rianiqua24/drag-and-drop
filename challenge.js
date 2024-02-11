let items = document.querySelectorAll('.item');
  let box1 = document.getElementById('Box1');
  let box2 = document.getElementById('Box2');

  for (let item of items) {
    item.addEventListener("dragstart", function(e) {
      let selected = e.target;
      
      box1.addEventListener("dragover", function(e) {
        e.preventDefault();
      });

      box1.addEventListener("drop", function(e) {
        box1.appendChild(selected);
        selected = null;
      });

      box2.addEventListener("dragover", function(e) {
        e.preventDefault();
      });

      box2.addEventListener("drop", function(e) {
        box2.appendChild(selected);
        selected =null;
      });
    });
  }