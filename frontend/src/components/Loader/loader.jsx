import React from "react";

const LogoLoader = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <img
                src="/assets/Logoshivalik.png"
                alt="Logo"
                className="h-20 animate-zoomInOut"
            />
        </div>
    );
};

export default LogoLoader;
