import Images from './resources/images/index';

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

export function updateUser(data, id) {
  console.log("updating user");
  console.log(data);
  return fetch("/api/updateUser/" + id, {
    method: "PUT",
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
    console.log("update user error: ");
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

export function getImage(userId) {
  if (userId !== undefined) {
    if (userId === "1") {
      return Images.profile.douglas_engelbart;
    }
    else if (userId === "2") {
      return Images.profile.ivan_sutherland;
    }
    else if (userId === "3") {
      return Images.profile.lucy_suchman;
    }
    else if (userId === "4") {
      return Images.profile.vannevar_bush;
    }
    else if (userId === "5") {
      return Images.profile.grace_hopper;
    }
    else if (userId === "6") {
      return Images.profile.allen_newell;
    }
    else if (userId === "7") {
      return Images.profile.amelia_richardson;
    }
    else if (userId === "8") {
      return Images.profile.tracy_kyles;
    }
    else if (userId === "9") {
      return Images.profile.edith_boucher;
    }
    else if (userId === "10") {
      return Images.profile.david_johnson;
    }
    else if (userId === "11") {
      return Images.profile.robert_james;
    }
    else if (userId === "12") {
      return Images.profile.allen_newells;
    }
    else if (userId === "13") {
      return Images.profile.user_image;
    }
    else if (userId === "14") {
      return Images.profile.user_image;
    }
  }
}