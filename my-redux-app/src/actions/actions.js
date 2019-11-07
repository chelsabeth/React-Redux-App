const fetchFacts = () => {
    return {}
}

// redux thunk
const thunk = next => action => store => {
    if (typeof action === 'object') {
        next(action); // forward action untouched
    } else if (typeof action === "function") {
        action() // stop the action and call the function
    }
}