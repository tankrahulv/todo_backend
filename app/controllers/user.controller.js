const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    photoUrl: req.body.photoUrl
  });

  // Save User in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User.",
      });
    });
};

// // Retrieve all Tasks from the database.
// exports.findAll = (req, res) => {
//     const title = req.query.title;
//     var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
//     Task.find(condition)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tasks."
//         });
//       });
//   };

// // Find a single Task with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;
  
//     Task.findById(id)
//       .then(data => {
//         if (!data)
//           res.status(404).send({ message: "Not found Task with id " + id });
//         else res.send(data);
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .send({ message: "Error retrieving Task with id=" + id });
//       });
//   };

// // Update a Task by the id in the request
// exports.update = (req, res) => {
//     if (!req.body) {
//       return res.status(400).send({
//         message: "Data to update can not be empty!"
//       });
//     }
  
//     const id = req.params.id;
  
//     Task.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//       .then(data => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot update Task with id=${id}. Maybe Task was not found!`
//           });
//         } else res.send({ message: "Task was updated successfully." });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating Task with id=" + id
//         });
//       });
//   };
 
