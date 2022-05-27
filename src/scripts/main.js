import { buttonsTheClown } from "./buttonsTheClown.js";
import { fetchClowns, fetchReservations, fetchCompletions } from "./dataAccess.js";
// import {buttonsTheClown} from "./buttonsTheClown.js"

/****FETCH STATE BEFORE DISPLAYING *****************/
/* You need to fetch the data from the API and store it in application state before 
you can convert the data structures to HTML representations. */


const render = () => {
    fetchReservations()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = buttonsTheClown()
            }
        )
}

render()

/* assign main element to a variable */
const mainContainer = document.querySelector("#container")


mainContainer.addEventListener(
    "stateChanged", customEvent => {
        render()
    }
)


