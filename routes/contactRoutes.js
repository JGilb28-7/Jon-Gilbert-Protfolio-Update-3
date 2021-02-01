// Requiring our models and passport as we've configured it
const db = require("../models");
//const passport = require("../config/passport");

module.exports = function(app) {

  // GET route for getting all of the contacts
  app.get("/api/contactDB/", function(req, res) {
    db.ContactDB.findAll({})
      .then(function(dbContactDB) {
        res.json(dbContactDB);
      });
  });

//fields from the contactDB
  // firstname:
  // lastname:
  // email:
  // reason:
  // Get route for returning posts of a specific category
  app.get("/api/contactDB/:firstname", function(req, res) {
    db.ContactDB.findOne({
      where: {
        firstname: req.params.firstname
      }
    })
      .then(function(dbContactDB) {
        res.json(dbContactDB);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/contactDB/:lastname", function(req, res) {
    db.ContactDB.findOne({
      where: {
        lastname: req.params.lastname
      }
    })
      .then(function(contactDB) {
        res.json(contactDB);
      });
  });
  app.get("/api/contactDB/:email", function(req, res) {
    db.ContactDB.findOne({
      where: {
        email: req.params.email
      }
    })
      .then(function(contactDB) {
        res.json(contactDB);
      });
  });
  app.get("/api/contactDB/:reason", function(req, res) {
    db.ContactDB.findOne({
      where: {
        reason: req.params.reason
      }
    })
      .then(function(contactDB) {
        res.json(contactDB);
      });
  });
  // POST route for saving a new post
  app.post("/api/", function(req, res) {
    console.log(req.body);
    db.ContactDB.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      reason: req.body.reason,
 
    })
      .then(function(dbContactDB) {
        res.json(dbContactDB);
      });
  });

  // PUT route for updating posts
  app.put("/api/contactDB", function(req, res) {
    db.contactDB.update(req.body,
      {
        where: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          reason: req.body.reason,
        }
      })
      .then(function(dbContactDB) {
        res.json(dbContactDB);
      });
  });
};
