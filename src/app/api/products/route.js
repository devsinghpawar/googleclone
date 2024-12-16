// app/api/products/route.js

import fs from "fs";
import path from "path";

export async function GET() {
  // Path to the product data file
  const filePath = path.join(process.cwd(), "data", "productData.json");

  try {
    // Read the product data from the JSON file
    const data = fs.readFileSync(filePath, "utf8");
    const products = JSON.parse(data); // Parse JSON data
    return new Response(JSON.stringify(products), { status: 200 }); // Return the product data as JSON
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to read the product data." }),
      { status: 500 }
    );
  }
}
