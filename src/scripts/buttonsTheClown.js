import { ServiceForm } from "./ServiceForm.js"
import { Reservations } from "./reservations.js"
/* ^^ import functions from modules ^^ */

/* call imported functions and export HTML to main.js */
export const buttonsTheClown = () => {
    return `
    <div class="form">
    <img src="https://motionarray.imgix.net/preview-409766-8xKkC2ZjVVOouGEL-large.jpg?w=660&q=60&fit=max&auto=format" class="clown"</div>
        <h1>Buttons & Lollipop</h1>
        <section class="serviceForm">
            <h2>Service Form</h2>
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Reservations()}
        </section>
    `
}