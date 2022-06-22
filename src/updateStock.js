const { admin, db } = require("./admin");

exports.updateStock = (request, response) => {
  const body = JSON.parse(request.body);
  db.collection(`products`)
    .doc(`${body.prodId}`)
    .get()
    .then((doc) => {
      const reqSize = body.size;
      console.log(doc.data());
      const reqSizeStock = doc.data().sizes[reqSize];
      if (reqSizeStock === 0) {
        response.send({ success: false });
      } else {
        db.collection(`products`)
          .doc(body.prodId)
          .update({
            sizes: { ...doc.data().sizes, [reqSize]: reqSizeStock - 1 },
          })
          .then((res) => {
            console.log(res);
            response.send({ success: true });
          })
          .catch((err) => {
            console.log(err);
            response.status(400);
            response.send({ success: false });
          });
      }
    })
    .catch((err) => {
      console.log("err");
      console.log(err);
      response.status(400);
      response.send({ success: false });
    });
};
