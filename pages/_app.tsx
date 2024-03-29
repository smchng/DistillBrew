import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/global.css";

import Head from "next/head";
import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";
import Home from "@/pages/index";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import HowTo from "@/pages/howTo";
import Products from "@/pages/products";
import Blog from "@/pages/blog";
import Sent from "@/pages/sent";
import Confirm from "@/pages/confirm";
import BlogPost from "@/pages/blogPost";
import Burner from "@/pages/products/burner";
import Filter from "@/pages/products/filter";
import Set from "@/pages/products/set";
import Machine from "@/pages/products/machine";
import Cart from "@/pages/cart";
import Checkout from "@/pages/checkout";
import Citation from "@/pages/citation";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Distill Brew";

    const handleRouteChange = (url: string) => {
      const pageName = url.substring(1) || "Home";
      document.title = `Distill Brew | ${pageName}`;
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const currentPage = router.pathname;

  return (
    <>
      <Head>
        {/* Other head elements */}
        <link rel="icon" type="image/png" href="/imgs/bean.png" />
        {/* Other head elements */}
      </Head>
      <main className={"bg-grey"}>
        <section>
          <Nav />
        </section>
        <section>
          {currentPage === "/" && <Home />}
          {currentPage === "/about" && <About />}
          {currentPage === "/howTo" && <HowTo />}
          {currentPage === "/products" && <Products />}
          {currentPage === "/contact" && <Contact />}
          {currentPage === "/blog" && <Blog />}
          {currentPage === "/blogPost" && <BlogPost />}
          {currentPage === "/cart" && <Cart />}
          {currentPage === "/checkout" && <Checkout />}
          {currentPage === "/confirm" && <Confirm />}
          {currentPage === "/sent" && <Sent />}
          {currentPage === "/citation" && <Citation />}
          {currentPage === "/products/filter" && <Filter />}
          {currentPage === "/products/burner" && <Burner />}
          {currentPage === "/products/set" && <Set />}
          {currentPage === "/products/machine" && <Machine />}
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
