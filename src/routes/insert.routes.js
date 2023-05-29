import { Router } from "express";
import {
  postCompany,
  postCity,
  postFlight,
  postLodging,
  postLodgingPhoto,
  postLodgingCommodities,
  postCommodity,
} from "../controllers/insert.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import {
  companySchema,
  citySchema,
  flightSchema,
  lodgingSchema,
  lodgingPhotoSchema,
  lodgingCommoditiesSchema,
  commoditySchema,
} from "../schemas/insert.schema.js";

const insertRouter = Router();

insertRouter.post(
  "/insert/company",
  validateSchema(companySchema),
  postCompany
);
insertRouter.post("/insert/city", validateSchema(citySchema), postCity);
insertRouter.post("/insert/flight", validateSchema(flightSchema), postFlight);
insertRouter.post(
  "/insert/lodging",
  validateSchema(lodgingSchema),
  postLodging
);
insertRouter.post(
  "/insert/lodging/photo",
  validateSchema(lodgingPhotoSchema),
  postLodgingPhoto
);
insertRouter.post(
  "/insert/lodging/commodities",
  validateSchema(lodgingCommoditiesSchema),
  postLodgingCommodities
);
insertRouter.post(
  "/insert/commodity",
  validateSchema(commoditySchema),
  postCommodity
);

export default insertRouter;
