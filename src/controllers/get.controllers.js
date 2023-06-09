import {
  getCities,
  getCityIdFlights,
  getFlight,
  getCityIdLodgings,
  getLodging,
  getLodgingPhotos,
  getLodgingCommodities,
  getCityId
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
    const city = await getCityId(id);
    const flightsMap = flights.rows.map((flight) => ({
      id: flight.id,
      companyName: flight.companyName,
      origin: flight.originCity,
      destination: flight.destinationCityName,
      departureDate: flight.departureDate,
      arrivalDate: flight.arrivalDate,
      price: flight.price,
    }));

    const body = {
      name: city.rows[0].name,
      photo: city.rows[0].photo,
      flights: flightsMap
    }

    res.status(200).send(body);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export async function listFlightById(req, res) {
  const { id } = req.params;
  try {
    const flight = await getFlight(id);
    const body = {
      id: flight.rows[0].id,
      companyName: flight.rows[0].companyName,
      origin: flight.rows[0].originCity,
      destination: flight.rows[0].destinationCityName,
      destinationCityId: flight.rows[0].destinationCityId,
      departureDate: flight.rows[0].departureDate,
      arrivalDate: flight.rows[0].arrivalDate,
      price: flight.rows[0].price,
    }
    res.status(200).send(body);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export async function listCityLodgings(req, res) {
  const { id } = req.params;
  try {
    const lodgings = await getCityIdLodgings(id);
    const city = await getCityId(id);


    const lodgingsMap = lodgings.rows.map((lodging) => ({
      id: lodging.id,
      name: lodging.name,
      mainPhoto: lodging.mainPhoto,
      price: lodging.price
    }))

    const body = {
      name: city.rows[0].name,
      lodgings: lodgingsMap
    }

    res.status(200).send(body);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export async function listLodgingById(req, res) {
  const { id } = req.params;
  try {
    const lodging = await getLodging(id);
    if (lodging.rows.length === 0) {
      res.status(404).send("Lodging not found");
      return;
    }
    const lodgingPhotos = await getLodgingPhotos(id);
    const lodgingCommodities = await getLodgingCommodities(id);

    const body = {
      id: lodging.rows[0].id,
      name: lodging.rows[0].name,
      price: lodging.rows[0].price,
      description: lodging.rows[0].description,
      mainPhoto: lodging.rows[0].mainPhoto,
      cityName: lodging.rows[0].cityName,
      photos: lodgingPhotos.rows,
      commodities: lodgingCommodities.rows,
    };

    res.status(200).send(body);
  } catch (error) {
    res.status(500).send(error.message);
  }
}