import { useEffect } from "react";
import { useRouter } from "next/router";

import "@/styles/global.css";

import Head from "next/head";
import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer";
import Home from "@/pages/index";
import About from "@/pages/about";
import Menu from "@/pages/menu";
import Contact from "@/pages/contact";
import HowTo from "@/pages/howTo";
import Products from "@/pages/products";
import Blog from "@/pages/blog";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Distill Brew";

    const handleRouteChange = (url: string) => {
      document.title = "Distill Brew | " + url;
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
          {currentPage === "/menu" && <Menu />}
          {currentPage === "/howTo" && <HowTo />}
          {currentPage === "/products" && <Products />}
          {currentPage === "/contact" && <Contact />}
          {currentPage === "/blog" && <Blog />}
          {/* Add more conditions for other pages */}
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}
