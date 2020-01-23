//Move the code that deals with getting the data into this file.
//create a container for entries
const journalContainer = document.querySelector(".entryLog")

//fetch api (entries.json)
const url = "http://localhost:8088/entries"
fetch(url) // Fetch from the API
    .then(resp => resp.json())  // Json Parse
    .then(entries => {
        // Loop through each entry
        entries.forEach(entry => {          
            const entryHtml = makeJournalEntryComponent(entry); //Make html for each entry
            journalContainer.innerHTML += entryHtml //Append the html to the dom
        })

    })

    