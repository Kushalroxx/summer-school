const apiKey = "da34d717c5fbdd51a8a534ec3c23747f"; 
document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const resultDiv = document.getElementById("weatherResult");
  resultDiv.innerHTML = "Fetching weather...";

  if (!navigator.geolocation) {
    resultDiv.innerHTML = "<p class='error'>Geolocation is not supported.</p>";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
           throw new Error("API Error");
        }
        const data = await response.json();
        const temp = data.main.temp;
        const city = data.name;
        const condition = data.weather[0].description;

        resultDiv.innerHTML = `
          <p><strong>${city}</strong></p>
          <p>${temp}°C</p>
          <p>${condition}</p>
        `;
      } catch (error) {
         console.log(error)
        resultDiv.innerHTML = `<p class="error">Failed to fetch weather data.</p>`;
      }
    },
    (error) => {
      resultDiv.innerHTML = `<p class="error">Location access denied.</p>`;
    }
  );
});

