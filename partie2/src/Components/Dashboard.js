import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const { username } = location.state;
  const [position, setPosition] = useState(100);

  const handleIncrement = () => {
    if (position < 200) {
      setPosition(position + 10);
    }
  };

  const handleDecrement = () => {
    if (position > 0) {
      setPosition(position - 10);
    }
  };

  const getAngle = () => {
    return (position - 100) * 1.5; 
  };

  const getDisplayValue = () => {
    return `${position}%`;
  };
// couleur de la cercle se change selon le pourcentage 
  const getStrokeColor = () => {
    if (position >= 0 && position <= 80) {
      return 'red';
    }

    else if (position >= 80 && position <= 120) {
      return 'yellow';
    }

    else {
      return 'green'
    }
  };

  return (
    <div>
      <h1 className="text-center">Tableau de bord</h1>
      <div>
        <h5 className="text-center"style={{color:"#400080"}}>Bienvenu {username}</h5>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <svg width="200" height="200">
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke={getStrokeColor()}
            strokeWidth="10"
            fill="none"
          />
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="20"
            stroke="black"
            strokeWidth="5"
            transform={`rotate(${getAngle()}, 100, 100)`}
          />
        </svg>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <button onClick={handleDecrement}>-</button>
          <h3 style={{ margin: "0 20px" }}>{getDisplayValue()}</h3>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
