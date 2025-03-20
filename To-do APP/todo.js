const userInput = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const listCnt = document.getElementById("listContainer");

let itemList = JSON.parse(localStorage.getItem("itemList")) || []; // Initialize itemList

itemList.forEach((item) => createItem(item)); // Create items from localStorage

function addItem() {
  const text = userInput.value.trim(); // Trim whitespace
  if (text === "") {
    alert("Value Can't be Empty"); // Alert if input is empty
    return;
  }

  const uniqueId = itemList.length + 1;
  const checked = false;
  const newItem = { text, uniqueId, checked };

  itemList.push(newItem); // Add new item to the list
  createItem(newItem); // Create new item in the DOM
  userInput.value = ""; // Clear input field
  localStorage.setItem("itemList", JSON.stringify(itemList)); // Save to localStorage
}

addBtn.onclick = addItem; // Add item on button click

userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem(); // Add item on Enter key press
  }
});

function deleteItem(item) {
  listCnt.removeChild(item); // Remove item from DOM
  const index = itemList.findIndex(
    (eachItem) => item.id === "item" + eachItem.uniqueId
  );
  if (index !== -1) {
    itemList.splice(index, 1); // Remove item from itemList array
    localStorage.setItem("itemList", JSON.stringify(itemList)); // Update localStorage
  }
}

function createItem(item) {
  const itemCnt = document.createElement("li"); // Create list item
  itemCnt.classList.add("item-cnt");
  itemCnt.id = "item" + item.uniqueId;
  listCnt.appendChild(itemCnt);

  const textCnt = document.createElement("div"); // Create text and checkbox container
  textCnt.classList.add("text-cnt");
  itemCnt.appendChild(textCnt);

  const checkBox = document.createElement("input"); // Create checkbox
  checkBox.type = "checkbox";
  checkBox.id = "checkBox" + item.uniqueId;
  checkBox.classList.add("check-box");
  checkBox.checked = item.checked; // Set checkbox state
  textCnt.appendChild(checkBox);

  const itemText = document.createElement("label"); // Create label for item text
  itemText.setAttribute("for", checkBox.id);
  itemText.classList.add("item-text");
  itemText.textContent = item.text;
  textCnt.appendChild(itemText);

  const delIcon = document.createElement("i"); // Create delete icon
  delIcon.id = "del" + item.uniqueId;
  delIcon.classList.add("fa-solid", "fa-trash-can");
  itemCnt.appendChild(delIcon);

  itemText.classList.toggle("completed", item.checked); // Mark item as completed

  delIcon.onclick = () => {
    deleteItem(itemCnt); // Delete item on click
  };

  checkBox.onclick = () => {
    item.checked = !item.checked; // Toggle checked state
    itemText.classList.toggle("completed", item.checked); // Toggle completed class
    localStorage.setItem("itemList", JSON.stringify(itemList)); // Update localStorage
  };
}

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
  listCnt.innerHTML = ""; // Clear list container
  localStorage.clear(); // Clear localStorage
  userInput.value = "";
});
