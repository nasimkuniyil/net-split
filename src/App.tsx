import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./Layout";
import BookDetails from "./pages/BookDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}