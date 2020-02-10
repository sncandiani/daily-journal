import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"


API.getJournalEntries().then(renderJournalEntries)
const hiddenEntryId = document.querySelector("#journalHiddenId")
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
const clearForm = () => {
  
    hiddenEntryId.value = "";
    journalDate.value = "";
    journalConcepts.value = "";
    journalComments.value = "";
    journalMood.value = "";
  }


const addSaveEvent = {
    addSaveEventListener() {
        const button = document.getElementById("recordJournalButton")
        button.addEventListener("click", () => {
            const journal = {
                hiddenId: hiddenEntryId.value,
                date: journalDate.value, 
                concepts: journalConcepts.value,
                comments: journalComments.value, 
                mood: journalMood.value 
              };
                if(journal.date === "" || journal.mood === "Please Select" || journal.concepts === "" || journal.comments === "") {
                    console.log("Entry needs information")
                } else if (journal.hiddenId !== "") {
                    API.updateJournalEntriesFetch(journal, journal.hiddenId)
                    .then(() => {
                        API.getJournalEntries()
                          .then(renderJournalEntries)
                          .then(clearForm);
                      });
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

const changeSection = document.getElementById("entryLog")
const changeEventListener = {
    addChangeEvent() {
         changeSection.addEventListener("click", (event) => {
        if(event.target.id.startsWith("deleteButton--")){
            const buttonId = event.target.id.split("--")[1]
            API.deleteButton(buttonId)
            .then(API.getJournalEntries)
            .then(renderJournalEntries)    
        } else if (event.target.id.startsWith("editButton--")) {
            const editId = event.target.id.split("--")[1]
            API.updateJournalEntries(editId)
            .then(API.getJournalEntries(editId))

        }
    })
}
}

changeEventListener.addChangeEvent()




