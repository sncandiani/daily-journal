const makeJournalEntryComponent = (journalEntries) => {
    // Create your own HTML structure for a journal entry
    return `
        <h1>${journalEntries.date}</h1>
        <h2>${journalEntries.concepts}</h2>
        <h3>${journalEntries.comments}</h3>
        <h4>${journalEntries.mood}</h4>
    `
}





