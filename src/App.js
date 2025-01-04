import React from "react";
import PDFExportButton from "./PDFExportButton";
import Page0 from "./pages/page0";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Page11 from "./pages/Page11";
import Page12 from "./pages/Page12";

// Import other pages here...

const App = () => {
  return (
    <div>
      <Page0 />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Page9 />
      <Page10 />
      <Page11 />
      <Page12 />

      {/* Render other pages here */}
      <PDFExportButton />
    </div>
  );
};

export default App;
