//create a container for entries
const journalContainer = document.querySelector(".entryLog")
//make html
const makeJournalEntryComponent = (journalEntries) => {
    // Create your own HTML structure for a journal entry
    return `
        <h1>${journalEntries.date}</h1>
        <h2>${journalEntries.concepts}</h2>
        <h3>${journalEntries.comments}</h3>
        <h4>${journalEntries.mood}</h4>
    `
}
//render html to DOM
const renderJournalEntries = (entries) => {
    const entryInfo = makeJournalEntryComponent(entries)
    journalContainer.innerHTML += entryInfo
}

//fetch api (entries.json)
const url = "http://localhost:3000/entries"
fetch(url) // Fetch from the API
    .then(resp => resp.json())  // Json Parse
    .then(entries => {
        // Loop through each entry
        entries.forEach(entry => {
            
            const entryHtml = makeJournalEntryComponent(entry); //Make html for each entry
            journalContainer.innerHTML += entryHtml //Append the html to the dom
        })

    })

    