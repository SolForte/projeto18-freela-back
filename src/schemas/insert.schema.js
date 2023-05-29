import joi from "joi";

export const companySchema = joi.object({
  name: joi.string().required(),
});

export const citySchema = joi.object({
  name: joi.string().required(),
  photo: joi.string().uri().required(),
});

export const flightSchema = joi.object({
  companyId: joi.number().integer().required(),
  departureCityId: joi.number().integer().required(),
  destinationCityId: joi.number().integer().required(),
  departureDate: joi.string().required(),
  arrivalDate: joi.string().required(),
  price: joi.number().required(),
});

export const lodgingSchema = joi.object({
  name: joi.string().required(),
  city: joi.number().integer().required(),
  mainPhoto: joi.string().uri().required(),
  description: joi.string().required(),
  price: joi.number().required(),
});

export const lodgingPhotoSchema = joi.object({
  lodgingId: joi.number().integer().required(),
  photo: joi.string().uri().required(),
});

export const lodgingCommoditiesSchema = joi.object({
  lodgingId: joi.number().integer().required(),
  commodityId: joi.number().integer().required(),
});

export const commoditySchema = joi.object({
  name: joi.string().required(),
});
