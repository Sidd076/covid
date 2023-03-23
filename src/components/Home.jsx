import React from "react"
import Overall from "./Overall"
import SearchState from "./SearchState"
import StateWise from "./Statewise"


const Home = () => {


    return (
        <React.Fragment>
            <div className="parent-container">
                <div className="child-container overall">
                    <Overall />
                </div>
                <div className="child-container searchstate">
                    <SearchState />
                </div>
                <div className="child-container statewise">
                    <StateWise />
                </div>
            </div>
        </React.Fragment>

    )
}

export default Home