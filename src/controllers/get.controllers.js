import {
  getCities,
  getCityIdFlights,
  getFlight,
  getCityIdLodgings,
  getLodging,
} from "../repositories/get.repository.js";

export async function listCities(_req, res) {
  try {
    const cidades = await getCities();
    res.status(200).send(cidades.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export async function listFlightsToCity(req, res) {
  const { id } = req.params;
  try {
    const flights = await getCityIdFlights(id);
    const flightsSort = flights.rows.map((flight) => ({
        id: flight.id,
        companyName: flight.companyName,
        departureDate: flight.departureDate,
        arrivalDate: flight.arrivalDate,
        price: flight.price,
        departureCityName: flight.departureCityName
    })) 
    res.status(200).send(flightsSort);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export async function listFlightById(req, res) {
  const { id } = req.params;
  try {
    const flight = await getFlight(id);
    res.status(200).send(flight.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export async function listCityLodgings(req, res) {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export async function listLodgingById(req, res) {
  const { id } = req.params;
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
}
