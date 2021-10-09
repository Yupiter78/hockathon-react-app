import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Favourites from "./pages/favourites";
import Member from "./pages/member";
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";

function App() {
    return (
        <>
            <Navbar />
            <Breadcrumbs />
            <Route path="/" exact component={Home} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/:memberId" component={Member} />
            <Footer />
        </>
    );
}

export default App;
