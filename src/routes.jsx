
import App from './App.jsx'
import Page from './pages/Page.jsx'
import Rules from './pages/Rules.jsx'


const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "Page",
        element: <Page />,
    },
    {
        path: "Rules",
        element: <Rules />,
    },
]

export default routes