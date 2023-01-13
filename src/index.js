const processAPI = (() => {

   const fetchAPI = async (location) => {

   const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&APPID=b6e2e1fb6cdedd11a6bcd01984a7cc13&units=metric"
   
   try {
   const response = await fetch(weatherURL, {mode: 'cors'})
   const catchData = await response.json();
   return await catchData

      } catch (error) {
        return console.log("please put a valid search value")
      }

   }

   const processData = async (location) => {

    const fetchedData = await fetchAPI(location)
    const weatherDetails = await fetchedData.weather[0]
    const mainDetails = await fetchedData.main
    const locationName = await fetchedData.name
  
    return {weatherDetails,mainDetails,locationName,fetchedData}
    

   }

  const assignData = async () => {

    const currentData = await processData("Cali")

    const locationName = currentData.locationName
    const temp = currentData.mainDetails.temp
    const minTemp = currentData.mainDetails.temp_min
    const maxTemp = currentData.mainDetails.temp_max
    const humidity = currentData.mainDetails.humidity
    const weatherDesc = currentData.weatherDetails.description
    const weatherIconURL = "http://openweathermap.org/img/wn/"+currentData.weatherDetails.icon+"@2x.png"
    
    genDOMElements.genWeatherBox(locationName,temp,minTemp,maxTemp,humidity,weatherDesc,weatherIconURL)

  }
   

   

   return {assignData}

})();

const genDOMElements = (() => {

    const genWeatherBox = (locationName,temp,minTemp,maxTemp,humidity,weatherDesc,weatherIconURL) => {
        
        const main = document.querySelector("main")

        const weatherBox = document.createElement("section")
        weatherBox.classList = "weather-container"
        main.appendChild(weatherBox)

        const firstHalf = document.createElement("div")
        firstHalf.classList= "first-container"
        weatherBox.appendChild(firstHalf)

        const secondHalf = document.createElement("div")
        secondHalf.classList= "second-container"
        weatherBox.appendChild(secondHalf)

        const tempTitle = document.createElement("h2")
        tempTitle.classList = "temp-title"
        firstHalf.appendChild(tempTitle)
        tempTitle.textContent = temp+"°"

        const locationTitle = document.createElement("h2")
        locationTitle.classList = "location-title"
        firstHalf.appendChild(locationTitle)
        locationTitle.textContent = locationName
       
    }

    return {genWeatherBox}

})();


processAPI.assignData()




