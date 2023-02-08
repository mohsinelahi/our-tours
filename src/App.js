import React, { useState, useEffect } from "react";
import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
// const url = "https://mocki.io/v1/da377099-ce95-4743-9e07-99de41684b11";

function App() {
  const [loading, setLoading] = useState();
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fecthTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fecthTours();
  }, []);

  if (loading) {
    return (
      <main>
        <div className="container">
          <Loading />
        </div>
      </main>
    );
  }
  if (tours.length == 0) {
    return (
      <main>
        <div className="container">
          <section className="section">
            <div className="title">
              <h2>No Tours Left</h2>
              <div className="underline"></div>
            </div>
            <button className="btn refresh-tour" onClick={fecthTours}>
              Refresh
            </button>
          </section>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className="container">
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    </main>
  );
}

export default App;
