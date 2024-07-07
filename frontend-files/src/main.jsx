import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import { Blogs } from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import Ai from "./pages/DATA_ANALYTICS/Ai.jsx";
import BussAnalytics from "./pages/DATA_ANALYTICS/BussAnalytics.jsx";
import DataCleaning from "./pages/DATA_ANALYTICS/DataCleaning.jsx";
import Ads from "./pages/ADS/Ads.jsx";
import Awareness from "./pages/ADS/Awareness.jsx";
import Dynamic from "./pages/ADS/Dynamic.jsx";
import DataAnalytics from "./pages/DATA_ANALYTICS/DataAnalytics.jsx";
import Facebook from "./pages/ADS/Facebook.jsx";
import Google from "./pages/ADS/Google.jsx";
import Instagram from "./pages/ADS/Instagram.jsx";
import LinkedIn from "./pages/ADS/LinkedIn.jsx";
import Pinterest from "./pages/ADS/Pinterest.jsx";
import Product from "./pages/ADS/Product.jsx";
import Video from "./pages/ADS/Video.jsx";
import X from "./pages/ADS/X.jsx";
import Youtube from "./pages/ADS/Youtube.jsx";
import DataInsights from "./pages/DATA_ANALYTICS/DataInsights.jsx";
import DataLake from "./pages/DATA_ANALYTICS/DataLake.jsx";
import DataPipeline from "./pages/DATA_ANALYTICS/dataPipeline.jsx";
import DataSources from "./pages/DATA_ANALYTICS/DataSources.jsx";
import DataStrategy from "./pages/DATA_ANALYTICS/DataStrategy.jsx";
import DataWarehouse from "./pages/DATA_ANALYTICS/DataWarehouse.jsx";
import Management from "./pages/DATA_ANALYTICS/Management.jsx";
import MarAnalysis from "./pages/DATA_ANALYTICS/MarAnalysis.jsx";
import MLearning from "./pages/DATA_ANALYTICS/MLearning.jsx";
import Performance from "./pages/DATA_ANALYTICS/Performance.jsx";
import Roi from "./pages/DATA_ANALYTICS/Roi.jsx";
import SAnalysis from "./pages/DATA_ANALYTICS/SAnalysis.jsx";
import Visualisation from "./pages/DATA_ANALYTICS/Visualisation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },

      // ---------- Ads ---------
      {
        path: "/ads",
        element: <Ads />,
      },
      {
        path: "ads/awareness",
        element: <Awareness />,
      },
      {
        path: "ads/dynamic",
        element: <Dynamic />,
      },
      {
        path: "ads/facebook",
        element: <Facebook />,
      },
      {
        path: "ads/google",
        element: <Google />,
      },
      {
        path: "ads/instagram",
        element: <Instagram />,
      },
      {
        path: "ads/linkedin",
        element: <LinkedIn />,
      },
      {
        path: "ads/pinterest",
        element: <Pinterest />,
      },
      {
        path: "ads/product",
        element: <Product />,
      },
      {
        path: "ads/video",
        element: <Video />,
      },
      {
        path: "ads/x",
        element: <X />,
      },
      {
        path: "ads/youtube",
        element: <Youtube />,
      },

      //------------- Data Analytics --------------
      {
        path: "/data-analytics",
        element: <DataAnalytics />,
      },
      {
        path: "/data-analytics/ai",
        element: <Ai />,
      },
      {
        path: "/data-analytics/bussanalytics",
        element: <BussAnalytics />,
      },
      {
        path: "/data-analytics/data-analytics",
        element: <DataAnalytics />,
      },
      {
        path: "/data-analytics/datacleaning",
        element: <DataCleaning />,
      },
      {
        path: "/data-analytics/datainsights",
        element: <DataInsights />,
      },

      {
        path: "/data-analytics/datalake",
        element: <DataLake />,
      },
      {
        path: "/data-analytics/datapipeline",
        element: <DataPipeline />,
      },
      {
        path: "/data-analytics/data-sources",
        element: <DataSources />,
      },
      {
        path: "/data-analytics/data-strategy",
        element: <DataStrategy />,
      },
      {
        path: "/data-analytics/data-warehouse",
        element: <DataWarehouse />,
      },
      {
        path: "/data-analytics/management",
        element: <Management />,
      },
      {
        path: "/data-analytics/mar-analysis",
        element: <MarAnalysis />,
      },
      {
        path: "/data-analytics/mlearning",
        element: <MLearning />,
      },
      {
        path: "/data-analytics/performance",
        element: <Performance />,
      },
      {
        path: "/data-analytics/roi",
        element: <Roi />,
      },
      {
        path: "/data-analytics/s-analysis",
        element: <SAnalysis />,
      },
      {
        path: "/data-analytics/visualisation",
        element: <Visualisation />,
      },

      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/blogs/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
