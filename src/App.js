import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState("π§ π§ remainder to drink waterπ§ π§ ");



    useEffect(() => {
        setInterval(() => {
         var arre = ["Water Helps Energize Muscles","Water Can Help Control Calories.","π§ π§itβs okay to be tired just stay hydratedπ§ π§", "π§ π§  π§ π§  drink water π§ π§   π§ π§   ","π§ π§  π§ π§  π§ π§  π§ π§  ","stay hydrated loves.","Youβve got 99 problems but your livers are only 2 so drink water now","youβve cried enough. drink water now.", "If you see this, it means that your kidney is starving so you must drink water now", "You sure do cry a lot. Drink water now to refill your tears."];

            for (var i = 0; i < arre.length; i++) {
                var random = Math.floor(Math.random() * arre.length);
                var temp = arre[i];
                arre[i] = arre[random];
                arre[random] = temp; 
                setCount(arre[i]);

            

}

        }, 4000);
    }, []);


  return (

            <div className="App">

                <h1>π§ π§ Drink Water now π‘</h1>
                <h2> π§ π§{count} π§ π§</h2>


            </div>
        );
  }

export default App;
