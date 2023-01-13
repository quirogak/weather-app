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

  const assignData = async (location) => {

    try {

    const currentData = await processData(location)

    const locationName = currentData.locationName
    const temp = currentData.mainDetails.temp
    const minTemp = currentData.mainDetails.temp_min
    const maxTemp = currentData.mainDetails.temp_max
    const humidity = currentData.mainDetails.humidity
    const weatherDesc = currentData.weatherDetails.description
    const weatherDescUpper = weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1) //turn first letter into uppercase

    const weatherIconURL = "http://openweathermap.org/img/wn/"+currentData.weatherDetails.icon+"@2x.png"
    
    genDOMElements.genWeatherBox(locationName,temp,minTemp,maxTemp,humidity,weatherDescUpper,weatherIconURL)

    } catch (error) {
    return console.log(error)
    }
    
  }
   

   return {assignData}

})();



const genDOMElements = (() => {
    

    const genWeatherBox = (locationName,temp,minTemp,maxTemp,humidity,weatherDesc,weatherIconURL) => {
        
        const currentWeatherCard = document.querySelector(".weather-container")

        if (currentWeatherCard == null){

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

        const firstHalfSection = document.createElement("section")
        firstHalf.appendChild(firstHalfSection)

        const firstHalfSectionTwo = document.createElement("section")
        firstHalf.appendChild(firstHalfSectionTwo)

        const tempTitle = document.createElement("h2")
        tempTitle.classList = "temp-title"
        firstHalfSection.appendChild(tempTitle)
        tempTitle.textContent = temp+"°"

        const locationTitle = document.createElement("h2")
        locationTitle.classList = "location-title"
        firstHalfSection.appendChild(locationTitle)
        locationTitle.textContent = locationName

        const maxTempTitle = document.createElement("h3")
        maxTempTitle.classList = "max-temp-title"
        firstHalfSectionTwo.appendChild(maxTempTitle)
        maxTempTitle.textContent = "Max: "+maxTemp

        const minTempTitle = document.createElement("h3")
        minTempTitle.classList = "min-temp-title"
        firstHalfSectionTwo.appendChild(minTempTitle)
        minTempTitle.textContent = "Min: "+minTemp

        const secondHalfSection = document.createElement("section")
        secondHalfSection.classList = "second-half-section"
        secondHalf.appendChild(secondHalfSection)

        const weatherImage = document.createElement("img")
        weatherImage.classList = "weather-img"
        secondHalfSection.appendChild(weatherImage)
        weatherImage.src = weatherIconURL

        const description = document.createElement("h2")
        description.classList = "weather-desc"
        secondHalfSection.appendChild(description)
        description.textContent = weatherDesc

        const secondHalfSectionTwo = document.createElement("section")
        secondHalfSectionTwo.classList = "second-half-section"
        secondHalf.appendChild(secondHalfSectionTwo)

        const humidityTitle = document.createElement("h2")
        humidityTitle.classList = "weather-hum"
        secondHalfSectionTwo.appendChild(humidityTitle)
        humidityTitle.textContent ="Humidity  "+ humidity+"%"
            
        }
        else{  
            currentWeatherCard.remove()
            const submitButton = document.querySelector("button")
            submitButton.click()
    }
       
    }

    return {genWeatherBox}

})();

const DOMLogic = (() => {

    const submitButton = document.querySelector("button")
    const searchInput = document.getElementById("location")
    const form = document.querySelector("form")

    const searchWeather = () => {

        processAPI.assignData(searchInput.value)

    }

    const inputValidation = () => {

       const searchInputError = document.querySelector("#location + span.error")
       const numbersTest = /^([^0-9]*)$/


       if(searchInput.validity.valueMissing || searchInput.validity.tooShort || !numbersTest.test(searchInput.value)){

        searchInputError.textContent = "Please enter a location"
        searchInputError.className = "error active"
       }
        else if (searchInput.validity.valid) {
            searchInputError.textContent = ""
            searchInputError.className = "error"
            
        }

    }

    const checkSubmit = () => {
        if (!searchInput.validity.valid){
            e.preventDefault()
        }
    }



    form.addEventListener("submit",(e) => {checkSubmit(e)})
    submitButton.addEventListener("click",searchWeather)
    searchInput.addEventListener("input",inputValidation)
    searchInput.addEventListener("blur",inputValidation)

})();







