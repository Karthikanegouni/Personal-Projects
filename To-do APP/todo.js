let userInput = document.getElementById("userInput");
let addBtn = document.getElementById("addBtn");
let listCnt = document.getElementById("listContainer");

let itemList = JSON.parse(localStorage.getItem("itemList"));
if (itemList !== null) {
  for (let item of itemList) {
    createItem(item); // Create items from localStorage
  }
}

function addItem() {
  let text = userInput.value;
  if (itemList === null) {
    itemList = []; // Initialize itemList if it's null
  }
  let uniqueId = itemList.length + 1;
  let checked = false;
  if (!text.trim() == "") {
    itemList.push({ text, uniqueId, checked }); // Add new item to the list
    createItem({ text, uniqueId, checked }); // Create new item in the DOM
    userInput.value = ""; // Clear input field
    localStorage.setItem("itemList", JSON.stringify(itemList)); // Save to localStorage
  } else {
    alert("Value Can't be Empty"); // Alert if input is empty
  }
}

addBtn.onclick = function () {
  addItem(); // Add item on button click
};

userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem(); // Add item on Enter key press
  }
});

function deleteItem(item) {
  listCnt.removeChild(item); // Remove item from DOM
  let index = itemList.findIndex(function (eachItem) {
    if (item.id === "item" + eachItem.uniqueId) {
      return true;
    } else {
      return false;
    }
  });
  itemList.splice(index, 1); // Remove item from itemList array
}

function createItem(item) {
  let itemCnt = document.createElement("li"); // Create list item
  itemCnt.classList.add("item-cnt");
  itemCnt.id = "item" + item.uniqueId;
  listCnt.appendChild(itemCnt);

  let textCnt = document.createElement("div"); // Create text and checkbox container
  textCnt.classList.add("text-cnt");
  itemCnt.appendChild(textCnt);

  let checkBox = document.createElement("input"); // Create checkbox
  checkBox.type = "checkbox";
  checkBox.id = "checkBox" + item.uniqueId;
  checkBox.classList.add("check-box");
  checkBox.checked = item.checked; // Set checkbox state
  textCnt.appendChild(checkBox);

  let itemText = document.createElement("label"); // Create label for item text
  textCnt.appendChild(itemText);
  itemText.setAttribute("for", checkBox.id);
  itemText.classList.add("item-text");
  itemText.textContent = item.text;

  let delIcon = document.createElement("i"); // Create delete icon
  delIcon.id = "del" + item.uniqueId;
  delIcon.classList.add("fa-solid", "fa-trash-can");
  itemCnt.appendChild(delIcon);

  if (item.checked) {
    itemText.classList.add("completed"); // Mark item as completed
  } else {
    itemText.classList.remove("completed");
  }

  delIcon.onclick = function () {
    deleteItem(itemCnt); // Delete item on click
    localStorage.setItem("itemList", JSON.stringify(itemList)); // Update localStorage
  };

  checkBox.onclick = function () {
    if (item.checked) {
      item.checked = false; // Uncheck item
      itemText.classList.toggle("completed"); // Toggle completed class
    } else {
      item.checked = true; // Check item
      itemText.classList.toggle("completed"); // Toggle completed class
    }
    localStorage.setItem("itemList", JSON.stringify(itemList)); // Update localStorage
  };
}

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function () {
  listCnt.remove(); // Remove list container
  localStorage.clear(); // Clear localStorage
});
