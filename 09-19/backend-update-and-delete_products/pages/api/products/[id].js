import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  try {
    if (request.method === "GET") {
      const product = await Product.findById(id).populate("reviews");

      if (!product) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(product);
    }

    if (request.method === "PUT") {
      const updatedProduct = request.body;

      await Product.findByIdAndUpdate(id, updatedProduct);
      return response
        .status(200)
        .json({ status: "Product successfully updated." });
    }

    if (request.method === "DELETE") {
      await Product.findByIdAndDelete(id);
      response.status(200).json({ status: "Product successfully deleted." });
    }
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ status: "Internal Server Error", error: error.message });
  }
}
