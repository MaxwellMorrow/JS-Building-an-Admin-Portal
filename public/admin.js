
// GET's the booklist from the server
async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    console.log(books)
    books.forEach(renderBook);
}
main()




function renderBook(book){

// select the root div in admin.html to begin creating buttons
let root = document.querySelector("#root");

// create an li for each book by calling this 
let li = document.createElement("li");
// makes the textcontent of each li created is the title of each book
li.textContent = book.title
// challenging myself to change the title by input as well
let titleInput = document.createElement("input");
titleInput.value = book.title;

let save = document.createElement("button");
// changing to single save for both title and quanitity 
save.textContent = "Save";


// create an li for each book by calling this 
let quantityli = document.createElement("li");
// makes the textcontent of each li created is the title of each book
quantityli.textContent = book.quantity
// challenging myself to change the title by input as well
let quantityInput = document.createElement("input");
quantityInput.value = book.quantity;



// at this point realizing it would probably be more efficient to have a single save button
save.addEventListener("click",()=>{
    fetch("http://localhost:3001/updateBook",{
        method: "PATCH",
        headers: {"Content-Type":"application/json",},
    
    body: JSON.stringify({
        id: book.id,
        title: titleInput.value,
        quantity: quantityInput.value
    }),
    
    });
});

li.append(save,titleInput,quantityInput)
root.append(li);
}


