import { Router } from "express";
import { listCities, listCityLodgings, listFlightById, listFlightsToCity, listLodgingById } from "../controllers/get.controllers.js";

const getRouter = Router();

getRouter.get("/cities", listCities);
getRouter.get("/cities/:id/flights", listFlightsToCity);
getRouter.get("/flights/:id", listFlightById);
getRouter.get("/cities/:id/lodgings", listCityLodgings);
getRouter.get("/lodgings/:id", listLodgingById);

export default getRouter;