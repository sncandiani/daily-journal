//should only define functionality for how to access the data, but should not immediately run it.

const API = {
    getJournalEntries () {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())
    }
}
// use that object and get the data

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
/* objectWithGetterMethod.methodToGetData().then(functionThatRendersData) */

API.getJournalEntries.then(renderJournalEntries)