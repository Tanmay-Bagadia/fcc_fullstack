import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { setJSONResponse } from "./utils/setJsonResponse.js";
import { getDataByPathParams } from "./utils/getDataByPathParams.js";
import { getDataByQueryParams } from "./utils/getDataByQueryParams.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB();
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  const queryObj = Object.fromEntries(urlObj.searchParams);

  if (urlObj.pathname === "/api" && req.method === "GET") {
    let filteredData = getDataByQueryParams(destinations, queryObj);

    setJSONResponse(res, 200, filteredData);
  } else if (req.url.startsWith("/api/continent") && req.method === "GET") {
    const continent = req.url.split("/").pop();
    const filteredData = getDataByPathParams(
      destinations,
      "continent",
      continent
    );
    setJSONResponse(res, 200, filteredData);
  } else if (req.url.startsWith("/api/country") && req.method === "GET") {
    const country = req.url.split("/").pop();
    const filteredData = getDataByPathParams(destinations, "country", country);
    setJSONResponse(res, 200, filteredData);
  } else {
    setJSONResponse(res, 404, {
      error: "not found",
      message: "The requested route doesn't exist",
    });
  }
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
