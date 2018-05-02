var question = -1;
var checked_question = 0;
var yy=0;
var ql = [];
var myMap;
var truePlace;

ymaps.ready(init);
changeMapSize();
function init(){     
	myMap = new ymaps.Map("map", {
		center: [52.284, 104.29],
		zoom: 14,
		controls: []
	},{yandexMapDisablePoiInteractivity: true, maxZoom: 15, minZoom:12});
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
function hideTitle(){
    if (window.innerWidth<=480) $('#q-title').css({'display':'none'})
}
function showButtons(){
    $('#next_button').css('display','flex');
    $('#grad').css('display','block');
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
		var template1 = makeColorPoint('green');
		truePlace.options.set('iconLayout',template1);
		place.options.set('iconLayout',template);
        showButtons();
        hideTitle();
		var coords = place.geometry.getCoordinates();
		for(var i = 0;i<fake_coords.length;++i){
			if(coords[0] == fake_coords[i][0] && coords[1] == fake_coords[i][1]){
				var a=$('#alert');
				a.css({'display':'inline-block','animation':'fadeInDown 0.5s cubic-bezier(.36,.07,.19,.97) both'});
				a.attr('class','alert alert-warning');
				a.html(quiz[question]['fake_comments'][i]);
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
                hideTitle();
				var a=$('#alert');
				a.css({'display':'inline-block','animation':'fadeInDown 0.5s cubic-bezier(.36,.07,.19,.97) both'});
				a.attr('class','alert alert-warning');
				a.html(quest['fake_comments'][i]);
				var template = makeNamedColorPoint(quest['fake_titles'][i],'red');
				place.options.set('iconLayout',template);
				var template1 = makeNamedColorPoint(quest['true_title'],'green');
				truePlace.options.set('iconLayout',template1);
                showButtons();
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
	truePlace = new makePoint(quest['ll']);
	truePlace.events.add('click', function(e){
            hideTitle();
			truePlace.options.set('preset','islands#greenCircleDotIcon');
			var a=$('#alert');
			var template = makeColorPoint('green');
			truePlace.options.set('iconLayout',template);
			a.css({'display':'inline-block','animation':'fadeInDown 0.5s cubic-bezier(.36,.07,.19,.97) both'});
			a.attr('class','alert alert-success');
			a.html(quiz[question]['why_true']);
            showButtons();
			yy++;
		});
	
	myMap.geoObjects.add(truePlace);
	addFakeCollection(quest);
		
}
function addNamedPoints(quest){
	truePlace = new makeNamedPoint(quest['true_title'],quest['ll']);
	truePlace.events.add('click', function(e){
            hideTitle();
			truePlace.options.set('preset','islands#greenCircleDotIcon');
			var a=$('#alert');
			var template = makeNamedColorPoint(quest['true_title'],'green');
			truePlace.options.set('iconLayout',template);
			a.css({'display':'inline-block','animation':'fadeInDown 0.5s cubic-bezier(.36,.07,.19,.97) both'});
			a.attr('class','alert alert-success');
			a.html(quiz[question]['why_true']);
            showButtons();
			yy++;
		});
	
	myMap.geoObjects.add(truePlace);
	addNamedFakeCollection(quest);
}
function nextQuest(){
    question++;
	myMap.geoObjects.removeAll();
	$('#next_button').css('display','none');
	$('#grad').css('display','none');
	$('#alert').css({'display':'none'});
	var q_title = document.getElementById("title")
	var q_desc = document.getElementById("desc")
	var q_list = document.getElementById("list-group")
	var next_button = document.getElementById("next_button")
	setQuestsList();
	if (question < quiz.length){
		var quest = quiz[question];
		$('#q-num').html((question+1).toString()+"/"+quiz.length);
		$('#q-title').html(quest['title']);
		$('#q-title').css('display','block');
		(quest['type']=='noname') ? addPoints(quest) : addNamedPoints(quest);
		var bnd = myMap.geoObjects.getBounds();
        bnd[1][0]+=1.15*(bnd[1][0]-bnd[0][0]);
        /*bounds[0][0]-=0.004;
        bounds[0][1]-=0.004;
        bounds[1][1]+=0.004;*/
        myMap.setBounds(bnd);
        myMap.options.set('maxZoom',quest['zoom']);
        
	} else {
		endQuest();
	}
}
function endQuest(){
    $('#q-num').html("Твой балл: "+yy.toString()+"   "+endings[yy]['title']);
    document.getElementById("share_vk").innerHTML=VK.Share.button(false,{type: "round", text: "Поделиться"});
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