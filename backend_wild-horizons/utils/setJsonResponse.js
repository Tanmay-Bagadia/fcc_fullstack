export const setJSONResponse = (res, statusCode, payLoad) => {
  res.setHeader("Content-type", "application.json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-All-Methods", "GET");
  res.statusCode = statusCode;
  res.end(JSON.stringify(payLoad));
};
