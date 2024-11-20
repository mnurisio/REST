import { locationsService } from "../services/LocationsService";
import { missionsService } from "../services/MissionsService";
import BaseController from "../utils/BaseController";


export class LocationsController extends BaseController{
    constructor(){
        super('api/locations')
        this.router
        .get('', this.getAllLocations)
        .get('/:locationId/missions', this.getLocationByMission)
    }


   async getLocationByMission(request, response, next) {
        try {
            const locationId = request.params.locationId
            const missions = await missionsService.getLocationByMission(locationId)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }
   async getAllLocations(request, response, next) {
        try {
            const locations = await locationsService.getAllLocations()
            response.send(locations)
        } catch (error) {
            next(error)
        }
    }
}