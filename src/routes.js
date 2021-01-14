import Dashboard from "views/Dashboard.jsx";
import DynamicHistory from "views/DynamicHistory.jsx";
import Map from "views/Map.jsx";

const routes = [{
        path: "/dashboard",
        name: "Dashboard",
        icon: "tim-icons icon-chart-pie-36",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/map",
        name: "Map",
        icon: "tim-icons icon-pin",
        component: Map,
        layout: "/admin"
    },
    {
        path: "/dynamic-history",
        name: "History",
        icon: "tim-icons icon-notes",
        component: DynamicHistory,
        layout: "/admin"
    }
];
export default routes;