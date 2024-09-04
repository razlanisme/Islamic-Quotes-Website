// Filter quotes based on search input
function filterQuotes() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let ul = document.getElementById("quotesList");
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Filter quotes by category (Quran, Hadith, Advice)
function filterCategory(category) {
    let ul = document.getElementById("quotesList");
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        if (category === 'all') {
            li[i].style.display = "";
        } else {
            let itemCategory = li[i].getAttribute('data-category');
            if (itemCategory === category) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}
