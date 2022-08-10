import React from "react";
import { AuthProvider } from "./context/auth.js";
import Root from "./pages/Root";

const App = () => {
    return(
        <AuthProvider>
            <Root/>
        </AuthProvider>
    )
}

export default App;