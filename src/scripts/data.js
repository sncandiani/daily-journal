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
}
}

export default API