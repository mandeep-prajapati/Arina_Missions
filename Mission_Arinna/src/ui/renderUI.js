import { appState } from "../core/appState.js";
import {
    cyberHeader,
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
    arenaReward,
    startMissionBtn,
    attemptOrbs,
    passBtn,
    failBtn
} from "./dom.js";


function renderUserDataOnUi(userData){
    usernameText.innerText = userData.name
    streakValue.innerText = userData.streak
    pointsValue.innerText = userData.points
    rankValue.innerText = userData.rank
    levelText.innerText = userData.level
}


export {renderUserDataOnUi}