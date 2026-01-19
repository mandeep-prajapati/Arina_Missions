
let appState = {
    users: [],
    system: {
        attempts:"gh",
        dailyLimit: 5,
    },
    activeMission: null,
    missions: [],

    saveAppState: ()=>{ localStorage.setItem("appState", JSON.stringify(appState))},
    getFromLocalStorage: JSON.parse(localStorage.getItem("appState")),
}

export {appState}