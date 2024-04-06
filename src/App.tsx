import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OrdersList from "./pages/orders-list";
import OrdersFilterVIew from "./pages/orders-filter-v-iew";
import OrdersDetailedView from "./pages/orders-detailed-view";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/orders-filter-view":
        title = "";
        metaDescription = "";
        break;
      case "/orders-detailed-view":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OrdersList />} />
      <Route path="/orders-filter-view" element={<OrdersFilterVIew />} />
      <Route path="/orders-detailed-view" element={<OrdersDetailedView />} />
    </Routes>
  );
}
export default App;
