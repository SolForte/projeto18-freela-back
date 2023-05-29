import {
  getCompanyName,
  insertCompany,
  insertCity,
  insertFlight,
  insertLodging,
  insertLodgingPhoto,
  insertLodgingCommodities,
  insertCommodity,
  getCityName,
  getLodgingNameCity,
  getCommodityName,
  getLodgingCommoditiesDuplicates,
  checkLodgingPhoto,
} from "../repositories/insert.repository.js";

export async function postCompany(req, res) {
  const { name } = req.body;
  try {
    const company = await getCompanyName(name);
    if (company.rowCount !== 0)
      return res.status(409).send({ message: "Empresa já cadastrada!" });
    await insertCompany(name);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function postCity(req, res) {
  const { name, photo } = req.body;
  try {
    const city = await getCityName(name);
    if (city.rowCount !== 0)
      return res.status(409).send({ message: "Cidade já cadastrada!" });
    await insertCity(name, photo);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function postFlight(req, res) {
  const {
    companyId,
    originCity,
    destinationCityId,
    departureDate,
    arrivalDate,
    price,
  } = req.body;
  try {
    await insertFlight(
      companyId,
      originCity,
      destinationCityId,
      departureDate,
      arrivalDate,
      price
    );
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function postLodging(req, res) {
  const { name, city, mainPhoto, description, price } = req.body;
  try {
    const lodging = await getLodgingNameCity(name, city);
    if (lodging.rowCount !== 0)
      return res.status(409).send({ message: "Hospedagem já cadastrada!" });
    await insertLodging(name, city, mainPhoto, description, price);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function postLodgingPhoto(req, res) {
  const { lodgingId, url } = req.body;
  try {
    const lodgingPhoto = await checkLodgingPhoto(lodgingId, url);
    if (lodgingPhoto.rowCount !== 0)
      return res.status(409).send({ message: "Foto já cadastrada!" });
    await insertLodgingPhoto(lodgingId, url);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function postLodgingCommodities(req, res) {
  const { lodgingId, commodityId } = req.body;
  try {
    const commodities = await getLodgingCommoditiesDuplicates(lodgingId, commodityId);
    if (commodities.rowCount !== 0)
      return res.status(409).send({ message: "Comodidade já cadastrada!" });
    //await insertLodgingCommodities(lodgingId, commodityId);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function postCommodity(req, res) {
  const { name } = req.body;
  try {
    const commodity = await getCommodityName(name);
    if (commodity.rowCount !== 0)
      return res.status(409).send({ message: "Comodidade já cadastrada!" });
    await insertCommodity(name);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
}
