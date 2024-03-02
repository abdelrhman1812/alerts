import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { data } from "../../Assets/TableData/tabledata";
import { returnDat } from "../Redux/dataSlice";
const Datatable = () => {
  // Data
  const { alldata } = useSelector((store) => store.allData);
  const [tableData, setTableData] = useState(alldata);
  let dispatch = useDispatch();

  //Search
  const search = (e) => {
    const target = e.target.value.toLowerCase();
    const filtraion = data.filter(
      (item) =>
        item.title.toLowerCase().includes(target) ||
        item.num.toString().includes(target) ||
        item.present.toString().includes(target) ||
        item.risk.toLowerCase().includes(target)
    );
    // console.log(filtraion);
    setTableData(filtraion);
  };

  // return Data
  const rData = () => {
    let btnReturn = document.getElementById("btnReturn");
    btnReturn.classList.add("d-none");
    dispatch(returnDat());
  };

  // show meue filter
  const showMenu = () => {
    let menu = document.querySelector(".filters");
    menu.classList.toggle("showMenu");
  };
  // show details
  const showDetails = (index) => {
    const details = document.getElementsByClassName("row-details")[index];
    details.classList.toggle("d-none");
    details.previousElementSibling.classList.toggle("activess");
  };

  // Update Data when filter
  useEffect(() => {
    setTableData(alldata);
  }, [alldata]);

  return (
    <>
      <section className="data-table">
        <div className="row-head ">
          {/* Head */}
          <div className="head">
            <h1>Alerts</h1>
            {/* Search */}
            <div className=" d-flex align-items-center info ">
              <div className="search">
                <input
                  type="text"
                  placeholder="Search By..."
                  onChange={search}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="bills">
                <i className="fa-solid fa-bell"></i>
                <span className="number">6</span>
              </div>
            </div>
          </div>
        </div>

        {/* Btn return Data */}
        <button
          id="btnReturn"
          type="submit"
          onClick={() => rData()}
          className="btn btn-danger d-none  ms-auto mt-3"
        >
          <i className="fa fa-close "></i>
        </button>
        {/* btn show Menu */}
        <i onClick={showMenu} className="fa fa-close btnMenu"></i>
        <section className="table-data">
          {/* Row */}
          <div className="container-table">
            {tableData.map((item, index) => (
              <>
                <div
                  onClick={() => showDetails(index)}
                  key={item.id}
                  className="row  "
                >
                  <div className="col-3">
                    <div className="item">
                      <i className="fa-solid fa-money-check-dollar"></i>
                      <p className="fw-light">{item.title}</p>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="item">
                      <i className="fa-regular fa-file-lines"></i>
                      <p className="fw-light">{item.num}</p>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="item">
                      <i className="fa-solid fa-stairs"></i>
                      <p className="persent fw-light">{item.present}</p>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="item">
                      <i className="fa-regular fa-money-bill-1"></i>
                      <p className="fw-light">{item.risk}</p>
                    </div>
                  </div>
                </div>
                <div className="row-details  d-none">
                  <p>
                    $ TSLa just annoucend an acduistion of $NFlx at ${item.num}.
                  </p>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis explicabo, unde ea cupiditate quas ab ullam quia
                    recusandae voluptatibus fuga!
                  </span>
                </div>
              </>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Datatable;
