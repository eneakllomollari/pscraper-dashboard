import Dashboard from "views/Dashboard.jsx";
import DynamicHistory from "views/DynamicHistory.jsx";
import Map from "views/Map.jsx";

const routes = [{
        path: "/dashboard",
        name: "Dashboard",
        icon: "fas fa-tachometer-alt",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/map",
        name: "Map",
        icon: "fas fa-map",
        component: Map,
        layout: "/admin"
    },
    {
        path: "/dynamic-history",
        name:    "History",
        icon: "fas fa-history",
        component: DynamicHistory,
        layout: "/admin"
    }
];
export default routes;