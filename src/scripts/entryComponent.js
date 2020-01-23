//Move the code that is responsible for creating the journal entry HTML component into this file.
const makeJournalEntryComponent = (journalEntries) => {
    // Create your own HTML structure for a journal entry
    return `
        <h1>${journalEntries.date}</h1>
        <h2>${journalEntries.concepts}</h2>
        <h3>${journalEntries.comments}</h3>
        <h4>${journalEntries.mood}</h4>
    `
}

const makingEntries = (entries)
    entries.forEach(entry => {          
    const entryHtml = makeJournalEntryComponent(entry); //Make html for each entry
    journalContainer.innerHTML += entryHtml //Append the html to the dom
})