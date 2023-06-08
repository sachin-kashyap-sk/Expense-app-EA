import React from "react";
import ListSection from "./Components/BottomSection/ListSection";
import MiddleSection from "./Components/MiddleSection/MiddleSection";
import TopLeft from "./Components/TopSection/TopLeft";

function App() {
  return (
    <div style={{ backgroundColor: "#d7d8d9", minHeight: "100vh" }}>
      <TopLeft />
      <MiddleSection />
      <ListSection />
    </div>
  );
}

export default App;
