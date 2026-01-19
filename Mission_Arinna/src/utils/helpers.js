import { appState } from "../core/appState.js"
import { renderUserDataOnUi } from "../ui/renderUI.js"
import { cyberHeader,
    usernameText,
    userTitle,
    avatarText,
    levelText,
    streakValue,
    pointsValue,
    rankValue,
    filterButtons,
    missionItems,
    arenaTitle,
    arenaTime,
    arenaPriority,
    arenaReward,
    startMissionBtn,
    attemptOrbs,
    passBtn,
    failBtn } from "../ui/dom.js"

    
const savedData = appState.getFromLocalStorage

function displayUserData(){
    for (const userData of savedData.users) {
        let currUserData = {
            name: userData.name,
            streak: userData.streak,
            rank: userData.rank,
            points: userData.points,
            level: userData.level
        }
        renderUserDataOnUi(currUserData)
    }
}

export {displayUserData}