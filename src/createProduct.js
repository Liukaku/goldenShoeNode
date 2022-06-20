const { admin, db } = require("./admin");

exports.createProducts = (request, response) => {
  const docData = JSON.parse(request.body);
  console.log("beep");

  db.collection("products")
    .doc()
    .set(docData)
    .then((res) => {
      console.log("success");
      console.log(res);
      response.send({ success: true });
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
      response.send({ success: false });
    });
};
