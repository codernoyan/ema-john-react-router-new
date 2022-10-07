export const productAndCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    return {products}
}