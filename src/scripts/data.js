const baseURL = "http://localhost:8088/entries"
const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    }, 
    saveJournalEntries (newJournalEntry) {
        return   fetch("http://localhost:8088/entries", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
    }, 
    deleteButton(buttonId){
        return fetch(`${baseURL}/${buttonId}`, {
            method: "DELETE"
        });
}, 
    updateJournalEntriesFetch(journal){
        return fetch(`${baseURL}/${journal.hiddenId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journal)
        })
    },
    updateJournalEntries (journal) {
        return fetch(`${baseURL}/${journal}`)
        .then(resp => resp.json())
        .then(journalEntry => {
            const hiddenEntryId = document.querySelector("#journalHiddenId")
            const journalDate = document.getElementById("journalDate")
            const journalConcepts = document.getElementById("journalText")
            const journalComments = document.getElementById("journalTextArea")
            const journalMood = document.getElementById("journalSelect")
            console.log(journalEntry)
            hiddenEntryId.value = journalEntry.id //User no see. 
            journalDate.value = journalEntry.date
            journalConcepts.value = journalEntry.concepts
            journalComments.value = journalEntry.comments
            journalMood.value = journalEntry.mood 
        })  
    }
    }

export default API

