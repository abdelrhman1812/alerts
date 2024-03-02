import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { filterData } from "../Redux/dataSlice";

const Filters = () => {
  const [choicess, setChoicess] = useState([]);
  let dispatch = useDispatch();

  // tack values to filter
  const takeValues = (values) => {
    console.log(values);
    dispatch(filterData(values));
    let btnReturn = document.getElementById("btnReturn");
    btnReturn.classList.remove("d-none");
  };

  // use formik to control value from input
  const formik = useFormik({
    initialValues: {
      marketCap: "",
      riskLevel: "",
      strategy: "mergerarbitrage",
      asset: "options",
    },

    onSubmit: takeValues,
  });

  // to display choices
  useEffect(() => {
    let spans = document.getElementById("industry").querySelectorAll("span");
    spans.forEach((span) => {
      span.onclick = function (e) {
        let textInnerSpan = e.target.innerText;
        setChoicess((prevChoices) => [...prevChoices, textInnerSpan]);
      };
    });
  }, []);

  // rm choices
  const rmItem = (index) => {
    setChoicess((prevChoices) => prevChoices.filter((_, id) => id !== index));
  };
  const showMenu = () => {
    let menu = document.querySelector(".filters");
    menu.classList.toggle("showMenu");
  };
  return (
    <>
      <div className="filters">
        <i onClick={showMenu} className="fa fa-close btnMenu"></i>
        <h2>Filter</h2>
        <div className="filter-appplied">
          <div className="title">
            <h6>Filter Applied</h6>
            <p>Clear All</p>
          </div>
          {/* Div containal choices */}
          <div className="choices" id="choices">
            {choicess?.map((item, index) => (
              <span key={index}>
                {item}
                <i onClick={() => rmItem(index)} className="fa fa-close"></i>
              </span>
            ))}
          </div>
        </div>

        {/* stock */}
        <form onSubmit={formik.handleSubmit}>
          <div className="stock">
            <h4>Stock</h4>
            <div className="search">
              <input type="text" placeholder="$ TICKER" className="search" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            {/* Industry */}
            <div className="industry" id="industry">
              <h6>Industry</h6>
              <div className="items">
                <ul>
                  <li>
                    <i className="fa-solid fa-heart-pulse"></i>
                    <span>Health Care</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-recycle"></i>
                    <span> Materials</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-bolt"></i>
                    <span>Energy</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-credit-card"></i>
                    <span>Consumer Discretionary</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span> Consumer Staples</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-house-chimney-window"></i>
                    <span>Real Estate</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <i className="fa-solid fa-litecoin-sign"></i>
                    <span>IT</span>
                  </li>
                  <li>
                    <i className="fa-regular fa-comments"></i>
                    <span>Communication</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-industry"></i>
                    <span>Industrials</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    <span>Utilities</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-dollar-to-slot"></i>
                    <span>Financials</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Market  Cap */}
            <div className="radio-btn">
              <div className="item">
                <h6>Market Cap</h6>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="micro"
                      name="marketCap"
                      value="micro"
                      onChange={formik.handleChange}
                      checked={formik.values.marketCap === "micro"}
                    />
                    <label htmlFor="micro">Micro</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="small"
                      name="marketCap"
                      value="small"
                      onChange={formik.handleChange}
                      checked={formik.values.marketCap === "small"}
                    />
                    <label htmlFor="small">Small</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="large"
                      name="marketCap"
                      value="large"
                      onChange={formik.handleChange}
                      checked={formik.values.marketCap === "large"}
                    />
                    <label htmlFor="large">Large</label>
                  </li>
                </ul>
              </div>

              {/* Risk Level */}
              <div className="item">
                <h6>Risk Level</h6>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="lowrisk"
                      name="riskLevel"
                      value="Low Risk"
                      onChange={formik.handleChange}
                      checked={formik.values.riskLevel === "Low Risk"}
                    />
                    <label htmlFor="Low Risk">Low Risk</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="midrisk"
                      name="riskLevel"
                      value="Mid Risk"
                      onChange={formik.handleChange}
                      checked={formik.values.riskLevel === "Mid Risk"}
                    />
                    <label htmlFor="Mid Risk">Mid Risk</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="highrisk"
                      name="riskLevel"
                      value="High Risk"
                      onChange={formik.handleChange}
                      checked={formik.values.riskLevel === "High Risk"}
                    />
                    <label htmlFor="High Risk">High Risk</label>
                  </li>
                </ul>
              </div>
            </div>

            {/*  Strategy */}
            <div className="selector">
              <div className="item">
                <h6>Strategy</h6>
                <div className="radio-group">
                  <input
                    className="d-none"
                    type="radio"
                    id="bigoptionbuys"
                    name="strategy"
                    value="bigoptionbuys"
                    onChange={formik.handleChange}
                    checked={formik.values.strategy === "bigoptionbuys"}
                  />
                  <label
                    htmlFor="bigoptionbuys"
                    className={
                      formik.values.strategy === "bigoptionbuys" ? "active" : ""
                    }
                  >
                    Big Option Buys
                  </label>

                  <input
                    className="d-none"
                    type="radio"
                    id="mergerarbitrage"
                    name="strategy"
                    value="mergerarbitrage"
                    onChange={formik.handleChange}
                    checked={formik.values.strategy === "mergerarbitrage"}
                  />
                  <label
                    htmlFor="mergerarbitrage"
                    className={
                      formik.values.strategy === "mergerarbitrage"
                        ? "active"
                        : ""
                    }
                  >
                    Merger Arbitrage
                  </label>

                  <input
                    className="d-none"
                    type="radio"
                    id="shortreport"
                    name="strategy"
                    value="shortreport"
                    onChange={formik.handleChange}
                    checked={formik.values.strategy === "shortreport"}
                  />
                  <label
                    htmlFor="shortreport"
                    className={
                      formik.values.strategy === "shortreport" ? "active" : ""
                    }
                  >
                    Short Report
                  </label>
                </div>
              </div>

              {/*  Asset */}
              <div className="item">
                <h6>Asset</h6>
                <div className="radio-group">
                  <input
                    className="d-none"
                    type="radio"
                    id="stocks"
                    name="asset"
                    value="stocks"
                    onChange={formik.handleChange}
                    checked={formik.values.asset === "stocks"}
                  />
                  <label
                    htmlFor="stocks"
                    className={formik.values.asset === "stocks" ? "active" : ""}
                  >
                    Stocks
                  </label>

                  <input
                    className="d-none"
                    type="radio"
                    id="options"
                    name="asset"
                    value="options"
                    onChange={formik.handleChange}
                    checked={formik.values.asset === "options"}
                  />
                  <label
                    htmlFor="options"
                    className={
                      formik.values.asset === "options" ? "active" : ""
                    }
                  >
                    Options
                  </label>

                  <input
                    className="d-none"
                    type="radio"
                    id="futures"
                    name="asset"
                    value="futures"
                    onChange={formik.handleChange}
                    checked={formik.values.asset === "futures"}
                  />
                  <label
                    htmlFor="futures"
                    className={
                      formik.values.asset === "futures" ? "active" : ""
                    }
                  >
                    Futures
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={formik.handleSubmit}
            className="btn-apply"
          >
            Apply
          </button>
        </form>
      </div>
    </>
  );
};

export default Filters;
