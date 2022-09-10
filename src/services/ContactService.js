const url =
  "http://jonathanototb22-env.eba-4jp2bjjw.ap-southeast-1.elasticbeanstalk.com/api/contacts";

export function getAllContacts() {
  return fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
}

export function getContactById(id) {
  return fetch(`${url}/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
}

export function addContact(contact) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify(contact),
  });
}

export function updateContact(id, contact) {
  return fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify(contact),
  });
}

export function deleteContact(id) {
  return fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
  });
}
