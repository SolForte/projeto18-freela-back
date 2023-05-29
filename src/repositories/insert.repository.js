import { db } from "../database/db.connection.js";

export function getCompanyName(name) {
  return db.query(`SELECT * FROM companies WHERE name = $1;`, [name]);
}

export function insertCompany(name) {
  return db.query(
    `
        INSERT INTO companies ("name") VALUES ($1);`,
    [name]
  );
}

export function getCityName(name) {
  return db.query(`SELECT * FROM cities WHERE name = $1;`, [name]);
}

export function insertCity(name, photo) {
  return db.query(
    `
        INSERT INTO cities ("name", "photo") VALUES ($1, $2);`,
    [name, photo]
  );
}

export function insertFlight(
  companyId,
  departureCityId,
  destinationCityId,
  departureDate,
  arrivalDate,
  price
) {
  return db.query(
    `
        INSERT INTO flights ("companyId", "departureCityId", "destinationCityId", "departureDate", "arrivalDate", "price") VALUES ($1, $2, $3, $4, $5);`,
    [
      companyId,
      departureCityId,
      destinationCityId,
      departureDate,
      arrivalDate,
      price,
    ]
  );
}

export function getLodgingNameCity(name, city) {
  return db.query(`SELECT * FROM lodgings WHERE name = $1 AND city = $2;`, [
    name,
    city,
  ]);
}

export function insertLodging(
  name,
  city,
  mainPhoto,
  description,
  price
) {
  return db.query(
    `
        INSERT INTO lodgings ("name", "city", "mainPhoto", "description", "price") VALUES ($1, $2, $3, $4, $5, $6);`,
    [name, city, mainPhoto, description, price]
  );
}

export function insertLodgingPhoto(lodgingId, url) {
  return db.query(
    `
        INSERT INTO lodging_photos ("lodgingId", "url") VALUES ($1, $2);`,
    [lodgingId, url]
  );
}

export function getLodgingCommoditiesDuplicates(lodgingId, commodityId) {
  return db.query(
    `
        SELECT * FROM lodging_commodities WHERE "lodgingId" = $1 AND "commodityId" = $2;`,
    [lodgingId, commodityId]
  );
}

export function insertLodgingCommodities(lodgingId, commodityId) {
  return db.query(
    `
        INSERT INTO lodging_commodities ("lodgingId", "commodityId") VALUES ($1, $2);`,
    [lodgingId, commodityId]
  );
}

export function getCommodityName(name) {
  return db.query(`SELECT * FROM commodities WHERE name = $1;`, [name]);
}

export function insertCommodity(name) {
  return db.query(
    `
        INSERT INTO commodities ("name") VALUES ($1);`,
    [name]
  );
}
