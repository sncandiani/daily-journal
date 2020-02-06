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

const addSaveEvent = {
    addSaveEventListener() {
        const button = document.getElementById("recordJournalButton")
        button.addEventListener("click", () => {
                if(journalDate.value === "" || journalMood.value === "Please Select" || journalConcepts.value === "" || journalComments.value === "") {
                    console.log("Entry needs information")
                }
                else {
                API.saveJournalEntries(newJournalEntry(journalDate.value,journalConcepts.value,journalComments.value,journalMood.value)).then(API.getJournalEntries).then(renderJournalEntries)
                }
            })

        }
} 

const addRadioEvent = {
    addRadioEventListener() {
        const radio1 = document.getElementById("radio--1") 
        const radio2 = document.getElementById("radio--2") 
        const radio3 = document.getElementById("radio--3") 
        radio1.addEventListener("click", () => {
            const mood = event.target.value
           API.getJournalEntries().then(response => response.filter(response => {
            return response.mood.toUpperCase() === mood.toUpperCase()}
            )).then(renderJournalEntries)
        })
        radio2.addEventListener("click", () => {
            const mood = event.target.value
            API.getJournalEntries().then(response => response.filter(response => {
                return response.mood.toUpperCase() === mood.toUpperCase()}
                )).then(renderJournalEntries)
        })
        radio3.addEventListener("click", () => {
            const mood = event.target.value
            API.getJournalEntries().then(response => response.filter(response => {
                return response.mood.toUpperCase() === mood.toUpperCase()}
                )).then(renderJournalEntries)
        })
    }
}
 
addSaveEvent.addSaveEventListener()
addRadioEvent.addRadioEventListener()

const deleteSection = document.getElementById("entryLog")
const deleteEventListener = {
    addDeleteEvent() {
         deleteSection.addEventListener("click", (event) => {
        if(event.target.id.startsWith("deleteButton--")){
            /* const deleteBtnId = event.target.id;
            const deleteBtnArray = deleteBtnId.split("--");
            const buttonIdToDelete = deleteBtnArray[1]; */

            const buttonId = event.target.id.split("--")[1]
            console.log(buttonId)

            API.deleteButton(buttonId)
            .then(API.getJournalEntries)
            .then(renderJournalEntries)
            
        }
    })
}
}

deleteEventListener.addDeleteEvent()


