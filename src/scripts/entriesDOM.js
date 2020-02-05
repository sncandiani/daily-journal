import makeJournalEntryComponent from "./entryComponent.js"
//Move the code that is responsible for modifying the DOM into this file
const journalContainer = document.getElementById("entryLog")


const renderJournalEntries = (entries) => {
    journalContainer.innerHTML = ""
    entries.forEach(entry => {
        const entryInfo = makeJournalEntryComponent(entry)

        journalContainer.innerHTML += entryInfo
    })
    /* const entryInfo = makeJournalEntryComponent(entries)
    journalContainer.innerHTML += entryInfo */
}

/* const makeEntries = (entries) => {
    entries.forEach(entry => {
        renderJournalEntries(entry)
    }) */

/* .then(entries => {
    
    entries.forEach(entry => {
        renderJournalEntries(entry)
    }) */


export default renderJournalEntries