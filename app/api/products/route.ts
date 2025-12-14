import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";

const PRODUCTS_FILE_PATH = path.join(process.cwd(), "lib", "products-data.ts");

export async function GET() {
  try {
    const fileContent = await readFile(PRODUCTS_FILE_PATH, "utf-8");
    const productsMatch = fileContent.match(/export const products: Product\[\] = (\[[\s\S]*?\n\])/);
    
    if (!productsMatch) {
      return NextResponse.json({ error: "Products not found" }, { status: 500 });
    }

    const productsJson = productsMatch[1]
      .replace(/(\w+):/g, '"$1":')
      .replace(/'/g, '"');
    
    const products = JSON.parse(productsJson);
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error reading products:", error);
    return NextResponse.json({ error: "Failed to read products" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const products = await request.json();
    
    // Gera o conteúdo do arquivo TypeScript
    const fileContent = `export interface Product {
  id: number
  name: string
  slug: string
  category: string
  image: string
  images: string[]
  colors: { name: string; hex: string }[]
  sizes: string[]
  materials: string
  description: string
  features: string[]
  careInstructions: string[]
}

export const products: Product[] = ${JSON.stringify(products, null, 2)
  .replace(/"([^"]+)":/g, '$1:')
  .replace(/"/g, '"')}
`;

    await writeFile(PRODUCTS_FILE_PATH, fileContent, "utf-8");
    
    return NextResponse.json({ success: true, message: "Products saved successfully" });
  } catch (error) {
    console.error("Error saving products:", error);
    return NextResponse.json({ error: "Failed to save products" }, { status: 500 });
  }
}
