// Function to add quote to Firestore
function addQuote(quote, category) {
    db.collection("quotes").add({
        text: quote,
        category: category
    }).then(() => {
        console.log("Quote successfully added!");
        alert("Quote added successfully!");
    }).catch((error) => {
        console.error("Error adding quote: ", error);
    });
}

// Handling form submission for adding a new quote
const form = document.getElementById("quoteForm");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const quote = document.getElementById("newQuote").value;
    const category = document.getElementById("categorySelect").value;

    // Add the quote to Firestore
    addQuote(quote, category);

    // Reset the form after submission
    form.reset();
});

// Function to fetch quotes from Firestore and display them
function getQuotes() {
    const quotesList = document.getElementById("quotesList");
    db.collection("quotes").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const quote = doc.data().text;
            const category = doc.data().category;

            // Create a new list item for each quote
            const li = document.createElement("li");
            li.textContent = `"${quote}" - ${category}`;
            quotesList.appendChild(li);
        });
    });
}

// Call getQuotes() when the page loads
window.onload = () => {
    getQuotes();
};
