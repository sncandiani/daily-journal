//entriesDOM.js - Move the code that is responsible for modifying the DOM into this file.

//render html to DOM
const renderJournalEntries = (entries) => {
    const entryInfo = makeJournalEntryComponent(entries)
    journalContainer.innerHTML += entryInfo
}

