<h4>Hava Durumu Uygulaması ve Kullanılıan Teknolojiler</h4>

Proje hava durumu bilgilerini gerçek zamanlı olarak sorgulamamızı sağlar.
Bu proje Html,Css, bootstrap icon,OpenWeather Apı ve JavaScript ile yapılmıştır.

<h4>Ekran Gif</h4>

![](weather.gif)

-API :https://openweathermap.org/current

1.  adım util.js

- convertTimeStamp: zaman dilimini kullanrak biçimlendirilmiş bir taig ve saat bilgisini döndere fonksiyon oluşturuldu

- convertCountryCode: ülke koduna göre ülke adına çeviren fonk. oluşturuldu

2. adım api.js

- OpenWeather Apısıne şehir,birim ve api anahtarı ile istekte bulunarak hava durumunu getiren fonksiyonu oluşturuldu

3. adım :ui.js

- api den alınan hava durumu verilerini kullanarak kullanıcı arayüxüzü güncelleyen fonksiyonu oluşturuldu
