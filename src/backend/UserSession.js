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

  return {
    getUsername: getUsername,
    setUsername: setUsername,
    getAuthenticated: getAuthenticated,
    setAuthenticated: setAuthenticated,
  };
})();

export default UserSession;