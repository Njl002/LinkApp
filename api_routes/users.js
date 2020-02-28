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
      const newUserId = data.users.length + 1;
      // add new user
      let newUser = {
        id: newUserId.toString(),
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        schoolName: req.body.schoolName,
        monthStart: req.body.monthStart,
        yearStart: req.body.yearStart,
        monthEnd: req.body.monthEnd,
        yearEnd: req.body.yearEnd,
        email: req.body.email,
        role: req.body.role,
        hometown: req.body.hometown,
        major: req.body.major,
        skills: req.body.skills, // to change to list
        hobbies: req.body.hobbies, // to change to list
        bio: req.body.bio,
        imageURL: req.body.imageURL
      }
      
      data.users.push(newUser);
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(JSON.stringify(newUser)); // return the updated 
      });
    },
      true);
  });

  //UPDATE
  app.put('/api/updateUser/:id', (req, res) => {
    readFile(data => {
      const userId = req.params["id"];
      let index = data.users.findIndex(x => x.id === userId);

      let updatedUser = {
        id: userId.toString(),
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        schoolName: req.body.schoolName,
        monthStart: req.body.monthStart,
        yearStart: req.body.yearStart,
        monthEnd: req.body.monthEnd,
        yearEnd: req.body.yearEnd,
        email: req.body.email,
        role: req.body.role,
        hometown: req.body.hometown,
        major: req.body.major,
        skills: req.body.skills, // to change to list
        hobbies: req.body.hobbies, // to change to list
        bio: req.body.bio,
        imageURL: req.body.imageURL
      }

      data.users[index] = updatedUser;
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(JSON.stringify(updatedUser));
      });
    },
      true);
  });
  

};

module.exports = userRoutes;