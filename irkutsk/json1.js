﻿/* JSON:
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

var quiz=[{
	"id":"tuz",
	"type":"noname",
	"ll":[52.279951, 104.283172],
    "zoom":16,
	"fake_locations":[[52.277805, 104.281064],[52.282251, 104.284642],[52.279608, 104.276000],[52.274382, 104.291918],[52.280542, 104.295373]],
	"fake_comments":["Нет, это театр имени Охлопкова, а ТЮЗ находится на пересечении Карла Маркса и Ленина","Нет, это закрытый кинотеатр, а ТЮЗ находится на пересечении Карла Маркса и Ленина","Нет, это ирниретмер, а ТЮЗ находится на пересечении Карла Маркса и Ленина","Нет, это Иркутский государственный музыкальный театр имени Н. М. Загурского, а ТЮЗ находится на пересечении Карла Маркса и Ленина","Нет, это Иркутское театральное училище, а ТЮЗ находится на пересечении Карла Маркса и Ленина"],
	"title":'Мало кто помнит, но здание ТЮЗа напротив Дворца спорта "Труд" - это на самом деле филиал театра. А где тогда находилось основное здание ТЮЗа им. Вампилова?',
	"why_true":"Верно! Здание находится на пересечении Карла Маркса и Ленина",
},
{
	"id":"island",
	"type":"noname",
	"ll":[52.298385, 104.256378],
    "zoom":13,
	"fake_locations":[[52.280871, 104.266613],[52.302042, 104.285088],[52.298530, 104.209343],[52.271487, 104.276334]],
	"fake_comments":["Тесновато для острога! Этот остров называется Сибиряковским (многие его ещё называют Сибирским), а Дьячий находится в самом устье реки Иркут.","Нет, это остров Комсомольский. А Дьячий находится неподалеку,в самом устье реки Иркут","У этого острова даже нет названия. А Дьячий находится в самом устье реки Иркут","Ну что вы, это же остров Юность! А Дьячий находится в самом устье реки Иркут"],
	"title":"Некоторые летописи гласят, что Иркутский острог был срублен аж в начале 1650-х годов на острове Дьячем. А сможете ли вы найти этот остров?",
	"fake_titles":["о. Сибиряковский","о. Комсомольский","о. Безымянный","о. Юность"],
	"true_title":"о. Дьячий",
	"why_true":"Верно! Этот остров расположен прямо в устье реки Иркут",
},
{
	"id":"ch_crossvosd",
	"type":"named",
	"ll":[52.276404, 104.288289],
    "zoom":15,
	"fake_locations":[[52.281500, 104.277329],[52.287771, 104.284786],[52.287640, 104.303500],[52.285302, 104.270337]],
	"fake_comments":["Нет, это Харлампиевская церковь. А мы загадали Крестовоздвиженскую - она находится около 130-го квартала","Ну-у, здесь вообще нет цервки, это - Дворец пионеров! А церковь была названа Крестовоздвиженской, и находится она около 130-го квартала","Нет, это Преображенская церковь. В память Креста Господня назвали Крестовоздвиженскую церковь, и находится она около 130-го квартала", "Здесь находятся Троицкая и Церковь Григория Неокасарийского. А в память Креста Господня назвали Крестовоздвиженскую церковь, и находится она около 130-го квартала"],
	"title":"Один из алтарей этой церкви был освящен в память Креста Господня, отсюда и пошло её название",
	"why_true":"Верно! Это Крестовоздвиженская церковь, и находится она на пересечении улиц Седова и Тимирязева.",
	"fake_titles":["Харлампиевская церковь","Дворец Пионеров","Преображенская церковь","Троицкая церковь"],
	"true_title":"Крестовоздвиженская церковь",
},
{
	"id":"vorota",
	"type":"noname",
	"ll":[52.277108, 104.285118],
    "zoom":16,
	"fake_locations":[[52.293609, 104.286269],[52.287959, 104.258500],[52.289156, 104.280558],[52.290170, 104.294742],[52.280668, 104.273863]],
	"fake_comments":["Здесь находятся Московские ворота, и приурочены они к другому событию. А Амурские ворота находились напротив ТЮЗа на улице Амурской (ныне Ленина) вплоть до 1920 года","Нет, триумфальная арка была поставлена на улице Амурской (ныне Ленина), где простояла вплоть до 1920 года.","Нет, триумфальная арка была поставлена на улице Амурской (ныне Ленина), где простояла вплоть до 1920 года.","Нет, триумфальная арка была поставлена на улице Амурской (ныне Ленина), где простояла вплоть до 1920 года."],
	"title":"В честь заключения в 1858 году договора между Россией и Китаем, установившего левый берег реки Амур за нашей страной, в Иркутске были поставлены Амурские ворота. А где они находились?",
	"why_true":"Правильно! Эти ворота стояли на улице Амурской (ныне Ленина) вплоть до 1920 года",
	"fake_titles":["Харлампиевская церковь","Дворец Пионеров","Преображенская церковь","Троицкая церковь"],
	"true_title":"Крестовоздвиженская церковь",
},
{
	"id":"officer",
	"type":"named",
	"ll":[52.290043, 104.294067],
    "zoom":16,
	"fake_locations":[[52.287773, 104.284829],[52.286046, 104.280023],[52.281304, 104.292693],[52.284558, 104.296229]],
	"fake_comments":["Здесь находятся Московские ворота, и приурочены они к другому событию. А Амурские ворота находились напротив ТЮЗа на улице Амурской (ныне Ленина) вплоть до 1920 года","Нет, триумфальная арка была поставлена на улице Амурской (ныне Ленина), где простояла вплоть до 1920 года.","Нет, триумфальная арка была поставлена на улице Амурской (ныне Ленина), где простояла вплоть до 1920 года.","Нет, триумфальная арка была поставлена на улице Амурской (ныне Ленина), где простояла вплоть до 1920 года."],
	"title":"В этом доме в разные годы располагались торговые заведения, общество приказчиков, училище, наркомат иностранных дел, а позже Реввоенсовет Красной армии. О каком здании идёт речь?",
	"why_true":"Правильно! Дом офицеров - бывший особняк купчихи Х.Колыгиной. Сейчас там расположен Музей боевой славы.",
	"fake_titles":["Дворец пионеров","Центральный банк","ТЦ Пассаж","Дом Кузнеца"],
	"true_title":"Дом офицеров",
},
{
	"id":"kafedr_sobor",
	"type":"noname",
	"ll":[52.289999, 104.280424],
    "zoom":15,
	"fake_locations":[[52.274615, 104.292065],[52.281525, 104.277373],[52.287657, 104.287136],[52.285701, 104.305707]],
	"fake_comments":["Нет, Казанский собор находился на площади графа Сперанского, прямо на месте нынешней администрации Иркусткой области","Нет, Казанский собор находился на площади графа Сперанского, прямо на месте нынешней администрации Иркусткой области","Нет, Казанский собор находился на площади графа Сперанского, прямо на месте нынешней администрации Иркусткой области","Нет, Казанский собор находился на площади графа Сперанского, прямо на месте нынешней администрации Иркусткой области"],
	"title":"В августе 1932 года был взорван один из крупнейших культовых сооружений России - Иркутский Казанский Кафедральный собор. Сможете сказать, где он располагался?",
	"why_true":"Действительно, Казанский собор стоял прямо на площади графа Сперанского. Сейчас на его месте расположена областная администрация.",
}]

var endings = [
    {"title":"Иркутск? Где-то на Урале"},
    {"title":"Могу показать Байкал на карте"},
    {"title":"Знаю, что Иркутск где-то в Сибири"},
    {"title":"Иркутчанин, но пока не иркутянин"},
    {"title":"Слышал, что сюда ссылали декабристов"},
    {"title":"Помню, когда день города"},
    {"title":"Знаю Иркутск как свои четыре пальца"},
    {"title":"Знаю, кто такой Яков Похабов"},
    {"title":"Старожил"},
    {"title":"Доктор исторических наук"},
]