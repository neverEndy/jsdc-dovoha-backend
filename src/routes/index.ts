import * as LayerController from '../controller/LayerController'
import * as MaptileController from '../controller/MaptileController'
import * as MsPeopleController from '../controller/MsPeopleController'
import * as MsWalkPOIController from '../controller/MsWalkPOIController'
import * as MsTownController from '../controller/MsTownController'
import * as MsVillageController from '../controller/MsVillageController'
import * as SoutheastasiaController from '../controller/SoutheastasiaController'

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/layers",
        method: "get",
        action: LayerController.getAll
    },
    {
        path: "/maptiles",
        method: "get",
        action: MaptileController.getAll
    },
    {
        path: "/Minsyong_people",
        method: "get",
        action: MsPeopleController.getAll
    },
    {
        path: "/Minsyong_walk_POI",
        method: "get",
        action: MsWalkPOIController.getAll
    },
    {
        path: "/Minsyong_town",
        method: "get",
        action: MsTownController.getAll
    },
    {
        path: "/Minsyong_village",
        method: "get",
        action: MsVillageController.getAll
    },
    {
        path: "/Southeastasia",
        method: "get",
        action: SoutheastasiaController.getAll
    }
];