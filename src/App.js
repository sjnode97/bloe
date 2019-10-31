import React from 'react';
import MainF from "./components/main-F";
import MainH from "./components/main-H";
import RouterIndex from "./router"
function App() {
  return (
    <div className="pageWrap">
      <MainH></MainH>
        <main className={"main"}>
          <RouterIndex/>
        </main>
      <MainF></MainF>
    </div>
  );
}

export default App;
