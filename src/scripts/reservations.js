import { getReservations, getClowns, savedCompletions, deleteReservation } from "./dataAccess.js";
/* ^^ import function from other module ^^ */

/* export HTML to other module */
export const Reservations = () => {
    const reservations = getReservations()
    const clowns = getClowns()

    let html = "<ul>"

    reservations.sort((a, b) => {
        let da = new Date(a.Date),
            db = new Date(b.Date);
        return da - db;

    });
    const reservationList = reservations.map((reservation) => {
        return `
                <li>
                ${reservation.childName}'s party is on ${reservation.resDate}, located at ${reservation.address}. The party will last for ${reservation.resLength} hours, with ${reservation.numberAttending} guests attending. 
                <button class="reservation_deny" id="reservation--${reservation.id}">Deny Reservation</button>
                <select class="clowns" id="clowns">
                <option value="">Choose Clown</option>
                ${clowns.map(clown =>
            `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`).join("")}
            </select>
                </li>
                `
    }).join("")

        html += reservationList
        html += "</ul>"
return html
}

/* assign main container to variable (same as on main.js) */
const mainContainer = document.querySelector("#container")

/* Add event listener for deny button */
mainContainer.addEventListener("click", click => {
    if(click.target.id.startsWith("reservation--")) {
        const [, reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
        }
    }
)

/* Creating New State for Completion */
mainContainer.addEventListener(
    "change",
    (event) => {
        if(event.target.id === "clown") {
            const [reservationId, clownId] = event.target.value.split("--")
                const completion = {
                    reservationId: parseInt(reservationId),
                    clownId: parseInt(clownId),
                    resDate: Date.now()
                }
                savedCompletions(completion)

        }
    }
)