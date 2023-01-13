const processAPI = (() => {

   const fetchAPI = async () => {

   try {
   const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b6e2e1fb6cdedd11a6bcd01984a7cc13", {mode: 'cors'})
   const catchData = await response.json();
    
   console.log(catchData)

      } catch (error) {
        console.log("please put a valid search value")
      }

   }

   return {fetchAPI}

})();

processAPI.fetchAPI()