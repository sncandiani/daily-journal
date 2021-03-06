const makeJournalEntryComponent = (journalEntries) => {
    // Create your own HTML structure for a journal entry
    return `
    <section>
        <h1>${journalEntries.date}</h1>
        <h2>${journalEntries.concepts}</h2>
        <h3>${journalEntries.comments}</h3>
        <h4>${journalEntries.mood}</h4>
        <button id="deleteButton--${journalEntries.id}">Delete</button>
        <button id="editButton--${journalEntries.id}">Edit</button>
    </section>
    `
}

export default makeJournalEntryComponent
