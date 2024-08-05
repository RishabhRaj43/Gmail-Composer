import { Routes, Route } from "react-router-dom";
import SendMail from "./components/SendMail";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<SendMail />} />
      </Routes>
    </>
  );
}

export default App;
