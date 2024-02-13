import { Product } from "@/components/product/product";

import set from "@/public/imgs/fullset.png";
import machine from "@/public/imgs/siphon.png";
import paddle from "@/public/imgs/paddle.png";
import filter from "@/public/imgs/filter.png";

export default function Products() {
  return (
    <div>
      <Product
        image={set}
        alt="Outer Image"
        link="/products/set"
        stylingClasses1="bg-beige2 relative"
        stylingClasses2="h-screen object-cover"
        name="Siphon Set"
      />

      <div className="flex">
        <div className=" flex-1">
          <div className="bg-peach w-full h-full ">
            <Product
              image={machine}
              alt="Outer Image"
              link="/products/machine"
              stylingClasses1="bg-beige1 w-full h-full relative"
              stylingClasses2=" object-cover"
              name="Machine"
            />
          </div>
        </div>
        <div className="flex-1">
          <div>
            <Product
              image={paddle}
              alt="Outer Image"
              link="/products/paddle"
              stylingClasses1="bg-blue relative"
              name="Paddle"
            />
          </div>
          <div>
            <Product
              image={filter}
              alt="Outer Image"
              link="/products/filter"
              stylingClasses1="bg-matcha relative"
              name="Filter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <h2>Products</h2>
      <div class="product-container">
        <div class="main-products">
          <img class="set" src="assets/siphon.webp" alt="siphons" />
          <p class="product-title">Siphon - Set</p>
        </div>
        <div class="sub-products">
          <div class="machine product-left">
            <img src="assets/siphon2.webp" alt="siphons" />
            <p class="product-title">Machine</p>
          </div>
          <div class="product-right">
            <div class="paddle">
              <img src="assets/Rectangle 20.png" alt="siphons" />
              <p class="product-title">Paddle</p>
            </div>
            <div class="filter">
              <img src="assets/Rectangle 21.png" alt="siphons" />
              <p class="product-title">Filter</p>
            </div>
          </div>
        </div>
      </div> */
}
