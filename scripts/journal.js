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