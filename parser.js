var question = -1;
var checked_question = 0;
var yy=0;
var ql = [];
var myMap;

ymaps.ready(init);
changeMapSize();
function init(){     
	myMap = new ymaps.Map("map", {
		center: [52.284, 104.29],
		zoom: 14,
		controls: []
	},{yandexMapDisablePoiInteractivity: true, maxZoom: 15});
	$('#start_button').attr('class','btn btn-primary');
	$('#start_button').prop('disabled',false);
}

function setQuestsList() {
	ql = []
	while (ql.length != 4){
		var a = Math.floor(Math.random() * 4);
		if (ql.indexOf(a)==-1){
			ql.push(a)
		}
	}
}
function changeMapSize(){
	var h = window.innerHeight;
	document.getElementById('map').style.height = h.toString()+"px";
	myMap.container.fitToViewport();
}

function makeColorPoint(color){
	return ymaps.templateLayoutFactory.createClass('<div class="point-layout"><div class="point point-' + color + '"><div class="dot-icon"></div></div></div>');
}
function makeNamedColorPoint(title,color){
	return ymaps.templateLayoutFactory.createClass('<div class="point-layout"><div class="point point-' + color + '"><div class="dot-icon"></div></div><div class="point-title">' + title + '</div></div>');
}
function addFakeCollection(quest){
	var myCollection = new ymaps.GeoObjectCollection();
    var fake_coords = quest["fake_locations"]
	for (var i = 0; i < fake_coords.length; i++) {
		myCollection.add(new makePoint(fake_coords[i])); 
	}
	myCollection.events.add('click',function(e){
		var place = e.get('target');
		var template = makeColorPoint('red');
		place.options.set('iconLayout',template);
		var coords = place.geometry.getCoordinates();
		for(var i = 0;i<fake_coords.length;++i){
			if(coords[0] == fake_coords[i][0] && coords[1] == fake_coords[i][1]){
				var a=$('#alert');
				a.css({'display':'inline-block','animation':'fadeInDown 0.5s cubic-bezier(.36,.07,.19,.97) both'});
				a.attr('class','alert alert-warning');
				a.html(quiz[question]['fake_comments'][i]);
				$('#next_button').css('display','flex');
				$('#grad').css('display','block');
			}
		}
	});
	myMap.geoObjects.add(myCollection);
}
function addNamedFakeCollection(quest){
	var myCollection = new ymaps.GeoObjectCollection();
    var fake_coords = quest["fake_locations"]
	for (var i = 0; i < fake_coords.length; i++) {
		myCollection.add(new makeNamedPoint(quest['fake_titles'][i],fake_coords[i])); 
	}
	myCollection.events.add('click',function(e){
		var place = e.get('target');
		var coords = place.geometry.getCoordinates();
		for(var i = 0;i<fake_coords.length;++i){
			if(coords[0] == fake_coords[i][0] && coords[1] == fake_coords[i][1]){
				var a=$('#alert');
				a.css({'display':'inline-block','animation':'fadeInDown 0.5s cubic-bezier(.36,.07,.19,.97) both'});
				a.attr('class','alert alert-warning');
				a.html(quest['fake_comments'][i]);
				var template = makeNamedColorPoint(quest['fake_titles'][i],'red');
				place.options.set('iconLayout',template);
				$('#next_button').css('display','flex');
				$('#grad').css('display','block');
			}
		}
	});
	myMap.geoObjects.add(myCollection);
}
			
function makeNamedPoint(title, coords){
	var template = ymaps.templateLayoutFactory.createClass('<div class="point-layout"><div class="point"><div class="dot-icon"></div></div><div class="point-title">' + title + '</div></div>');
	var e = new ymaps.GeoObject({
                        geometry: {
                            type: "Point",
                            coordinates: coords
                        },
                        properties: {
                            iconContent: ""
                        }
                    },
                    {
                        iconLayout: template,
                        iconShape: {
                            type: "Circle",
                            coordinates: [0, 0],
                            radius: 16
                        }
                    });
	return e;
}
function makePoint(coords){
	var template = ymaps.templateLayoutFactory.createClass('<div class="point-layout"><div class="point"><div class="dot-icon"></div></div></div>');

	var e = new ymaps.GeoObject({
                        geometry: {
                            type: "Point",
                            coordinates: coords
                        },
                        properties: {
                            iconContent: ""
                        }
                    },
                    {
                        iconLayout: template,
                        iconShape: {
                            type: "Circle",
                            coordinates: [0, 0],
                            radius: 16
                        }
                    });
	return e;
}
function addPoints(quest){
	var truePlace = new makePoint(quest['ll']);
	truePlace.events.add('click', function(e){
			truePlace.options.set('preset','islands#greenCircleDotIcon');
			var a=$('#alert');
			var template = makeColorPoint('green');
			truePlace.options.set('iconLayout',template);
			a.css({'display':'inline-block','animation':'fadeInDown 0.5s cubic-bezier(.36,.07,.19,.97) both'});
			a.attr('class','alert alert-success');
			a.html(quiz[question]['why_true']);
			$('#next_button').css('display','flex');
			$('#grad').css('display','block');
			yy++;
		});
	
	myMap.geoObjects.add(truePlace);
	addFakeCollection(quest);
		
}
function addNamedPoints(quest){
	var truePlace = new makeNamedPoint(quest['id'],quest['ll']);
	truePlace.events.add('click', function(e){
			truePlace.options.set('preset','islands#greenCircleDotIcon');
			var a=$('#alert');
			var template = makeNamedColorPoint(quest['true_title'],'green');
			truePlace.options.set('iconLayout',template);
			a.css({'display':'inline-block','animation':'fadeInDown 0.5s cubic-bezier(.36,.07,.19,.97) both'});
			a.attr('class','alert alert-success');
			a.html(quiz[question]['why_true']);
			$('#next_button').css('display','flex');
			$('#grad').css('display','block');
			yy++;
		});
	
	myMap.geoObjects.add(truePlace);
	addNamedFakeCollection(quest);
}
function nextQuest(){
	if (question>-1){myMap.geoObjects.removeAll();}
	$('#next_button').css('display','none');
	$('#grad').css('display','none');
	$('#alert').css({'display':'none'});
	var q_title = document.getElementById("title")
	var q_desc = document.getElementById("desc")
	var q_list = document.getElementById("list-group")
	var next_button = document.getElementById("next_button")
	setQuestsList();
	if (question+1 < quiz.length){
		question++;
		var quest = quiz[question];
		$('#q-num').html((question+1).toString());
		$('#q-title').html(quest['title']);
		
		(quest['type']=='noname') ? addPoints(quest) : addNamedPoints(quest);
		
	} else {
		$('#q-num').html("Твой балл: "+yy.toString());
		document.getElementById("share_vk").innerHTML=VK.Share.button(false,{type: "round", text: "Поделиться"});
	}
}


function startQuiz(){
	$('#block').css({'top':'-20px','width':'100%','box-shadow': '0 0 10px rgba(0,0,0,0.5)',
	'background-color': 'rgba(255,255,255,0.95)',});
	$('#title').css('display','none');
	$('#desc').css('display','none');
	$('#start_button').css('display','none');
    $('#w-img').css('display','none');
    $('#text-shadow').css('display','none');
	nextQuest();
	myMap.controls.add('zoomControl', {
		size: 'small',
		float: 'none',
		position: {
			bottom: '50px',
			right: '30px'
		}
	});
	setTimeout(function(){$('#map').addClass('deblurred');$('#grad').css('opacity','0');},500);
	setTimeout(function(){$('#grad').css('display','none')},500);
	
}