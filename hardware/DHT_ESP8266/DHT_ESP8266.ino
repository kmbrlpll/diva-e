#include "DHTesp.h"

#ifdef ESP32
#pragma message(THIS EXAMPLE IS FOR ESP8266 ONLY!)
#error Select ESP8266 board.
#endif

DHTesp dht;
DHTesp dht2;

void setup()
{
  Serial.begin(115200);
  Serial.println();
  Serial.println("Status\tHumidity (%)\tTemperature (C)\t(F)\tHeatIndex (C)\t(F)");
  String thisBoard= ARDUINO_BOARD;
  Serial.println(thisBoard);

  

  // Autodetect is not working reliable, don't use the following line
  // dht.setup(17);
  // use this instead: 
  dht.setup(15, DHTesp::DHT22); // Connect DHT sensor to GPIO 17
  
  dht2.setup(13, DHTesp::DHT22); // Connect DHT sensor to GPIO 17
  delay(1000);
}

void loop()
{
  delay(dht.getMinimumSamplingPeriod());

  float humidity = dht.getHumidity();
  float temperature = dht.getTemperature();

  float humidity2 = dht2.getHumidity();
  float temperature2 = dht2.getTemperature();

  Serial.print(dht.getStatusString());
  Serial.print("\t");
  Serial.print(humidity, 1);
  Serial.print("\t\t");
  Serial.print(temperature, 1);
  Serial.print("\t\t");
  Serial.print(dht2.getStatusString());
  Serial.print("\t\t");
  Serial.print(humidity2, 1);
  Serial.print("\t\t");
  Serial.println(temperature2, 1);
}
