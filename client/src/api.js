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
  console.log("Adding user");
  console.log(data);
  return fetch("/api/addUser", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    console.log(response);
    return response.json();
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

export function addMessage(data) {
  console.log("Adding Message");
  console.log(data);
  return fetch("/api/addMessage", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    console.log(response);
    return response.json();
  })
  .catch(error => {
    console.log("add message error: ");
    console.log(error);
  })
}