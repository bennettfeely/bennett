console.log("v5");

// -------------------------------------------------------
// -------------------------------------------------------
// Please have the courtesy to register your own API keys
// if you're stealing my code. Thank you!
var dark_sky_api_key = "e6c964e768708278b2dd1e5393296b2e";
// -------------------------------------------------------
// -------------------------------------------------------

// 	{
//		h: "Home location",
// 		a: "Away location",
// 		c: [latitude, longitude]
// }
// prettier-ignore
let locations=[{h:"Abidjan, Côte D’Ivoire",a:"Pacific Ocean",c:[5.32,-4.04]},{h:"Abilene, Texas",a:"Indian Ocean",c:[32.45,-99.73]},{h:"Abu Dhabi, UAE",a:"Southern Pacific Ocean",c:[24.47,54.37]},{h:"Abuja, Nigeria",a:"Pacific Ocean",c:[9.08,7.53]},{h:"Acapulco de Juarez, Mexico",a:"Indian Ocean",c:[16.85,-99.92]},{h:"Accra, Ghana",a:"Pacific Ocean",c:[5.55,-.22]},{h:"Ad Dammam, Saudi Arabia",a:"Southern Pacific Ocean",c:[26.43,50.1]},{h:"Ad Diwaniyah, Iraq",a:"Southern Pacific Ocean",c:[31.99,44.92]},{h:"Adana, Turkey",a:"Southern Pacific Ocean",c:[37,35.32]},{h:"Addis Ababa, Ethiopia",a:"Pacific Ocean",c:[9.03,38.7]},{h:"Adelaide, Australia",a:"Northern Atlantic Ocean",c:[-34.94,138.6]},{h:"Aden, Yemen",a:"Pacific Ocean",c:[12.78,45.01]},{h:"Ado-Ekiti, Nigeria",a:"Southern Pacific Ocean",c:[7.63,5.22]},{h:"Agadir, Morocco",a:"Southern Pacific Ocean",c:[30.44,-9.62]},{h:"Agra, India",a:"Southern Pacific Ocean",c:[27.17,78.02]},{h:"Aguascalientes, Mexico",a:"Indian Ocean",c:[21.88,-102.29]},{h:"Ahmadabad, India",a:"Southern Pacific Ocean",c:[23.03,72.58]},{h:"Ahmadnagar, India",a:"Southern Pacific Ocean",c:[19.11,74.75]},{h:"Ahvaz, Iran",a:"Southern Pacific Ocean",c:[31.28,48.72]},{h:"Ajmer, India",a:"Southern Pacific Ocean",c:[26.45,74.64]},{h:"Akita, Japan",a:"Southern Atlantic Ocean",c:[39.71,140.09]},{h:"Akola, India",a:"Southern Pacific Ocean",c:[20.71,77.01]},{h:"Akron, Ohio",a:"Indian Ocean",c:[41.08,-81.52]},{h:"Aksu, China",a:"Southern Pacific Ocean",c:[41.15,80.25]},{h:"Aktobe, Kazakhstan",a:"Point Nemo",c:[48.87,-58.43]},{h:"Akure, Nigeria",a:"Southern Pacific Ocean",c:[7.25,5.2]},{h:"Al Amarah, Iraq",a:"Southern Pacific Ocean",c:[31.84,47.15]},{h:"Al Ayn, UAE",a:"Southern Pacific Ocean",c:[24.23,55.74]},{h:"Al Hofuf, Saudi Arabia",a:"Southern Pacific Ocean",c:[25.35,49.59]},{h:"Al Hudaydah, Yemen",a:"Pacific Ocean",c:[14.8,42.95]},{h:"Al Mubarraz, Saudi Arabia",a:"Southern Pacific Ocean",c:[25.43,49.57]},{h:"Al-Kharj, Saudi Arabia",a:"Southern Pacific Ocean",c:[24.16,47.31]},{h:"Alajuela, Costa Rica",a:"Indian Ocean",c:[10.02,-84.23]},{h:"Albany, New York",a:"Indian Ocean",c:[42.65,-73.76]},{h:"Albuquerque, New Mexico",a:"Indian Ocean",c:[35.09,-106.61]},{h:"Aleppo, Syria",a:"Southern Pacific Ocean",c:[36.23,37.17]},{h:"Alexandria, Egypt",a:"Southern Pacific Ocean",c:[31.2,29.95]},{h:"Alexandria, Virginia",a:"Indian Ocean",c:[38.8,-77.05]},{h:"Algiers, Algeria",a:"Southern Pacific Ocean",c:[36.76,3.05]},{h:"Alhambra, California",a:"Indian Ocean",c:[34.1,-118.13]},{h:"Alicante, Spain",a:"Pacific Ocean near New Zealand",c:[38.35,-.48]},{h:"Aligarh, India",a:"Southern Pacific Ocean",c:[27.89,78.06]},{h:"Allahabad, India",a:"Southern Pacific Ocean",c:[25.46,81.84]},{h:"Allen, Texas",a:"Indian Ocean",c:[33.1,-96.67]},{h:"Allentown, Pennsylvania",a:"Indian Ocean",c:[40.61,-75.49]},{h:"Almaty, Kazakhstan",a:"Southern Pacific Ocean",c:[43.33,76.92]},{h:"Alor Setar, Malaysia",a:"Motupe, Peru",c:[6.11,100.37]},{h:"Amarillo, Texas",a:"Indian Ocean",c:[35.22,-101.83]},{h:"Ambon, Indonesia",a:"Oiapoque, Brazil",c:[-3.72,128.2]},{h:"Americana, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-22.75,-47.33]},{h:"Amman, Jordan",a:"Southern Pacific Ocean",c:[31.95,35.93]},{h:"Amravati, India",a:"Southern Pacific Ocean",c:[20.95,77.77]},{h:"Amritsar, India",a:"Southern Pacific Ocean",c:[31.64,74.87]},{h:"Amsterdam, Netherlands",a:"Southern Pacific Ocean",c:[52.35,4.92]},{h:"Anaheim, California",a:"Indian Ocean",c:[33.84,-117.91]},{h:"Anapolis, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-16.32,-48.96]},{h:"Anchorage, Alaska",a:"Southern Pacific Ocean",c:[61.22,-149.9]},{h:"Andijon, Uzbekistan",a:"Southern Pacific Ocean",c:[40.79,72.34]},{h:"Andorra la Vella, Andorra",a:"Southern Pacific Ocean",c:[42.5,1.52]},{h:"Angeles City, Philippines",a:"Pontes e Lacerda, Brazil",c:[15.15,120.55]},{h:"Ankang, China",a:"Cerrillos, Chile",c:[32.68,109.02]},{h:"Ankara, Turkey",a:"Southern Pacific Ocean",c:[39.93,32.86]},{h:"Ann Arbor, Michigan",a:"Indian Ocean",c:[42.28,-83.74]},{h:"Annaba, Algeria",a:"Southern Pacific Ocean",c:[36.92,7.76]},{h:"Anqing, China",a:"Tulumba, Argentina",c:[30.5,117.05]},{h:"Ansan, South Korea",a:"Southern Atlantic Ocean",c:[37.35,126.86]},{h:"Anshan, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[41.12,122.94]},{h:"Anshun, China",a:"Southern Pacific Ocean",c:[26.25,105.93]},{h:"Antalya, Turkey",a:"Southern Pacific Ocean",c:[36.89,30.7]},{h:"Antananarivo, Madagascar",a:"Pacific Ocean",c:[-18.92,47.52]},{h:"Antioch, California",a:"Indian Ocean",c:[38,-121.81]},{h:"Antofagasta, Chile",a:"Laibin, China",c:[-23.65,-70.4]},{h:"Antsirabe, Madagascar",a:"Pacific Ocean",c:[-19.85,47.03]},{h:"Antwerp, Belgium",a:"Southern Pacific Ocean",c:[51.22,4.42]},{h:"Aomori, Japan",a:"Southern Atlantic Ocean",c:[40.83,140.71]},{h:"Apia, Samoa",a:"Abachan, Niger",c:[-13.84,-171.74]},{h:"Ar Ramadi, Iraq",a:"Southern Pacific Ocean",c:[33.42,43.3]},{h:"Aracaju, Brazil",a:"Pacific Ocean",c:[-10.9,-37.12]},{h:"Arak, Iran",a:"Southern Pacific Ocean",c:[34.08,49.7]},{h:"Ardabil, Iran",a:"Southern Pacific Ocean",c:[38.25,48.3]},{h:"Arequipa, Peru",a:"South China Sea near Vietnam",c:[-16.42,-71.53]},{h:"Arkhangelsk, Russia",a:"Southern Pacific Ocean",c:[64.58,40.55]},{h:"Arlington, Texas",a:"Indian Ocean",c:[32.74,-97.11]},{h:"Armenia, Colombia",a:"Bukit Harapan, Indonesia",c:[4.53,-75.68]},{h:"Arusha, Tanzania",a:"Pacific Ocean",c:[-3.36,36.67]},{h:"Arvada, Colorado",a:"Indian Ocean",c:[39.8,-105.09]},{h:"As Sulaymaniyah, Iraq",a:"Southern Pacific Ocean",c:[35.56,45.43]},{h:"Asahikawa, Japan",a:"Southern Atlantic Ocean",c:[43.76,142.38]},{h:"Asansol, India",a:"Southern Pacific Ocean",c:[23.68,86.98]},{h:"Asheville, North Carolina",a:"Indian Ocean",c:[35.6,-82.55]},{h:"Ashgabat, Turkmenistan",a:"Southern Pacific Ocean",c:[37.95,58.38]},{h:"Asmara, Eritrea",a:"Pacific Ocean",c:[15.33,38.93]},{h:"Astrakhan, Russia",a:"Southern Pacific Ocean",c:[46.35,48.06]},{h:"Asuncion, Paraguay",a:"Taipei, Taiwan",c:[-25.3,-57.64]},{h:"Aswan, Egypt",a:"Southern Pacific Ocean",c:[24.09,32.9]},{h:"Asyut, Egypt",a:"Southern Pacific Ocean",c:[27.19,31.18]},{h:"Athens, Georgia",a:"Indian Ocean",c:[33.95,-83.36]},{h:"Athens, Greece",a:"Southern Pacific Ocean",c:[37.98,23.73]},{h:"Atlanta, Georgia",a:"Indian Ocean",c:[33.75,-84.39]},{h:"Auckland, New Zealand",a:"Ronda, Spain",c:[-36.85,174.76]},{h:"Augsburg, Germany",a:"Southern Pacific Ocean",c:[48.35,10.9]},{h:"Augusta, Georgia",a:"Indian Ocean",c:[33.47,-82.01]},{h:"Aurangabad, India",a:"Southern Pacific Ocean",c:[19.9,75.32]},{h:"Aurora, Colorado",a:"Indian Ocean",c:[39.73,-104.83]},{h:"Aurora, Illinois",a:"Indian Ocean",c:[41.76,-88.32]},{h:"Austin, Texas",a:"Indian Ocean",c:[30.27,-97.74]},{h:"Awka, Nigeria",a:"Southern Pacific Ocean",c:[6.21,7.07]},{h:"Az Zarqa, Jordan",a:"Southern Pacific Ocean",c:[32.07,36.1]},{h:"Bacolod, Philippines",a:"Juara, Brazil",c:[10.63,122.98]},{h:"Baghdad, Iraq",a:"Southern Pacific Ocean",c:[33.34,44.39]},{h:"Baguio City, Philippines",a:"San Matías, Bolivia",c:[16.43,120.57]},{h:"Bahawalpur, Pakistan",a:"Southern Pacific Ocean",c:[29.39,71.68]},{h:"Baicheng, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[45.62,122.82]},{h:"Baishan, China",a:"Southern Atlantic Ocean",c:[41.9,126.43]},{h:"Bakersfield, California",a:"Indian Ocean",c:[35.37,-119.02]},{h:"Baku, Azerbaijan",a:"Southern Pacific Ocean",c:[40.4,49.86]},{h:"Balikpapan, Indonesia",a:"Barcelos, Brazil",c:[-1.25,116.83]},{h:"Baltimore, Maryland",a:"Indian Ocean",c:[39.29,-76.61]},{h:"Bamako, Mali",a:"Southern Pacific Ocean",c:[12.65,-8]},{h:"Bamenda, Cameroon",a:"Pacific Ocean",c:[5.96,10.15]},{h:"Banda Aceh, Indonesia",a:"Pacific Ocean",c:[5.55,95.32]},{h:"Bandar Abbas, Iran",a:"Southern Pacific Ocean",c:[27.2,56.27]},{h:"Bandar Lampung, Indonesia",a:"Purnio, Colombia",c:[-5.43,105.27]},{h:"Bandar Seri Begawan, Brunei",a:"Coari, Brazil",c:[4.88,114.93]},{h:"Bandung, Indonesia",a:"Chitagá, Colombia",c:[-6.95,107.57]},{h:"Bangkok, Thailand",a:"Pacific Ocean",c:[13.75,100.52]},{h:"Bangui, Central African Republic",a:"Pacific Ocean",c:[4.37,18.56]},{h:"Bani Suwayf, Egypt",a:"Southern Pacific Ocean",c:[29.08,31.09]},{h:"Banjarmasin, Indonesia",a:"Amazonas State, Venezuela",c:[-3.33,114.58]},{h:"Banjul, Gambia, The",a:"Southern Pacific Ocean",c:[13.45,-16.59]},{h:"Bannu, Pakistan",a:"Southern Pacific Ocean",c:[32.99,70.6]},{h:"Baoding, China",a:"Pichi Mahuida, Argentina",c:[38.87,115.48]},{h:"Baojishi, China",a:"Southern Pacific Ocean",c:[34.38,107.15]},{h:"Baoshan, China",a:"Southern Pacific Ocean",c:[25.12,99.15]},{h:"Baotou, China",a:"Pilcaniyeu, Argentina",c:[40.65,109.82]},{h:"Baqubah, Iraq",a:"Southern Pacific Ocean",c:[33.75,44.66]},{h:"Barcelona, Spain",a:"Southern Pacific Ocean",c:[41.38,2.18]},{h:"Barcelona, Venezuela",a:"Indian Ocean",c:[10.13,-64.72]},{h:"Barddhaman, India",a:"Southern Pacific Ocean",c:[23.25,87.87]},{h:"Bareilly, India",a:"Southern Pacific Ocean",c:[28.35,79.42]},{h:"Bari, Italy",a:"Southern Pacific Ocean",c:[41.11,16.87]},{h:"Barnaul, Russia",a:"Southern Pacific Ocean",c:[53.36,83.75]},{h:"Barquisimeto, Venezuela",a:"Indian Ocean",c:[10.05,-69.3]},{h:"Barranquilla, Colombia",a:"Indian Ocean",c:[10.96,-74.8]},{h:"Basel, Switzerland",a:"Southern Pacific Ocean",c:[47.58,7.59]},{h:"Basra, Iraq",a:"Southern Pacific Ocean",c:[30.51,47.81]},{h:"Basseterre, St. Kitts And Nevis",a:"Indian Ocean",c:[17.3,-62.72]},{h:"Batangas, Philippines",a:"Sapezal, Brazil",c:[13.78,121.02]},{h:"Batman, Turkey",a:"Southern Pacific Ocean",c:[37.89,41.14]},{h:"Baton Rouge, Louisiana",a:"Indian Ocean",c:[30.46,-91.14]},{h:"Bauchi, Nigeria",a:"Pacific Ocean",c:[10.31,9.84]},{h:"Bauru, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-22.33,-49.08]},{h:"Beaumont, Texas",a:"Indian Ocean",c:[30.08,-94.13]},{h:"Beaverton, Oregon",a:"Indian Ocean",c:[45.49,-122.8]},{h:"Beidao, China",a:"Southern Pacific Ocean",c:[34.6,105.92]},{h:"Beihai, China",a:"Southern Pacific Ocean",c:[21.48,109.1]},{h:"Beijing, China",a:"Conesa, Argentina",c:[39.93,116.39]},{h:"Beira, Mozambique",a:"Pacific Ocean",c:[-19.82,34.87]},{h:"Beirut, Lebanon",a:"Southern Pacific Ocean",c:[33.87,35.51]},{h:"Bejaia, Algeria",a:"Southern Pacific Ocean",c:[36.76,5.07]},{h:"Bekasi, Indonesia",a:"Guayabal, Colombia",c:[-6.22,106.97]},{h:"Belem, Brazil",a:"Pacific Ocean",c:[-1.45,-48.48]},{h:"Belfast, UK",a:"Southern Pacific Ocean",c:[54.6,-5.96]},{h:"Belgaum, India",a:"Pacific Ocean",c:[15.87,74.51]},{h:"Belgorod, Russia",a:"Southern Pacific Ocean",c:[50.63,36.6]},{h:"Belgrade, Serbia",a:"Southern Pacific Ocean",c:[44.82,20.47]},{h:"Bellary, India",a:"Pacific Ocean",c:[15.15,76.92]},{h:"Bellevue, Washington",a:"Indian Ocean",c:[47.61,-122.2]},{h:"Bellingham, Washington",a:"Indian Ocean",c:[48.75,-122.48]},{h:"Bello, Colombia",a:"Indian Ocean",c:[6.33,-75.57]},{h:"Belmopan, Belize",a:"Indian Ocean",c:[17.25,-88.77]},{h:"Belo Horizonte, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-19.92,-43.92]},{h:"Bend, Oregon",a:"Indian Ocean",c:[44.06,-121.32]},{h:"Bengaluru, India",a:"Pacific Ocean",c:[12.97,77.56]},{h:"Bengbu, China",a:"Unión, Argentina",c:[32.95,117.33]},{h:"Benghazi, Libya",a:"Southern Pacific Ocean",c:[32.12,20.07]},{h:"Bengkulu, Indonesia",a:"Cauca, Colombia",c:[-3.8,102.27]},{h:"Beni, DRC",a:"Pacific Ocean",c:[.49,29.45]},{h:"Benin City, Nigeria",a:"Southern Pacific Ocean",c:[6.34,5.62]},{h:"Benoni, South Africa",a:"Northern Pacific Ocean",c:[-26.15,28.33]},{h:"Benxi, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[41.33,123.75]},{h:"Berkeley, California",a:"Indian Ocean",c:[37.87,-122.27]},{h:"Berlin, Germany",a:"Southern Pacific Ocean",c:[52.52,13.4]},{h:"Bern, Switzerland",a:"Southern Pacific Ocean",c:[46.92,7.47]},{h:"Bezwada, India",a:"Southern Pacific Ocean",c:[16.52,80.63]},{h:"Bhagalpur, India",a:"Southern Pacific Ocean",c:[25.23,86.98]},{h:"Bhatpara, India",a:"Southern Pacific Ocean",c:[22.85,88.52]},{h:"Bhavnagar, India",a:"Southern Pacific Ocean",c:[21.78,72.13]},{h:"Bhilai, India",a:"Southern Pacific Ocean",c:[21.22,81.43]},{h:"Bhilwara, India",a:"Southern Pacific Ocean",c:[25.35,74.64]},{h:"Bhiwandi, India",a:"Southern Pacific Ocean",c:[19.35,73.13]},{h:"Bhopal, India",a:"Southern Pacific Ocean",c:[23.25,77.41]},{h:"Bhubaneshwar, India",a:"Southern Pacific Ocean",c:[20.27,85.83]},{h:"Bidar, India",a:"Southern Pacific Ocean",c:[17.92,77.52]},{h:"Bielefeld, Germany",a:"Southern Pacific Ocean",c:[52.03,8.53]},{h:"Bien Hoa, Vietnam",a:"Sepahua, Peru",c:[10.97,106.83]},{h:"Bikaner, India",a:"Southern Pacific Ocean",c:[28.03,73.33]},{h:"Bilaspur, India",a:"Southern Pacific Ocean",c:[22.09,82.16]},{h:"Bilbao, Spain",a:"Southern Pacific Ocean",c:[43.25,-2.93]},{h:"Billings, Montana",a:"Indian Ocean",c:[45.78,-108.5]},{h:"Binjai, Indonesia",a:"Pacific Ocean",c:[3.62,98.5]},{h:"Birjand, Iran",a:"Southern Pacific Ocean",c:[32.88,59.22]},{h:"Birmingham, Alabama",a:"Indian Ocean",c:[33.52,-86.8]},{h:"Birmingham, UK",a:"Southern Pacific Ocean",c:[52.48,-1.92]},{h:"Bishkek, Kyrgyzstan",a:"Southern Pacific Ocean",c:[42.87,74.59]},{h:"Bissau, Guinea-Bissau",a:"Southern Pacific Ocean",c:[11.87,-15.6]},{h:"Blantyre, Malawi",a:"Pacific Ocean",c:[-15.79,34.99]},{h:"Blida, Algeria",a:"Southern Pacific Ocean",c:[36.42,2.83]},{h:"Bloemfontein, South Africa",a:"Northern Pacific Ocean",c:[-29.12,26.23]},{h:"Bloomington, Indiana",a:"Indian Ocean",c:[39.17,-86.53]},{h:"Bloomington, Minnesota",a:"Indian Ocean",c:[44.84,-93.3]},{h:"Blumenau, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-26.92,-49.09]},{h:"Bobo-Dioulasso, Burkina Faso",a:"Southern Pacific Ocean",c:[11.18,-4.29]},{h:"Boca Raton, Florida",a:"Indian Ocean",c:[26.37,-80.13]},{h:"Bogor, Indonesia",a:"Cabrera, Colombia",c:[-6.57,106.75]},{h:"Bogota, Colombia",a:"Lampung, Indonesia",c:[4.6,-74.08]},{h:"Boise City, Idaho",a:"Indian Ocean",c:[43.62,-116.21]},{h:"Bologna, Italy",a:"Southern Pacific Ocean",c:[44.5,11.34]},{h:"Bonn, Germany",a:"Southern Pacific Ocean",c:[50.72,7.08]},{h:"Bordeaux, France",a:"Southern Pacific Ocean",c:[44.85,-.6]},{h:"Boston, Massachusetts",a:"Indian Ocean",c:[42.36,-71.06]},{h:"Bouake, Côte D’Ivoire",a:"Southern Pacific Ocean",c:[7.69,-5.03]},{h:"Boulder, Colorado",a:"Indian Ocean",c:[40.01,-105.27]},{h:"Bournemouth, UK",a:"Southern Pacific Ocean",c:[50.73,-1.9]},{h:"Bradford, UK",a:"Southern Pacific Ocean",c:[53.8,-1.75]},{h:"Braga, Portugal",a:"West Coast, New Zealand",c:[41.56,-8.42]},{h:"Brahmapur, India",a:"Southern Pacific Ocean",c:[19.32,84.8]},{h:"Brasilia, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-15.78,-47.92]},{h:"Brasov, Romania",a:"Southern Pacific Ocean",c:[45.65,25.61]},{h:"Bratislava, Slovakia",a:"Southern Pacific Ocean",c:[48.15,17.12]},{h:"Brazzaville, RDC",a:"Pacific Ocean",c:[-4.26,15.28]},{h:"Bremen, Germany",a:"Southern Pacific Ocean",c:[53.08,8.8]},{h:"Brest, Belarus",a:"Southern Pacific Ocean",c:[52.1,23.7]},{h:"Bridgeport, Connecticut",a:"Indian Ocean",c:[41.19,-73.2]},{h:"Bridgetown, Barbados",a:"Indian Ocean",c:[13.1,-59.62]},{h:"Brighton, UK",a:"Southern Pacific Ocean",c:[50.83,-.17]},{h:"Brisbane, Australia",a:"Northern Atlantic Ocean",c:[-27.46,153.04]},{h:"Bristol, UK",a:"Southern Pacific Ocean",c:[51.45,-2.58]},{h:"Brno, Czechia",a:"Southern Pacific Ocean",c:[49.2,16.61]},{h:"Brockton, Massachusetts",a:"Indian Ocean",c:[42.08,-71.02]},{h:"Broken Arrow, Oklahoma",a:"Indian Ocean",c:[36.06,-95.8]},{h:"Brownsville, Texas",a:"Indian Ocean",c:[25.9,-97.5]},{h:"Brussels, Belgium",a:"Southern Pacific Ocean",c:[50.83,4.33]},{h:"Bryansk, Russia",a:"Southern Pacific Ocean",c:[53.26,34.43]},{h:"Bucaramanga, Colombia",a:"Puncakmanggis, Indonesia",c:[7.13,-73.13]},{h:"Bucharest, Romania",a:"Southern Pacific Ocean",c:[44.43,26.1]},{h:"Bucheon, South Korea",a:"Southern Atlantic Ocean",c:[37.5,126.78]},{h:"Budapest, Hungary",a:"Southern Pacific Ocean",c:[47.5,19.08]},{h:"Buena Park, California",a:"Indian Ocean",c:[33.87,-118]},{h:"Buenos Aires, Argentina",a:"Yellow Sea, Western Pacific Ocean",c:[-34.6,-58.4]},{h:"Buffalo, New York",a:"Indian Ocean",c:[42.89,-78.88]},{h:"Bujumbura, Burundi",a:"Pacific Ocean",c:[-3.38,29.36]},{h:"Bukavu, DRC",a:"Pacific Ocean",c:[-2.51,28.84]},{h:"Bukhara, Uzbekistan",a:"Southern Pacific Ocean",c:[39.78,64.43]},{h:"Bukittinggi, Indonesia",a:"Quinindé, Ecuador",c:[-.3,100.36]},{h:"Bulawayo, Zimbabwe",a:"Pacific Ocean",c:[-20.17,28.58]},{h:"Buon Ma Thuot, Vietnam",a:"Manu, Peru",c:[12.67,108.05]},{h:"Buraydah, Saudi Arabia",a:"Southern Pacific Ocean",c:[26.37,43.96]},{h:"Burbank, California",a:"Indian Ocean",c:[34.18,-118.31]},{h:"Bursa, Turkey",a:"Southern Pacific Ocean",c:[40.2,29.07]},{h:"Busan, South Korea",a:"Southern Atlantic Ocean",c:[35.1,129.01]},{h:"Butterworth, Malaysia",a:"San Miguel de El Faique, Peru",c:[5.42,100.4]},{h:"Bydgoszcz, Poland",a:"Southern Pacific Ocean",c:[53.12,18.01]},{h:"Bytom, Poland",a:"Southern Pacific Ocean",c:[50.35,18.91]},{h:"Ca Mau, Vietnam",a:"Santa Teresa, Peru",c:[9.18,105.15]},{h:"Cabimas, Venezuela",a:"Indian Ocean",c:[10.43,-71.45]},{h:"Caerdydd, UK",a:"Southern Pacific Ocean",c:[51.5,-3.23]},{h:"Cagayan de Oro, Philippines",a:"Novo Progresso, Brazil",c:[8.45,124.69]},{h:"Cairo, Egypt",a:"Southern Pacific Ocean",c:[30.05,31.25]},{h:"Calabar, Nigeria",a:"Pacific Ocean",c:[4.96,8.33]},{h:"Calgary, Canada",a:"Indian Ocean",c:[51.08,-114.08]},{h:"Cali, Colombia",a:"Bumi Makmur, Indonesia",c:[3.4,-76.5]},{h:"Calicut, India",a:"Pacific Ocean",c:[11.25,75.77]},{h:"Camaguey, Cuba",a:"Indian Ocean",c:[21.38,-77.92]},{h:"Cambridge, Massachusetts",a:"Indian Ocean",c:[42.37,-71.11]},{h:"Campina Grande, Brazil",a:"Pacific Ocean",c:[-7.23,-35.88]},{h:"Campinas, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-22.9,-47.1]},{h:"Campo Grande, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-20.45,-54.62]},{h:"Campos, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-21.75,-41.32]},{h:"Can Tho, Vietnam",a:"Tahuanía, Peru",c:[10.05,105.77]},{h:"Canberra, Australia",a:"Northern Atlantic Ocean",c:[-35.28,149.13]},{h:"Cancun, Mexico",a:"Indian Ocean",c:[21.17,-86.83]},{h:"Cangzhou, China",a:"Partido de Puan, Argentina",c:[38.32,116.87]},{h:"Canoas, Brazil",a:"East China Sea, Western Pacific Ocean",c:[-29.92,-51.18]},{h:"Cape Coral, Florida",a:"Indian Ocean",c:[26.56,-81.95]},{h:"Cape Town, South Africa",a:"Northern Pacific Ocean",c:[-33.92,18.44]},{h:"Capitol Hill, Northern Mariana Islands",a:"Southern Atlantic Ocean",c:[15.21,145.75]},{h:"Caracas, Venezuela",a:"Indian Ocean",c:[10.5,-66.92]},{h:"Carlsbad, California",a:"Indian Ocean",c:[33.16,-117.35]},{h:"Carmel, Indiana",a:"Indian Ocean",c:[39.98,-86.12]},{h:"Carrollton, Texas",a:"Indian Ocean",c:[32.98,-96.89]},{h:"Carson, California",a:"Indian Ocean",c:[33.83,-118.28]},{h:"Cartagena, Colombia",a:"Indian Ocean",c:[10.4,-75.51]},{h:"Cary, North Carolina",a:"Indian Ocean",c:[35.79,-78.78]},{h:"Casablanca, Morocco",a:"Southern Pacific Ocean",c:[33.6,-7.62]},{h:"Castries, St. Lucia",a:"Indian Ocean",c:[14,-61]},{h:"Catania, Italy",a:"Southern Pacific Ocean",c:[37.5,15.08]},{h:"Cawnpore, India",a:"Southern Pacific Ocean",c:[26.46,80.32]},{h:"Caxias do Sul, Brazil",a:"East China Sea, Western Pacific Ocean",c:[-29.18,-51.17]},{h:"Cebu City, Philippines",a:"Alta Floresta, Brazil",c:[10.32,123.9]},{h:"Cedar Rapids, Iowa",a:"Indian Ocean",c:[41.98,-91.67]},{h:"Celaya, Mexico",a:"Indian Ocean",c:[20.53,-100.8]},{h:"Centennial, Colorado",a:"Indian Ocean",c:[39.58,-104.88]},{h:"Champaign, Illinois",a:"Indian Ocean",c:[40.12,-88.24]},{h:"Chanda, India",a:"Southern Pacific Ocean",c:[19.97,79.3]},{h:"Chandigarh, India",a:"Southern Pacific Ocean",c:[30.72,76.78]},{h:"Chandler, Arizona",a:"Indian Ocean",c:[33.31,-111.84]},{h:"Changchun, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[43.87,125.34]},{h:"Changde, China",a:"General Lamadrid, Argentina",c:[29.03,111.68]},{h:"Changhua, Taiwan",a:"Teniente Esteban Martínez, Paraguay",c:[24.07,120.51]},{h:"Changping, China",a:"Conesa, Argentina",c:[40.22,116.19]},{h:"Changsha, China",a:"Tinogasta, Argentina",c:[28.2,112.97]},{h:"Changwon, South Korea",a:"Southern Atlantic Ocean",c:[35.22,128.58]},{h:"Changzhi, China",a:"Chalileo, Argentina",c:[36.18,113.11]},{h:"Changzhou, China",a:"Tabossi, Argentina",c:[31.78,119.97]},{h:"Chaoyang, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[41.55,120.42]},{h:"Chaozhou, China",a:"Rivadavia Banda Sur, Argentina",c:[23.68,116.63]},{h:"Charleroi, Belgium",a:"Southern Pacific Ocean",c:[50.42,4.45]},{h:"Charleston, South Carolina",a:"Indian Ocean",c:[32.78,-79.93]},{h:"Charlotte Amalie, U.S. Virgin Islands",a:"Indian Ocean",c:[18.34,-64.93]},{h:"Charlotte, North Carolina",a:"Indian Ocean",c:[35.23,-80.84]},{h:"Chattanooga, Tennessee",a:"Indian Ocean",c:[35.05,-85.31]},{h:"Cheboksary, Russia",a:"Southern Pacific Ocean",c:[56.13,47.25]},{h:"Chelyabinsk, Russia",a:"Southern Pacific Ocean",c:[55.16,61.44]},{h:"Chemnitz, Germany",a:"Southern Pacific Ocean",c:[50.83,12.92]},{h:"Chengde, China",a:"Southern Atlantic Ocean",c:[40.96,117.93]},{h:"Chengdu, China",a:"Southern Pacific Ocean",c:[30.67,104.07]},{h:"Chennai, India",a:"Pacific Ocean",c:[13.09,80.28]},{h:"Chenzhou, China",a:"Antofagasta de la Sierra, Argentina",c:[25.8,113.03]},{h:"Cheongju, South Korea",a:"Southern Atlantic Ocean",c:[36.64,127.5]},{h:"Cherepovets, Russia",a:"Southern Pacific Ocean",c:[59.14,37.91]},{h:"Cherkasy, Ukraine",a:"Southern Pacific Ocean",c:[49.43,32.07]},{h:"Chernihiv, Ukraine",a:"Southern Pacific Ocean",c:[51.5,31.3]},{h:"Chernivtsi, Ukraine",a:"Southern Pacific Ocean",c:[48.31,25.92]},{h:"Chesapeake, Virginia",a:"Indian Ocean",c:[36.77,-76.29]},{h:"Chiang Mai, Thailand",a:"Southern Pacific Ocean",c:[18.8,98.98]},{h:"Chiayi, Taiwan",a:"Presidente Hayes, Paraguay",c:[23.48,120.44]},{h:"Chicago, Illinois",a:"Indian Ocean",c:[41.88,-87.63]},{h:"Chiclayo, Peru",a:"Wang Pra Chan, Thailand",c:[-6.76,-79.84]},{h:"Chico, California",a:"Indian Ocean",c:[39.73,-121.84]},{h:"Chifeng, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[42.27,118.95]},{h:"Chihuahua, Mexico",a:"Indian Ocean",c:[28.65,-106.09]},{h:"Chimbote, Peru",a:"Gulf of Thailand, Western Pacific Ocean",c:[-9.07,-78.57]},{h:"Chisinau, Moldova",a:"Southern Pacific Ocean",c:[47.01,28.86]},{h:"Chita, Russia",a:"Argentine Sea, Southern Atlantic Ocean",c:[52.06,113.47]},{h:"Chittagong, Bangladesh",a:"Southern Pacific Ocean",c:[22.33,91.8]},{h:"Chitungwiza, Zimbabwe",a:"Pacific Ocean",c:[-18,31.1]},{h:"Chlef, Algeria",a:"Southern Pacific Ocean",c:[36.17,1.32]},{h:"Chongjin, North Korea",a:"Southern Atlantic Ocean",c:[41.78,129.79]},{h:"Chongqing, China",a:"Southern Pacific Ocean",c:[29.57,106.6]},{h:"Christchurch, New Zealand",a:"Alfoz, Spain",c:[-43.54,172.63]},{h:"Chula Vista, California",a:"Indian Ocean",c:[32.64,-117.08]},{h:"Cicero, Illinois",a:"Indian Ocean",c:[41.85,-87.75]},{h:"Cilacap, Indonesia",a:"Parroquia Santa Barbara, Venezuela",c:[-7.72,109.02]},{h:"Cincinnati, Ohio",a:"Indian Ocean",c:[39.1,-84.51]},{h:"Citrus Heights, California",a:"Indian Ocean",c:[38.71,-121.28]},{h:"Ciudad Bolivar, Venezuela",a:"Lombok Utara, Indonesia",c:[8.1,-63.6]},{h:"Ciudad del Este, Paraguay",a:"East China Sea, Western Pacific Ocean",c:[-25.52,-54.62]},{h:"Ciudad Guayana, Venezuela",a:"Sumbawa Barat, Indonesia",c:[8.37,-62.62]},{h:"Ciudad Nezahualcoyotl, Mexico",a:"Indian Ocean",c:[19.41,-99.03]},{h:"Clarksville, Tennessee",a:"Indian Ocean",c:[36.53,-87.36]},{h:"Clearwater, Florida",a:"Indian Ocean",c:[27.97,-82.8]},{h:"Cleveland, Ohio",a:"Indian Ocean",c:[41.5,-81.69]},{h:"Clifton, New Jersey",a:"Indian Ocean",c:[40.86,-74.16]},{h:"Clovis, California",a:"Indian Ocean",c:[36.83,-119.7]},{h:"Cluj, Romania",a:"Southern Pacific Ocean",c:[46.79,23.6]},{h:"Cochabamba, Bolivia",a:"South China Sea, Pacific Ocean",c:[-17.41,-66.17]},{h:"Coimbatore, India",a:"Pacific Ocean",c:[11,76.95]},{h:"College Station, Texas",a:"Indian Ocean",c:[30.63,-96.33]},{h:"Cologne, Germany",a:"Southern Pacific Ocean",c:[50.93,6.95]},{h:"Colombo, Sri Lanka",a:"Pacific Ocean",c:[6.93,79.86]},{h:"Colorado Springs, Colorado",a:"Indian Ocean",c:[38.83,-104.82]},{h:"Columbia, Missouri",a:"Indian Ocean",c:[38.95,-92.33]},{h:"Columbia, South Carolina",a:"Indian Ocean",c:[34,-81.03]},{h:"Columbus, Georgia",a:"Indian Ocean",c:[32.46,-84.99]},{h:"Columbus, Ohio",a:"Indian Ocean",c:[39.96,-83]},{h:"Comilla, Bangladesh",a:"Southern Pacific Ocean",c:[23.47,91.17]},{h:"Compton, California",a:"Indian Ocean",c:[33.9,-118.22]},{h:"Conakry, Guinea",a:"Southern Pacific Ocean",c:[9.53,-13.68]},{h:"Concepcion, Chile",a:"Luoshanchuan, China",c:[-36.83,-73.05]},{h:"Concord, California",a:"Indian Ocean",c:[37.98,-122.03]},{h:"Concord, North Carolina",a:"Indian Ocean",c:[35.41,-80.58]},{h:"Constanta, Romania",a:"Southern Pacific Ocean",c:[44.2,28.61]},{h:"Constantine, Algeria",a:"Southern Pacific Ocean",c:[36.36,6.6]},{h:"Copenhagen, Denmark",a:"Southern Pacific Ocean",c:[55.68,12.56]},{h:"Coral Springs, Florida",a:"Indian Ocean",c:[26.27,-80.27]},{h:"Cordoba, Argentina",a:"Gubei, China",c:[-31.4,-64.18]},{h:"Cordoba, Spain",a:"Lake Mangahia,  New Zealand",c:[37.88,-4.77]},{h:"Corona, California",a:"Indian Ocean",c:[33.88,-117.57]},{h:"Corpus Christi, Texas",a:"Indian Ocean",c:[27.8,-97.4]},{h:"Corrientes, Argentina",a:"Pingyang, China",c:[-27.49,-58.81]},{h:"Costa Mesa, California",a:"Indian Ocean",c:[33.64,-117.92]},{h:"Cotonou, Benin",a:"Southern Pacific Ocean",c:[6.4,2.52]},{h:"Coventry, UK",a:"Southern Pacific Ocean",c:[52.42,-1.5]},{h:"Craiova, Romania",a:"Southern Pacific Ocean",c:[44.33,23.83]},{h:"Cranbourne, Australia",a:"Northern Atlantic Ocean",c:[-38.1,145.28]},{h:"Cucuta, Colombia",a:"Indian Ocean",c:[7.92,-72.52]},{h:"Cuernavaca, Mexico",a:"Indian Ocean",c:[18.92,-99.24]},{h:"Cuiaba, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-15.57,-56.09]},{h:"Culiacan, Mexico",a:"Indian Ocean",c:[24.83,-107.38]},{h:"Cumana, Venezuela",a:"Indian Ocean",c:[10.45,-64.18]},{h:"Curepipe, Mauritius",a:"Pacific Ocean",c:[-20.32,57.52]},{h:"Curitiba, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-25.42,-49.32]},{h:"Cusco, Peru",a:"Nhơn Hòa, Vietnam",c:[-13.53,-71.97]},{h:"Cuttack, India",a:"Southern Pacific Ocean",c:[20.47,85.89]},{h:"Dadukou, China",a:"Southern Pacific Ocean",c:[26.55,101.73]},{h:"Daegu, South Korea",a:"Southern Atlantic Ocean",c:[35.87,128.61]},{h:"Daejeon, South Korea",a:"Southern Atlantic Ocean",c:[36.34,127.43]},{h:"Dahuk, Iraq",a:"Southern Pacific Ocean",c:[36.87,43]},{h:"Dakar, Senegal",a:"Pacific Ocean",c:[14.72,-17.47]},{h:"Dalian, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[38.92,121.63]},{h:"Dallas, Texas",a:"Indian Ocean",c:[32.78,-96.8]},{h:"Daly City, California",a:"Indian Ocean",c:[37.69,-122.47]},{h:"Damanhur, Egypt",a:"Southern Pacific Ocean",c:[31.05,30.47]},{h:"Damascus, Syria",a:"Southern Pacific Ocean",c:[33.5,36.3]},{h:"Damietta, Egypt",a:"Southern Pacific Ocean",c:[31.42,31.82]},{h:"Danbury, Connecticut",a:"Indian Ocean",c:[41.39,-73.45]},{h:"Dandong, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[40.14,124.39]},{h:"Daqing, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[46.58,125]},{h:"Dar es Salaam, Tanzania",a:"Pacific Ocean",c:[-6.8,39.27]},{h:"Davangere, India",a:"Pacific Ocean",c:[14.47,75.92]},{h:"Davao, Philippines",a:"Altamira, Brazil",c:[7.11,125.63]},{h:"Davenport, Iowa",a:"Indian Ocean",c:[41.52,-90.58]},{h:"Davie, Florida",a:"Indian Ocean",c:[26.08,-80.25]},{h:"Dayton, Ohio",a:"Indian Ocean",c:[39.76,-84.19]},{h:"Dearborn, Michigan",a:"Indian Ocean",c:[42.32,-83.18]},{h:"Dehra Dun, India",a:"Southern Pacific Ocean",c:[30.32,78.05]},{h:"Deir ez-Zur, Syria",a:"Southern Pacific Ocean",c:[35.33,40.13]},{h:"Delhi, India",a:"Southern Pacific Ocean",c:[28.67,77.23]},{h:"Deltona, Florida",a:"Indian Ocean",c:[28.9,-81.26]},{h:"Dengtalu, China",a:"Loventué, Argentina",c:[36.08,114.35]},{h:"Denizli, Turkey",a:"Southern Pacific Ocean",c:[37.77,29.08]},{h:"Denpasar, Indonesia",a:"La Laguna, Venezuela",c:[-8.65,115.22]},{h:"Denton, Texas",a:"Indian Ocean",c:[33.21,-97.13]},{h:"Denver, Colorado",a:"Indian Ocean",c:[39.74,-104.99]},{h:"Des Moines, Iowa",a:"Indian Ocean",c:[41.6,-93.61]},{h:"Detroit, Michigan",a:"Indian Ocean",c:[42.33,-83.05]},{h:"Dezful, Iran",a:"Southern Pacific Ocean",c:[32.38,48.47]},{h:"Dezhou, China",a:"Guatraché, Argentina",c:[37.45,116.3]},{h:"Dhaka, Bangladesh",a:"Southern Pacific Ocean",c:[23.72,90.41]},{h:"Dhanbad, India",a:"Southern Pacific Ocean",c:[23.8,86.42]},{h:"Dhulia, India",a:"Southern Pacific Ocean",c:[20.9,74.77]},{h:"Dili, Timor-Leste",a:"Northern Atlantic Ocean",c:[-8.56,125.58]},{h:"Diyarbakir, Turkey",a:"Southern Pacific Ocean",c:[37.92,40.23]},{h:"Djibouti, Djibouti",a:"Pacific Ocean",c:[11.6,43.15]},{h:"Dnipro, Ukraine",a:"Southern Pacific Ocean",c:[48.48,35]},{h:"Dodoma, Tanzania",a:"Pacific Ocean",c:[-6.18,35.75]},{h:"Doha, Qatar",a:"Southern Pacific Ocean",c:[25.29,51.53]},{h:"Donets'k, Ukraine",a:"Southern Pacific Ocean",c:[48,37.83]},{h:"Dongguan, China",a:"Coranzulí, Argentina",c:[23.05,113.74]},{h:"Donostia, Spain",a:"Southern Pacific Ocean",c:[43.32,-1.98]},{h:"Dortmund, Germany",a:"Southern Pacific Ocean",c:[51.53,7.45]},{h:"Douala, Cameroon",a:"Pacific Ocean",c:[4.06,9.71]},{h:"Downey, California",a:"Indian Ocean",c:[33.94,-118.13]},{h:"Dresden, Germany",a:"Southern Pacific Ocean",c:[51.05,13.75]},{h:"Dubai, UAE",a:"Southern Pacific Ocean",c:[25.23,55.28]},{h:"Dublin, Ireland",a:"Southern Pacific Ocean",c:[53.33,-6.25]},{h:"Duisburg, Germany",a:"Southern Pacific Ocean",c:[51.43,6.75]},{h:"Duluth, Minnesota",a:"Indian Ocean",c:[46.79,-92.1]},{h:"Duma, Syria",a:"Southern Pacific Ocean",c:[33.58,36.4]},{h:"Durango, Mexico",a:"Indian Ocean",c:[24.03,-104.67]},{h:"Durban, South Africa",a:"Northern Pacific Ocean",c:[-29.87,30.98]},{h:"Durham, North Carolina",a:"Indian Ocean",c:[35.99,-78.9]},{h:"Dushanbe, Tajikistan",a:"Southern Pacific Ocean",c:[38.56,68.77]},{h:"Dusseldorf, Germany",a:"Southern Pacific Ocean",c:[51.22,6.78]},{h:"East London, South Africa",a:"Northern Pacific Ocean",c:[-32.97,27.87]},{h:"Edinburgh, UK",a:"Southern Pacific Ocean",c:[55.95,-3.22]},{h:"Edmond, Oklahoma",a:"Indian Ocean",c:[35.65,-97.48]},{h:"Edmonton, Canada",a:"Indian Ocean",c:[53.55,-113.5]},{h:"Eindhoven, Netherlands",a:"Southern Pacific Ocean",c:[51.43,5.5]},{h:"El Cajon, California",a:"Indian Ocean",c:[32.79,-116.96]},{h:"El Monte, California",a:"Indian Ocean",c:[34.07,-118.03]},{h:"El Obeid, Sudan",a:"Pacific Ocean",c:[13.18,30.22]},{h:"El Paso, Texas",a:"Indian Ocean",c:[31.78,-106.44]},{h:"Eldoret, Kenya",a:"Pacific Ocean",c:[.52,35.27]},{h:"Elgin, Illinois",a:"Indian Ocean",c:[42.04,-88.28]},{h:"Elizabeth, New Jersey",a:"Indian Ocean",c:[40.66,-74.21]},{h:"Elk Grove, California",a:"Indian Ocean",c:[38.41,-121.37]},{h:"Encarnacion, Paraguay",a:"East China Sea, Western Pacific Ocean",c:[-27.35,-55.87]},{h:"Enugu, Nigeria",a:"Southern Pacific Ocean",c:[6.45,7.5]},{h:"Erbil, Iraq",a:"Southern Pacific Ocean",c:[36.18,44.01]},{h:"Erie, Pennsylvania",a:"Indian Ocean",c:[42.13,-80.09]},{h:"Erzurum, Turkey",a:"Southern Pacific Ocean",c:[39.92,41.29]},{h:"Escondido, California",a:"Indian Ocean",c:[33.12,-117.09]},{h:"Esfahan, Iran",a:"Southern Pacific Ocean",c:[32.7,51.7]},{h:"Eskisehir, Turkey",a:"Southern Pacific Ocean",c:[39.8,30.53]},{h:"Essen, Germany",a:"Southern Pacific Ocean",c:[51.45,7.02]},{h:"Eugene, Oregon",a:"Indian Ocean",c:[44.05,-123.09]},{h:"Evansville, Indiana",a:"Indian Ocean",c:[37.97,-87.57]},{h:"Everett, Washington",a:"Indian Ocean",c:[47.98,-122.2]},{h:"Fairfield, California",a:"Indian Ocean",c:[38.25,-122.04]},{h:"Faisalabad, Pakistan",a:"Southern Pacific Ocean",c:[31.41,73.11]},{h:"Faiyum, Egypt",a:"Southern Pacific Ocean",c:[29.31,30.84]},{h:"Fall River, Massachusetts",a:"Indian Ocean",c:[41.7,-71.16]},{h:"Fargo, North Dakota",a:"Indian Ocean",c:[46.88,-96.79]},{h:"Faridabad, India",a:"Southern Pacific Ocean",c:[28.43,77.32]},{h:"Farmington Hills, Michigan",a:"Indian Ocean",c:[42.5,-83.37]},{h:"Fayetteville, North Carolina",a:"Indian Ocean",c:[35.05,-78.88]},{h:"Federal Way, Washington",a:"Indian Ocean",c:[47.32,-122.31]},{h:"Feira de Santana, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-12.25,-38.97]},{h:"Fergana, Uzbekistan",a:"Southern Pacific Ocean",c:[40.39,71.78]},{h:"Fes, Morocco",a:"Southern Pacific Ocean",c:[34.05,-5]},{h:"Firozabad, India",a:"Southern Pacific Ocean",c:[27.15,78.39]},{h:"Fishers, Indiana",a:"Indian Ocean",c:[39.96,-86.01]},{h:"Flint, Michigan",a:"Indian Ocean",c:[43.01,-83.69]},{h:"Florence, Italy",a:"Southern Pacific Ocean",c:[43.78,11.25]},{h:"Florianopolis, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-27.58,-48.52]},{h:"Fontana, California",a:"Indian Ocean",c:[34.09,-117.44]},{h:"Fort Collins, Colorado",a:"Indian Ocean",c:[40.59,-105.08]},{h:"Fort Lauderdale, Florida",a:"Indian Ocean",c:[26.12,-80.14]},{h:"Fort Smith, Arkansas",a:"Indian Ocean",c:[35.39,-94.4]},{h:"Fort Wayne, Indiana",a:"Indian Ocean",c:[41.08,-85.14]},{h:"Fort Worth, Texas",a:"Indian Ocean",c:[32.76,-97.33]},{h:"Fortaleza, Brazil",a:"Pacific Ocean",c:[-3.75,-38.58]},{h:"Foshan, China",a:"Coranzulí, Argentina",c:[23.03,113.12]},{h:"Foz do Iguacu, Brazil",a:"East China Sea, Western Pacific Ocean",c:[-25.52,-54.53]},{h:"Franca, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-20.53,-47.39]},{h:"Frankfurt, Germany",a:"Southern Pacific Ocean",c:[50.1,8.68]},{h:"Freetown, Sierra Leone",a:"Southern Pacific Ocean",c:[8.47,-13.23]},{h:"Fremont, California",a:"Indian Ocean",c:[37.55,-121.99]},{h:"Fresno, California",a:"Indian Ocean",c:[36.75,-119.77]},{h:"Frisco, Texas",a:"Indian Ocean",c:[33.15,-96.82]},{h:"Fukuoka, Japan",a:"Southern Atlantic Ocean",c:[33.6,130.41]},{h:"Fukushima, Japan",a:"Southern Atlantic Ocean",c:[37.74,140.47]},{h:"Fullerton, California",a:"Indian Ocean",c:[33.87,-117.92]},{h:"Funafuti, Tuvalu",a:"East Gonja, Ghana",c:[-8.52,179.22]},{h:"Fushun, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[41.87,123.87]},{h:"Fuxin, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[42.01,121.66]},{h:"Fuyang, China",a:"Comuna de Alejandra, Argentina",c:[30.05,119.95]},{h:"Fuyu, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[45.18,124.82]},{h:"Fuzhou, China",a:"Maipú, Argentina",c:[26.08,119.3]},{h:"Gaborone, Botswana",a:"Northern Pacific Ocean",c:[-24.65,25.91]},{h:"Gainesville, Florida",a:"Indian Ocean",c:[29.65,-82.32]},{h:"Galati, Romania",a:"Southern Pacific Ocean",c:[45.46,28.05]},{h:"Ganca, Azerbaijan",a:"Southern Pacific Ocean",c:[40.69,46.35]},{h:"Ganzhou, China",a:"Rosario de la Frontera, Argentina",c:[25.92,114.95]},{h:"Gaoping, China",a:"Southern Pacific Ocean",c:[30.78,106.13]},{h:"Gaozhou, China",a:"María Elena, Chile",c:[21.92,110.87]},{h:"Garden Grove, California",a:"Indian Ocean",c:[33.77,-117.94]},{h:"Garland, Texas",a:"Indian Ocean",c:[32.91,-96.64]},{h:"Garoua, Cameroon",a:"Pacific Ocean",c:[9.3,13.39]},{h:"Gaya, India",a:"Southern Pacific Ocean",c:[24.8,85]},{h:"Gaza City, Palestine",a:"Southern Pacific Ocean",c:[31.5,34.44]},{h:"Gaziantep, Turkey",a:"Southern Pacific Ocean",c:[37.08,37.39]},{h:"Gdansk, Poland",a:"Southern Pacific Ocean",c:[54.36,18.64]},{h:"Gdynia, Poland",a:"Southern Pacific Ocean",c:[54.52,18.53]},{h:"General Santos, Philippines",a:"Altamira, Brazil",c:[6.11,125.17]},{h:"Geneva, Switzerland",a:"Southern Pacific Ocean",c:[46.21,6.14]},{h:"Genoa, Italy",a:"Southern Pacific Ocean",c:[44.41,8.93]},{h:"Gent, Belgium",a:"Southern Pacific Ocean",c:[51.03,3.7]},{h:"George Town, Malaysia",a:"San Miguel de El Faique, Peru",c:[5.41,100.33]},{h:"Georgetown, Guyana",a:"South Sulawesi, Indonesia",c:[6.8,-58.17]},{h:"Ghaziabad, India",a:"Southern Pacific Ocean",c:[28.66,77.41]},{h:"Ghulja, China",a:"Southern Pacific Ocean",c:[43.9,81.35]},{h:"Gifu, Japan",a:"Southern Atlantic Ocean",c:[35.42,136.76]},{h:"Gijon, Spain",a:"Southern Pacific Ocean",c:[43.53,-5.67]},{h:"Gilbert, Arizona",a:"Indian Ocean",c:[33.35,-111.79]},{h:"Gitega, Burundi",a:"Pacific Ocean",c:[-3.43,29.92]},{h:"Giza, Egypt",a:"Southern Pacific Ocean",c:[30.01,31.19]},{h:"Glasgow, UK",a:"Southern Pacific Ocean",c:[55.87,-4.25]},{h:"Glendale, Arizona",a:"Indian Ocean",c:[33.54,-112.19]},{h:"Glendale, California",a:"Indian Ocean",c:[34.14,-118.26]},{h:"Gliwice, Poland",a:"Southern Pacific Ocean",c:[50.33,18.67]},{h:"Goiania, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-16.72,-49.3]},{h:"Gold Coast, Australia",a:"Northern Atlantic Ocean",c:[-28.08,153.45]},{h:"Gomez Palacio, Mexico",a:"Indian Ocean",c:[25.57,-103.5]},{h:"Gorakhpur, India",a:"Southern Pacific Ocean",c:[26.75,83.38]},{h:"Gorontalo, Indonesia",a:"Oriximiná, Brazil",c:[.55,123.07]},{h:"Goteborg, Sweden",a:"Southern Pacific Ocean",c:[57.75,12]},{h:"Goyang, South Korea",a:"Southern Atlantic Ocean",c:[37.65,126.84]},{h:"Granada, Spain",a:"Bay of Plenty, New Zealand",c:[37.17,-3.59]},{h:"Grand Prairie, Texas",a:"Indian Ocean",c:[32.75,-97]},{h:"Grand Rapids, Michigan",a:"Indian Ocean",c:[42.96,-85.67]},{h:"Greeley, Colorado",a:"Indian Ocean",c:[40.42,-104.71]},{h:"Green Bay, Wisconsin",a:"Indian Ocean",c:[44.52,-88.02]},{h:"Greensboro, North Carolina",a:"Indian Ocean",c:[36.07,-79.79]},{h:"Greenville, North Carolina",a:"Indian Ocean",c:[35.61,-77.37]},{h:"Grenoble, France",a:"Southern Pacific Ocean",c:[45.18,5.72]},{h:"Gresham, Oregon",a:"Indian Ocean",c:[45.5,-122.43]},{h:"Guadalajara, Mexico",a:"Indian Ocean",c:[20.67,-103.33]},{h:"Guangyuan, China",a:"Southern Pacific Ocean",c:[32.43,105.87]},{h:"Guangzhou, China",a:"Coranzulí, Argentina",c:[23.15,113.33]},{h:"Guatemala City, Guatemala",a:"Indian Ocean",c:[14.62,-90.53]},{h:"Guayaquil, Ecuador",a:"Perkebunan Sennah, Indonesia",c:[-2.22,-79.92]},{h:"Guilin, China",a:"Taltal, Chile",c:[25.28,110.28]},{h:"Guiyang, China",a:"Southern Pacific Ocean",c:[26.58,106.72]},{h:"Gujranwala, Pakistan",a:"Southern Pacific Ocean",c:[32.16,74.19]},{h:"Gujrat, Pakistan",a:"Southern Pacific Ocean",c:[32.58,74.08]},{h:"Gulbarga, India",a:"Southern Pacific Ocean",c:[17.35,76.82]},{h:"Guntur, India",a:"Southern Pacific Ocean",c:[16.33,80.45]},{h:"Guwahati, India",a:"Southern Pacific Ocean",c:[26.16,91.77]},{h:"Gwalior, India",a:"Southern Pacific Ocean",c:[26.23,78.18]},{h:"Gwangju, South Korea",a:"Southern Atlantic Ocean",c:[35.17,126.91]},{h:"Ha'il, Saudi Arabia",a:"Southern Pacific Ocean",c:[27.52,41.7]},{h:"Haarlem, Netherlands",a:"Southern Pacific Ocean",c:[52.38,4.63]},{h:"Hachioji, Japan",a:"Southern Atlantic Ocean",c:[35.66,139.33]},{h:"Hagatna, Guam",a:"Southern Atlantic Ocean",c:[13.48,144.75]},{h:"Hagta, Guam",a:"Southern Atlantic Ocean",c:[13.47,144.75]},{h:"Haifa, Israel",a:"Southern Pacific Ocean",c:[32.82,34.98]},{h:"Haikou, China",a:"Huara, Chile",c:[20.05,110.32]},{h:"Haiphong, Vietnam",a:"Southern Pacific Ocean",c:[20.83,106.68]},{h:"Hakodate, Japan",a:"Southern Atlantic Ocean",c:[41.8,140.74]},{h:"Halifax, Canada",a:"Indian Ocean",c:[44.65,-63.6]},{h:"Hamadan, Iran",a:"Southern Pacific Ocean",c:[34.8,48.52]},{h:"Hamah, Syria",a:"Southern Pacific Ocean",c:[35.15,36.73]},{h:"Hamamatsu, Japan",a:"Southern Atlantic Ocean",c:[34.72,137.73]},{h:"Hamburg, Germany",a:"Southern Pacific Ocean",c:[53.55,10]},{h:"Hamhung, North Korea",a:"Southern Atlantic Ocean",c:[39.91,127.55]},{h:"Hamilton, Canada",a:"Indian Ocean",c:[43.25,-79.83]},{h:"Hampton, Virginia",a:"Indian Ocean",c:[37.03,-76.35]},{h:"Handan, China",a:"Carro Quemado, Argentina",c:[36.58,114.48]},{h:"Hangu, China",a:"Bahia Blanca, Argentina",c:[39.23,117.78]},{h:"Hangzhou, China",a:"San Javier, Argentina",c:[30.25,120.17]},{h:"Hannover, Germany",a:"Southern Pacific Ocean",c:[52.37,9.72]},{h:"Hanoi, Vietnam",a:"Southern Pacific Ocean",c:[21.03,105.85]},{h:"Haora, India",a:"Southern Pacific Ocean",c:[22.58,88.33]},{h:"Harare, Zimbabwe",a:"Pacific Ocean",c:[-17.82,31.04]},{h:"Harbin, China",a:"Southern Atlantic Ocean",c:[45.75,126.65]},{h:"Hartford, Connecticut",a:"Indian Ocean",c:[41.76,-72.69]},{h:"Hat Yai, Thailand",a:"Lagunas, Peru",c:[7,100.47]},{h:"Hatay, Turkey",a:"Southern Pacific Ocean",c:[36.23,36.12]},{h:"Havana, Cuba",a:"Indian Ocean",c:[23.13,-82.36]},{h:"Hawthorne, California",a:"Indian Ocean",c:[33.92,-118.35]},{h:"Hayward, California",a:"Indian Ocean",c:[37.67,-122.08]},{h:"Hechi, China",a:"Mejillones, Chile",c:[23.1,109.61]},{h:"Hefei, China",a:"Colonia San Bartolomé, Argentina",c:[31.85,117.28]},{h:"Hegang, China",a:"Southern Atlantic Ocean",c:[47.4,130.37]},{h:"Heidelberg, Germany",a:"Southern Pacific Ocean",c:[49.42,8.7]},{h:"Helsinki, Finland",a:"Southern Pacific Ocean",c:[60.18,24.93]},{h:"Hemet, California",a:"Indian Ocean",c:[33.75,-116.97]},{h:"Henderson, Nevada",a:"Indian Ocean",c:[36.04,-114.98]},{h:"Hengshui, China",a:"La Pampa, Argentina",c:[37.72,115.7]},{h:"Hengyang, China",a:"Tinogasta, Argentina",c:[26.88,112.59]},{h:"Herat, Afghanistan",a:"Southern Pacific Ocean",c:[34.33,62.17]},{h:"Hermosillo, Mexico",a:"Indian Ocean",c:[29.1,-110.95]},{h:"Heroica Matamoros, Mexico",a:"Indian Ocean",c:[25.88,-97.5]},{h:"Hesperia, California",a:"Indian Ocean",c:[34.43,-117.3]},{h:"Heyuan, China",a:"Tilcara, Argentina",c:[23.73,114.68]},{h:"Heze, China",a:"La Pampa, Argentina",c:[35.23,115.45]},{h:"Hialeah, Florida",a:"Indian Ocean",c:[25.86,-80.28]},{h:"High Point, North Carolina",a:"Indian Ocean",c:[35.96,-80.01]},{h:"Hillah, Iraq",a:"Southern Pacific Ocean",c:[32.47,44.42]},{h:"Hillsboro, Oregon",a:"Indian Ocean",c:[45.52,-122.99]},{h:"Hiroshima, Japan",a:"Southern Atlantic Ocean",c:[34.39,132.44]},{h:"Hisar, India",a:"Southern Pacific Ocean",c:[29.17,75.73]},{h:"Ho Chi Minh City, Vietnam",a:"Capajeriato, Peru",c:[10.78,106.7]},{h:"Hohhot, China",a:"Veinticinco de Mayo, Argentina",c:[40.82,111.66]},{h:"Holguin, Cuba",a:"Indian Ocean",c:[20.89,-76.26]},{h:"Hollywood, Florida",a:"Indian Ocean",c:[26.01,-80.15]},{h:"Homs, Syria",a:"Southern Pacific Ocean",c:[34.73,36.72]},{h:"Homyel, Belarus",a:"Southern Pacific Ocean",c:[52.43,31]},{h:"Hong Kong, Hong Kong",a:"Abra Colorada, Argentina",c:[22.31,114.19]},{h:"Hongzhai, China",a:"Southern Pacific Ocean",c:[35.05,104.64]},{h:"Honiara, Solomon Islands",a:"Northern Atlantic Ocean",c:[-9.44,159.95]},{h:"Honolulu, Hawaii",a:"Ghanzi District, Botswana",c:[21.31,-157.86]},{h:"Hoover, Alabama",a:"Indian Ocean",c:[33.41,-86.81]},{h:"Horlivka, Ukraine",a:"Southern Pacific Ocean",c:[48.3,38.05]},{h:"Houston, Texas",a:"Indian Ocean",c:[29.76,-95.37]},{h:"Hrodna, Belarus",a:"Southern Pacific Ocean",c:[53.68,23.83]},{h:"Hsinchu, Taiwan",a:"Pilagás, Argentina",c:[24.82,120.98]},{h:"Huaibei, China",a:"Presidente Roque Sáenz Peña, Argentina",c:[33.95,116.75]},{h:"Huainan, China",a:"Unión, Argentina",c:[32.63,116.98]},{h:"Huaiyin, China",a:"Constitución, Argentina",c:[33.58,119.03]},{h:"Hualien, Taiwan",a:"Benjamín Aceval, Paraguay",c:[23.98,121.6]},{h:"Huambo, Angola",a:"Pacific Ocean",c:[-12.75,15.76]},{h:"Huancayo, Peru",a:"Kampong Chhnang, Cambodia",c:[-12.08,-75.2]},{h:"Huangshi, China",a:"Ischilín, Argentina",c:[30.22,115.1]},{h:"Hubli, India",a:"Pacific Ocean",c:[15.36,75.13]},{h:"Hue, Vietnam",a:"Majes, Peru",c:[16.47,107.58]},{h:"Hungnam, North Korea",a:"Southern Atlantic Ocean",c:[39.82,127.62]},{h:"Huntington Beach, California",a:"Indian Ocean",c:[33.66,-118]},{h:"Huntsville, Alabama",a:"Indian Ocean",c:[34.73,-86.59]},{h:"Huzhou, China",a:"Garay, Argentina",c:[30.87,120.1]},{h:"Hyderabad City, Pakistan",a:"Southern Pacific Ocean",c:[25.38,68.38]},{h:"Hyderabad, India",a:"Southern Pacific Ocean",c:[17.4,78.48]},{h:"Iasi, Romania",a:"Southern Pacific Ocean",c:[47.17,27.57]},{h:"Ibadan, Nigeria",a:"Southern Pacific Ocean",c:[7.38,3.93]},{h:"Ibague, Colombia",a:"Pakuan Baru, Indonesia",c:[4.44,-75.23]},{h:"Iguacu, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-22.74,-43.47]},{h:"Ikare, Nigeria",a:"Southern Pacific Ocean",c:[7.53,5.76]},{h:"Ile-Ife, Nigeria",a:"Southern Pacific Ocean",c:[7.48,4.56]},{h:"Iligan, Philippines",a:"Novo Progresso, Brazil",c:[8.17,124.22]},{h:"Iloilo, Philippines",a:"Juara, Brazil",c:[10.71,122.55]},{h:"Ilorin, Nigeria",a:"Southern Pacific Ocean",c:[8.49,4.55]},{h:"Incheon, South Korea",a:"Southern Atlantic Ocean",c:[37.48,126.64]},{h:"Independence, Missouri",a:"Indian Ocean",c:[39.09,-94.42]},{h:"Indianapolis, Indiana",a:"Indian Ocean",c:[39.77,-86.16]},{h:"Indio, California",a:"Indian Ocean",c:[33.72,-116.22]},{h:"Indore, India",a:"Southern Pacific Ocean",c:[22.72,75.87]},{h:"Inglewood, California",a:"Indian Ocean",c:[33.96,-118.35]},{h:"Ipatinga, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-19.48,-42.52]},{h:"Ipoh, Malaysia",a:"La Canela, Ecuador",c:[4.6,101.07]},{h:"Iquitos, Peru",a:"Riau Islands, Indonesia",c:[-3.75,-73.25]},{h:"Irapuato, Mexico",a:"Indian Ocean",c:[20.67,-101.5]},{h:"Irbid, Jordan",a:"Southern Pacific Ocean",c:[32.55,35.85]},{h:"Irkutsk, Russia",a:"Punta Arenas, Chile",c:[52.32,104.25]},{h:"Irvine, California",a:"Indian Ocean",c:[33.68,-117.79]},{h:"Irving, Texas",a:"Indian Ocean",c:[32.81,-96.95]},{h:"Iskenderun, Turkey",a:"Southern Pacific Ocean",c:[36.58,36.17]},{h:"Islamabad, Pakistan",a:"Southern Pacific Ocean",c:[33.7,73.17]},{h:"Ismailia, Egypt",a:"Southern Pacific Ocean",c:[30.59,32.26]},{h:"Istanbul, Turkey",a:"Southern Pacific Ocean",c:[41.11,29.01]},{h:"Itajai, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-26.9,-48.68]},{h:"Itu, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-23.26,-47.3]},{h:"Ivanovo, Russia",a:"Southern Pacific Ocean",c:[57.01,41.01]},{h:"Iwaki, Japan",a:"Southern Atlantic Ocean",c:[37.06,140.89]},{h:"Izhevsk, Russia",a:"Southern Pacific Ocean",c:[56.85,53.23]},{h:"Izmir, Turkey",a:"Southern Pacific Ocean",c:[38.44,27.15]},{h:"Jabalpur, India",a:"Southern Pacific Ocean",c:[23.18,79.96]},{h:"Jaboatao, Brazil",a:"Pacific Ocean",c:[-8.11,-35.02]},{h:"Jackson, Mississippi",a:"Indian Ocean",c:[32.3,-90.18]},{h:"Jacksonville, Florida",a:"Indian Ocean",c:[30.33,-81.66]},{h:"Jaipur, India",a:"Southern Pacific Ocean",c:[26.92,75.81]},{h:"Jakarta, Indonesia",a:"Andorro, Colombia",c:[-6.17,106.83]},{h:"Jalalabad, Afghanistan",a:"Southern Pacific Ocean",c:[34.44,70.44]},{h:"Jalandhar, India",a:"Southern Pacific Ocean",c:[31.33,75.57]},{h:"Jambi, Indonesia",a:"Santa Rosa, Colombia",c:[-1.59,103.61]},{h:"Jammu, India",a:"Southern Pacific Ocean",c:[32.71,74.85]},{h:"Jamshedpur, India",a:"Southern Pacific Ocean",c:[22.79,86.2]},{h:"Jeddah, Saudi Arabia",a:"Tureia, France",c:[21.52,39.22]},{h:"Jeju, South Korea",a:"Rio Grande do Sul, Brazil",c:[33.51,126.52]},{h:"Jember, Indonesia",a:"Santa Rita, Parroquia Venezuela",c:[-8.17,113.69]},{h:"Jeonju, South Korea",a:"Southern Atlantic Ocean",c:[35.83,127.14]},{h:"Jersey City, New Jersey",a:"Indian Ocean",c:[40.73,-74.08]},{h:"Jerusalem, Israel",a:"Southern Pacific Ocean",c:[31.78,35.21]},{h:"Jhang City, Pakistan",a:"Southern Pacific Ocean",c:[31.28,72.33]},{h:"Jhansi, India",a:"Southern Pacific Ocean",c:[25.45,78.56]},{h:"Ji'an, China",a:"Leales, Argentina",c:[27.13,115]},{h:"Jiamusi, China",a:"Southern Atlantic Ocean",c:[46.83,130.35]},{h:"Jiangguanchi, China",a:"Juan Martín de Pueyrredón, Argentina",c:[34.02,113.82]},{h:"Jiangjiafan, China",a:"Angaco, Argentina",c:[31.03,112.1]},{h:"Jiangmen, China",a:"Cusi Cusi, Argentina",c:[22.58,113.08]},{h:"Jiaojiangcun, China",a:"Pedro R. Fernández, Argentina",c:[28.68,121.45]},{h:"Jiaozuo, China",a:"General Alvear, Argentina",c:[35.25,113.22]},{h:"Jiaxing, China",a:"Banderas, Argentina",c:[30.77,120.75]},{h:"Jilin, China",a:"Southern Atlantic Ocean",c:[43.85,126.55]},{h:"Jinan, China",a:"Partido de Salliqueló, Argentina",c:[36.68,117]},{h:"Jincheng, China",a:"San Pedro del Atuel, Argentina",c:[35.5,112.83]},{h:"Jingdezhen, China",a:"Mitre, Argentina",c:[29.27,117.18]},{h:"Jingling, China",a:"General Juan Facundo Quiroga, Argentina",c:[30.65,113.16]},{h:"Jinhua, China",a:"Santa Fe, Argentina",c:[29.12,119.65]},{h:"Jining, China",a:"Intendente Alvear, Argentina",c:[35.4,116.55]},{h:"Jinja, Uganda",a:"Pacific Ocean",c:[.44,33.2]},{h:"Jinzhou, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[41.12,121.1]},{h:"Jitpur, Nepal",a:"Southern Pacific Ocean",c:[27.67,85.33]},{h:"Jiujiang, China",a:"Sobremonte, Argentina",c:[29.73,115.98]},{h:"Jixi, China",a:"Southern Atlantic Ocean",c:[45.3,130.97]},{h:"Joao Pessoa, Brazil",a:"Pacific Ocean",c:[-7.1,-34.88]},{h:"Jodhpur, India",a:"Southern Pacific Ocean",c:[26.29,73.02]},{h:"Johannesburg, South Africa",a:"Northern Pacific Ocean",c:[-26.17,28.03]},{h:"Johns Creek, Georgia",a:"Indian Ocean",c:[34.03,-84.2]},{h:"Johor Bahru, Malaysia",a:"Curaray, Ecuador",c:[1.48,103.73]},{h:"Joinvile, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-26.32,-48.84]},{h:"Joliet, Illinois",a:"Indian Ocean",c:[41.53,-88.08]},{h:"Jos, Nigeria",a:"Pacific Ocean",c:[9.93,8.89]},{h:"Juarez, Mexico",a:"Indian Ocean",c:[31.69,-106.49]},{h:"Juba, South Sudan",a:"Pacific Ocean",c:[4.83,31.58]},{h:"Juiz de Fora, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-21.77,-43.38]},{h:"Jundiai, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-23.2,-46.88]},{h:"Jurupa Valley, California",a:"Indian Ocean",c:[34,-117.49]},{h:"Kabul, Afghanistan",a:"Southern Pacific Ocean",c:[34.52,69.18]},{h:"Kaduna, Nigeria",a:"Pacific Ocean",c:[10.52,7.44]},{h:"Kaesong, North Korea",a:"Southern Atlantic Ocean",c:[37.96,126.56]},{h:"Kagoshima, Japan",a:"Southern Atlantic Ocean",c:[31.59,130.56]},{h:"Kahramanmaras, Turkey",a:"Southern Pacific Ocean",c:[37.61,36.95]},{h:"Kaifeng, China",a:"Gobernador Dupuy, Argentina",c:[34.85,114.35]},{h:"Kaliningrad, Russia",a:"Southern Pacific Ocean",c:[54.7,20.5]},{h:"Kaluga, Russia",a:"Southern Pacific Ocean",c:[54.52,36.27]},{h:"Kalyan, India",a:"Southern Pacific Ocean",c:[19.25,73.16]},{h:"Kampala, Uganda",a:"Pacific Ocean",c:[.32,32.58]},{h:"Kananga, DRC",a:"Pacific Ocean",c:[-5.89,22.4]},{h:"Kanazawa, Japan",a:"Southern Atlantic Ocean",c:[36.56,136.64]},{h:"Kandahar, Afghanistan",a:"Southern Pacific Ocean",c:[31.61,65.69]},{h:"Kanggye, North Korea",a:"Southern Atlantic Ocean",c:[40.97,126.6]},{h:"Kano, Nigeria",a:"Pacific Ocean",c:[12,8.52]},{h:"Kansas City, Kansas",a:"Indian Ocean",c:[39.11,-94.63]},{h:"Kansas City, Missouri",a:"Indian Ocean",c:[39.1,-94.58]},{h:"Kaohsiung, Taiwan",a:"Buena Vista, Paraguay",c:[22.63,120.27]},{h:"Karachi, Pakistan",a:"Southern Pacific Ocean",c:[24.87,66.99]},{h:"Karaj, Iran",a:"Southern Pacific Ocean",c:[35.8,50.97]},{h:"Karbala, Iraq",a:"Southern Pacific Ocean",c:[32.61,44.02]},{h:"Karlsruhe, Germany",a:"Southern Pacific Ocean",c:[49,8.4]},{h:"Kashgar, China",a:"Southern Pacific Ocean",c:[39.48,75.97]},{h:"Kassala, Sudan",a:"Pacific Ocean",c:[15.46,36.39]},{h:"Kathmandu, Nepal",a:"Southern Pacific Ocean",c:[27.72,85.32]},{h:"Katowice, Poland",a:"Southern Pacific Ocean",c:[50.26,19.02]},{h:"Katsina, Nigeria",a:"Pacific Ocean",c:[12.99,7.6]},{h:"Kaunas, Lithuania",a:"Southern Pacific Ocean",c:[54.95,23.88]},{h:"Kawagoe, Japan",a:"Southern Atlantic Ocean",c:[35.92,139.49]},{h:"Kawanakajima, Japan",a:"Southern Atlantic Ocean",c:[35.53,139.71]},{h:"Kawm Umbu, Egypt",a:"Southern Pacific Ocean",c:[24.47,32.95]},{h:"Kayseri, Turkey",a:"Southern Pacific Ocean",c:[38.74,35.49]},{h:"Kazan, Russia",a:"Southern Pacific Ocean",c:[55.75,49.13]},{h:"Keelung, Taiwan",a:"Laguna Blanca, Argentina",c:[25.13,121.73]},{h:"Kemerovo, Russia",a:"Southern Pacific Ocean",c:[55.34,86.09]},{h:"Kenitra, Morocco",a:"Southern Pacific Ocean",c:[34.27,-6.58]},{h:"Kenosha, Wisconsin",a:"Indian Ocean",c:[42.58,-87.82]},{h:"Kent, Washington",a:"Indian Ocean",c:[47.38,-122.23]},{h:"Kerman, Iran",a:"Southern Pacific Ocean",c:[30.3,57.08]},{h:"Kermanshah, Iran",a:"Southern Pacific Ocean",c:[34.38,47.06]},{h:"Khabarovsk, Russia",a:"Southern Atlantic Ocean",c:[48.46,135.12]},{h:"Kharkiv, Ukraine",a:"Southern Pacific Ocean",c:[50,36.25]},{h:"Khartoum, Sudan",a:"Southern Pacific Ocean",c:[15.59,32.53]},{h:"Kherson, Ukraine",a:"Southern Pacific Ocean",c:[46.63,32.6]},{h:"Khmelnytskyi, Ukraine",a:"Southern Pacific Ocean",c:[49.42,27]},{h:"Khomeyni Shahr, Iran",a:"Southern Pacific Ocean",c:[32.7,51.47]},{h:"Khorramabad, Iran",a:"Southern Pacific Ocean",c:[33.48,48.35]},{h:"Khujand, Tajikistan",a:"Southern Pacific Ocean",c:[40.29,69.62]},{h:"Khulna, Bangladesh",a:"Southern Pacific Ocean",c:[22.84,89.56]},{h:"Kigali, Rwanda",a:"Pacific Ocean",c:[-1.95,30.06]},{h:"Kikwit, DRC",a:"Pacific Ocean",c:[-5.03,18.85]},{h:"Killeen, Texas",a:"Indian Ocean",c:[31.12,-97.73]},{h:"Kingston upon Hull, UK",a:"Southern Pacific Ocean",c:[53.75,-.33]},{h:"Kingston, Jamaica",a:"Indian Ocean",c:[17.98,-76.77]},{h:"Kingstown, St. Vincent and the Grenadines",a:"Indian Ocean",c:[13.15,-61.21]},{h:"Kinshasa, DRC",a:"Pacific Ocean",c:[-4.33,15.32]},{h:"Kirkland, Washington",a:"Indian Ocean",c:[47.68,-122.21]},{h:"Kirkuk, Iraq",a:"Southern Pacific Ocean",c:[35.47,44.39]},{h:"Kirov, Russia",a:"Southern Pacific Ocean",c:[58.59,49.67]},{h:"Kisangani, DRC",a:"Pacific Ocean",c:[.52,25.22]},{h:"Kisumu, Kenya",a:"Pacific Ocean",c:[-.09,34.75]},{h:"Kitaku, Japan",a:"Southern Atlantic Ocean",c:[33.87,130.82]},{h:"Kitchener, Canada",a:"Indian Ocean",c:[43.45,-80.5]},{h:"Kitwe, Zambia",a:"Pacific Ocean",c:[-12.81,28.22]},{h:"Klang, Malaysia",a:"El Recreo, Ecuador",c:[3.02,101.55]},{h:"Knoxville, Tennessee",a:"Indian Ocean",c:[35.96,-83.92]},{h:"Kobe, Japan",a:"Southern Atlantic Ocean",c:[34.68,135.17]},{h:"Koblenz, Germany",a:"Southern Pacific Ocean",c:[50.35,7.6]},{h:"Kocaeli, Turkey",a:"Southern Pacific Ocean",c:[40.78,29.93]},{h:"Kochi, India",a:"Pacific Ocean",c:[10.02,76.22]},{h:"Kochi, Japan",a:"Southern Atlantic Ocean",c:[33.56,133.54]},{h:"Kohat, Pakistan",a:"Southern Pacific Ocean",c:[33.6,71.43]},{h:"Kolhapur, India",a:"Southern Pacific Ocean",c:[16.7,74.22]},{h:"Kolkata, India",a:"Southern Pacific Ocean",c:[22.5,88.32]},{h:"Kolwezi, DRC",a:"Pacific Ocean",c:[-10.72,25.47]},{h:"Konya, Turkey",a:"Southern Pacific Ocean",c:[37.88,32.48]},{h:"Kota Bharu, Malaysia",a:"Cuelcho, Amazonas, Peru",c:[6.12,102.23]},{h:"Kota Kinabalu, Malaysia",a:"Tapauá, Brazil",c:[5.98,116.11]},{h:"Kota, India",a:"Southern Pacific Ocean",c:[25.18,75.84]},{h:"Krakow, Poland",a:"Southern Pacific Ocean",c:[50.06,19.96]},{h:"Krasnodar, Russia",a:"Southern Pacific Ocean",c:[45.02,39]},{h:"Krasnoyarsk, Russia",a:"Southern Pacific Ocean",c:[56.01,92.87]},{h:"Kryvyy Rih, Ukraine",a:"Southern Pacific Ocean",c:[47.93,33.35]},{h:"Ksar El Kebir, Morocco",a:"Northland, New Zealand",c:[35.02,-5.91]},{h:"Kuala Lumpur, Malaysia",a:"Makinentza, Ecuador",c:[3.17,101.7]},{h:"Kuala Terengganu, Malaysia",a:"Cahuapanas, Peru",c:[5.33,103.12]},{h:"Kuantan, Malaysia",a:"Andoas, Peru",c:[3.83,103.32]},{h:"Kuching, Malaysia",a:"La Pedrera, Colombia",c:[1.53,110.33]},{h:"Kumamoto, Japan",a:"Southern Atlantic Ocean",c:[32.8,130.7]},{h:"Kumasi, Ghana",a:"Pacific Ocean",c:[6.69,-1.63]},{h:"Kumul, China",a:"Southern Pacific Ocean",c:[42.83,93.52]},{h:"Kunming, China",a:"Southern Pacific Ocean",c:[25.07,102.68]},{h:"Kurgan, Russia",a:"Southern Pacific Ocean",c:[55.46,65.35]},{h:"Kurnool, India",a:"Pacific Ocean",c:[15.83,78.03]},{h:"Kursk, Russia",a:"Southern Pacific Ocean",c:[51.74,36.19]},{h:"Kusti, Sudan",a:"Pacific Ocean",c:[13.17,32.66]},{h:"Kut, Iraq",a:"Southern Pacific Ocean",c:[32.49,45.83]},{h:"Kuwait City, Kuwait",a:"Southern Pacific Ocean",c:[29.37,47.98]},{h:"Kyiv, Ukraine",a:"Southern Pacific Ocean",c:[50.43,30.52]},{h:"Kyoto, Japan",a:"Southern Atlantic Ocean",c:[35.03,135.75]},{h:"La Paz, Bolivia",a:"Xisha District, China",c:[-16.5,-68.15]},{h:"La Plata, Argentina",a:"Yellow Sea, Western Pacific Ocean",c:[-34.91,-57.96]},{h:"Lafayette, Louisiana",a:"Indian Ocean",c:[30.22,-92.02]},{h:"Lagos, Nigeria",a:"Southern Pacific Ocean",c:[6.44,3.39]},{h:"Lahore, Pakistan",a:"Southern Pacific Ocean",c:[31.56,74.35]},{h:"Lakeland, Florida",a:"Indian Ocean",c:[28.04,-81.95]},{h:"Lakewood, California",a:"Indian Ocean",c:[33.85,-118.13]},{h:"Lakewood, Colorado",a:"Indian Ocean",c:[39.7,-105.08]},{h:"Lancaster, California",a:"Indian Ocean",c:[34.69,-118.15]},{h:"Langfang, China",a:"Partido de Patagones, Argentina",c:[39.52,116.68]},{h:"Lansing, Michigan",a:"Indian Ocean",c:[42.73,-84.56]},{h:"Lanzhou, China",a:"Southern Pacific Ocean",c:[36.06,103.79]},{h:"Laredo, Texas",a:"Indian Ocean",c:[27.53,-99.48]},{h:"Larkana, Pakistan",a:"Southern Pacific Ocean",c:[27.56,68.21]},{h:"Las Cruces, New Mexico",a:"Indian Ocean",c:[32.32,-106.76]},{h:"Las Palmas de Gran Canaria, Spain",a:"Southern Pacific Ocean",c:[28.1,-15.43]},{h:"Las Vegas, Nevada",a:"Indian Ocean",c:[36.17,-115.14]},{h:"Latakia, Syria",a:"Southern Pacific Ocean",c:[35.54,35.78]},{h:"Latrobe, Pennsylvania",a:"Indian Ocean",c:[40.3,-79.37]},{h:"Latur, India",a:"Southern Pacific Ocean",c:[18.4,76.57]},{h:"Lawrence, Kansas",a:"Indian Ocean",c:[38.97,-95.24]},{h:"Lawton, Oklahoma",a:"Indian Ocean",c:[34.6,-98.4]},{h:"League City, Texas",a:"Indian Ocean",c:[29.51,-95.09]},{h:"Lee's Summit, Missouri",a:"Indian Ocean",c:[38.91,-94.38]},{h:"Leeds, UK",a:"Southern Pacific Ocean",c:[53.83,-1.58]},{h:"Legazpi City, Philippines",a:"Lucas do Rio Verde, Brazil",c:[13.17,123.75]},{h:"Leicester, UK",a:"Southern Pacific Ocean",c:[52.63,-1.13]},{h:"Leipzig, Germany",a:"Southern Pacific Ocean",c:[51.34,12.41]},{h:"Leon de los Aldama, Mexico",a:"Indian Ocean",c:[21.15,-101.7]},{h:"Leshan, China",a:"Southern Pacific Ocean",c:[29.57,103.73]},{h:"Lewisville, Texas",a:"Indian Ocean",c:[33.05,-96.99]},{h:"Lexington, Kentucky",a:"Indian Ocean",c:[38.04,-84.5]},{h:"Lianshan, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[40.75,120.83]},{h:"Liaoyang, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[41.28,123.18]},{h:"Liaoyuan, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[42.9,125.13]},{h:"Libreville, Gabon",a:"Pacific Ocean",c:[.39,9.46]},{h:"Liege, Belgium",a:"Southern Pacific Ocean",c:[50.63,5.58]},{h:"Likasi, DRC",a:"Pacific Ocean",c:[-10.97,26.78]},{h:"Lille, France",a:"Southern Pacific Ocean",c:[50.65,3.08]},{h:"Lilongwe, Malawi",a:"Pacific Ocean",c:[-13.98,33.78]},{h:"Lima, Peru",a:"Pursat, Cambodia",c:[-12.05,-77.05]},{h:"Lincoln, Nebraska",a:"Indian Ocean",c:[40.83,-96.69]},{h:"Linfen, China",a:"Agua Escondida, Argentina",c:[36.08,111.52]},{h:"Lingyuan, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[41.24,119.4]},{h:"Linxia Chengguanzhen, China",a:"Southern Pacific Ocean",c:[35.6,103.2]},{h:"Linyi, China",a:"Partido de Lincoln, Argentina",c:[35.08,118.33]},{h:"Linz, Austria",a:"Southern Pacific Ocean",c:[48.32,14.29]},{h:"Lipetsk, Russia",a:"Southern Pacific Ocean",c:[52.62,39.64]},{h:"Lisbon, Portugal",a:"Tasman Sea, Southern Pacific Ocean",c:[38.72,-9.14]},{h:"Little Rock, Arkansas",a:"Indian Ocean",c:[34.75,-92.29]},{h:"Liuzhou, China",a:"Southern Pacific Ocean",c:[24.28,109.25]},{h:"Livermore, California",a:"Indian Ocean",c:[37.68,-121.77]},{h:"Liverpool, UK",a:"Southern Pacific Ocean",c:[53.42,-2.92]},{h:"Livonia, Michigan",a:"Indian Ocean",c:[42.37,-83.35]},{h:"Ljubljana, Slovenia",a:"Southern Pacific Ocean",c:[46.06,14.52]},{h:"Lobamba, Swaziland",a:"Northern Pacific Ocean",c:[-26.47,31.2]},{h:"Lodz, Poland",a:"Southern Pacific Ocean",c:[51.78,19.45]},{h:"Lome, Togo",a:"Southern Pacific Ocean",c:[6.13,1.22]},{h:"London, Canada",a:"Indian Ocean",c:[42.97,-81.25]},{h:"London, UK",a:"Southern Pacific Ocean",c:[51.5,-.12]},{h:"Londrina, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-23.3,-51.18]},{h:"Long Beach, California",a:"Indian Ocean",c:[33.77,-118.19]},{h:"Long Xuyen, Vietnam",a:"Puerto Bermúdez, Pasco, Peru",c:[10.38,105.42]},{h:"Longmont, Colorado",a:"Indian Ocean",c:[40.17,-105.1]},{h:"Longview, Texas",a:"Indian Ocean",c:[32.5,-94.74]},{h:"Longyan, China",a:"Almirante Brown, Argentina",c:[25.18,117.03]},{h:"Los Angeles, California",a:"Indian Ocean",c:[34.05,-118.24]},{h:"Los Teques, Venezuela",a:"Indian Ocean",c:[10.42,-67.02]},{h:"Louisville, Kentucky",a:"Indian Ocean",c:[38.25,-85.76]},{h:"Lowell, Massachusetts",a:"Indian Ocean",c:[42.63,-71.32]},{h:"Lu'an, China",a:"Río Segundo, Argentina",c:[31.75,116.48]},{h:"Luanda, Angola",a:"Pacific Ocean",c:[-8.84,13.23]},{h:"Lubbock, Texas",a:"Indian Ocean",c:[33.58,-101.86]},{h:"Lublin, Poland",a:"Southern Pacific Ocean",c:[51.25,22.57]},{h:"Lubumbashi, DRC",a:"Pacific Ocean",c:[-11.68,27.48]},{h:"Lucknow, India",a:"Southern Pacific Ocean",c:[26.86,80.92]},{h:"Ludhiana, India",a:"Southern Pacific Ocean",c:[30.93,75.87]},{h:"Luhans'k, Ukraine",a:"Southern Pacific Ocean",c:[48.57,39.33]},{h:"Luohe, China",a:"General Pedernera, Argentina",c:[33.57,114.03]},{h:"Luoyang, China",a:"General Alvear, Argentina",c:[34.68,112.47]},{h:"Lusaka, Zambia",a:"Pacific Ocean",c:[-15.42,28.28]},{h:"Luxembourg, Luxembourg",a:"Southern Pacific Ocean",c:[49.61,6.13]},{h:"Luxor, Egypt",a:"Southern Pacific Ocean",c:[25.7,32.65]},{h:"Luzhou, China",a:"Southern Pacific Ocean",c:[28.88,105.38]},{h:"Lviv, Ukraine",a:"Southern Pacific Ocean",c:[49.84,24.03]},{h:"Lynn, Massachusetts",a:"Indian Ocean",c:[42.47,-70.95]},{h:"Lyon, France",a:"Southern Pacific Ocean",c:[45.77,4.83]},{h:"Ma'anshan, China",a:"Santa Clara de Buena Vista, Argentina",c:[31.73,118.48]},{h:"Macapa, Brazil",a:"North Maluku, Indonesia",c:[.03,-51.05]},{h:"Macau, Macau",a:"Paicone, Argentina",c:[22.2,113.55]},{h:"Maceio, Brazil",a:"Pacific Ocean",c:[-9.62,-35.73]},{h:"Macon, Georgia",a:"Indian Ocean",c:[32.84,-83.63]},{h:"Madan, Iran",a:"Southern Pacific Ocean",c:[30.33,48.28]},{h:"Madison, Wisconsin",a:"Indian Ocean",c:[43.07,-89.4]},{h:"Madrid, Spain",a:"Weber, New Zealand",c:[40.4,-3.68]},{h:"Madura, India",a:"Pacific Ocean",c:[9.92,78.12]},{h:"Maebashi, Japan",a:"Southern Atlantic Ocean",c:[36.39,139.07]},{h:"Magnitogorsk, Russia",a:"Southern Pacific Ocean",c:[53.42,58.98]},{h:"Mahilyow, Belarus",a:"Southern Pacific Ocean",c:[53.9,30.32]},{h:"Maiduguri, Nigeria",a:"Pacific Ocean",c:[11.85,13.16]},{h:"Maiquetia, Venezuela",a:"Indian Ocean",c:[10.6,-66.97]},{h:"Majuro, Marshall Islands",a:"Southern Atlantic Ocean",c:[7.1,171.38]},{h:"Makassar, Indonesia",a:"Uiramutã, Brazil",c:[-5.14,119.43]},{h:"Makhachkala, Russia",a:"Southern Pacific Ocean",c:[42.98,47.5]},{h:"Makiyivka, Ukraine",a:"Southern Pacific Ocean",c:[48.03,37.97]},{h:"Malabo, Equatorial Guinea",a:"Pacific Ocean",c:[3.75,8.78]},{h:"Malaga, Spain",a:"Whangapoua, New Zealand",c:[36.72,-4.42]},{h:"Malang, Indonesia",a:"Guarico State, Venezuela",c:[-7.98,112.61]},{h:"Malatya, Turkey",a:"Southern Pacific Ocean",c:[38.37,38.3]},{h:"Male, Maldives",a:"Pacific Ocean",c:[4.17,73.5]},{h:"Malegaon, India",a:"Southern Pacific Ocean",c:[20.56,74.53]},{h:"Manado, Indonesia",a:"Alenquer, Brazil",c:[1.48,124.85]},{h:"Managua, Nicaragua",a:"Indian Ocean",c:[12.15,-86.27]},{h:"Manama, Bahrain",a:"Southern Pacific Ocean",c:[26.24,50.58]},{h:"Manaus, Brazil",a:"Celebes Sea, Western Pacific Ocean",c:[-3.1,-60]},{h:"Manchester, New Hampshire",a:"Indian Ocean",c:[43,-71.45]},{h:"Manchester, UK",a:"Southern Pacific Ocean",c:[53.5,-2.25]},{h:"Mandalay, Burma",a:"Southern Pacific Ocean",c:[21.97,96.09]},{h:"Mangalore, India",a:"Pacific Ocean",c:[12.9,74.85]},{h:"Manila, Philippines",a:"Tangará da Serra, Brazil",c:[14.6,120.98]},{h:"Manizales, Colombia",a:"Muara Jaya Ii, Indonesia",c:[5.06,-75.52]},{h:"Mannheim, Germany",a:"Southern Pacific Ocean",c:[49.5,8.47]},{h:"Mansoura, Egypt",a:"Southern Pacific Ocean",c:[31.05,31.38]},{h:"Manukau City, New Zealand",a:"Cañete la Real, Spain",c:[-37,174.89]},{h:"Maputo, Mozambique",a:"Northern Pacific Ocean",c:[-25.96,32.59]},{h:"Mar del Plata, Argentina",a:"Yellow Sea, Western Pacific Ocean",c:[-38,-57.58]},{h:"Maracaibo, Venezuela",a:"Indian Ocean",c:[10.73,-71.66]},{h:"Maracay, Venezuela",a:"Indian Ocean",c:[10.25,-67.6]},{h:"Mardan, Pakistan",a:"Southern Pacific Ocean",c:[34.2,72.04]},{h:"Maringa, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-23.41,-51.93]},{h:"Mariupol, Ukraine",a:"Southern Pacific Ocean",c:[47.1,37.56]},{h:"Maroua, Cameroon",a:"Pacific Ocean",c:[10.6,14.32]},{h:"Marrakech, Morocco",a:"Southern Pacific Ocean",c:[31.63,-8]},{h:"Marseille, France",a:"Southern Pacific Ocean",c:[43.29,5.38]},{h:"Maseru, Lesotho",a:"Northern Pacific Ocean",c:[-29.32,27.48]},{h:"Mashhad, Iran",a:"Southern Pacific Ocean",c:[36.27,59.57]},{h:"Mataram, Indonesia",a:"La Canoa, Venezuela",c:[-8.58,116.14]},{h:"Mathura, India",a:"Southern Pacific Ocean",c:[27.5,77.67]},{h:"Matola, Mozambique",a:"Northern Pacific Ocean",c:[-25.97,32.46]},{h:"Matsuyama, Japan",a:"Southern Atlantic Ocean",c:[33.85,132.77]},{h:"Maturin, Venezuela",a:"Indian Ocean",c:[9.75,-63.17]},{h:"Mawlamyine, Burma",a:"Grau's Sea, Pacific Ocean",c:[16.5,97.67]},{h:"Mayaguez, Puerto Rico",a:"Indian Ocean",c:[18.2,-67.14]},{h:"Mazar-e Sharif, Afghanistan",a:"Southern Pacific Ocean",c:[36.7,67.1]},{h:"Mazatan, Mexico",a:"Indian Ocean",c:[29.02,-110.13]},{h:"Mazatlan, Mexico",a:"Indian Ocean",c:[23.22,-106.42]},{h:"Mbabane, Swaziland",a:"Northern Pacific Ocean",c:[-26.32,31.13]},{h:"Mbale, Uganda",a:"Pacific Ocean",c:[1.09,34.17]},{h:"Mbuji-Mayi, DRC",a:"Pacific Ocean",c:[-6.15,23.6]},{h:"McAllen, Texas",a:"Indian Ocean",c:[26.2,-98.23]},{h:"McKinney, Texas",a:"Indian Ocean",c:[33.2,-96.64]},{h:"Mecca, Saudi Arabia",a:"Southern Pacific Ocean",c:[21.43,39.82]},{h:"Medan, Indonesia",a:"Pacific Ocean",c:[3.58,98.65]},{h:"Medellin, Colombia",a:"Indian Ocean",c:[6.28,-75.58]},{h:"Medina, Saudi Arabia",a:"Southern Pacific Ocean",c:[24.5,39.58]},{h:"Meerut, India",a:"Southern Pacific Ocean",c:[29,77.7]},{h:"Meizhou, China",a:"General Pizarro, Argentina",c:[24.3,116.12]},{h:"Meknes, Morocco",a:"Southern Pacific Ocean",c:[33.9,-5.56]},{h:"Melaka, Malaysia",a:"Macuma, Ecuador",c:[2.21,102.25]},{h:"Melbourne, Australia",a:"Northern Atlantic Ocean",c:[-37.82,144.98]},{h:"Memphis, Tennessee",a:"Indian Ocean",c:[35.15,-90.05]},{h:"Mendoza, Argentina",a:"Danjiangkou, China",c:[-32.88,-68.82]},{h:"Menifee, California",a:"Indian Ocean",c:[33.7,-117.19]},{h:"Merida, Mexico",a:"Indian Ocean",c:[20.97,-89.62]},{h:"Merida, Venezuela",a:"Indian Ocean",c:[8.4,-71.13]},{h:"Meridian, Idaho",a:"Indian Ocean",c:[43.61,-116.39]},{h:"Mesa, Arizona",a:"Indian Ocean",c:[33.42,-111.83]},{h:"Mesquite, Texas",a:"Indian Ocean",c:[32.77,-96.6]},{h:"Metz, France",a:"Southern Pacific Ocean",c:[49.12,6.18]},{h:"Mexicali, Mexico",a:"Indian Ocean",c:[32.65,-115.48]},{h:"Mexico City, Mexico",a:"Indian Ocean",c:[19.44,-99.13]},{h:"Miami Beach, Florida",a:"Indian Ocean",c:[25.79,-80.13]},{h:"Miami Gardens, Florida",a:"Indian Ocean",c:[25.94,-80.25]},{h:"Miami, Florida",a:"Indian Ocean",c:[25.76,-80.19]},{h:"Mianyang, China",a:"Southern Pacific Ocean",c:[31.47,104.77]},{h:"Middlesbrough, UK",a:"Southern Pacific Ocean",c:[54.58,-1.23]},{h:"Midland, Texas",a:"Indian Ocean",c:[32,-102.08]},{h:"Milan, Italy",a:"Southern Pacific Ocean",c:[45.47,9.21]},{h:"Milwaukee, Wisconsin",a:"Indian Ocean",c:[43.04,-87.91]},{h:"Minneapolis, Minnesota",a:"Indian Ocean",c:[44.98,-93.27]},{h:"Minsk, Belarus",a:"Southern Pacific Ocean",c:[53.9,27.57]},{h:"Minya, Egypt",a:"Southern Pacific Ocean",c:[28.09,30.75]},{h:"Miramar, Florida",a:"Indian Ocean",c:[25.99,-80.3]},{h:"Mirpur Khas, Pakistan",a:"Southern Pacific Ocean",c:[25.53,69.01]},{h:"Misratah, Libya",a:"Southern Pacific Ocean",c:[32.38,15.1]},{h:"Mission Viejo, California",a:"Indian Ocean",c:[33.6,-117.67]},{h:"Mito, Japan",a:"Southern Atlantic Ocean",c:[36.37,140.48]},{h:"Miyazaki, Japan",a:"Southern Atlantic Ocean",c:[31.92,131.42]},{h:"Mizhou, China",a:"Partido de Bolívar, Argentina",c:[35.99,119.38]},{h:"Mobile, Alabama",a:"Indian Ocean",c:[30.7,-88.04]},{h:"Modesto, California",a:"Indian Ocean",c:[37.64,-121]},{h:"Mogadishu, Somalia",a:"Pacific Ocean",c:[2.07,45.37]},{h:"Mombasa, Kenya",a:"Pacific Ocean",c:[-4.04,39.69]},{h:"Monaco, Monaco",a:"Southern Pacific Ocean",c:[43.74,7.41]},{h:"Monrovia, Liberia",a:"Southern Pacific Ocean",c:[6.31,-10.8]},{h:"Monterrey, Mexico",a:"Indian Ocean",c:[25.67,-100.33]},{h:"Montes Claros, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-16.72,-43.86]},{h:"Montevideo, Uruguay",a:"Yellow Sea, Western Pacific Ocean",c:[-34.86,-56.17]},{h:"Montgomery, Alabama",a:"Indian Ocean",c:[32.37,-86.3]},{h:"Montpellier, France",a:"Te Whakuru Island, New Zealand",c:[43.61,3.87]},{h:"Montreal, Canada",a:"Indian Ocean",c:[45.5,-73.58]},{h:"Moradabad, India",a:"Southern Pacific Ocean",c:[28.84,78.76]},{h:"Morelia, Mexico",a:"Indian Ocean",c:[19.73,-101.19]},{h:"Moreno Valley, California",a:"Indian Ocean",c:[33.94,-117.23]},{h:"Morioka, Japan",a:"Southern Atlantic Ocean",c:[39.72,141.13]},{h:"Moriyama, Japan",a:"Southern Atlantic Ocean",c:[37.41,140.38]},{h:"Moroni, Comoros",a:"Pacific Ocean",c:[-11.7,43.24]},{h:"Moscow, Russia",a:"Southern Pacific Ocean",c:[55.75,37.62]},{h:"Moshi, Tanzania",a:"Pacific Ocean",c:[-3.34,37.34]},{h:"Mosul, Iraq",a:"Southern Pacific Ocean",c:[36.35,43.15]},{h:"Mudanjiang, China",a:"Southern Atlantic Ocean",c:[44.58,129.59]},{h:"Multan, Pakistan",a:"Southern Pacific Ocean",c:[30.2,71.46]},{h:"Mumbai, India",a:"Southern Pacific Ocean",c:[19.02,72.86]},{h:"Munich, Germany",a:"Southern Pacific Ocean",c:[48.13,11.58]},{h:"Murcia, Spain",a:"Southern Pacific Ocean",c:[37.98,-1.13]},{h:"Murfreesboro, Tennessee",a:"Indian Ocean",c:[35.85,-86.39]},{h:"Murmansk, Russia",a:"Southern Pacific Ocean",c:[68.97,33.1]},{h:"Murrieta, California",a:"Indian Ocean",c:[33.55,-117.21]},{h:"Muscat, Oman",a:"Southern Pacific Ocean",c:[23.61,58.59]},{h:"Muzaffarnagar, India",a:"Southern Pacific Ocean",c:[29.49,77.7]},{h:"Muzaffarpur, India",a:"Southern Pacific Ocean",c:[26.12,85.38]},{h:"Mwanza, Tanzania",a:"Pacific Ocean",c:[-2.52,32.93]},{h:"Mykolayiv, Ukraine",a:"Southern Pacific Ocean",c:[46.97,31.98]},{h:"Mymensingh, Bangladesh",a:"Southern Pacific Ocean",c:[24.75,90.38]},{h:"Mysore, India",a:"Pacific Ocean",c:[12.31,76.66]},{h:"N'Djamena, Chad",a:"Pacific Ocean",c:[12.11,15.05]},{h:"Naberezhnyye Chelny, Russia",a:"Southern Pacific Ocean",c:[55.7,52.32]},{h:"Naga City, Philippines",a:"São José do Rio Claro, Brazil",c:[13.62,123.18]},{h:"Nagano, Japan",a:"Southern Atlantic Ocean",c:[36.65,138.17]},{h:"Nagasaki, Japan",a:"Southern Atlantic Ocean",c:[32.77,129.89]},{h:"Nagoya, Japan",a:"Southern Atlantic Ocean",c:[35.16,136.92]},{h:"Nagpur, India",a:"Southern Pacific Ocean",c:[21.17,79.09]},{h:"Naha, Japan",a:"Honório Serpa, Brazil",c:[26.21,127.67]},{h:"Nairobi, Kenya",a:"Pacific Ocean",c:[-1.28,36.82]},{h:"Najaf, Iraq",a:"Southern Pacific Ocean",c:[32,44.34]},{h:"Najran, Saudi Arabia",a:"Southern Pacific Ocean",c:[17.51,44.13]},{h:"Nakhon Ratchasima, Thailand",a:"Pacific Ocean",c:[15,102.1]},{h:"Nakuru, Kenya",a:"Pacific Ocean",c:[-.28,36.07]},{h:"Nalchik, Russia",a:"Southern Pacific Ocean",c:[43.5,43.62]},{h:"Namangan, Uzbekistan",a:"Southern Pacific Ocean",c:[41,71.67]},{h:"Namp'o, North Korea",a:"Argentine Sea, Southern Atlantic Ocean",c:[38.77,125.45]},{h:"Nampa, Idaho",a:"Indian Ocean",c:[43.54,-116.56]},{h:"Nampula, Mozambique",a:"Pacific Ocean",c:[-15.14,39.29]},{h:"Nanchang, China",a:"Atamisqui, Argentina",c:[28.68,115.88]},{h:"Nanded, India",a:"Southern Pacific Ocean",c:[19.17,77.3]},{h:"Nangandao, China",a:"Gobernador Dupuy, Argentina",c:[35.32,113.87]},{h:"Nanjing, China",a:"San Jerónimo, Argentina",c:[32.05,118.78]},{h:"Nanning, China",a:"Southern Pacific Ocean",c:[22.82,108.32]},{h:"Nantes, France",a:"Southern Pacific Ocean",c:[47.21,-1.59]},{h:"Nantong, China",a:"Altamirano Norte, Argentina",c:[32.03,120.83]},{h:"Nanyang, China",a:"San Miguel, Argentina",c:[33,112.53]},{h:"Naperville, Illinois",a:"Indian Ocean",c:[41.75,-88.15]},{h:"Naples, Italy",a:"Southern Pacific Ocean",c:[40.84,14.25]},{h:"Nashua, New Hampshire",a:"Indian Ocean",c:[42.77,-71.47]},{h:"Nashville, Tennessee",a:"Indian Ocean",c:[36.16,-86.78]},{h:"Nasik, India",a:"Southern Pacific Ocean",c:[20,73.78]},{h:"Nasiriyah, Iraq",a:"Southern Pacific Ocean",c:[31.04,46.27]},{h:"Nassau, Bahamas, The",a:"Indian Ocean",c:[25.08,-77.35]},{h:"Natal, Brazil",a:"Pacific Ocean",c:[-5.78,-35.24]},{h:"Natal, Brazil",a:"Sulu, Philippines",c:[-6.98,-60.27]},{h:"Nay Pyi Taw, Burma",a:"Southern Pacific Ocean",c:[19.77,96.12]},{h:"Nazret, Ethiopia",a:"Marquesas Islands, France",c:[8.55,39.27]},{h:"Ndola, Zambia",a:"Pacific Ocean",c:[-13,28.65]},{h:"Neijiang, China",a:"Southern Pacific Ocean",c:[29.58,105.05]},{h:"Neiva, Colombia",a:"South Sumatra, Indonesia",c:[2.93,-75.33]},{h:"Nellore, India",a:"Pacific Ocean",c:[14.44,79.99]},{h:"New Bedford, Massachusetts",a:"Indian Ocean",c:[41.64,-70.93]},{h:"New Delhi, India",a:"Southern Pacific Ocean",c:[28.6,77.2]},{h:"New Haven, Connecticut",a:"Indian Ocean",c:[41.31,-72.93]},{h:"New Orleans, Louisiana",a:"Indian Ocean",c:[29.95,-90.07]},{h:"New York, New York",a:"Indian Ocean",c:[40.71,-74]},{h:"Newark, New Jersey",a:"Indian Ocean",c:[40.74,-74.17]},{h:"Newcastle upon Tyne, UK",a:"Southern Pacific Ocean",c:[55,-1.6]},{h:"Newcastle, Australia",a:"Northern Atlantic Ocean",c:[-32.85,151.82]},{h:"Newport Beach, California",a:"Indian Ocean",c:[33.62,-117.93]},{h:"Newport News, Virginia",a:"Indian Ocean",c:[37.09,-76.47]},{h:"Newton, Massachusetts",a:"Indian Ocean",c:[42.34,-71.21]},{h:"Ngerulmud, Palau",a:"Agrovila, Brazil",c:[7.5,134.62]},{h:"Nha Trang, Vietnam",a:"Fitzcarrald, Peru",c:[12.25,109.17]},{h:"Niamey, Niger",a:"Southern Pacific Ocean",c:[13.52,2.12]},{h:"Nice, France",a:"Southern Pacific Ocean",c:[43.72,7.27]},{h:"Nicosia, Cyprus",a:"Southern Pacific Ocean",c:[35.17,33.37]},{h:"Niigata, Japan",a:"Southern Atlantic Ocean",c:[37.92,139.04]},{h:"Ningbo, China",a:"Cazadores Correntinos, Argentina",c:[29.88,121.55]},{h:"Ningde, China",a:"Presidencia Roque Sáenz peña, Argentina",c:[26.68,119.53]},{h:"Niteroi, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-22.9,-43.1]},{h:"Nizamabad, India",a:"Southern Pacific Ocean",c:[18.67,78.1]},{h:"Nizhniy Novgorod, Russia",a:"Southern Pacific Ocean",c:[56.33,44]},{h:"Nizhniy Tagil, Russia",a:"Southern Pacific Ocean",c:[57.92,59.98]},{h:"Norfolk, Virginia",a:"Indian Ocean",c:[36.85,-76.29]},{h:"Norman, Oklahoma",a:"Indian Ocean",c:[35.22,-97.44]},{h:"North Charleston, South Carolina",a:"Indian Ocean",c:[32.85,-79.97]},{h:"North Las Vegas, Nevada",a:"Indian Ocean",c:[36.2,-115.12]},{h:"North Pole",a:"South Pole",c:[90,0]},{h:"Norwalk, California",a:"Indian Ocean",c:[33.9,-118.08]},{h:"Norwalk, Connecticut",a:"Indian Ocean",c:[41.12,-73.41]},{h:"Nottingham, UK",a:"Southern Pacific Ocean",c:[52.97,-1.17]},{h:"Nouakchott, Mauritania",a:"Southern Pacific Ocean",c:[18.09,-15.98]},{h:"Novo Hamburgo, Brazil",a:"East China Sea, Western Pacific Ocean",c:[-29.71,-51.14]},{h:"Novokuznetsk, Russia",a:"Southern Pacific Ocean",c:[53.75,87.12]},{h:"Novosibirsk, Russia",a:"Southern Pacific Ocean",c:[55.03,82.96]},{h:"Nuevo Laredo, Mexico",a:"Indian Ocean",c:[27.5,-99.55]},{h:"Nuku'alofa, Tonga",a:"Pacific Ocean",c:[13.6,44.04]},{h:"Nuku`alofa, Tonga",a:"In Guezzam, Algeria",c:[-21.14,-175.22]},{h:"Null Island",a:"Pacific Ocean",c:[0,0]},{h:"Nur-Sultan, Kazakhstan",a:"Southern Pacific Ocean",c:[51.18,71.43]},{h:"Nuremberg, Germany",a:"Southern Pacific Ocean",c:[49.45,11.08]},{h:"Nyala, Sudan",a:"Pacific Ocean",c:[12.06,24.89]},{h:"O'Fallon, Missouri",a:"Indian Ocean",c:[38.81,-90.7]},{h:"Oakland, California",a:"Indian Ocean",c:[37.8,-122.27]},{h:"Oaxaca, Mexico",a:"Indian Ocean",c:[17.08,-96.67]},{h:"Oceanside, California",a:"Indian Ocean",c:[33.2,-117.38]},{h:"Odesa, Ukraine",a:"Southern Pacific Ocean",c:[46.49,30.71]},{h:"Odessa, Texas",a:"Indian Ocean",c:[31.85,-102.37]},{h:"Ogbomoso, Nigeria",a:"Southern Pacific Ocean",c:[8.13,4.24]},{h:"Ogden, Utah",a:"Indian Ocean",c:[41.22,-111.97]},{h:"Oita, Japan",a:"Southern Atlantic Ocean",c:[33.24,131.6]},{h:"Okayama, Japan",a:"Southern Atlantic Ocean",c:[34.67,133.92]},{h:"Oklahoma City, Oklahoma",a:"Indian Ocean",c:[35.47,-97.52]},{h:"Olathe, Kansas",a:"Indian Ocean",c:[38.88,-94.82]},{h:"Olinda, Brazil",a:"Pacific Ocean",c:[-8,-34.85]},{h:"Olongapo, Philippines",a:"Vila Bela da Santíssima Trindade, Brazil",c:[14.83,120.28]},{h:"Omaha, Nebraska",a:"Indian Ocean",c:[41.25,-96]},{h:"Omdurman, Sudan",a:"Southern Pacific Ocean",c:[15.62,32.48]},{h:"Omsk, Russia",a:"Southern Pacific Ocean",c:[54.99,73.4]},{h:"Ontario, California",a:"Indian Ocean",c:[34.06,-117.65]},{h:"Oran, Algeria",a:"Southern Pacific Ocean",c:[35.71,-.62]},{h:"Orange, California",a:"Indian Ocean",c:[33.79,-117.85]},{h:"Oranjestad, Aruba",a:"Indian Ocean",c:[12.53,-70.03]},{h:"Orel, Russia",a:"Southern Pacific Ocean",c:[52.97,36.07]},{h:"Orem, Utah",a:"Indian Ocean",c:[40.3,-111.69]},{h:"Orenburg, Russia",a:"Southern Pacific Ocean",c:[51.78,55.11]},{h:"Orizaba, Mexico",a:"Indian Ocean",c:[18.85,-97.13]},{h:"Orlando, Florida",a:"Indian Ocean",c:[28.54,-81.38]},{h:"Orumiyeh, Iran",a:"Southern Pacific Ocean",c:[37.53,45]},{h:"Osaka, Japan",a:"Southern Atlantic Ocean",c:[34.75,135.46]},{h:"Osh, Kyrgyzstan",a:"Southern Pacific Ocean",c:[40.54,72.79]},{h:"Oshawa, Canada",a:"Indian Ocean",c:[43.88,-78.85]},{h:"Oskemen, Kazakhstan",a:"Southern Pacific Ocean",c:[49.99,82.61]},{h:"Oslo, Norway",a:"Southern Pacific Ocean",c:[59.92,10.75]},{h:"Osogbo, Nigeria",a:"Southern Pacific Ocean",c:[7.77,4.56]},{h:"Ostrava, Czechia",a:"Southern Pacific Ocean",c:[49.83,18.25]},{h:"Otsu, Japan",a:"Southern Atlantic Ocean",c:[35.01,135.87]},{h:"Ottawa, Canada",a:"Indian Ocean",c:[45.42,-75.7]},{h:"Ouagadougou, Burkina Faso",a:"Southern Pacific Ocean",c:[12.37,-1.52]},{h:"Oujda-Angad, Morocco",a:"Southern Pacific Ocean",c:[34.69,-1.91]},{h:"Overland Park, Kansas",a:"Indian Ocean",c:[38.98,-94.67]},{h:"Oxnard, California",a:"Indian Ocean",c:[34.2,-119.18]},{h:"Oyo, Nigeria",a:"Southern Pacific Ocean",c:[7.85,3.93]},{h:"Pachuca, Mexico",a:"Indian Ocean",c:[20.17,-98.73]},{h:"Padang, Indonesia",a:"Esmeraldas, Ecuador",c:[-.96,100.36]},{h:"Pago Pago, American Samoa",a:"Rahin Zomo, Niger",c:[-14.27,-170.7]},{h:"Palembang, Indonesia",a:"El Venado, Colombia",c:[-2.98,104.75]},{h:"Palermo, Italy",a:"Southern Pacific Ocean",c:[38.13,13.35]},{h:"Palikir, Micronesia",a:"Southern Atlantic Ocean",c:[6.92,158.15]},{h:"Palm Bay, Florida",a:"Indian Ocean",c:[28.03,-80.59]},{h:"Palma, Spain",a:"Southern Pacific Ocean",c:[39.57,2.65]},{h:"Palmdale, California",a:"Indian Ocean",c:[34.58,-118.12]},{h:"Palu, Indonesia",a:"São Luiz, Brazil",c:[-.91,119.83]},{h:"Panama City, Panama",a:"Indian Ocean",c:[8.97,-79.53]},{h:"Paramaribo, Suriname",a:"Southeast Sulawesi, Indonesia",c:[5.84,-55.17]},{h:"Parbhani, India",a:"Southern Pacific Ocean",c:[19.27,76.76]},{h:"Paris, France",a:"Southern Pacific Ocean",c:[48.87,2.33]},{h:"Pasadena, California",a:"Indian Ocean",c:[34.15,-118.14]},{h:"Pasadena, Texas",a:"Indian Ocean",c:[29.69,-95.21]},{h:"Pasay City, Philippines",a:"Tangará da Serra, Brazil",c:[14.55,121]},{h:"Pasto, Colombia",a:"Renah Mendaluh, Indonesia",c:[1.21,-77.28]},{h:"Pasuruan, Indonesia",a:"El Caral, Venezuela",c:[-7.63,112.9]},{h:"Paterson, New Jersey",a:"Indian Ocean",c:[40.92,-74.17]},{h:"Patiala, India",a:"Southern Pacific Ocean",c:[30.32,76.39]},{h:"Patna, India",a:"Southern Pacific Ocean",c:[25.63,85.13]},{h:"Pavlodar, Kazakhstan",a:"Southern Pacific Ocean",c:[52.3,76.95]},{h:"Pearland, Texas",a:"Indian Ocean",c:[29.56,-95.29]},{h:"Pekanbaru, Indonesia",a:"Hacienda Chisinche, Ecuador",c:[.57,101.43]},{h:"Pelotas, Brazil",a:"East China Sea, Western Pacific Ocean",c:[-31.75,-52.33]},{h:"Pematangsiantar, Indonesia",a:"Santa Elena, Ecuador",c:[2.96,99.06]},{h:"Pembroke Pines, Florida",a:"Indian Ocean",c:[26.01,-80.3]},{h:"Penza, Russia",a:"Southern Pacific Ocean",c:[53.18,45]},{h:"Peoria, Arizona",a:"Indian Ocean",c:[33.58,-112.24]},{h:"Peoria, Illinois",a:"Indian Ocean",c:[40.69,-89.59]},{h:"Pereira, Colombia",a:"South Sumatra, Indonesia",c:[4.81,-75.68]},{h:"Perm, Russia",a:"Southern Pacific Ocean",c:[58,56.25]},{h:"Perth, Australia",a:"Northern Atlantic Ocean",c:[-31.96,115.84]},{h:"Pescara, Italy",a:"Southern Pacific Ocean",c:[42.46,14.22]},{h:"Peshawar, Pakistan",a:"Southern Pacific Ocean",c:[34.01,71.54]},{h:"Phan Thiet, Vietnam",a:"Purús, Peru",c:[10.93,108.1]},{h:"Philadelphia, Pennsylvania",a:"Indian Ocean",c:[39.95,-75.17]},{h:"Philipsburg, Sint Maarten",a:"Indian Ocean",c:[18.03,-63.05]},{h:"Phnom Penh, Cambodia",a:"San Juan de Viena, Peru",c:[11.55,104.92]},{h:"Phoenix, Arizona",a:"Indian Ocean",c:[33.45,-112.07]},{h:"Pietermaritzburg, South Africa",a:"Northern Pacific Ocean",c:[-29.61,30.39]},{h:"Pingdingshan, China",a:"Junín, Peru",c:[33.73,113.3]},{h:"Pingtung, Taiwan",a:"Pozo Amarillo, Paraguay",c:[22.68,120.48]},{h:"Pingxiang, China",a:"Andalgalá, Argentina",c:[27.62,113.85]},{h:"Piracicaba, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-22.71,-47.64]},{h:"Piraeus, Greece",a:"Southern Pacific Ocean",c:[37.95,23.7]},{h:"Pittsburgh, Pennsylvania",a:"Indian Ocean",c:[40.44,-80]},{h:"Piura, Peru",a:"Strait of Malacca, Indian Ocean",c:[-5.21,-80.63]},{h:"Plano, Texas",a:"Indian Ocean",c:[33.02,-96.7]},{h:"Plantation, Florida",a:"Indian Ocean",c:[26.13,-80.23]},{h:"Plovdiv, Bulgaria",a:"Southern Pacific Ocean",c:[42.15,24.75]},{h:"Podgorica, Montenegro",a:"Southern Pacific Ocean",c:[42.47,19.27]},{h:"Podolsk, Russia",a:"Southern Pacific Ocean",c:[55.38,37.53]},{h:"Pohang, South Korea",a:"Southern Atlantic Ocean",c:[36.02,129.37]},{h:"Point Nemo",a:"Aktobe, Kazakhstan",c:[-48.87,-123.39]},{h:"Pointe-Noire, RDC",a:"Pacific Ocean",c:[-4.77,11.88]},{h:"Poltava, Ukraine",a:"Southern Pacific Ocean",c:[49.57,34.57]},{h:"Pomona, California",a:"Indian Ocean",c:[34.06,-117.75]},{h:"Pompano Beach, Florida",a:"Indian Ocean",c:[26.24,-80.12]},{h:"Pontianak, Indonesia",a:"Vaupés, Colombia",c:[-.03,109.32]},{h:"Port Elizabeth, South Africa",a:"Northern Pacific Ocean",c:[-33.97,25.6]},{h:"Port Harcourt, Nigeria",a:"Southern Pacific Ocean",c:[4.81,7.01]},{h:"Port Louis, Mauritius",a:"Pacific Ocean",c:[-20.17,57.5]},{h:"Port Moresby, Papua New Guinea",a:"Northern Atlantic Ocean",c:[-9.46,147.19]},{h:"Port of Spain, Trinidad And Tobago",a:"Indian Ocean",c:[10.65,-61.52]},{h:"Port Said, Egypt",a:"Southern Pacific Ocean",c:[31.26,32.29]},{h:"Port St. Lucie, Florida",a:"Indian Ocean",c:[27.27,-80.36]},{h:"Port Sudan, Sudan",a:"Southern Pacific Ocean",c:[19.62,37.22]},{h:"Port-au-Prince, Haiti",a:"Indian Ocean",c:[18.54,-72.34]},{h:"Port-Vila, Vanuatu",a:"Tagant, Mauritania",c:[-17.73,168.32]},{h:"Portland, Oregon",a:"Indian Ocean",c:[45.52,-122.68]},{h:"Porto Alegre, Brazil",a:"East China Sea, Western Pacific Ocean",c:[-30.05,-51.2]},{h:"Porto Velho, Brazil",a:"South China Sea, Pacific Ocean",c:[-8.75,-63.9]},{h:"Porto-Novo, Benin",a:"Southern Pacific Ocean",c:[6.48,2.62]},{h:"Porto, Portugal",a:"Southern Pacific Ocean",c:[41.15,-8.62]},{h:"Portsmouth, UK",a:"Southern Pacific Ocean",c:[50.8,-1.08]},{h:"Portsmouth, Virginia",a:"Indian Ocean",c:[36.84,-76.3]},{h:"Posadas, Argentina",a:"East China Sea, Western Pacific Ocean",c:[-27.36,-55.89]},{h:"Poznan, Poland",a:"Southern Pacific Ocean",c:[52.41,16.9]},{h:"Prague, Czechia",a:"Southern Pacific Ocean",c:[50.08,14.47]},{h:"Praia, Cabo Verde",a:"Pacific Ocean",c:[14.92,-23.52]},{h:"Pretoria, South Africa",a:"Northern Pacific Ocean",c:[-25.71,28.23]},{h:"Pristina, Kosovo",a:"Southern Pacific Ocean",c:[42.67,21.17]},{h:"Providence, Rhode Island",a:"Indian Ocean",c:[41.82,-71.41]},{h:"Provo, Utah",a:"Indian Ocean",c:[40.23,-111.66]},{h:"Pucallpa, Peru",a:"Ca Mau, Vietnam",c:[-8.37,-74.54]},{h:"Puebla, Mexico",a:"Indian Ocean",c:[19.05,-98.2]},{h:"Pueblo, Colorado",a:"Indian Ocean",c:[38.25,-104.61]},{h:"Puerto La Cruz, Venezuela",a:"Indian Ocean",c:[10.17,-64.68]},{h:"Pune, India",a:"Southern Pacific Ocean",c:[18.53,73.85]},{h:"Punta Arenas, Chile",a:"Irkutsk, Russia",c:[-52.32,-70.91]},{h:"Putian, China",a:"Miraflores, Argentina",c:[25.43,119.02]},{h:"Puyang Chengguanzhen, China",a:"La Maruja, Argentina",c:[35.7,114.98]},{h:"Pyongyang, North Korea",a:"Argentine Sea, Southern Atlantic Ocean",c:[39.02,125.75]},{h:"Qaraghandy, Kazakhstan",a:"Southern Pacific Ocean",c:[49.89,73.12]},{h:"Qarshi, Uzbekistan",a:"Southern Pacific Ocean",c:[38.87,65.8]},{h:"Qatif, Saudi Arabia",a:"Southern Pacific Ocean",c:[26.52,50.01]},{h:"Qazvin, Iran",a:"Southern Pacific Ocean",c:[36.27,50]},{h:"Qina, Egypt",a:"Southern Pacific Ocean",c:[26.15,32.72]},{h:"Qingdao, China",a:"Velloso, Argentina",c:[36.09,120.33]},{h:"Qingyuan, China",a:"Catua, Argentina",c:[23.7,113.03]},{h:"Qinhuangdao, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[39.93,119.62]},{h:"Qiqihar, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[47.35,123.99]},{h:"Qo`qon, Uzbekistan",a:"Southern Pacific Ocean",c:[40.54,70.94]},{h:"Qom, Iran",a:"Southern Pacific Ocean",c:[34.65,50.95]},{h:"Quang Ha, Vietnam",a:"Arequipa, Peru",c:[16.06,108.25]},{h:"Quanzhou, China",a:"Güemes, Argentina",c:[24.9,118.58]},{h:"Quebec, Canada",a:"Indian Ocean",c:[46.84,-71.25]},{h:"Queretaro, Mexico",a:"Indian Ocean",c:[20.63,-100.38]},{h:"Quetta, Pakistan",a:"Southern Pacific Ocean",c:[30.22,67.03]},{h:"Quetzaltenango, Guatemala",a:"Indian Ocean",c:[14.83,-91.52]},{h:"Quezon City, Philippines",a:"Vale de São Domingos, Brazil",c:[14.65,121.03]},{h:"Quilon, India",a:"Pacific Ocean",c:[8.9,76.57]},{h:"Quincy, Massachusetts",a:"Indian Ocean",c:[42.25,-71]},{h:"Quito, Ecuador",a:"Sungai Bunga, Indonesia",c:[-.22,-78.5]},{h:"Qurghonteppa, Tajikistan",a:"Southern Pacific Ocean",c:[37.84,68.77]},{h:"Quy Nhon, Vietnam",a:"Cusco, Peru",c:[13.78,109.18]},{h:"Quzhou, China",a:"Pozo Borrado, Argentina",c:[28.97,118.87]},{h:"Qyzylorda, Kazakhstan",a:"Southern Pacific Ocean",c:[44.8,65.47]},{h:"Rabat, Morocco",a:"Southern Pacific Ocean",c:[34.03,-6.84]},{h:"Rach Gia, Vietnam",a:"Pasco, Peru",c:[10.02,105.09]},{h:"Rahimyar Khan, Pakistan",a:"Southern Pacific Ocean",c:[28.42,70.3]},{h:"Raipur, India",a:"Southern Pacific Ocean",c:[21.24,81.64]},{h:"Rajahmundry, India",a:"Southern Pacific Ocean",c:[17.03,81.79]},{h:"Rajapalaiyam, India",a:"Pacific Ocean",c:[9.42,77.58]},{h:"Rajkot, India",a:"Southern Pacific Ocean",c:[22.31,70.8]},{h:"Rajshahi, Bangladesh",a:"Southern Pacific Ocean",c:[24.38,88.61]},{h:"Raleigh, North Carolina",a:"Indian Ocean",c:[35.78,-78.64]},{h:"Ramallah, Palestine",a:"Southern Pacific Ocean",c:[31.91,35.17]},{h:"Rampur, India",a:"Southern Pacific Ocean",c:[28.82,79.03]},{h:"Ranchi, India",a:"Southern Pacific Ocean",c:[23.37,85.33]},{h:"Rancho Cucamonga, California",a:"Indian Ocean",c:[34.11,-117.59]},{h:"Rangoon, Burma",a:"Southern Pacific Ocean",c:[16.78,96.17]},{h:"Rasht, Iran",a:"Southern Pacific Ocean",c:[37.3,49.63]},{h:"Ratlam, India",a:"Southern Pacific Ocean",c:[23.35,75.03]},{h:"Raurkela, India",a:"Southern Pacific Ocean",c:[22.23,84.83]},{h:"Rawalpindi, Pakistan",a:"Southern Pacific Ocean",c:[33.6,73.04]},{h:"Reading, Pennsylvania",a:"Indian Ocean",c:[40.34,-75.93]},{h:"Reading, UK",a:"Southern Pacific Ocean",c:[51.47,-.98]},{h:"Recife, Brazil",a:"Pacific Ocean",c:[-8.08,-34.92]},{h:"Redding, California",a:"Indian Ocean",c:[40.59,-122.39]},{h:"Reno, Nevada",a:"Indian Ocean",c:[39.53,-119.81]},{h:"Renton, Washington",a:"Indian Ocean",c:[47.48,-122.22]},{h:"Resistencia, Argentina",a:"Pingyang, China",c:[-27.46,-58.99]},{h:"Reykjavik, Iceland",a:"Southern Pacific Ocean",c:[64.15,-21.95]},{h:"Reynosa, Mexico",a:"Indian Ocean",c:[26.08,-98.3]},{h:"Rialto, California",a:"Indian Ocean",c:[34.11,-117.37]},{h:"Ribeirao Preto, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-21.17,-47.83]},{h:"Richardson, Texas",a:"Indian Ocean",c:[32.95,-96.73]},{h:"Richmond, California",a:"Indian Ocean",c:[37.94,-122.35]},{h:"Richmond, Virginia",a:"Indian Ocean",c:[37.54,-77.44]},{h:"Riga, Latvia",a:"Southern Pacific Ocean",c:[56.95,24.1]},{h:"Rio de Janeiro, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-22.93,-43.23]},{h:"Rio Rancho, New Mexico",a:"Indian Ocean",c:[35.23,-106.66]},{h:"Riverside, California",a:"Indian Ocean",c:[33.95,-117.4]},{h:"Riyadh, Saudi Arabia",a:"Southern Pacific Ocean",c:[24.64,46.77]},{h:"Rizhao, China",a:"Partido de Nueve de Julio, Argentina",c:[35.43,119.45]},{h:"Roanoke, Virginia",a:"Indian Ocean",c:[37.27,-79.94]},{h:"Rochester, Minnesota",a:"Indian Ocean",c:[44.01,-92.48]},{h:"Rochester, New York",a:"Indian Ocean",c:[43.16,-77.61]},{h:"Rockford, Illinois",a:"Indian Ocean",c:[42.27,-89.09]},{h:"Rohtak, India",a:"Southern Pacific Ocean",c:[28.9,76.58]},{h:"Rome, Italy",a:"Southern Pacific Ocean",c:[41.9,12.48]},{h:"Rongjiawan, China",a:"La Rioja, Argentina",c:[29.38,113.1]},{h:"Rosario, Argentina",a:"Yangzhou, China",c:[-32.95,-60.67]},{h:"Roseau, Dominica",a:"Indian Ocean",c:[15.3,-61.39]},{h:"Roseville, California",a:"Indian Ocean",c:[38.75,-121.29]},{h:"Rostov-na-Donu, Russia",a:"Southern Pacific Ocean",c:[47.23,39.71]},{h:"Roswell, Georgia",a:"Indian Ocean",c:[34.02,-84.36]},{h:"Rotterdam, Netherlands",a:"Southern Pacific Ocean",c:[51.92,4.48]},{h:"Rouen, France",a:"Southern Pacific Ocean",c:[49.43,1.08]},{h:"Round Rock, Texas",a:"Indian Ocean",c:[30.51,-97.68]},{h:"Ryazan, Russia",a:"Southern Pacific Ocean",c:[54.62,39.72]},{h:"Saarbrucken, Germany",a:"Southern Pacific Ocean",c:[49.25,6.97]},{h:"Sacramento, California",a:"Indian Ocean",c:[38.58,-121.49]},{h:"Safi, Morocco",a:"Southern Pacific Ocean",c:[32.32,-9.24]},{h:"Saharanpur, India",a:"Southern Pacific Ocean",c:[29.97,77.55]},{h:"Saidu Sharif, Pakistan",a:"Southern Pacific Ocean",c:[34.75,72.35]},{h:"Salem, India",a:"Pacific Ocean",c:[11.67,78.18]},{h:"Salem, Oregon",a:"Indian Ocean",c:[44.94,-123.04]},{h:"Salerno, Italy",a:"Southern Pacific Ocean",c:[40.68,14.77]},{h:"Salinas, California",a:"Indian Ocean",c:[36.68,-121.66]},{h:"Salt Lake City, Utah",a:"Indian Ocean",c:[40.76,-111.89]},{h:"Salta, Argentina",a:"Ganzhou, China",c:[-24.78,-65.42]},{h:"Saltillo, Mexico",a:"Indian Ocean",c:[25.42,-101.01]},{h:"Salto, Argentina",a:"Shanghai, China",c:[-31.22,-64.72]},{h:"Salvador, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-12.97,-38.48]},{h:"Samara, Russia",a:"Southern Pacific Ocean",c:[53.2,50.15]},{h:"Samarinda, Indonesia",a:"Barcelos, Brazil",c:[-.5,117.15]},{h:"Samarkand, Uzbekistan",a:"Southern Pacific Ocean",c:[39.67,66.95]},{h:"Sambalpur, India",a:"Southern Pacific Ocean",c:[21.47,83.97]},{h:"Samsun, Turkey",a:"Southern Pacific Ocean",c:[41.28,36.34]},{h:"Samut Prakan, Thailand",a:"Pacific Ocean",c:[13.61,100.61]},{h:"San Angelo, Texas",a:"Indian Ocean",c:[31.46,-100.44]},{h:"San Antonio, Texas",a:"Indian Ocean",c:[29.42,-98.49]},{h:"San Bernardino, California",a:"Indian Ocean",c:[34.11,-117.29]},{h:"San Cristobal, Venezuela",a:"West Java, Indonesia",c:[7.77,-72.25]},{h:"San Diego, California",a:"Indian Ocean",c:[32.72,-117.16]},{h:"San Francisco, California",a:"Indian Ocean",c:[37.77,-122.42]},{h:"San Jose, California",a:"Indian Ocean",c:[37.34,-121.89]},{h:"San Jose, Costa Rica",a:"Indian Ocean",c:[9.94,-84.08]},{h:"San Juan, Argentina",a:"Nanzhang, China",c:[-31.55,-68.52]},{h:"San Juan, Puerto Rico",a:"Indian Ocean",c:[18.47,-66.11]},{h:"San Leandro, California",a:"Indian Ocean",c:[37.72,-122.16]},{h:"San Lorenzo, Paraguay",a:"East China Sea, Western Pacific Ocean",c:[-25.34,-57.52]},{h:"San Luis Potosi, Mexico",a:"Indian Ocean",c:[22.17,-101]},{h:"San Luis, Argentina",a:"Xiping, China",c:[-33.3,-66.35]},{h:"San Marcos, California",a:"Indian Ocean",c:[33.14,-117.17]},{h:"San Marino, San Marino",a:"Southern Pacific Ocean",c:[43.92,12.47]},{h:"San Mateo, California",a:"Indian Ocean",c:[37.56,-122.33]},{h:"San Miguel de Tucuman, Argentina",a:"Ji'an City, China",c:[-26.82,-65.22]},{h:"San Pedro Sula, Honduras",a:"Indian Ocean",c:[15.5,-88.03]},{h:"San Salvador de Jujuy, Argentina",a:"Lianping, China",c:[-24.18,-65.3]},{h:"San Salvador, El Salvador",a:"Indian Ocean",c:[13.71,-89.2]},{h:"Sanaa, Yemen",a:"Pacific Ocean",c:[15.35,44.21]},{h:"Sanandaj, Iran",a:"Southern Pacific Ocean",c:[35.3,47.02]},{h:"Sandakan, Malaysia",a:"Manicoré, Brazil",c:[5.84,118.11]},{h:"Sandy Springs, Georgia",a:"Indian Ocean",c:[33.93,-84.37]},{h:"Sandy, Utah",a:"Indian Ocean",c:[40.56,-111.84]},{h:"Sangli, India",a:"Southern Pacific Ocean",c:[16.86,74.58]},{h:"Sanliurfa, Turkey",a:"Southern Pacific Ocean",c:[37.17,38.8]},{h:"Santa Ana, California",a:"Indian Ocean",c:[33.75,-117.87]},{h:"Santa Barbara, California",a:"Indian Ocean",c:[34.42,-119.7]},{h:"Santa Clara, California",a:"Indian Ocean",c:[37.35,-121.96]},{h:"Santa Clarita, California",a:"Indian Ocean",c:[34.39,-118.54]},{h:"Santa Cruz de Tenerife, Spain",a:"Southern Pacific Ocean",c:[28.47,-16.25]},{h:"Santa Cruz, Bolivia",a:"South China Sea, Pacific Ocean",c:[-17.75,-63.23]},{h:"Santa Fe, Argentina",a:"Jiangsu, China",c:[-31.62,-60.69]},{h:"Santa Maria, California",a:"Indian Ocean",c:[34.95,-120.44]},{h:"Santa Marta, Colombia",a:"Indian Ocean",c:[11.25,-74.2]},{h:"Santa Monica, California",a:"Indian Ocean",c:[34.02,-118.49]},{h:"Santa Rosa, California",a:"Indian Ocean",c:[38.44,-122.71]},{h:"Santiago de Cuba, Cuba",a:"Indian Ocean",c:[20.03,-75.82]},{h:"Santiago del Estero, Argentina",a:"Yichun, China",c:[-27.78,-64.27]},{h:"Santiago, Chile",a:"Zhen'an, China",c:[-33.45,-70.67]},{h:"Santiago, Dominican Republic",a:"Indian Ocean",c:[19.5,-70.67]},{h:"Santo Andre, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-23.65,-46.53]},{h:"Santo Domingo, Dominican Republic",a:"Indian Ocean",c:[18.47,-69.9]},{h:"Santos, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-23.95,-46.33]},{h:"Sanya, China",a:"La Yarada, Peru",c:[18.26,109.5]},{h:"Sanzhou, China",a:"Talinay Alto, Chile",c:[30.82,108.4]},{h:"Sao Jose do Rio Preto, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-20.8,-49.39]},{h:"Sao Jose dos Campos, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-23.2,-45.88]},{h:"Sao Jose dos Pinhais, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-25.57,-49.18]},{h:"Sao Luis, Brazil",a:"Pacific Ocean",c:[-2.52,-44.27]},{h:"Sao Paulo, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-23.56,-46.63]},{h:"Sao Tome, Sao Tome And Principe",a:"Southern Pacific Ocean",c:[.33,6.73]},{h:"Sapele, Nigeria",a:"Southern Pacific Ocean",c:[5.89,5.68]},{h:"Sapporo, Japan",a:"Southern Atlantic Ocean",c:[43.08,141.34]},{h:"Sarajevo, Bosnia And Herzegovina",a:"Southern Pacific Ocean",c:[43.85,18.38]},{h:"Saransk, Russia",a:"Southern Pacific Ocean",c:[54.17,45.18]},{h:"Saratov, Russia",a:"Southern Pacific Ocean",c:[51.58,46.03]},{h:"Sargodha, Pakistan",a:"Southern Pacific Ocean",c:[32.09,72.68]},{h:"Saugor, India",a:"Southern Pacific Ocean",c:[23.85,78.75]},{h:"Savannah, Georgia",a:"Indian Ocean",c:[32.08,-81.1]},{h:"Scottsdale, Arizona",a:"Indian Ocean",c:[33.49,-111.93]},{h:"Seattle, Washington",a:"Indian Ocean",c:[47.61,-122.33]},{h:"Semarang, Indonesia",a:"Alcornocal, Venezuela",c:[-6.97,110.42]},{h:"Semey, Kazakhstan",a:"Southern Pacific Ocean",c:[50.44,80.28]},{h:"Sendai, Japan",a:"Southern Atlantic Ocean",c:[38.29,141.02]},{h:"Seoul, South Korea",a:"Southern Atlantic Ocean",c:[37.57,127]},{h:"Seremban, Malaysia",a:"Shimpis, Ecuador",c:[2.71,101.94]},{h:"Sevilla, Spain",a:"Southern Pacific Ocean",c:[37.41,-5.98]},{h:"Sfax, Tunisia",a:"Southern Pacific Ocean",c:[34.75,10.72]},{h:"Shache, China",a:"Southern Pacific Ocean",c:[38.43,77.25]},{h:"Shah Alam, Malaysia",a:"San Miguel de Conchay, Ecuador",c:[3.07,101.55]},{h:"Shahjanpur, India",a:"Southern Pacific Ocean",c:[27.88,79.91]},{h:"Shahrisabz, Uzbekistan",a:"Southern Pacific Ocean",c:[39.06,66.83]},{h:"Shanghai, China",a:"Salto, Argentina",c:[31.22,121.44]},{h:"Shangqiu, China",a:"General Roca, Argentina",c:[34.45,115.65]},{h:"Shangrao, China",a:"General Taboada, Argentina",c:[28.47,117.97]},{h:"Shantou, China",a:"General San Martín, Argentina",c:[23.37,116.67]},{h:"Shaoguan, China",a:"San Antonio de los Cobres, Argentina",c:[24.8,113.58]},{h:"Shaoxing, China",a:"Esquina, Argentina",c:[30,120.57]},{h:"Sharjah, UAE",a:"Southern Pacific Ocean",c:[25.37,55.41]},{h:"Shashi, China",a:"Valle Fértil, Argentina",c:[30.32,112.23]},{h:"Sheffield, UK",a:"Southern Pacific Ocean",c:[53.37,-1.5]},{h:"Shekhupura, Pakistan",a:"Southern Pacific Ocean",c:[31.72,73.99]},{h:"Shenyang, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[41.81,123.45]},{h:"Shenzhen, China",a:"Rinconada, Argentina",c:[22.55,114.12]},{h:"Shihezi, China",a:"Southern Pacific Ocean",c:[44.3,86.03]},{h:"Shijiazhuang, China",a:"La Pampa, Argentina",c:[38.05,114.48]},{h:"Shiliguri, India",a:"Southern Pacific Ocean",c:[26.72,88.46]},{h:"Shillong, India",a:"Southern Pacific Ocean",c:[25.57,91.88]},{h:"Shimoga, India",a:"Pacific Ocean",c:[13.93,75.56]},{h:"Shiraz, Iran",a:"Southern Pacific Ocean",c:[29.63,52.57]},{h:"Shiyan, China",a:"Uspallata, Argentina",c:[32.57,110.78]},{h:"Shizuoka, Japan",a:"Southern Atlantic Ocean",c:[34.99,138.39]},{h:"Shreveport, Louisiana",a:"Indian Ocean",c:[32.53,-93.75]},{h:"Shuangshui, China",a:"Southern Pacific Ocean",c:[26.59,104.83]},{h:"Shuangyashan, China",a:"Southern Atlantic Ocean",c:[46.67,131.35]},{h:"Shuozhou, China",a:"El Cuy, Argentina",c:[39.3,112.42]},{h:"Shuyangzha, China",a:"Delgado, Argentina",c:[34.13,118.77]},{h:"Shymkent, Kazakhstan",a:"Southern Pacific Ocean",c:[42.32,69.6]},{h:"Sialkot City, Pakistan",a:"Southern Pacific Ocean",c:[32.52,74.56]},{h:"Sikar, India",a:"Southern Pacific Ocean",c:[27.61,75.14]},{h:"Simi Valley, California",a:"Indian Ocean",c:[34.27,-118.78]},{h:"Singapore, Singapore",a:"Curaray, Ecuador",c:[1.29,103.86]},{h:"Sioux City, Iowa",a:"Indian Ocean",c:[42.5,-96.4]},{h:"Sioux Falls, South Dakota",a:"Indian Ocean",c:[43.54,-96.73]},{h:"Siping, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[43.17,124.33]},{h:"Skopje, Macedonia",a:"Southern Pacific Ocean",c:[42,21.43]},{h:"Smolensk, Russia",a:"Southern Pacific Ocean",c:[54.78,32.05]},{h:"Soc Trang, Vietnam",a:"Iparía, Peru",c:[9.6,105.98]},{h:"Sochi, Russia",a:"Southern Pacific Ocean",c:[43.59,39.73]},{h:"Sofia, Bulgaria",a:"Southern Pacific Ocean",c:[42.68,23.32]},{h:"Sokoto, Nigeria",a:"Southern Pacific Ocean",c:[13.06,5.24]},{h:"Solapur, India",a:"Southern Pacific Ocean",c:[17.67,75.9]},{h:"Soledad, Colombia",a:"Indian Ocean",c:[10.92,-74.77]},{h:"Songnam, South Korea",a:"Southern Atlantic Ocean",c:[37.44,127.14]},{h:"Sorocaba, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-23.49,-47.47]},{h:"Sousse, Tunisia",a:"Southern Pacific Ocean",c:[35.83,10.63]},{h:"South Bend, Indiana",a:"Indian Ocean",c:[41.68,-86.25]},{h:"South Gate, California",a:"Indian Ocean",c:[33.95,-118.21]},{h:"South Pole",a:"North Pole",c:[-90,-180]},{h:"Southampton, UK",a:"Southern Pacific Ocean",c:[50.9,-1.4]},{h:"Southend-on-Sea, UK",a:"Southern Pacific Ocean",c:[51.55,.72]},{h:"Spanish Town, Jamaica",a:"Indian Ocean",c:[17.98,-76.95]},{h:"Sparks, Nevada",a:"Indian Ocean",c:[39.53,-119.75]},{h:"Spokane Valley, Washington",a:"Indian Ocean",c:[47.67,-117.24]},{h:"Spokane, Washington",a:"Indian Ocean",c:[47.66,-117.43]},{h:"Springfield, Illinois",a:"Indian Ocean",c:[39.78,-89.65]},{h:"Springfield, Massachusetts",a:"Indian Ocean",c:[42.1,-72.59]},{h:"Springfield, Missouri",a:"Indian Ocean",c:[37.21,-93.29]},{h:"Sri Jayewardenepura Kotte, Sri Lanka",a:"Pacific Ocean",c:[6.9,79.95]},{h:"Srinagar, India",a:"Southern Pacific Ocean",c:[34.1,74.82]},{h:"St. George's, Grenada",a:"Indian Ocean",c:[12.05,-61.74]},{h:"St. John's, Antigua And Barbuda",a:"Indian Ocean",c:[17.12,-61.85]},{h:"St. Louis, Missouri",a:"Indian Ocean",c:[38.63,-90.2]},{h:"St. Paul, Minnesota",a:"Indian Ocean",c:[44.95,-93.09]},{h:"St. Petersburg, Florida",a:"Indian Ocean",c:[27.77,-82.64]},{h:"St. Petersburg, Russia",a:"Southern Pacific Ocean",c:[59.94,30.32]},{h:"Stamford, Connecticut",a:"Indian Ocean",c:[41.05,-73.54]},{h:"Stavropol, Russia",a:"Southern Pacific Ocean",c:[45.05,41.98]},{h:"Sterling Heights, Michigan",a:"Indian Ocean",c:[42.58,-83.03]},{h:"Stockholm, Sweden",a:"Southern Pacific Ocean",c:[59.35,18.1]},{h:"Stockton, California",a:"Indian Ocean",c:[37.96,-121.29]},{h:"Stoke-on-Trent, UK",a:"Southern Pacific Ocean",c:[53,-2.18]},{h:"Strasbourg, France",a:"Southern Pacific Ocean",c:[48.58,7.75]},{h:"Stuttgart, Germany",a:"Southern Pacific Ocean",c:[48.78,9.2]},{h:"Sucre, Bolivia",a:"South China Sea, Pacific Ocean",c:[-19.04,-65.26]},{h:"Suez, Egypt",a:"Southern Pacific Ocean",c:[30.01,32.55]},{h:"Suffolk, Virginia",a:"Indian Ocean",c:[36.73,-76.58]},{h:"Sugar Land, Texas",a:"Indian Ocean",c:[29.62,-95.63]},{h:"Suhaj, Egypt",a:"Southern Pacific Ocean",c:[26.55,31.7]},{h:"Suining, China",a:"Southern Pacific Ocean",c:[30.53,105.53]},{h:"Sukkur, Pakistan",a:"Southern Pacific Ocean",c:[27.71,68.85]},{h:"Sumy, Ukraine",a:"Southern Pacific Ocean",c:[50.92,34.78]},{h:"Sunch'on, North Korea",a:"Argentine Sea, Southern Atlantic Ocean",c:[39.42,125.94]},{h:"Sunderland, UK",a:"Southern Pacific Ocean",c:[54.92,-1.38]},{h:"Sungai Petani, Malaysia",a:"Huarmaca, Peru",c:[5.65,100.48]},{h:"Sunnyvale, California",a:"Indian Ocean",c:[37.37,-122.04]},{h:"Sunrise, Florida",a:"Indian Ocean",c:[26.17,-80.26]},{h:"Surabaya, Indonesia",a:"Parroquia Cunaviche, Venezuela",c:[-7.25,112.75]},{h:"Surakarta, Indonesia",a:"Venezuela",c:[-7.57,110.83]},{h:"Surat, India",a:"Southern Pacific Ocean",c:[21.2,72.84]},{h:"Surgut, Russia",a:"Southern Pacific Ocean",c:[61.26,73.43]},{h:"Surprise, Arizona",a:"Indian Ocean",c:[33.63,-112.37]},{h:"Suva, Fiji",a:"Timbuktu, Mali",c:[-18.13,178.44]},{h:"Suwon, South Korea",a:"Southern Atlantic Ocean",c:[37.26,127.01]},{h:"Suzhou, China",a:"La Paz, Argentina",c:[31.3,120.62]},{h:"Suzhou, China",a:"Unión, Argentina",c:[33.64,116.98]},{h:"Sydney, Australia",a:"Northern Atlantic Ocean",c:[-33.92,151.19]},{h:"Syracuse, New York",a:"Indian Ocean",c:[43.05,-76.15]},{h:"Szczecin, Poland",a:"Southern Pacific Ocean",c:[53.42,14.53]},{h:"Tabriz, Iran",a:"Southern Pacific Ocean",c:[38.09,46.3]},{h:"Tabuk, Saudi Arabia",a:"Southern Pacific Ocean",c:[28.38,36.56]},{h:"Tacoma, Washington",a:"Indian Ocean",c:[47.25,-122.44]},{h:"Tai'an, China",a:"Cuartel La Zanja, Argentina",c:[36.2,117.12]},{h:"Taichung, Taiwan",a:"Teniente Esteban Martínez, Paraguay",c:[24.15,120.68]},{h:"Taif, Saudi Arabia",a:"Southern Pacific Ocean",c:[21.26,40.38]},{h:"Taihecun, China",a:"Southern Atlantic Ocean",c:[45.8,130.85]},{h:"Tainan, Taiwan",a:"Presidente Hayes, Paraguay",c:[23,120.2]},{h:"Taipei, Taiwan",a:"Asuncion, Paraguay",c:[25.04,121.57]},{h:"Taiyuan, China",a:"La Pampa, Argentina",c:[37.88,112.55]},{h:"Taizhou, China",a:"Victoria, Argentina",c:[32.49,119.9]},{h:"Takamatsu, Japan",a:"Southern Atlantic Ocean",c:[34.34,134.04]},{h:"Tallahassee, Florida",a:"Indian Ocean",c:[30.44,-84.28]},{h:"Tallinn, Estonia",a:"Southern Pacific Ocean",c:[59.43,24.73]},{h:"Tamale, Ghana",a:"Southern Pacific Ocean",c:[9.4,-.84]},{h:"Tambov, Russia",a:"Southern Pacific Ocean",c:[52.73,41.43]},{h:"Tampa, Florida",a:"Indian Ocean",c:[27.95,-82.46]},{h:"Tampico, Mexico",a:"Indian Ocean",c:[22.3,-97.87]},{h:"Tangier, Morocco",a:"Maungatapere, New Zealand",c:[35.75,-5.83]},{h:"Tangshan, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[39.62,118.19]},{h:"Tanta, Egypt",a:"Southern Pacific Ocean",c:[30.79,31]},{h:"Taoyuan District, Taiwan",a:"Apayerey, Argentina",c:[24.99,121.31]},{h:"Tarawa, Kiribati",a:"Southern Atlantic Ocean",c:[1.34,173.02]},{h:"Taraz, Kazakhstan",a:"Southern Pacific Ocean",c:[42.9,71.37]},{h:"Tarsus, Turkey",a:"Southern Pacific Ocean",c:[36.92,34.88]},{h:"Tashkent, Uzbekistan",a:"Southern Pacific Ocean",c:[41.31,69.29]},{h:"Taubate, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-23.02,-45.56]},{h:"Tawau, Malaysia",a:"Anori, Brazil",c:[4.27,117.9]},{h:"Tbilisi, Georgia",a:"Southern Pacific Ocean",c:[41.73,44.79]},{h:"Tegucigalpa, Honduras",a:"Indian Ocean",c:[14.1,-87.22]},{h:"Tehran, Iran",a:"Southern Pacific Ocean",c:[35.67,51.42]},{h:"Tel Aviv, Israel",a:"Southern Pacific Ocean",c:[32.08,34.77]},{h:"Temecula, California",a:"Indian Ocean",c:[33.49,-117.15]},{h:"Tempe, Arizona",a:"Indian Ocean",c:[33.43,-111.94]},{h:"Tepic, Mexico",a:"Indian Ocean",c:[21.51,-104.88]},{h:"Teresina, Brazil",a:"Pacific Ocean",c:[-5.1,-42.78]},{h:"Thai Nguyen, Vietnam",a:"Southern Pacific Ocean",c:[21.6,105.83]},{h:"The Hague, Netherlands",a:"Southern Pacific Ocean",c:[52.08,4.27]},{h:"Thessaloniki, Greece",a:"Southern Pacific Ocean",c:[40.7,22.89]},{h:"Thimphu, Bhutan",a:"Southern Pacific Ocean",c:[27.47,89.64]},{h:"Thiruvananthapuram, India",a:"Pacific Ocean",c:[8.5,76.95]},{h:"Thornton, Colorado",a:"Indian Ocean",c:[39.87,-104.97]},{h:"Thousand Oaks, California",a:"Indian Ocean",c:[34.17,-118.84]},{h:"Tianjin, China",a:"Partido de Villarino, Argentina",c:[39.13,117.2]},{h:"Tieling, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[42.3,123.82]},{h:"Tijuana, Mexico",a:"Indian Ocean",c:[32.5,-117.08]},{h:"Timbuktu, Mali",a:"Suva, Fiji",c:[18.13,-1.56]},{h:"Timisoara, Romania",a:"Southern Pacific Ocean",c:[45.76,21.22]},{h:"Tinnevelly, India",a:"Pacific Ocean",c:[8.73,77.69]},{h:"Tirana, Albania",a:"Southern Pacific Ocean",c:[41.33,19.82]},{h:"Tiruppur, India",a:"Pacific Ocean",c:[11.08,77.33]},{h:"Tlaxcala, Mexico",a:"Indian Ocean",c:[19.32,-98.23]},{h:"Tokushima, Japan",a:"Southern Atlantic Ocean",c:[34.07,134.55]},{h:"Tokyo, Japan",a:"Southern Atlantic Ocean",c:[35.69,139.75]},{h:"Tol'yatti, Russia",a:"Southern Pacific Ocean",c:[53.48,49.53]},{h:"Toledo, Ohio",a:"Indian Ocean",c:[41.66,-83.56]},{h:"Toluca, Mexico",a:"Indian Ocean",c:[19.33,-99.67]},{h:"Tomsk, Russia",a:"Southern Pacific Ocean",c:[56.5,84.98]},{h:"Tongliao, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[43.62,122.27]},{h:"Tongshan, China",a:"Presidente Roque Sáenz Peña, Argentina",c:[34.28,117.18]},{h:"Topeka, Kansas",a:"Indian Ocean",c:[39.06,-95.69]},{h:"Toronto, Canada",a:"Indian Ocean",c:[43.7,-79.42]},{h:"Torrance, California",a:"Indian Ocean",c:[33.84,-118.34]},{h:"Torreon, Mexico",a:"Indian Ocean",c:[25.57,-103.42]},{h:"Toulon, France",a:"Southern Pacific Ocean",c:[43.13,5.92]},{h:"Toulouse, France",a:"Southern Pacific Ocean",c:[43.62,1.45]},{h:"Toyama, Japan",a:"Southern Atlantic Ocean",c:[36.7,137.23]},{h:"Trabzon, Turkey",a:"Southern Pacific Ocean",c:[40.98,39.72]},{h:"Tracy, California",a:"Indian Ocean",c:[37.74,-121.43]},{h:"Trenton, New Jersey",a:"Indian Ocean",c:[40.22,-74.74]},{h:"Trichinopoly, India",a:"Pacific Ocean",c:[10.81,78.69]},{h:"Tripoli, Lebanon",a:"Southern Pacific Ocean",c:[34.42,35.87]},{h:"Tripoli, Libya",a:"Southern Pacific Ocean",c:[32.89,13.18]},{h:"Troy, Michigan",a:"Indian Ocean",c:[42.61,-83.15]},{h:"Trujillo, Peru",a:"Nakhon Si Thammarat, Thailand",c:[-8.12,-79.02]},{h:"Tsu, Japan",a:"Southern Atlantic Ocean",c:[34.72,136.52]},{h:"Tucson, Arizona",a:"Indian Ocean",c:[32.22,-110.93]},{h:"Tula, Russia",a:"Southern Pacific Ocean",c:[54.2,37.63]},{h:"Tulsa, Oklahoma",a:"Indian Ocean",c:[36.15,-95.99]},{h:"Tumkur, India",a:"Pacific Ocean",c:[13.33,77.1]},{h:"Tunis, Tunisia",a:"Southern Pacific Ocean",c:[36.8,10.18]},{h:"Turin, Italy",a:"Southern Pacific Ocean",c:[45.07,7.67]},{h:"Tuscaloosa, Alabama",a:"Indian Ocean",c:[33.21,-87.57]},{h:"Tuticorin, India",a:"Pacific Ocean",c:[8.82,78.13]},{h:"Tuxtla, Mexico",a:"Indian Ocean",c:[16.75,-93.15]},{h:"Tver, Russia",a:"Southern Pacific Ocean",c:[56.86,35.89]},{h:"Tyler, Texas",a:"Indian Ocean",c:[32.35,-95.3]},{h:"Tyumen, Russia",a:"Southern Pacific Ocean",c:[57.14,65.53]},{h:"Uberlandia, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-18.9,-48.28]},{h:"Udaipur, India",a:"Southern Pacific Ocean",c:[24.6,73.73]},{h:"Ufa, Russia",a:"Southern Pacific Ocean",c:[54.79,56.04]},{h:"Ujjain, India",a:"Southern Pacific Ocean",c:[23.19,75.79]},{h:"Ulaanbaatar, Mongolia",a:"Tortel, Chile",c:[47.92,106.92]},{h:"Ulan-Ude, Russia",a:"Natales, Chile",c:[51.83,107.63]},{h:"Ulsan, South Korea",a:"Southern Atlantic Ocean",c:[35.55,129.32]},{h:"Ulyanovsk, Russia",a:"Southern Pacific Ocean",c:[54.33,48.41]},{h:"Urumqi, China",a:"Southern Pacific Ocean",c:[43.81,87.58]},{h:"Utrecht, Netherlands",a:"Southern Pacific Ocean",c:[52.1,5.12]},{h:"Utsunomiya, Japan",a:"Southern Atlantic Ocean",c:[36.55,139.87]},{h:"Uyo, Nigeria",a:"Pacific Ocean",c:[5.01,7.85]},{h:"Vacaville, California",a:"Indian Ocean",c:[38.36,-121.99]},{h:"Vadodara, India",a:"Southern Pacific Ocean",c:[22.31,73.18]},{h:"Vaduz, Liechtenstein",a:"Southern Pacific Ocean",c:[47.13,9.52]},{h:"Valencia, Spain",a:"Pacific Ocean near New Zealand",c:[39.49,-.4]},{h:"Valencia, Venezuela",a:"Indian Ocean",c:[10.23,-67.98]},{h:"Valladolid, Spain",a:"Wellington, New Zealand",c:[41.65,-4.75]},{h:"Valledupar, Colombia",a:"Indian Ocean",c:[10.48,-73.25]},{h:"Vallejo, California",a:"Indian Ocean",c:[38.1,-122.26]},{h:"Valletta, Malta",a:"Southern Pacific Ocean",c:[35.9,14.51]},{h:"Valparaiso, Chile",a:"Ankang City, China",c:[-33.05,-71.62]},{h:"Van, Turkey",a:"Southern Pacific Ocean",c:[38.5,43.4]},{h:"Vancouver, Canada",a:"Indian Ocean",c:[49.27,-123.12]},{h:"Vancouver, Washington",a:"Indian Ocean",c:[45.64,-122.66]},{h:"Varanasi, India",a:"Southern Pacific Ocean",c:[25.33,83]},{h:"Varna, Bulgaria",a:"Southern Pacific Ocean",c:[43.22,27.9]},{h:"Ventura, California",a:"Indian Ocean",c:[34.27,-119.23]},{h:"Veracruz, Mexico",a:"Indian Ocean",c:[19.18,-96.16]},{h:"Vereeniging, South Africa",a:"Northern Pacific Ocean",c:[-26.65,27.96]},{h:"Verona, Italy",a:"Southern Pacific Ocean",c:[45.44,10.99]},{h:"Victoria, Seychelles",a:"Pacific Ocean",c:[-4.62,55.45]},{h:"Victorville, California",a:"Indian Ocean",c:[34.54,-117.29]},{h:"Vienna, Austria",a:"Southern Pacific Ocean",c:[48.2,16.37]},{h:"Vientiane, Laos",a:"Grau's Sea, Pacific Ocean",c:[17.97,102.6]},{h:"Viet Tri, Vietnam",a:"Southern Pacific Ocean",c:[21.33,105.43]},{h:"Vigo, Spain",a:"West Coast, New Zealand",c:[42.22,-8.73]},{h:"Vila Velha, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-20.37,-40.32]},{h:"Vila Velha, Brazil",a:"Sahulau, Indonesia",c:[3.22,-51.22]},{h:"Villahermosa, Mexico",a:"Indian Ocean",c:[18,-92.9]},{h:"Villavicencio, Colombia",a:"South Sumatra, Indonesia",c:[4.15,-73.64]},{h:"Vilnius, Lithuania",a:"Southern Pacific Ocean",c:[54.68,25.32]},{h:"Vina del Mar, Chile",a:"Ankang City, China",c:[-33.03,-71.54]},{h:"Vinh, Vietnam",a:"Pacific Ocean",c:[18.7,105.68]},{h:"Vinnytsya, Ukraine",a:"Southern Pacific Ocean",c:[49.23,28.48]},{h:"Virginia Beach, Virginia",a:"Indian Ocean",c:[36.85,-75.98]},{h:"Visalia, California",a:"Indian Ocean",c:[36.33,-119.29]},{h:"Vishakhapatnam, India",a:"Southern Pacific Ocean",c:[17.73,83.31]},{h:"Vista, California",a:"Indian Ocean",c:[33.2,-117.24]},{h:"Vitoria da Conquista, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-14.85,-40.84]},{h:"Vitoria, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-20.32,-40.37]},{h:"Vitsyebsk, Belarus",a:"Southern Pacific Ocean",c:[55.19,30.19]},{h:"Vladikavkaz, Russia",a:"Southern Pacific Ocean",c:[43.05,44.67]},{h:"Vladimir, Russia",a:"Southern Pacific Ocean",c:[56.13,40.41]},{h:"Vladivostok, Russia",a:"Southern Atlantic Ocean",c:[43.13,131.91]},{h:"Volgograd, Russia",a:"Southern Pacific Ocean",c:[48.71,44.5]},{h:"Vologda, Russia",a:"Southern Pacific Ocean",c:[59.21,39.92]},{h:"Volta Redonda, Brazil",a:"Philippine Sea, Pacific Ocean",c:[-22.52,-44.1]},{h:"Volzhskiy, Russia",a:"Southern Pacific Ocean",c:[48.79,44.77]},{h:"Voronezh, Russia",a:"Southern Pacific Ocean",c:[51.73,39.27]},{h:"Waco, Texas",a:"Indian Ocean",c:[31.55,-97.15]},{h:"Wad Medani, Sudan",a:"Manihi, France",c:[14.4,33.52]},{h:"Wafangdian, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[39.63,122]},{h:"Wakayama, Japan",a:"Southern Atlantic Ocean",c:[34.22,135.17]},{h:"Warangal, India",a:"Southern Pacific Ocean",c:[18.01,79.58]},{h:"Warren, Michigan",a:"Indian Ocean",c:[42.51,-83.01]},{h:"Warri, Nigeria",a:"Southern Pacific Ocean",c:[5.52,5.76]},{h:"Warsaw, Poland",a:"Southern Pacific Ocean",c:[52.25,21]},{h:"Warwick, Rhode Island",a:"Indian Ocean",c:[41.7,-71.42]},{h:"Washington, D.C.",a:"Indian Ocean",c:[38.91,-77.04]},{h:"Waterbury, Connecticut",a:"Indian Ocean",c:[41.56,-73.05]},{h:"Waukegan, Illinois",a:"Indian Ocean",c:[42.36,-87.84]},{h:"Weifang, China",a:"Partido de Olavarría, Argentina",c:[36.72,119.1]},{h:"Weihai, China",a:"Partido de Mar Chiquita, Argentina",c:[37.5,122.1]},{h:"Welkom, South Africa",a:"Northern Pacific Ocean",c:[-27.97,26.73]},{h:"Wellington, New Zealand",a:"Calvario, Spain",c:[-41.3,174.78]},{h:"Wenlan, China",a:"Southern Pacific Ocean",c:[23.36,103.41]},{h:"Wenzhou, China",a:"General Obligado, Argentina",c:[28.02,120.65]},{h:"West Covina, California",a:"Indian Ocean",c:[34.07,-117.94]},{h:"West Jordan, Utah",a:"Indian Ocean",c:[40.61,-111.94]},{h:"West Palm Beach, Florida",a:"Indian Ocean",c:[26.72,-80.05]},{h:"West Valley City, Utah",a:"Indian Ocean",c:[40.69,-112]},{h:"Westland, Michigan",a:"Indian Ocean",c:[42.32,-83.4]},{h:"Westminster, California",a:"Indian Ocean",c:[33.75,-117.99]},{h:"Westminster, Colorado",a:"Indian Ocean",c:[39.84,-105.04]},{h:"Whittier, California",a:"Indian Ocean",c:[33.98,-118.03]},{h:"Wichita Falls, Texas",a:"Indian Ocean",c:[33.91,-98.49]},{h:"Wichita, Kansas",a:"Indian Ocean",c:[37.69,-97.34]},{h:"Wiesbaden, Germany",a:"Southern Pacific Ocean",c:[50.08,8.25]},{h:"Willemstad, Curaçao",a:"Indian Ocean",c:[12.2,-69.02]},{h:"Wilmington, North Carolina",a:"Indian Ocean",c:[34.23,-77.94]},{h:"Windhoek, Namibia",a:"Northern Pacific Ocean",c:[-22.57,17.08]},{h:"Windsor, Canada",a:"Indian Ocean",c:[42.33,-83.03]},{h:"Winnipeg, Canada",a:"Indian Ocean",c:[49.88,-97.17]},{h:"Winston-Salem, North Carolina",a:"Indian Ocean",c:[36.1,-80.24]},{h:"Wonsan, North Korea",a:"Southern Atlantic Ocean",c:[39.16,127.43]},{h:"Worcester, Massachusetts",a:"Indian Ocean",c:[42.26,-71.8]},{h:"Wroclaw, Poland",a:"Southern Pacific Ocean",c:[51.11,17.03]},{h:"Wuhan, China",a:"General Belgrano, Argentina",c:[30.58,114.27]},{h:"Wuhu, China",a:"Villa San José, Argentina",c:[31.35,118.37]},{h:"Wuppertal, Germany",a:"Southern Pacific Ocean",c:[51.25,7.17]},{h:"Wusong, China",a:"San Justo, Argentina",c:[30.95,117.78]},{h:"Wuwei, China",a:"Southern Pacific Ocean",c:[37.93,102.64]},{h:"Wuxi, China",a:"María Grande Segunda, Argentina",c:[31.58,120.3]},{h:"Wuzhou, China",a:"San Pedro de Atacama, Chile",c:[23.48,111.32]},{h:"Xalapa, Mexico",a:"Indian Ocean",c:[19.53,-96.92]},{h:"Xi'an, China",a:"Coltauco, Chile",c:[34.28,108.9]},{h:"Xiamen, China",a:"El Sauzalito, Argentina",c:[24.45,118.08]},{h:"Xiangtan, China",a:"Belén, Argentina",c:[27.85,112.9]},{h:"Xiangyang, China",a:"San Juan, Argentina",c:[32.02,112.13]},{h:"Xiantao, China",a:"General Ángel V. Peñaloza, Argentina",c:[30.37,113.44]},{h:"Xianyang, China",a:"Pichidegua, Chile",c:[34.35,108.71]},{h:"Xiaoxita, China",a:"Jáchal, Argentina",c:[30.7,111.28]},{h:"Xichang, China",a:"Southern Pacific Ocean",c:[27.88,102.3]},{h:"Xin'an, China",a:"Estacion Las Balas, Argentina",c:[34.38,118.35]},{h:"Xingtai, China",a:"Chacharramendi, Argentina",c:[37.05,114.5]},{h:"Xingyi, China",a:"Southern Pacific Ocean",c:[25.09,104.89]},{h:"Xining, China",a:"Southern Pacific Ocean",c:[36.62,101.77]},{h:"Xinpu, China",a:"Partido de Junín, Argentina",c:[34.6,119.17]},{h:"Xinyang, China",a:"Ayacucho, Argentina",c:[32.13,114.07]},{h:"Xinyu, China",a:"Graneros, Argentina",c:[27.8,114.93]},{h:"Xiping, China",a:"Southern Pacific Ocean",c:[25.6,103.82]},{h:"Xiping, China",a:"Departamento Valcheta, Argentina",c:[40.08,113.3]},{h:"Xuanzhou, China",a:"Municipio de Soutomayor, Argentina",c:[30.95,118.76]},{h:"Yakima, Washington",a:"Indian Ocean",c:[46.6,-120.51]},{h:"Yamoussoukro, Côte D’Ivoire",a:"Southern Pacific Ocean",c:[6.82,-5.28]},{h:"Yancheng, China",a:"Distrito Islas, Argentina",c:[33.39,120.13]},{h:"Yangjiang, China",a:"Colcha K, Bolivia",c:[21.85,111.97]},{h:"Yangquan, China",a:"La Pampa, Argentina",c:[37.87,113.57]},{h:"Yangzhou, China",a:"Zona de Islas, Argentina",c:[32.4,119.43]},{h:"Yanji, China",a:"Southern Atlantic Ocean",c:[42.88,129.51]},{h:"Yantai, China",a:"Partido de Balcarce, Argentina",c:[37.53,121.4]},{h:"Yaounde, Cameroon",a:"Pacific Ocean",c:[3.87,11.52]},{h:"Yaroslavl, Russia",a:"Southern Pacific Ocean",c:[57.62,39.87]},{h:"Yazd, Iran",a:"Southern Pacific Ocean",c:[31.92,54.37]},{h:"Yekaterinburg, Russia",a:"Southern Pacific Ocean",c:[56.85,60.6]},{h:"Yeosu, South Korea",a:"Southern Atlantic Ocean",c:[34.74,127.75]},{h:"Yerevan, Armenia",a:"Southern Pacific Ocean",c:[40.18,44.51]},{h:"Yibin, China",a:"Southern Pacific Ocean",c:[28.77,104.57]},{h:"Yichun, China",a:"Bajastine, Argentina",c:[27.83,114.4]},{h:"Yichun, China",a:"Southern Atlantic Ocean",c:[47.7,128.9]},{h:"Yinchuan, China",a:"Southern Pacific Ocean",c:[38.47,106.27]},{h:"Yingkou, China",a:"Argentine Sea, Southern Atlantic Ocean",c:[40.67,122.28]},{h:"Yingmen, China",a:"Southern Pacific Ocean",c:[39.83,97.73]},{h:"Yiyang, China",a:"Famatina, Argentina",c:[28.6,112.33]},{h:"Yogyakarta, Indonesia",a:"Parroquia San Vicente, Venezuela",c:[-7.78,110.38]},{h:"Yokohama, Japan",a:"Southern Atlantic Ocean",c:[35.32,139.58]},{h:"Yongzhou, China",a:"Antofagasta de la Sierra, Argentina",c:[26.23,111.62]},{h:"Yonkers, New York",a:"Indian Ocean",c:[40.93,-73.9]},{h:"Yoshkar-Ola, Russia",a:"Southern Pacific Ocean",c:[56.64,47.87]},{h:"Yucheng, China",a:"Southern Pacific Ocean",c:[29.98,103.08]},{h:"Yuci, China",a:"Veinticinco de Mayo, Argentina",c:[37.68,112.73]},{h:"Yulin, China",a:"Mejillones, Chile",c:[22.63,110.15]},{h:"Yuma, Arizona",a:"Indian Ocean",c:[32.69,-114.63]},{h:"Yuxi, China",a:"Southern Pacific Ocean",c:[24.38,102.57]},{h:"Zagreb, Croatia",a:"Southern Pacific Ocean",c:[45.8,16]},{h:"Zahedan, Iran",a:"Southern Pacific Ocean",c:[29.5,60.83]},{h:"Zamboanga City, Philippines",a:"Jacareacanga, Brazil",c:[6.92,122.08]},{h:"Zanjan, Iran",a:"Southern Pacific Ocean",c:[36.67,48.5]},{h:"Zanzibar, Tanzania",a:"Pacific Ocean",c:[-6.16,39.2]},{h:"Zaozhuang, China",a:"Partido de Florentino Ameghino, Argentina",c:[34.88,117.57]},{h:"Zaporizhzhya, Ukraine",a:"Southern Pacific Ocean",c:[47.86,35.18]},{h:"Zaragoza, Spain",a:"Southern Pacific Ocean",c:[41.65,-.89]},{h:"Zaria, Nigeria",a:"Pacific Ocean",c:[11.08,7.71]},{h:"Zhangjiakou, China",a:"Isla Mejillón, Argentina",c:[40.83,114.93]},{h:"Zhangzhou, China",a:"Madre de Dios, Argentina",c:[24.52,117.67]},{h:"Zhanjiang, China",a:"Pozo Almonte, Chile",c:[21.2,110.38]},{h:"Zhaoqing, China",a:"San Pedro de Atacama, Chile",c:[23.05,112.45]},{h:"Zhaotong, China",a:"Southern Pacific Ocean",c:[27.32,103.72]},{h:"Zhengzhou, China",a:"Juan Martín de Pueyrredón, Argentina",c:[34.76,113.67]},{h:"Zhenjiang, China",a:"Diamante, Argentina",c:[32.22,119.43]},{h:"Zhongli, Taiwan",a:"Misión Tacaaglé, Argentina",c:[24.97,121.22]},{h:"Zhoukou, China",a:"General Pedernera, Argentina",c:[33.63,114.63]},{h:"Zhuhai, China",a:"Cusi Cusi, Argentina",c:[22.28,113.57]},{h:"Zhuozhou, China",a:"Pichi Mahuida, Argentina",c:[39.54,115.79]},{h:"Zhuzhou, China",a:"Belén, Argentina",c:[27.83,113.15]},{h:"Zibo, China",a:"Partido de Daireaux, Argentina",c:[36.8,118.05]},{h:"Zigong, China",a:"Southern Pacific Ocean",c:[29.4,104.78]},{h:"Zunyi, China",a:"Southern Pacific Ocean",c:[27.7,106.92]},{h:"Zurich, Switzerland",a:"Southern Pacific Ocean",c:[47.38,8.55]}];

// Let's get this party started
document.addEventListener("DOMContentLoaded", init, false);

function init() {
	// Prevent transition flashing at page load
	setTimeout(function () {
		document.querySelector("html").classList.add("is-ready");
	}, 1000);

	// If the URL has a specific parameter, we'll use that
	var query_string = _getUrlParameter("units-toggle");
	if (query_string == "us" || query_string == "si") {
		document.querySelector('[value="' + query_string + '"]').checked = true;
		var unit = query_string;
	} else {
		// If the URL has no query string, see if we have localstorage saved
		var stored_unit = store.get("antiweather-units");
		if (stored_unit !== null) {
			document.querySelector(
				'[value="' + stored_unit + '"]'
			).checked = true;
		}
	}

	// Pre-setup map backgrounds set on Pittsburgh, of course
	setupMap("home", 40.4406, -79.9959);
	setupMap("away", -40.4406, 100.0041);

	// Let's start up the search input
	getLocation();

	// Add change listeners to unit toggles
	document.querySelector("#c_toggle").addEventListener("change", changeUnits);
	document.querySelector("#f_toggle").addEventListener("change", changeUnits);
}

// Handle any changes to the unit toggles
function changeUnits() {
	// Store the unit in localstorage for future visits
	var unit = document.querySelector('[name="units-toggle"]:checked').value;

	// Save the user's preferences
	store("antiweather-units", unit);

	// We want to reload the weather data if we've already got it in different units
	var home_lng = document.querySelector(".home").getAttribute("data-lng");
	var home_lat = document.querySelector(".home").getAttribute("data-lat");
	var away_lng = document.querySelector(".away").getAttribute("data-lng");
	var away_lat = document.querySelector(".away").getAttribute("data-lat");

	if (
		home_lng !== null &&
		home_lat !== null &&
		away_lng !== null &&
		away_lat !== null
	) {
		getWeather("home", parseInt(home_lat), parseInt(home_lng));
		getWeather("away", parseInt(away_lat), parseInt(away_lng));
	}
}

// Get the location from locations array
function getLocation() {
	var search_input_wrapper = document.querySelector(".search-input-wrapper");

	// Setup search
	new Autocomplete(search_input_wrapper, {
		autoSelect: true,
		search: (input) => {
			if (input.length >= 2) {
				return locations.filter((location) => {
					return location.h
						.toLowerCase()
						.startsWith(input.toLowerCase());
				});
			} else {
				return [];
			}
		},
		getResultValue: (result) => result.h,
		renderResult: (result, props) => `
			<li ${props}>
				<strong>${result.h}</strong> <span class="dash">↔</span> ${result.a}
			</li>
		`,
		onSubmit: (result) => {
			var lat = result.c[0];
			var lng = result.c[1];
			var home_place_name = result.h;
			var away_place_name = result.a;

			// Hide the keyboard on touchscreens
			document.activeElement.blur();

			initSearch(lat, lng, home_place_name, away_place_name);
		},
	});
}

// Get antipodes and start search
function initSearch(lat, lng, home_place_name, away_place_name) {
	// Convert coordinates to antipodal coordinates
	var a_lat = lat * -1;
	var a_lng = lng * -1;
	if (a_lng > 0) {
		var a_lng = -(a_lng - 180);
	} else {
		var a_lng = -(a_lng + 180);
	}

	// Get the weather
	getWeather("home", lat, lng, home_place_name);
	getWeather("away", a_lat, a_lng, away_place_name);
}

// Fill in everything for a given location
function setLocation(location, place_name) {
	fill(location, "location", place_name);
	fill("quick-" + location, "quick-location", place_name);

	// Fill the forecast heading, adding grammatically correct 'the' when commonly necessary
	if (
		place_name.endsWith("Ocean") ||
		place_name == "Middle of Nowhere" ||
		place_name == "North Pole" ||
		place_name == "South Pole"
	) {
		var place_name = "the " + place_name;
	}

	fill(location, "forecast-heading", "Forecast for " + place_name);
}

// Get weather forecast for specific lat/lng on earth using the Dark Sky API
function getWeather(location, lat, lng, pre_placename) {
	// Set the place name if we have/need it
	if (pre_placename !== undefined) {
		setLocation(location, pre_placename);
	}

	// Remove `.has-weather` class
	document.querySelector("." + location).classList.remove("has-weather");
	document.querySelector(".quick-wrapper").classList.remove("has-weather");

	// Add loading indicator classes
	document.querySelector("html").classList.add("is-loading");
	document
		.querySelector("." + location)
		.classList.add("is-loading-" + location);

	// Set data-lat/data-lng attributes in case user changes units and we need to reinitiate search
	document.querySelector("." + location).setAttribute("data-lat", lat);
	document.querySelector("." + location).setAttribute("data-lng", lng);

	// Send request to Dark Sky
	var unit = document.querySelector('[name="units-toggle"]:checked').value;
	var request_url =
		"https://api.darksky.net/forecast/" +
		dark_sky_api_key +
		"/" +
		lat +
		"," +
		lng +
		"?units=" +
		unit +
		"&exclude=alerts,hourly,minutely";

	JSONP({
		url: request_url,
		success: function (data) {
			console.log(data);

			// We got the weather
			extractWeather(location, lat, lng, pre_placename, data);
		},
		error: function (error) {
			// We have an error, let's stop showing loading indicators
			setTimeout(function () {
				document.querySelector("html").classList.remove("is-loading");
				document
					.querySelector(".home")
					.classList.remove("is-loading-home");
				document
					.querySelector(".away")
					.classList.remove("is-loading-away");
				document.querySelector(".home").classList.remove("has-weather");
				document.querySelector(".away").classList.remove("has-weather");
				document
					.querySelector(".quick-wrapper")
					.classList.remove("has-weather");
			}, 600);
		},
	});
}

// Extract only the data we need for the cards
function extractWeather(location, lat, lng, pre_placename, data) {
	// Data for currently card
	var currently_card_data = {
		apparentTemperature: data.currently.apparentTemperature,
		cloudCover: data.currently.cloudCover,
		currentlySummary: data.currently.summary,
		currentTime: data.currently.time,
		dailySummary: data.daily.summary,
		dewPoint: data.currently.dewPoint,
		humidity: data.currently.humidity,
		icon: data.currently.icon,
		lat: lat,
		lng: lng,
		location: location,
		ozone: data.currently.ozone,
		pre_placename: pre_placename,
		pressure: data.currently.pressure,
		sunriseTime: data.daily.data[0].sunriseTime,
		sunsetTime: data.daily.data[0].sunsetTime,
		temperature: data.currently.temperature,
		timezone: data.timezone,
		units: data.flags.units,
		uv: data.currently.uvIndex,
		visibility: data.currently.visibility,
		windBearing: data.currently.windBearing,
		windGust: data.currently.windGust,
		windSpeed: data.currently.windSpeed,
	};
	fillCurrentlyCard(currently_card_data);

	// Data for forecast card
	var forecast_card_data = {
		forecast: data.daily,
		location: location,
		timezone: data.timezone,
		units: data.flags.units,
	};
	makeForecastCard(forecast_card_data);
}

// Fill the cards with data
function fillCurrentlyCard(card_data) {
	var location = card_data.location;

	// Card color
	if (card_data.temperature !== undefined) {
		cardColor(location, card_data.units, card_data.temperature);
	}

	// Map
	setupMap(location, card_data.lat, card_data.lng);

	// Coordinatess
	if (card_data.lat !== undefined && card_data.lng !== undefined) {
		var coordinates =
			'<span class="prefix">Coordinates: </span>' +
			formatCoords(card_data.lat, card_data.lng);
		fill(location, "coordinates", coordinates);
	} else {
		fill(location, "coordinates", "Coordinates not available");
	}

	// Elevation
	// getElevation(location, card_data.lat, card_data.lng, card_data.units);

	// Set placename
	// if (card_data.pre_placename !== undefined) {
	// 	// Pre-locations have names preset as a variable or have already been set with Algolia
	// 	setLocation(location, card_data.pre_placename);
	// } else {
	// 	// Get the away placename using the reverse geocoding API
	// 	if (location == "away") {
	// 		setLocation(location, card_data.pre_placename);
	// 		setLocation("away", "Opposite Point on Earth");
	// 	}
	// }

	// Icon + Temperature
	if (card_data.temperature !== undefined) {
		var icon =
			'<svg><use xlink:href="#' + card_data.icon + '"></use></svg>';
		var temperature = formatTemp(card_data.temperature);
		fill(location, "temperature", icon + temperature);
		fill("quick-" + location, "quick-temperature", temperature);
	} else {
		fill(location, "temperature", icon + "--&deg;");
		fill("quick-" + location, "quick-temperature", "--&deg;");
	}

	// Summary
	var summary = formatSummary(card_data);
	fill(location, "summary", summary);
	fill("quick-" + location, "quick-summary", card_data.currentlySummary);

	// Local time
	var current_time = moment
		.unix(card_data.currentTime)
		.tz(card_data.timezone)
		.format("h:mm a");
	fill(location, "time", current_time);

	// Local date
	var current_date = moment
		.unix(card_data.currentTime)
		.tz(card_data.timezone)
		.format("dddd, MMMM Do");
	fill(location, "date", current_date);

	// Apparent Temperature
	var apparent_temperature = formatTemp(card_data.apparentTemperature);
	fill(location, "apparenttemperature", apparent_temperature);

	// Cloudiness
	if (card_data.cloudCover !== undefined) {
		var cloud_cover = formatPct(card_data.cloudCover);
		fill(location, "cloudcover", cloud_cover);
	} else {
		fill(location, "cloudcover", '<span class="not-available">N/A</span>');
	}

	// Wind Speed
	if (card_data.windSpeed !== undefined) {
		var wind_speed = formatSpeed(card_data.windSpeed, card_data.units);

		// Wind Direction
		if (card_data.windBearing !== undefined) {
			var wind_bearing = formatBearing(card_data.windBearing);
			var wind = wind_speed + " " + wind_bearing;
		} else {
			var wind = wind_speed;
		}

		fill(location, "wind", wind);
	} else {
		fill(location, "wind", '<span class="not-available">N/A</span>');
	}

	// Wind Gust
	if (card_data.windGust !== undefined) {
		var wind_gust = formatSpeed(card_data.windGust, card_data.units);
		fill(location, "windgust", wind_gust);
	} else {
		fill(location, "windgust", '<span class="not-available">N/A</span>');
	}

	// Humidity
	if (card_data.humidity !== undefined) {
		var humidity = formatPct(card_data.humidity);
		fill(location, "humidity", humidity);
	} else {
		fill(location, "humidity", '<span class="not-available">N/A</span>');
	}

	// Dew Point
	if (card_data.dewPoint !== undefined) {
		var dew_point = formatTemp(card_data.dewPoint);
		fill(location, "dewpoint", dew_point);
	} else {
		fill(location, "dewpoint", '<span class="not-available">N/A</span>');
	}

	// Barometric Pressure
	if (card_data.pressure !== undefined) {
		var pressure = formatPressure(card_data.pressure, card_data.units);
		fill(location, "pressure", pressure);
	} else {
		fill(location, "pressure", '<span class="not-available">N/A</span>');
	}

	// UV Index
	if (card_data.uv !== undefined) {
		var uv = formatUv(card_data.uv);
		fill(location, "uv", uv);
	} else {
		fill(location, "uv", '<span class="not-available">N/A</span>');
	}

	// Ozone Index
	if (card_data.ozone !== undefined) {
		var ozone = formatOzone(card_data.ozone);
		fill(location, "ozone", ozone);
	} else {
		fill(location, "ozone", '<span class="not-available">N/A</span>');
	}

	// Visibility
	if (card_data.visibility !== undefined) {
		var visibility = formatDistance(card_data.visibility, card_data.units);
		fill(location, "visibility", visibility);
	} else {
		fill(location, "visibility", '<span class="not-available">N/A</span>');
	}

	// Sunrise
	if (card_data.sunriseTime !== undefined) {
		var sunrise_time = moment
			.unix(card_data.sunriseTime)
			.tz(card_data.timezone)
			.format("h:mm a");
		fill(location, "sunrise", sunrise_time);
	} else {
		fill(location, "sunrise", '<span class="not-available">N/A</span>');
	}

	// Sunset
	if (card_data.sunsetTime !== undefined) {
		var sunset_time = moment
			.unix(card_data.sunsetTime)
			.tz(card_data.timezone)
			.format("h:mm a");
		fill(location, "sunset", sunset_time);
	} else {
		fill(location, "sunset", '<span class="not-available">N/A</span>');
	}

	// Remove loading indicators, waiting for transition to complete
	setTimeout(function () {
		document.querySelector("html").classList.remove("is-loading");
		document
			.querySelector("." + location)
			.classList.remove("is-loading-" + location);
		document.querySelector("." + location).classList.add("has-weather");
		document.querySelector(".quick-wrapper").classList.add("has-weather");
	}, 400);
}

// Set a `temp-#` class to set a color theme based on location temperature
function cardColor(location, units, temp) {
	// Clear any classes already set and set a new one
	document
		.querySelector("." + location)
		.classList.remove(
			"temp-0",
			"temp-1",
			"temp-2",
			"temp-3",
			"temp-4",
			"temp-5",
			"temp-6",
			"temp-7",
			"temp-8",
			"temp-9",
			"temp-10"
		);
	document
		.querySelector(".quick-" + location)
		.classList.remove(
			"temp-0",
			"temp-1",
			"temp-2",
			"temp-3",
			"temp-4",
			"temp-5",
			"temp-6",
			"temp-7",
			"temp-8",
			"temp-9",
			"temp-10"
		);

	// Convert temperature to a 0-10 scale
	var class_name = cardColorScale(units, temp);

	// Set `temp-#` to `.home` and `.away`
	document.querySelector("." + location).classList.add(class_name);
	document.querySelector(".quick-" + location).classList.add(class_name);
}

// Convert temperature to a 0-10 scale
function cardColorScale(units, temp) {
	if (units == "us") {
		if (temp >= 100) {
			var scale = 10;
		} else if (temp >= 90) {
			var scale = 9;
		} else if (temp >= 80) {
			var scale = 8;
		} else if (temp >= 70) {
			var scale = 7;
		} else if (temp >= 60) {
			var scale = 6;
		} else if (temp >= 50) {
			var scale = 5;
		} else if (temp >= 40) {
			var scale = 4;
		} else if (temp >= 30) {
			var scale = 3;
		} else if (temp >= 20) {
			var scale = 2;
		} else if (temp >= 10) {
			var scale = 1;
		} else if (temp < 10) {
			var scale = 0;
		}
	} else if (units == "si") {
		if (temp >= 37.7) {
			var scale = 10;
		} else if (temp >= 32.2) {
			var scale = 9;
		} else if (temp >= 26.7) {
			var scale = 8;
		} else if (temp >= 21.1) {
			var scale = 7;
		} else if (temp >= 15.6) {
			var scale = 6;
		} else if (temp >= 10) {
			var scale = 5;
		} else if (temp >= 4.4) {
			var scale = 4;
		} else if (temp >= -1.1) {
			var scale = 3;
		} else if (temp >= -6.7) {
			var scale = 2;
		} else if (temp >= -12.2) {
			var scale = 1;
		} else if (temp < -17.8) {
			var scale = 0;
		}
	}

	// Return a CSS class name
	return "temp-" + scale;
}

// Draw a globe centered around the lat/lng coord
function setupMap(location, lat, lng) {
	// Empty any maps already present
	document.querySelector("." + location + " .map").innerHTML = "";

	// Set the map resolution
	var size = 1000;
	var projection = d3.geo
		.orthographic()
		.scale(size / 2.1)
		.clipAngle(90)
		.translate([size / 2, size / 2]);
	var graticule = d3.geo.graticule();
	var canvas = d3
		.select("." + location + " .map")
		.append("canvas")
		.attr("width", size)
		.attr("height", size);
	var context = canvas.node().getContext("2d");
	var path = d3.geo.path().projection(projection).context(context);
	var λ = d3.scale.linear().domain([0, size]).range([-180, 180]);
	var φ = d3.scale.linear().domain([0, size]).range([90, -90]);

	d3.json("src/world-110m.json", function (error, topo) {
		if (error) {
			throw error;
		}

		var land = topojson.feature(topo, topo.objects.land),
			grid = graticule();

		context.clearRect(0, 0, size, size);

		context.beginPath();
		path({ type: "Sphere" });
		context.fillStyle = "rgba(0,0,0,.3)";
		context.fill();

		projection.rotate([-lng, -lat]);

		context.beginPath();
		path(land);
		context.fillStyle = "rgba(255,255,255,.9)";
		context.fill();

		context.beginPath();
		path(grid);
		context.lineWidth = 2;
		context.strokeStyle = "rgba(128,128,128,.2)";
		context.stroke();
	});

	d3.select(self.frameElement).style("height", size + "px");
}

// Create a forecast sub-card
function makeForecastCard(card_data) {
	var location = card_data.location;

	// Empty the forecast card
	document.querySelector("." + location + " .forecast-wrapper").innerHTML =
		"";

	// Loop through the days
	for (i = 0; i < card_data.forecast.data.length; i++) {
		var day_card_data = card_data.forecast.data[i];

		// Day of the Week
		var current_day = moment
			.unix(day_card_data.time)
			.tz(card_data.timezone)
			.format("dddd");
		var current_date = moment
			.unix(day_card_data.time)
			.tz(card_data.timezone)
			.format("MMM Do");

		// Summary
		if (day_card_data.summary !== undefined) {
			var summary = day_card_data.summary;
		} else {
			var summary = "Forecast summary not available.";
		}

		// Icon
		if (day_card_data.icon !== undefined) {
			var icon =
				'<svg class="forecast-icon"><use xlink:href="#' +
				day_card_data.icon +
				'"></use></svg>';
		} else {
			var icon = '<svg><use xlink:href="#clear"></use></svg>';
		}

		// High Temperature + Card Color
		if (day_card_data.temperatureHigh !== undefined) {
			var temperature_high = formatTemp(day_card_data.temperatureHigh);
			var class_name =
				" " +
				cardColorScale(card_data.units, day_card_data.temperatureHigh);
		} else {
			var temperature_high = "--&deg;";
			var class_name = "";
		}

		// Low Temperature
		if (day_card_data.temperatureLow !== undefined) {
			var temperature_low = formatTemp(day_card_data.temperatureLow);
		} else {
			var temperature_low = "--&deg;";
		}

		// Make the card
		// prettier-ignore
		var forecast_item =
			'<div class="forecast-item-wrapper full' + class_name + '">' +
				'<div class="forecast-item">' +
					'<div class="forecast-day-wrapper">' +
						'<div class="forecast-day">' + current_day + "</div>" +
						// + '<div class="forecast-date">' + current_date + '</div>'
					'</div>' +
					'<div class="forecast-temperature-wrapper">' + 
						icon + 
						'<div class="forecast-temperature high">' +
							temperature_high +
						'</div>' +
						'<div class="forecast-temperature low">' +
							temperature_low +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';

		// Add the card to `.forecast-wrapper`
		append(location, "forecast-wrapper", forecast_item);
	}
}

// Utilities ===========================================================

// JSONP by larryosborn https://github.com/larryosborn/JSONP
// prettier-ignore
(function(){var e,n,r,o,t,l,u,d;r=function(e){return window.document.createElement(e)},o=window.encodeURIComponent,u=Math.random,e=function(e){var o,l,u,i,a,c,f;if(null==e&&(e={}),(c={data:e.data||{},error:e.error||t,success:e.success||t,beforeSend:e.beforeSend||t,complete:e.complete||t,url:e.url||""}).computedUrl=n(c),0===c.url.length)throw new Error("MissingUrl");return i=!1,!1!==c.beforeSend({},c)&&(u=e.callbackName||"callback",l=e.callbackFunc||"jsonp_"+d(15),o=c.data[u]=l,window[o]=function(e){return window[o]=null,c.success(e,c),c.complete(e,c)},(f=r("script")).src=n(c),f.async=!0,f.onerror=function(e){return c.error({url:f.src,event:e}),c.complete({url:f.src,event:e},c)},f.onload=f.onreadystatechange=function(){var e,n;if(!(i||"loaded"!==(e=this.readyState)&&"complete"!==e))return i=!0,f?(f.onload=f.onreadystatechange=null,null!=(n=f.parentNode)&&n.removeChild(f),f=null):void 0},(a=window.document.getElementsByTagName("head")[0]||window.document.documentElement).insertBefore(f,a.firstChild)),{abort:function(){return window[o]=function(){return window[o]=null},i=!0,(null!=f?f.parentNode:void 0)?(f.onload=f.onreadystatechange=null,f.parentNode.removeChild(f),f=null):void 0}}},t=function(){},n=function(e){var n;return n=e.url,(n+=e.url.indexOf("?")<0?"?":"&")+l(e.data)},d=function(e){var n;for(n="";n.length<e;)n+=u().toString(36).slice(2,3);return n},l=function(e){var n,r;return function(){var t;for(n in t=[],e)r=e[n],t.push(o(n)+"="+o(r));return t}().join("&")},("undefined"!=typeof define&&null!==define?define.amd:void 0)?define(function(){return e}):("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=e:this.JSONP=e}).call(this);

// Get units from url parameter
function _getUrlParameter(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	var results = regex.exec(location.search);
	return results === null
		? undefined
		: decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Fill a value with HTML
function fill(location, name, value) {
	document.querySelector("." + location + " ." + name).innerHTML = value;
}

// Append HTML to a div
function append(location, name, value) {
	document.querySelector("." + location + " ." + name).innerHTML += value;
}

// Format geocoordinate values
function formatCoords(lat, lng) {
	return lat.toFixed(3) + ", " + lng.toFixed(3);
}

// Format temperature value
function formatTemp(temp) {
	return Math.round(temp) + "°";
}

// Format a overall weather summary
function formatSummary(card_data) {
	var summary = "";

	if (card_data.currentlySummary !== undefined) {
		var currently = card_data.currentlySummary;
	} else {
		var currently = "";
	}

	if (card_data.dailySummary !== undefined) {
		var daily = card_data.dailySummary;
	} else {
		var daily = "";
	}

	if (
		card_data.currentlySummary == undefined &&
		card_data.dailySummary == undefined
	) {
		var summary = "Weekly forecast summary not available.";
	} else {
		var summary = currently + ". " + daily;
	}

	return summary;
}

// Format just the currently summary
function formatCurrentlySummary(currently_summary) {
	console.log(currently_summary);

	// Makes just the first letter of the currently summary uppercase
	var currently_summary = currently_summary.toLowerCase();
	var formatted_currently_summary =
		currently_summary.charAt(0).toUpperCase() +
		currently_summary.slice(1) +
		". ";

	console.log(currently_summary);
	console.log(formatted_currently_summary);

	return formatted_currently_summary;
}

// Format percentage value
function formatPct(pct) {
	return Math.round(pct * 100) + "%";
}

// Format speed value with correct units
function formatSpeed(speed, units) {
	if (units == "us") {
		var unit = "mph";
	}
	if (units == "si") {
		var unit = "km/h";
	}

	return Math.round(speed) + " " + unit;
}

// Format barometric pressure value with correct units
function formatPressure(pressure, units) {
	if (units == "us") {
		var unit = "mb";
	}
	if (units == "si") {
		var unit = "hPa";
	}

	return Math.round(pressure) + " " + unit;
}

// Format visibility distance value with correct units
function formatDistance(distance, units) {
	if (units == "us") {
		var unit = "mi";
	}
	if (units == "si") {
		var unit = "km";
	}

	return Math.round(distance) + " " + unit;
}

// Format elevation value
// function formatElevation(elevation, units) {
// 	if (elevation >= 0) {
// 		var prefix = '<span class="prefix">Elevation: </span>';
// 	} else {
// 		var prefix = '<span class="prefix">Ground Elevation: </span>';
// 	}

// 	if (units == "us") {
// 		// Convert Google-returned elevation in meters to feet, and round
// 		return (
// 			prefix + Math.round(elevation * 3.28084).toLocaleString() + " ft"
// 		);
// 	} else if (units == "si") {
// 		// Show more precise elevation if necessary
// 		if (elevation < -10 || elevation > 10) {
// 			// Round elevation to whole number
// 			return prefix + Math.round(elevation).toLocaleString() + " m";
// 		} else {
// 			// Format elevation to one decimal point (e.g. 4.2 m)
// 			return (
// 				prefix +
// 				(Math.round(elevation * 10) / 10).toLocaleString() +
// 				" m"
// 			);
// 		}
// 	}
// }

// Format and convert degrees bearing to cardinal direction
function formatBearing(deg) {
	var val = Math.floor(deg / 22.5 + 0.5);
	var arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
	return arr[val % 8];
}

// // Format UV Index
function formatUv(uv) {
	if (uv > 11) {
		var index = "Extreme";
	} else if (uv > 8) {
		var index = "Very high";
	} else if (uv > 6) {
		var index = "High";
	} else if (uv > 3) {
		var index = "Moderate";
	} else {
		var index = "Low";
	}

	return uv + " (" + index + ")";
}

// // Format ozone in Dobson Units (DU)
function formatOzone(ozone) {
	return Math.round(ozone) + " DU";
}
