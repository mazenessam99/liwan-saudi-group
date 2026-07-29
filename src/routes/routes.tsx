import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

// Lazy loaded pages
const Home = lazy(() => import("@/pages/Home"));
const Hotels = lazy(() => import("@/pages/Hotels"));
const Resorts = lazy(() => import("@/pages/Resorts"));
const PropertyDetails = lazy(() => import("@/pages/PropertyDetails"));
const Rooms = lazy(() => import("@/pages/Rooms"));
const RoomDetails = lazy(() => import("@/pages/RoomDetails"));
const Restaurants = lazy(() => import("@/pages/Restaurants"));
const RestaurantDetails = lazy(() => import("@/pages/RestaurantDetails"));
const Events = lazy(() => import("@/pages/Events"));
const Offers = lazy(() => import("@/pages/Offers"));
const Destinations = lazy(() => import("@/pages/Destinations"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Favorites = lazy(() => import("@/pages/Favorites"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const NotFound = lazy(() => import("@/pages/NotFound"));


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [

            {
                index: true,
                element: <Home />,
            },

            // Properties
            {
                path: "hotels",
                element: <Hotels />,
            },
            {
                path: "resorts",
                element: <Resorts />,
            },

            // Property Details
            {
                path: "accommodation/:type/:id",
                element: <PropertyDetails />,
            },

            // Rooms
            {
                path: "rooms",
                element: <Rooms />,
            },
            {
                path: "rooms/:id",
                element: <RoomDetails />,
            },


            // Restaurants
            {
                path: "restaurants",
                element: <Restaurants />,
            },
            {
                path: "restaurant/:id",
                element: <RestaurantDetails />,
            },


            // General Pages
            {
                path: "events",
                element: <Events />,
            },
            {
                path: "offers",
                element: <Offers />,
            },
            {
                path: "destinations",
                element: <Destinations />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "faq",
                element: <FAQ />,
            },

            // User
            {
                path: "favorites",
                element: <Favorites />,
            },

            // Auth
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },


            // Legal
            {
                path: "privacy",
                element: <Privacy />,
            },
            {
                path: "terms",
                element: <Terms />,
            },


            // 404
            {
                path: "*",
                element: <NotFound />,
            },

        ],
    },
]);