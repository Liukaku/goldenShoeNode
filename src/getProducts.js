const { admin, db } = require("./admin");

exports.getProducts = (request, response) => {
  db.collection(`products`)
    .doc(request.query.id)
    .get()
    .then((doc) => {
      console.log(doc.data());

      response.send({ products: doc.data() });
    })
    .catch((err) => {
      console.log(err);
      response.status(500);
      response.send(err);
    });
};
