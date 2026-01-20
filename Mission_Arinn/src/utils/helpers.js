import { appState } from "../core/appState.js"
import { renderUserDataOnUi, renderLeftSide } from "../ui/renderUI.js"
import { getDataFromApi, missionData } from "../core/mission.js"
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

const PRIORITIES = {
    ALL: "all",
    LOW: "low",
    HIGH: "high",
    SUPER: "super"
}

// let data = await getDataFromApi()

let filterButtonsAre = Array.from(filterButtons)


function displayUserData(){
    for (const userData of savedData.users) {
        let currUserData = {
            name: userData.name,
            streak: userData.streak,
            rank: userData.rank,
            points: userData.points,
            level: userData.level,
            userClass: userData.classId
        }
        renderUserDataOnUi(currUserData)
    }
}
// function displayQuestionsLeftSide(data){
//     let showBasicData = data.map(item => {
//         return {question: item.question, xp: item.xp, priority: item.priority, }
//     });  
    
//     renderLeftSide(showBasicData)    
// } 


let data = await getDataFromApi()


filterButtonsAre.forEach(item => {
    item.addEventListener("click", (e) => {
        const currentButtonFilterValue = e.currentTarget.dataset.filter.toLowerCase();
        filterButtonsAre.forEach(r => {r.classList.remove("active")})
        e.currentTarget.classList.add("active") 
        showPriprityButtonMissions(currentButtonFilterValue)
    })
})


function showPriprityButtonMissions(currentButtonFilterValue){
    if(currentButtonFilterValue === PRIORITIES.ALL){
        let shuffleMission = shuffleArraySafe(data)
        renderLeftSide(shuffleMission)
        return
    }

    const filterData = data.filter(mission => mission.priority === currentButtonFilterValue)

    renderLeftSide(filterData)
}

function shuffleArraySafe(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr;
}


export {displayUserData, renderLeftSide}