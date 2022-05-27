import { sendReservation } from "./dataAccess.js"




export const ServiceForm = () => {


    /*HTML input fields are how you collect user data. Time for you to define some fields to collect the information from a user that Maude and Merle want about a service request.*/
    /* build HTML */
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberAttending">Number of Guests Attending</label>
            <input type="text" name="numberAttending" class="input" />
        </div>
        <div class="field">
        <label class="label" for="address">Address</label>
        <input type="text" name="address" class="input" />
        </div>
        <div class="field">
        <label class="label" for="resDate">Reservation Date</label>
        <input type="date" name="resDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="resLength">Reservation Length</label>
            <input type="number" name="resLength" class="input" />
        </div>

        <button class="button" id="submitReservation">Submit Reservation</button>
    `
    return html
}



/* Add event listener for when the user clicked on 
"Submit Party Request" button to send the data for permanent storage */

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const user_ParentName = document.querySelector("input[name='parentName']").value
        const user_ChildName = document.querySelector("input[name='childName']").value
        const user_Attendance = document.querySelector("input[name='numberAttending']").value
        const user_Address = document.querySelector("input[name='address']").value
        const user_Date = document.querySelector("input[name='resDate']").value
        const user_Hour = document.querySelector("input[name='resLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName:user_ParentName,
            childName:user_ChildName,
            numberAttending:user_Attendance,
            address:user_Address,
            resDate:user_Date,
            resLength:user_Hour
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})