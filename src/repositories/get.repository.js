import { db } from "../database/db.connection.js";

export async function getCities() {
  return db.query(`SELECT * FROM cities;`);
}

export async function getCityIdFlights(id) {
  return db.query(`
  SELECT 
    flights.*, 
    companies.name AS "companyName",
    cities.name AS "departureCityName"
  FROM flights
  JOIN companies ON flights."companyId" = companies.id
  JOIN cities ON flights."departureCityId" = cities.id
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
  return db.query(`SELECT * FROM lodgings WHERE "city" = $1;`, [id]);
}

export async function getLodging(id) {
  return db.query(`SELECT * FROM lodgings WHERE id = $1;`, [id]);
}
