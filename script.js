let price = 19.9;
let beefCount = 1;
let tomatoCount = 2;
let cheeseCount = 3;
let onionCount = 4;
function total() {
  document.getElementById("h3").innerHTML = "total:" +price + "$";
}

function pluseByType(type) {
  switch (type) {
    case "tomato":
      plus(tomatoCount, 0.5,"tomato");
      break;
    case "beef":
      plus(beefCount, 2 ,"beef");
      break;
    case "cheese":
      plus(cheeseCount, 1,"cheese");
      break;
    case "onion":
      plus(onionCount, 0.5,"onion");
      break;
  }
}

function removeByType(type) {
  switch (type) {
    case "beef":
      remove(beefCount, 2);
      break;
    case "tomato":
      remove(tomatoCount, 0.5);
      break;
    case "beef":
      remove(beefCount, 2);
      break;
    case "cheese":
      remove(cheeseCount, 1);
      break;
    case "onion":
      remove(onionCount, 0.5);
      break;
  }
}

function remove(count, minus) {
  if (count > 0) {
    let id = "p" +count;
    let toRemove = document.getElementById(id);
    let ourDiv = document.getElementById("container");
    ourDiv.removeChild(toRemove);
    if (price < 19.9) {
      price = 19.9;
    } else {
      price -= minus;
    }
    count--;
    total();
  }
}

function plus(count, cost, className) {
  let ourDiv = document.getElementById("container");
  let ToAdd = document.createElement("div");
  ToAdd.className = className;
  ToAdd.id = "p" + count;
  if (price < 19.9) {
    price = 19.9;
  } else {
    price += cost;
  }
  ourDiv.appendChild(ToAdd);
  
  total();
}

