
   
        function updateDateTime() {
            var utcTimeMillisElement = document.getElementById("utcTimeMillis");
            var currentDayElement = document.getElementById("currentDay");


            // Update the time
            var currentUTCTimeMillis = Date.now();
            utcTimeMillisElement.textContent = currentUTCTimeMillis;

            // Update the day
            var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var today = new Date();
            var dayOfWeek = daysOfWeek[today.getUTCDay()];
            currentDayElement.textContent = dayOfWeek;

        }

        // Update date, time, and day every second
        setInterval(updateDateTime, 1000);

        // Initial update
        updateDateTime();



