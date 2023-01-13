const DOMElements = (() => {

})();


const processAPI = (() => {

   const fetchAPI = async (location) => {

   const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&APPID=b6e2e1fb6cdedd11a6bcd01984a7cc13"
   
   try {
   const response = await fetch(weatherURL, {mode: 'cors'})
   const catchData = await response.json();
   return await catchData

      } catch (error) {
        return console.log("please put a valid search value")
      }

   }

   const processData = async () => {

    const fetchedData = await fetchAPI("Bogotá")
    const weatherDetails = await fetchedData.weather[0]
    const mainDetails = await fetchedData.main
    const locationName = await fetchedData.name
    console.log(weatherDetails)
    console.log(mainDetails)
    console.log(locationName)
    

   }

   

   return {processData}

})();

processAPI.processData()

