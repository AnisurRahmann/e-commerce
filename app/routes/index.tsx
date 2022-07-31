import { Product } from "@prisma/client";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Cart from "~/components/Cart";
import MainHeader from "~/components/MainHeader";
import ProductCard from "~/components/ProductCard";
import stylesUrl from "~/styles/index.css";
import { db } from "~/utils/db.server";

type ProductData = { products: Array<Product> };

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async () => {
  const products = await db.product.findMany();
  const data: ProductData = { products };
  return data;
};

export default function Index() {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartData, setCartData] = useState<[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const data = useLoaderData<ProductData>();

  return (
    <>
      <div className="container">
        <MainHeader
          showCart={showCart}
          setShowCart={setShowCart}
          cartData={cartData}
        />
        <div className="product-list">
          {data.products.map((productItem) => {
            return (
              <ProductCard
                {...productItem}
                cartData={cartData}
                setCartData={setCartData}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
              />
            );
          })}
        </div>
        {showCart && (
          <Cart
            showCart={showCart}
            setShowCart={setShowCart}
            cartData={cartData}
            setCartData={setCartData}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
          />
        )}
      </div>
    </>
  );
}
