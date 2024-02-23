
const API_KEY = "2dd48c387e193e2ff02e1a42012a37f5";

//! fonksiyon şehir ve birim bilgilerini parametre olarak alır.
 async function fetchWeatherData(city,units) {
    try{
       const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
            );
             console.log(response);

            //!eğer istek başarılı değilse hata fırlat
        if(!response.ok){
            throw new Error("istek başarılı değil");
        }

        //!apiden gelend yanıtı JSON formatına dönüştür ve geri dönder
        return response.json();
       
    }catch(error) {
        console.log(error);
    }
}
//!fetchWeatherData fonksiyonunu diğer dosyalarda kullanılabilir hale getirmek için aşağıdaki gibi yazarız

export default fetchWeatherData;