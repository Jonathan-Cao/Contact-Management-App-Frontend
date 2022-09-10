const url =
  "https://asia-southeast1-jonathan-otot-b4.cloudfunctions.net/getAsianCurrencies";

export function getAsianCurrencies() {
  return fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
}
