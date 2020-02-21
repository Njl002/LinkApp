export function getAllUsers() {
  return fetch("/api/getUsers", {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(response => {
    console.log(response);
    return response.json()
  })
  .catch(error => {
    console.log("get user error: ");
    console.log(error);
  })
}

export function addUser(data) {
  return fetch("/api/addUser", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    console.log("Getting response back: ");
    console.log(response);
    return response;
  })
  .catch(error => {
    console.log("add user error: ");
    console.log(error);
  })
}

export function getAllMessages() {
  return fetch("/api/getMessages", {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(response => {
    console.log(response);
    return response.json()
  })
  .catch(error => {
    console.log("get user error: ");
    console.log(error);
  })
}