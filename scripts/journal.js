/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry = {
    date: "January 19 2020",
    concepts: "Javascript functions, objects, and more!",
    comments: "Javascript is a fun, but intimidating language..can't wait to learn more!",
    mood: "Excited"
}

const journalEntries = {
    entry: []
}

journalEntries.entry.push(journalEntry)
console.log(journalEntries)

const moreLearned = {
    learned: ["Working in a group", "Git commands"]
}

journalEntries.entry.push(moreLearned)
console.log(journalEntries)

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const journalContainer = document.querySelector(".entryLog")

const makeJournalEntryComponent = (journalEntries) => {
    // Create your own HTML structure for a journal entry
    return `
        <h1>${journalEntry.date}</h1>
        <h2>${journalEntry.concepts}</h2>
        <h3>${journalEntry.comments}</h3>
        <h4>${journalEntry.mood}</h4>
    `
}

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    const entryInfo = makeJournalEntryComponent(entries)
    journalContainer.innerHTML += entryInfo
}

// Invoke the render function
renderJournalEntries(journalEntries)