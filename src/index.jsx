import "./style.css";
import ReactDOM from "react-dom/client";
import CanvasExperience from "./components/CanvasExperience";
import TargetInfo from "./components/TargetInfo/TargetInfo";
import Descriptor from "./components/Descriptor/Descriptor";
import ViewContextProvider from "./providers/View.provider";
import Navigation from "./components/Navigation/Navigation";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <ViewContextProvider>
    <main>
      <noscript> You need to enable JavaScript to run this app. </noscript>
      <Descriptor />
      <CanvasExperience />
      <Navigation />
      <TargetInfo />
    </main>
  </ViewContextProvider>
);
