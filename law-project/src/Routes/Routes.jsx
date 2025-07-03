import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import LawyerDetails from "../Pages/LawyerDetails/LawyerDetails";
import Bookings from "../Pages/Bookings/Bookings";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true, // home page er jonno

        loader: async () => {
          const res = await fetch("/lawyer_details.json");
          return res.json();
        },

        path: "/",
        Component: Home,
      },

      {
        path: "/lawyerDetails/:id",
        loader: async ({ params }) => {
          const res = await fetch("/lawyer_details.json");
          const data = await res.json();
          const singleLawyer = data.find(
            (lawyer) => lawyer.id === parseInt(params.id)
          );
          if (!singleLawyer) {
            throw new Response("Not Found", { status: 404 });
          }
          return singleLawyer;
        },
        Component: LawyerDetails,
      },
      {
        path: "/Bookings",
        loader: () => fetch("lawyer_details.json"),
        Component: Bookings,
      },

      {
        path: "/blogs",
        loader: async () => {
          const res = await fetch("blog_article.json");
          return res.json();
        },

        Component: Blogs,
      },
    ],
  },
]);
