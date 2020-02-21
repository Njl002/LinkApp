const messageRoutes = (app, path, fs) => {

  // variables
  const dataPath = '../json/messages.json';

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
  app.get('/api/getMessages', (req, res) => {
      fs.readFile(path.join(__dirname, dataPath), 'utf8', (err, data) => {
          if (err) {
              throw err;
          }

          res.send(JSON.parse(data));
      });
  });

  // CREATE
  app.post('/api/addMessage', (req, res) => {
    readFile(data => {

      let newMessage = {
        from: req.body.from,
        to: req.body.to,
        body: req.body.body,
        timeStamp: req.body.timeStamp
      }
      data.messages.push(newMessage);
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(JSON.stringify(newMessage)); // return the updated list
      });
    },
      true);
  });
  
};

module.exports = messageRoutes;