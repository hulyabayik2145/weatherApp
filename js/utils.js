
//!zaman dilimi kullanılarak biçimlendirilmiş bir tarih ve saat bilgisi döndürür.

function convertTimeStamp(timeStamp,timezone){
    //!zaman dilimini saat cinsinden dönüştürür(saniyeden saate)
    const convertTimezone = timezone / 3600;

    //!yeni bir tarih nesnesini olusturuyoruz
    const date = new Date(timeStamp * 1000);

    //!tarih ve saat bilgisi için seçenekleri belirle

    const options = {
        weekday:"long",
        day: "numeric",
        month:"long",
        year:"numeric",
        hour:"numeric",
        minute:"numeric",
        timezone:`Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`, //! zaman dilimini belirleme

        hour12:true //! 12 saat formatından gösterilsin mi?

    };

    //!tarihi ve saati kullanıcıya dost bir formatta döndürür
    return date.toLocaleString("en-US", options)
}

//!ülke kodunu ülke adına çeviren fonk

function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"], {type:"region"});
    //!ülke kodunu alınan "Intl.DisplayNames" ülke adına çevirir.
    console.log(regionNames.of(country));
    return regionNames.of(country);
  
}


export { convertTimeStamp, convertCountryCode } ;

/*

*Intl.DisplayNames:js de uluslararası dil ve bölge adlarına
*çevirmek için kullanılan bir API dir

* Intl:Internationalization
*DisplayNames



*/

