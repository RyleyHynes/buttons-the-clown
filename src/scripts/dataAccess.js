/*Create an Object to hold temporary state (this object 
will hold a request property that has an initial value 
of an empty array*/
const applicationState = {
    reservations: [],
    clowns: [],
    completions: []
}

/* 
1. Add event listener to invoke the render function to repeatedly print HTML again.
2. assign main container to variable (same as on main.js) 
*/
const mainContainer = document.querySelector("#container")


/* 
1. API is connected to JSON server which is currently 8088
2. assign API to variable 
*/
const API = "http://localhost:8088"  //brings you to JSON server

/* 
1. fetch existing requests from API (HTTP GET Method)
*/
export const fetchReservations = () => {
    return fetch(`${API}/reservations`)     //fetch reservations
        //Convert it to JSON format
        .then(response => response.json())
        //store external state in application state
        .then((data) => {
            applicationState.reservations = data
        }
        )
}

/*fetch clown data*/
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then((data) => {
            applicationState.clowns = data
        }
        )
}

/*fetch completion data*/
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then((data) => {
            applicationState.completions = data
        }
        )
}


/* Export function that returns a copy of state, using .map method */
export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({ ...reservation }))
}

/* Export function that returns a copy of state, using .map method */
export const getClowns = () => {
    return applicationState.clowns.map(clown => ({ ...clown }))
}

/* User type in form fields, changing state of app.
Create function for POST method - API creates something new -- create the reservation.
Need to declare a new method because in default,it will continue "get" method */
export const sendReservation = (userReservationRequest) => {
    const fetchOptions = {
        method: "POST",   // "Hey API!! I want you to create something new!"
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservationRequest)
    }


    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })

}





/* Create another function after the party is completed, 
to assign which clown hosted party */
export const savedCompletions = (completedReservations) => {
    const fetchCompletedReservations = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completedReservations)
    }

    return fetch(`${API}/completions`, fetchCompletedReservations)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


/* Function that deletes the request */
export const deleteReservation = (id) => {
    return fetch(`${API}/reservation/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}




