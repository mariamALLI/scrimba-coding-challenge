// Get references to DOM elements
const itemInput = document.getElementById('item-input')
const addItemButton = document.getElementById('add-item-button')
const shoppingList = document.getElementById('shopping-list')
const listArr = []
console.log(listArr)

// Function to check item is not duplicate
function checkDuplicate() {
    
    /* ⚠️ You need to add code to this function! ⚠️*/ 
    
    const itemText = itemInput.value.trim().replace(/\s+/g, '')
    const noCapLetter = itemText.toLowerCase()
     if (itemText === ""){
        return
    }
    if(listArr.includes(noCapLetter)){
        alert('item already included')   
    }else{
          let arr = listArr.push(itemText)
         console.log(arr)
      addItemButton.style.display = false; 
    }
    
    
    renderList()
}

// Function to add an item to the shopping list
function renderList() {
    shoppingList.innerHTML = ''
    
    listArr.forEach((gift) => {
        const listItem = document.createElement('li')
        listItem.textContent = `${gift}`
        shoppingList.appendChild(listItem)
        const deletBtn = document.createElement('img')
        deletBtn.src = 'deletebin.png';
        deletBtn.alt = 'delete'
        deletBtn.onclick = () => {
            listArr.splice(listArr.indexOf(gift), 1)
            renderList()
        }
        listItem.appendChild(deletBtn)
        // deletBtn.src = './assets/icon8-delete.svg';
        // shoppingList.appendChild(deletBtn)
    })
    itemInput.value = ''; // Clear the input field
}

// Add event listener to button
addItemButton.addEventListener('click', checkDuplicate)

// Allow adding items by pressing Enter key
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate()
    }
})
