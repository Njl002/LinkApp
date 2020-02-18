const userRoutes = (app, path, fs) => {

  // variables
  const dataPath = '../json/users.json';

  // refactored helper methods
  const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
      fs.readFile(path.join(__dirname, filePath), encoding, (err, data) => {
          if (err) {
              throw err;
          }

          callback(returnJson ? JSON.parse(data) : data);
      });
  };

  const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

      fs.writeFile(path.join(__dirname, filePath), fileData, encoding, (err) => {
          if (err) {
              throw err;
          }

          callback();
      });
  };

  // READ
  app.get('/api/getUsers', (req, res) => {
      fs.readFile(path.join(__dirname, dataPath), 'utf8', (err, data) => {
          if (err) {
              throw err;
          }

          res.send(JSON.parse(data));
      });
  });

  // CREATE
  app.post('/api/addUser', (req, res) => {
    readFile(data => {
      //const newUserId = data.users.length + 1;
      // add new user
      //let newUser = JSON.parse(JSON.stringify(req.body));
      let newUser = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        imageURL: req.body.imageURL
      }
      data.users.push(newUser);
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send("new user added"); // return the updated list
      });
    },
      true);
  });

  // // UPDATE
  // app.put('/api/updateUser/:id', (req, res) => {
  //   readFile(data => {
  //     const userId = req.params["id"];
  //     let index = data.users.findIndex(x => x.id === userId);
  //     data.users[index] = JSON.parse(req.body.data);
  //     writeFile(JSON.stringify(data, null, 2), () => {
  //       res.status(200).send("user id" + userId + " updated");
  //     });
  //   },
  //     true);
  // });

  //   // DELETE
  // app.put('/api/updateUser/:id', (req, res) => {
  //   readFile(data => {
  //     const userId = req.params["id"];
  //     let index = data.users.findIndex(x => x.id === userId);
  //     data.users.splice(index, 1); // remove
  //     writeFile(JSON.stringify(data, null, 2), () => {
  //       res.status(200).send("user id" + userId + " updated");
  //     });
  //   },
  //     true);
  // });
  

};

module.exports = userRoutes;