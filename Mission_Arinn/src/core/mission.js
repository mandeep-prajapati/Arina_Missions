
// import { displayQuestionsLeftSide } from "../utils/helpers.js";
import { renderLeftSide } from "../ui/renderUI.js"
export let missionData = []

export async function getDataFromApi() {
    // const missionDataGet = await fetch("https://raw.githubusercontent.com/GurpreetSingh3112/mission-api/refs/heads/main/missions.json")   
    const missionDataGet = await fetch("https://raw.githubusercontent.com/mandeep-prajapati/mission-api/refs/heads/main/mission-api")   

    const data = await missionDataGet.json()

    missionData = data.missions
    
    console.log(missionData);
    renderLeftSide(missionData)
    return missionData
}

