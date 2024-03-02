import React from "react";
import Navbar from "../Navbar/Navbar";
import Filters from "../Filters/Filters";
import Datatable from "../Datatable/Datatable";

const Home = () => {
  return (
    <>
      <section className="home">
        <Navbar />

        <div className="container-content">
          <Datatable />
          <Filters />
        </div>
      </section>
    </>
  );
};

export default Home;
