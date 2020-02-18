var UserSession = (function() {
  var getUsername = function() {
    return sessionStorage.getItem("username");
  };
  var setUsername = function(username) {
    sessionStorage.setItem("username", username);
  };
  var getAuthenticated = function() {
    return sessionStorage.getItem("isAuthenticated") === "true";
  };
  var setAuthenticated = function(isAuthenticated) {
    sessionStorage.setItem("isAuthenticated", isAuthenticated);
  };
  var getId = function() {
    return sessionStorage.getItem("userId");
  }
  var setId = function(userId) {
    return sessionStorage.setItem("userId", userId);
  }
 
  return {
    getUsername: getUsername,
    setUsername: setUsername,
    getAuthenticated: getAuthenticated,
    setAuthenticated: setAuthenticated,
    getId: getId,
    setId: setId,
  };
})();

export default UserSession;