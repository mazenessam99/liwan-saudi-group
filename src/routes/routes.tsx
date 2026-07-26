import MainLayout from "@/layouts/MainLayout";

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Destinations from "@/pages/Destinations";
import Events from "@/pages/Events";
import FAQ from "@/pages/FAQ";
import Favorites from "@/pages/Favorites";
import Home from "@/pages/Home";
import Hotels from "@/pages/Hotels";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Offers from "@/pages/Offers";
import Privacy from "@/pages/Privacy";
import PropertyDetails from "@/pages/PropertyDetails";
import Register from "@/pages/Register";
import Resorts from "@/pages/Resorts";
import RestaurantDetails from "@/pages/RestaurantDetails";
import Restaurants from "@/pages/Restaurants";
import RoomDetails from "@/pages/RoomDetails";
import Rooms from "@/pages/Rooms";
import Terms from "@/pages/Terms";

import { createBrowserRouter } from "react-router-dom";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [

            {
                index: true,
                element: <Home />
            },


            // Properties Listing
            {
                path: "hotels",
                element: <Hotels />
            },

            {
                path: "resorts",
                element: <Resorts />
            },

            // Property Details
            {
                path: ":type/:id",
                element: <PropertyDetails />
            },

            // Rooms
            {
                path: "rooms",
                element: <Rooms />
            },

            {
                path: "rooms/:id",
                element: <RoomDetails />
            },

            // Restaurants
            {
                path: "restaurants",
                element: <Restaurants />
            },

            {
                path: "restaurant/:id",
                element: <RestaurantDetails />
            },


            // Other Pages
            {
                path: "events",
                element: <Events />
            },

            {
                path: "offers",
                element: <Offers />
            },

            {
                path: "destinations",
                element: <Destinations />
            },

            {
                path: "about",
                element: <About />
            },

            {
                path: "contact",
                element: <Contact />
            },

            {
                path: "faq",
                element: <FAQ />
            },

            {
                path: "favorites",
                element: <Favorites />
            },


            // Auth
            {
                path: "login",
                element: <Login />
            },

            {
                path: "register",
                element: <Register />
            },

            // Legal
            {
                path: "privacy",
                element: <Privacy />
            },

            {
                path: "terms",
                element: <Terms />
            },

            // Not Found
            {
                path: "*",
                element: <NotFound />
            }

        ]
    }
]);