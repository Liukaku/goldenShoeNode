const { admin, db } = require("./admin");

exports.getProductsByTag = (request, response) => {
  let query = request.query.tag.split("");
  query[0] = query[0].toUpperCase();
  console.log(query);
  db.collection(`products`)
    .where(`gender`, `==`, `${query.join("")}`)
    .get()
    .then((res) => {
      let resArr = [];
      res.docs.forEach((doc) => {
        resArr.push({ [doc.id]: doc.data() });
      });
      response.send({ res: resArr });
    })
    .catch((err) => {
      console.log("erre");
      console.log(err);
      response.status(400).send({ error: err });
    });

  request.query.id;
};
