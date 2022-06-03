"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
var LayerController = require("../controller/LayerController");
var MaptileController = require("../controller/MaptileController");
var MsPeopleController = require("../controller/MsPeopleController");
var MsWalkPOIController = require("../controller/MsWalkPOIController");
var MsTownController = require("../controller/MsTownController");
var MsVillageController = require("../controller/MsVillageController");
var SoutheastasiaController = require("../controller/SoutheastasiaController");
var GoodMapPOIController = require("../controller/GoodMapPOIController");
/**
 * All application routes.
 */
exports.AppRoutes = [
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
    },
    {
        path: "/GoodMapPOI",
        method: "get",
        action: GoodMapPOIController.getAll
    }
];
