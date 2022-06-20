import * as functions from "firebase-functions";
import { getProducts } from "./getProducts";
const express = require("express");
const { newProduct } = require("./newProduct");
const { createProducts } = require("./createProduct");
const { getProductCategory } = require("./getProductCategory");
const cors = require("cors");

const app = express();
app.use(cors());

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

app.post("/newproduct", (request: any, response: any) => {
  newProduct(request, response);
});

app.post("/createproduct", (request: any, response: any) => {
  createProducts(request, response);
});

app.get("/getProducts", (request: any, response: any) => {
  getProducts(request, response);
});

app.get("/getProductCategory", (request: any, response: any) => {
  getProductCategory(request, response);
});

export const api = functions.region("europe-west2").https.onRequest(app);
