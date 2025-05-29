let div = document.querySelector("div");
        let positionX = 0
        let PositionY = 0
        let step = 50


        document.addEventListener("keydown", function(event) {
            if (event.key === "ArrowRight") {
                positionX += step
            } else if (event.key === "ArrowLeft") {
                positionX -= step
            } else if (event.key === "ArrowUp") {
                PositionY -= step
            } else if (event.key === "ArrowDown") {
                PositionY += step
            }
            div.style.transform = `translate(${positionX}px, ${PositionY}px)`
            
        });
