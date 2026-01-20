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
    missionList,
    arenaTitle,
    arenaTime,
    arenaReward,
    startMissionBtn,
    attemptOrbs,
    passBtn,
    failBtn
} from "./dom.js";


function renderUserDataOnUi(userData) {
    usernameText.innerText = userData.name
    streakValue.innerText = userData.streak
    pointsValue.innerText = userData.points
    rankValue.innerText = userData.rank
    levelText.innerText = userData.level
    userTitle.innerText = userData.userClass
}

function renderLeftSide(mission) {
    missionList.innerHTML = ""
    console.log(mission);
    
    

    mission.forEach(data => {
        // mission-item
        const missionItem = document.createElement("div");
        missionItem.classList.add("mission-item");
        missionItem.dataset.mission = data.id;

        // mission-header
        const header = document.createElement("div");
        header.classList.add("mission-header");

        // title
        const title = document.createElement("h3");
        title.classList.add("mission-title");
        title.textContent = data.question;

        // priority pill
        const priority = document.createElement("span");
        priority.classList.add("priority-pill", `priority-${data.priority}`);
        priority.textContent = data.priority;

        // priority icon svg
        const prioritySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        prioritySvg.classList.add("priority-icon");
        prioritySvg.setAttribute("viewBox", "0 0 24 24");

        const priorityPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        priorityPath.setAttribute("d", "M12 2l3.09 6.26L19 12l-7 5.74 3.09-6.26L12 2z");

        prioritySvg.appendChild(priorityPath);
        priority.prepend(prioritySvg);

        // footer
        const footer = document.createElement("div");
        footer.classList.add("mission-footer");

        // xp icon svg
        const xpSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        xpSvg.classList.add("xp-icon");
        xpSvg.setAttribute("viewBox", "0 0 24 24");

        const xpPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        xpPath.setAttribute("d", "M13 3h-2v10h5l-5 7v-4h-2V3z");

        xpSvg.appendChild(xpPath);

        // xp text
        const xpText = document.createElement("span");
        xpText.classList.add("xp-text");
        xpText.textContent = `+${data.xp} XP`;

        // assemble footer
        footer.append(xpSvg, xpText);

        // assemble header
        header.append(title, priority);

        // assemble mission item
        missionItem.append(header, footer);
        missionList.appendChild(missionItem)
        
    });
}


// function 

export { renderUserDataOnUi , renderLeftSide}