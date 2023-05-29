import { db } from "../database/db.connection.js";

export async function getCities() {
  return db.query(`SELECT cities.id, cities.name FROM cities;`);
}

export async function getCityIdFlights(id) {
  return db.query(`
  SELECT 
    flights.*,
    companies.name AS "companyName",
    cities.name AS "destinationCityName"
  FROM flights
  JOIN companies ON flights."companyId" = companies.id
  JOIN cities ON flights."destinationCityId" = cities.id
  WHERE "destinationCityId" = $1;`, [
    id,
  ]);
}

export async function getFlight(id) {
  return db.query(`
  SELECT 
    flights.*,
    companies.name AS "companyName",
    cities.name AS "destinationCityName"
  FROM flights
  JOIN companies ON flights."companyId" = companies.id
  JOIN cities ON flights."destinationCityId" = cities.id
  WHERE flights.id = $1;`, [id]);
}

export async function getCityIdLodgings(id) {
  return db.query(`
  SELECT
    lodgings.id,
    lodgings.name,
    lodgings."mainPhoto",
    lodgings.price
  FROM lodgings WHERE "city" = $1;
  `, [id]);
}

export async function getLodging(id) {
  return db.query(`
  SELECT
    lodgings.id,
    lodgings.name,
    lodgings.price,
    lodgings.description,
    lodgings."mainPhoto",
    cities.name AS "cityName"
  FROM lodgings
  JOIN cities ON lodgings.city = cities.id
  WHERE lodgings.id = $1;`, [id]);
}

export async function getLodgingPhotos(id){
  return db.query(
    `
    SELECT
    lodging_photos.url
    FROM lodging_photos
    WHERE "lodgingId" = $1;
    `, [id]
  );
}

export function getLodgingCommodities(lodgingId) {
  return db.query(
    `
        SELECT
          commodity.name AS "commodityName"
        FROM
          lodging_commodities
        JOIN commodity ON lodging_commodities."commodityId" = commodity.id
        WHERE "lodgingId" = $1;`,
    [lodgingId]
  );
}