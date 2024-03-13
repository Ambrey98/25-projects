import { useEffect, useState } from "react";
import "./LoadMoreMain.scss";

export default function LoadMoreMain() {
  const limit = 20;
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [skip, setSkip] = useState<number>(0);

  const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

  useEffect(() => {
    setIsLoading(true);

    const fetchProducts = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("An error occured");
        }

        const productsData = await response.json();

        if (products.length > 0) {
          setProducts(products.concat(productsData.products));
        } else {
          setProducts(productsData.products);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
    setIsLoading(false);
  }, [skip, url]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && products && products.length > 0 && (
        <div className="images-container">
          {products.map((product) => (
            <div className="product-image">
              <img
                src={product.images[product.images.length - 1]}
                alt={product.title}
              />
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setSkip(skip < 100 ? skip + 20 : skip)}
        disabled={products.length === 100}
      >
        Load more
      </button>
    </>
  );
}
