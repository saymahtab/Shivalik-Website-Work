import React, { useState, useEffect } from 'react';
import popup from "../../assets/shivalikpopup.jpg";


const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const isVisited = localStorage.getItem('visited');
    if (!isVisited) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setIsFirstVisit(true);
      }, Math.random() * (4000 - 3000) + 2000); // 3-5 sec delay

      return () => clearTimeout(timer);
    } else {
      setIsFirstVisit(false);
      setShowPopup(true); // Show only the image if already visited
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    if (isFirstVisit) {
      localStorage.setItem('visited', 'true');
    }
  };

  return (
    showPopup && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg text-center w-4/12 relative">
          <button
            className="absolute top-1 right-2 text-3xl text-gray-600"
            onClick={closePopup}
          >
            &times;
          </button>
          {isFirstVisit ? (
            <div>
              <h2 className="text-xl font-bold mb-4">Sign Up for Updates</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Looking for which course?"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <img
              src={popup}
              alt="Welcome"
              width="700"
              height="375"
              className="mt-4 rounded-lg"
            />
          )}
        </div>
      </div>
    )
  );
};

export default Popup;
