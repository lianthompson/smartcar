import React from "react";
import { ExplorerComponent } from "../ExplorerComponent";
import "./LandingPage.css";


const LandingPage = () => (
    <div>
        <h1 className="header">Smartcar Endpoint Explorer</h1>
        <div>
            <ExplorerComponent
                url={"this.state.url"}
                method={"this.state.method"}
                body={"this.state.body"}
            />
        </div>
    </div>
);

export default LandingPage;