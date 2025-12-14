import { products as initialProducts, type Product } from "./products-data";

// Salva os produtos no arquivo via API
async function saveToFile(products: Product[]): Promise<boolean> {
  try {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    });
    
    if (!response.ok) {
      console.error("Failed to save products to file");
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Error saving products:", error);
    return false;
  }
}

export async function getProducts(): Promise<Product[]> {
  if (typeof window === "undefined") {
    return initialProducts;
  }
  
  try {
    const response = await fetch("/api/products");
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Error loading products:", error);
  }
  
  return initialProducts;
}

export async function addProduct(product: Omit<Product, "id">): Promise<Product | null> {
  const products = await getProducts();
  const newId = Math.max(0, ...products.map((p) => p.id)) + 1;
  const newProduct = { ...product, id: newId };
  const updatedProducts = [...products, newProduct];
  
  const saved = await saveToFile(updatedProducts);
  return saved ? newProduct : null;
}

export async function updateProduct(id: number, data: Partial<Product>): Promise<boolean> {
  const products = await getProducts();
  const index = products.findIndex((p) => p.id === id);
  
  if (index === -1) return false;
  
  products[index] = { ...products[index], ...data };
  
  return await saveToFile(products);
}

export async function deleteProduct(id: number): Promise<boolean> {
  const products = await getProducts();
  const filtered = products.filter((p) => p.id !== id);
  
  if (filtered.length === products.length) return false;
  
  return await saveToFile(filtered);
}

export async function resetProducts(): Promise<boolean> {
  return await saveToFile(initialProducts);
}
