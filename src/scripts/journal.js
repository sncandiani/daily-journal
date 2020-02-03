import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"


API.getJournalEntries().then(renderJournalEntries)

const journalDate = document.getElementById("journalDate")
const journalConcepts = document.getElementById("journalText")
const journalComments = document.getElementById("journalTextArea")
const journalMood = document.getElementById("journalSelect")
const newJournalEntry = (date, concepts, comments, mood) => {
    return {
        "date": date,
        "concepts": concepts,
        'comments': comments,
        "mood": mood
    }
}

const journalArray = [journalDate, journalConcepts, journalComments, journalMood]

const addClickEvent = {
    addSaveEventListener() {
        const button = document.getElementById("recordJournalButton")
        /* console.log(button) */


        button.addEventListener("click", (e) => {
            journalArray.forEach(entry => {
                if(entry.value === "" || entry.value === "Please Select") {
                    console.log("Entry needs information")
                }
                else {

                    return fetch("http://localhost:8088/entries", { // Replace "url" with your API's URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newJournalEntry(`${journalDate.value}`, `${journalConcepts.value}`, `${journalComments.value}`, `${journalMood.value}`))
            })
                .then(API.getJournalEntries)
                .then(renderJournalEntries)

                }
            })

        })
    }
}

addClickEvent.addSaveEventListener()
