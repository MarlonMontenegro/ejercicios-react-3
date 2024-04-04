import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState} from "react";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

function App() {


    return (

        <>
            <Header mensaje="Header"/>

            <main>
                <UserProfile/>
                <Counter/>
            </main>


            <Footer mensaje="Footer"/>


        </>


    );
}

export default App;
