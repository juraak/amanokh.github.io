/* JSON:
	"id" - id of object
	"type":["noname" -выбор из нескольких мест на карте без их названий;
			"named" - выбор из мест с подписями
			"areas" - выбор из областей
			"ares_named" -  выбор из подписанных областей
			"strokes" - выбор из ломаных? ]
	"ll" - настоящая локация (noname,named)
	"fake_locations" - фейковые ([lat,lon])
	
	"area_points" - настоящие
	"fake_area" -фейковые
	
	"title" - суть вопроса
	"why_true" - комментарий при правильном выборе?
*/

var quiz=[
{
	"id":"island",
	"type":"noname",
	"ll":[52.298385, 104.256378],
    "zoom":13,
	"fake_locations":[[52.280871, 104.266613],[52.302042, 104.285088],[52.298530, 104.209343],[52.271487, 104.276334]],
	"fake_comments":["It's really narrow for burg! This is Sibiryakovskiy island, and Dyachiy is located on a mouth of Irkut river","This is Komsomolsky island, but Dyachiy is located on a mouth of Irkut river","This island doesn't have any name! Dyachiy is located on a mouth of Irkut river","No, this is Yunost' island, and Dyachiy is located on a mouth of Irkut river"],
	"title":"Relied upon some chronicles, Irkutsk burg was built in the beginning of 17\'th century at Dyachiy island. Could you find it?",
	"fake_titles":["о. Сибиряковский","о. Комсомольский","о. Безымянный","о. Юность"],
	"true_title":"о. Дьячий",
	"why_true":"Good! This island is located on a mouth of Irkut river.",
},
{
	"id":"ch_crossvosd",
	"type":"named",
	"ll":[52.276404, 104.288289],
    "zoom":15,
	"fake_locations":[[52.281500, 104.277329],[52.287771, 104.284786],[52.287640, 104.303500],[52.285302, 104.270337]],
	"fake_comments":["No, the question was about Krestovozdvizhenskaya church, that is located close to \"130\'th disctrict\"","Pioneers? And the church? The question was about Krestovozdvizhenskaya church, that is located close to \"130\'th disctrict\"","No, the question was about Krestovozdvizhenskaya church, that is located close to \"130\'th disctrict\"", "No, the question was about Krestovozdvizhenskaya church, that is located close to \"130\'th disctrict\""],
	"title":"This church is named after one of it's altairs, that was sanctified in honour of the <a href=\"/photos/1.jpg\" target=\"_blank\">Cross</a> of the Christ",
	"why_true":"Well, yes! It's an Krestovozdvizhenskaya church, that is located close to \"130\'th disctrict\"",
	"fake_titles":["Kharlampievskaya church","The House of Pioneers","Preobrazhenskaya church","Troitskaya church"],
	"true_title":"Krestovozdvizheskaya church",
},
{
	"id":"vorota",
	"type":"noname",
	"ll":[52.293609, 104.286269],
    "zoom":16,
	"fake_locations":[[52.277108, 104.285118],[52.287959, 104.258500]],
	"fake_comments":["Well, The Amur Gate was here until 1920. But the Moscow Gate looks toward Moscow highway (Moskovskiy trakt), and is located on the shore of Angara river","No, the Moscow Gate looks toward Moscow highway (Moskovskiy trakt), and is located on the shore of Angara river"],
	"title":"Moscow Trimphal <a href=\"/photos/2.jpg\" target=\"_blank\">Gate</a> was built in 1811 on the exit of Irkutsk, towards the Europenian part of Russia - to Moscow. So where is it located?",
	"why_true":"Right! This gate looks toward Moscow highway (Moskovskiy trakt)",
	"fake_titles":["Харлампиевская церковь","Дворец Пионеров","Преображенская церковь","Троицкая церковь"],
	"true_title":"Крестовоздвиженская церковь",
},
{
	"id":"tuz",
	"type":"noname",
	"ll":[52.273718, 104.289844],
    "zoom":16,
	"fake_locations":[[52.287849, 104.249437],[52.287906, 104.280902],[52.270347, 104.257008]],
	"fake_comments":["No, there is a park here.", "No, it is just the Central City Square.", "No, there you can find only Khrushchev's architecture:)"],
	"title":'Where can you find the heart of Irkutsk wooden architecture - the \"130\'th district\"?',
	"fake_titles":["о. Сибиряковский","о. Комсомольский","о. Безымянный","о. Юность"],
	"true_title":"о. Дьячий",
	"why_true":"Good! You're right!",
},
{
	"id":"kafedr_sobor",
	"type":"noname",
	"ll":[52.289999, 104.280424],
    "zoom":15,
	"fake_locations":[[52.274615, 104.292065],[52.281525, 104.277373],[52.287657, 104.287136],[52.285701, 104.305707]],
	"fake_comments":["No, Kazan Cathedral stood right in front of the Speransky' square. Now here is the regional administration.","No, Kazan Cathedral stood right in front of the Speransky' square. Now here is the regional administration.","No, Kazan Cathedral stood right in front of the Speransky' square. Now here is the regional administration.","No, Kazan Cathedral stood right in front of the Speransky' square. Now here is the regional administration."],
	"title":"Kazan <a href=\"/photos/3.jpg\" target=\"_blank\">Cathedral</a> - one of the largest iconic buildings in Russia at that time. It was blown up in August, 1932. Can you guess where it was located?",
	"why_true":"Actually, Kazan Cathedral stood right in front of the Speransky' square. Now here is the regional administration.",
},{
	"id":"hotel",
	"type":"named",
	"ll":[52.279777, 104.281201],
    "zoom":15,
	"fake_locations":[[52.287818, 104.282248],[52.274802, 104.304896],[52.282244, 104.273718]],
    "fake_titles":['"Ангара"','"Европа"','"Интурист"'],
	"fake_comments":["No, \"Ангара\" started working in 1969 - it\'s much later than 1904! Kolchak lived in \"Metropol\" and has went straight out of this hotel to get married with Sophie Omirova in nearby Kharlampievskaya church.","No, «Европа» opened much later than 1904. Kolchak lived in \"Metropol\" and has went straight out of this hotel to get married with Sophie Omirova in nearby Kharlampievskaya church.",'No, "Интурист" opened in 1979 году - it\'s much later than 1904! Kolchak lived in \"Metropol\" and has went straight out of this hotel to get married with Sophie Omirova in nearby Kharlampievskaya church.'],
	"title":"It's a really hard question. What <a href=\"/photos/4.jpg\" target=\"_blank\">hotel</a> did the Admiral Alexander Kolchak stay in, when he arrived in Irkutsk in 1904?",
    "true_title":'"Метрополь"',
	"why_true":"Excellent! Kolchak has went straight out of this hotel to get married with Sophie Omirova in nearby Kharlampievskaya church.",
}]

var endings = [
    {"title":"Похоже, я из Америки"},
    {"title":"Иркутск? Где-то на Урале"},
    {"title":"Могу показать Байкал на карте"},
    {"title":"Знаю, что Иркутск где-то в Сибири"},
    {"title":"Иркутчанин, но пока не иркутянин"},
    {"title":"Помню, где моя остановочка"},
    {"title":"Покажу, где была Амурская улица"},
    {"title":"Знаю Иркутск как свои четыре пальца"},
    {"title":"Смогу провести короткую экскурсию"},
    {"title":"Я - старожил"},
    {"title":"Я - коренной иркутянин"},
]