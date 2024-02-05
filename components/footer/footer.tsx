const Footer = () => {
  const footerContent = [
    {
      title: "Shop",
      page: "All Products, Siphon Machine, Siphon Components, Coffee",
      link: "/products",
    },
  ];
  return (
    <div className="bg-brown text-white p-[5vw]">
      <div className="flex justify-between mb-[8vh]">
        <div>
          <h3>Shop</h3>
          <p>All Products</p>
          <p>Siphon Machine</p>
          <p>Siphon Components</p>
          <p>Coffee</p>
        </div>
        <div>
          <h3>How-To</h3>
          <p>All Products</p>
        </div>
        <div>
          <h3>About</h3>
          <p>All Products</p>
          <p>All Products</p>
          <p>All Products</p>
        </div>
        <div>
          <h3>Subscribe</h3>
          <p>All Products</p>
        </div>
      </div>

      <hr />
      <p className="mt-[3vh]">©Distill Brew Co.</p>
    </div>
  );
};

export default Footer;
