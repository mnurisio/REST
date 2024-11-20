import { dbContext } from "../db/DbContext"



class MissionsService{

   async updateMission(missionId, missionData) {
        const missionUpdate = await dbContext.Missions.findById(missionId)
        missionUpdate.completed = missionData.completed
        await missionUpdate.save()
        return missionUpdate
    }


    
    async createMission(missionData) {
        const mission = await dbContext.Missions.create(missionData)
        await mission.populate('rat', 'callsign specialties ratId')
        await mission.populate('location')
        return mission
    }
    
    async getAllMissions() {
        const missions = await dbContext.Missions.find().populate('location').populate('rat', 'callsign specialties')
        return missions
    }
    
    async getMissionForRat(ratId) {
        const missions = await dbContext.Missions.find({ratId: ratId})
        return missions
    }
    
    async getLocationByMission(locationId) {
        const missions = await dbContext.Missions.find({locationId: locationId}).populate('rat', 'callsign')
        return missions
    }
}

export const missionsService = new MissionsService()