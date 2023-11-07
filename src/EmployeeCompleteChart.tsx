import React, { useRef, useState, useEffect } from "react";
import EmployeeChart from "./EmployeeChart.tsx";
import EmployeeChartDays from "./EmployeeChartDays.tsx";
import EmployeeChartYear from "./EmployeeChartYear.tsx";

export function EmployeeCompleteChart() {
  const chartRef: any = useRef();
  const daysRef: any = useRef();
  const yearRef: any = useRef();
  const [isFirstPage, setIsFirstPage] = useState(true);

  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToChart = () => {
    scrollToRef(chartRef);
  };

  const scrollToDays = () => {
    scrollToRef(daysRef);
  };

  const scrollToYear = () => {
    scrollToRef(yearRef);
  };

  const handleScroll = () => {
    setIsFirstPage(window.scrollY !== 0);
  };

  // Add an event listener to handle scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", width: "60vw", height: "50vh" }}>
      {isFirstPage && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            fontSize: "1.5em",
          }}
        >
          Go to Top
        </button>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "55vw",
          height: "55vh",
          marginTop: "550px",
        }}
      >
        <button
          onClick={scrollToDays}
          style={{
            fontSize: "1.5em",
            margin: "10px",
            width: "30vw",
            height: "10vh",
          }}
        >
          Scroll to Days
        </button>
        <button
          onClick={scrollToChart}
          style={{
            fontSize: "1.5em",
            margin: "10px",
            width: "30vw",
            height: "10vh",
          }}
        >
          Scroll to Chart
        </button>

        <button
          onClick={scrollToYear}
          style={{
            fontSize: "1.5em",
            margin: "10px",
            width: "30vw",
            height: "10vh",
          }}
        >
          Scroll to Year
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "50vw",
          height: "80vh",
          marginTop: "550px",
          padding: "100px",
        }}
        ref={chartRef}
      >
        <EmployeeChart />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "50vw",
          height: "50vh",
          marginTop: "550px",
          padding: "100px",
        }}
        ref={daysRef}
      >
        <EmployeeChartDays />
        {isFirstPage && (
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              fontSize: "1.5em",
            }}
          >
            Go to Top
          </button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "50vw",
          height: "50vh",
          marginTop: "550px",
          padding: "100px",
        }}
        ref={yearRef}
      >
        <EmployeeChartYear />
        {isFirstPage && (
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              fontSize: "1.5em",
            }}
          >
            Go to Top
          </button>
        )}
      </div>
    </div>
  );
}
