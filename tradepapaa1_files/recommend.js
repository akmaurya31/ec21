$(document).ready(function(){
	var recomProdList = [{categoryId:"01", categoryNm:"Agriculture", bgTitle:"PALM OIL", bgImage:"bg_palm_oil.jpg", prod1Title:"Fresh Potato", prod1Image:"fresh_potato.jpg", prod2Title:"Black Pepper", prod2Image:"black_pepper.jpg", prod3Title:"Chestnut", prod3Image:"chestnut.jpg"},
	                     {categoryId:"02", categoryNm:"Apparel", bgTitle:"FEMALE JACKETS", bgImage:"bg_female_jackets.jpg", prod1Title:"T-shirt", prod1Image:"t_shirt.jpg", prod2Title:"Beachwear", prod2Image:"beachwear.jpg", prod3Title:"Women Underwear", prod3Image:"women_underwear.jpg"},
	                     {categoryId:"03", categoryNm:"Automobiles & Motorcycles", bgTitle:"TYRE", bgImage:"bg_tyre.jpg", prod1Title:"Brake Pad", prod1Image:"brake_pad.jpg", prod2Title:"Ac Compressor", prod2Image:"ac_compressor.jpg", prod3Title:"Press Parts", prod3Image:"press_parts.jpg"},
	                     {categoryId:"04", categoryNm:"Business Services", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"05", categoryNm:"Chemicals", bgTitle:"CAUSTIC SODA", bgImage:"bg_caustic_soda.jpg", prod1Title:"Glyphosate", prod1Image:"glyphosate.jpg", prod2Title:"Calcium Carbonate", prod2Image:"calcium_carbonate.jpg", prod3Title:"Methanol", prod3Image:"methanol.jpg"},
	                     {categoryId:"06", categoryNm:"Computer Hardware & Software", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"07", categoryNm:"Construction & Real Estate", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"08", categoryNm:"Consumer Electronics", bgTitle:"BLUETOOTH HEADSET", bgImage:"bg_bluetooth_headset.jpg", prod1Title:"SD Card", prod1Image:"sd_card.jpg", prod2Title:"Car Amplifier", prod2Image:"car_amplifier.jpg", prod3Title:"Wireless Charger", prod3Image:"wireless_charger.jpg"},
	                     {categoryId:"09", categoryNm:"Electrical Equipment & Supplies", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"10", categoryNm:"Electronic Components & Supplies", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"11", categoryNm:"Energy", bgTitle:"CRUDE OIL", bgImage:"bg_crude_oil.jpg", prod1Title:"Hard Wood Charcoal", prod1Image:"hard_wood_charcoal.jpg", prod2Title:"Mazut", prod2Image:"mazut.jpg", prod3Title:"Paraffin Wax", prod3Image:"paraffin_wax.jpg"},
	                     {categoryId:"12", categoryNm:"Environment", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"13", categoryNm:"Excess Inventory", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"14", categoryNm:"Fashion Accessories", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"15", categoryNm:"Food & Beverage", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"16", categoryNm:"Furniture & Furnishings", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"17", categoryNm:"General Industrial Equipment", bgTitle:"AIR COMPRESSOR", bgImage:"bg_air_compressor.jpg", prod1Title:"Steam Boiler", prod1Image:"steam_boiler.jpg", prod2Title:"Welding Holder", prod2Image:"welding_holder.jpg", prod3Title:"Ice Making Machine", prod3Image:"ice_making_machine.jpg"},
	                     {categoryId:"18", categoryNm:"General Mechanical Components", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"19", categoryNm:"Gifts & Crafts", bgTitle:"", bgImage:"", prod1Title:"", prod1Image:"", prod2Title:"", prod2Image:"", prod3Title:"", prod3Image:""},
	                     {categoryId:"20", categoryNm:"Hardware", bgTitle:"GLOBE VALVE", bgImage:"bg_globe_valve.jpg", prod1Title:"Chemical Anchor", prod1Image:"chemical_anchor.jpg", prod2Title:"Welding Neck Flange", prod2Image:"welding_neck_flange.jpg", prod3Title:"Silicon Carbide", prod3Image:"silicon_carbide.jpg"},
	                     {categoryId:"21", categoryNm:"Health & Medical", bgTitle:"E-CIGARETTE", bgImage:"bg_e_cigarette.jpg", prod1Title:"Massage Chair", prod1Image:"s_massage_chair.jpg", prod2Title:"Respiratory Equipment", prod2Image:"s_respiratory_equipment.jpg", prod3Title:"Surgical Equipment", prod3Image:"s_surgical_equipment.jpg"},
	                     {categoryId:"22", categoryNm:"Home & Garden", bgTitle:"COOKWARE", bgImage:"bg_cookware.jpg", prod1Title:"Tableware", prod1Image:"s_tableware.jpg", prod2Title:"Kitchenware", prod2Image:"s_kitchenware.jpg", prod3Title:"Mirror", prod3Image:"s_mirror.jpg"},
	                     {categoryId:"23", categoryNm:"Home Appliances", bgTitle:"AIR CONDITIONER", bgImage:"bg_air_conditioner.jpg", prod1Title:"Water Dispenser", prod1Image:"s_water_dispenser.jpg", prod2Title:"Air Purifier", prod2Image:"s_air_purifier.jpg", prod3Title:"Vacuum Cleaner", prod3Image:"s_vacuum_cleaner.jpg"},
	                     {categoryId:"24", categoryNm:"Lights & Lighting", bgTitle:"CHANDELIER", bgImage:"bg_chandelier.jpg", prod1Title:"Led Light", prod1Image:"s_led_light.jpg", prod2Title:"Outdoor Lighting", prod2Image:"s_outdoor_lighting.jpg", prod3Title:"Led Lamp", prod3Image:"s_led_lamp.jpg"},
	                     {categoryId:"25", categoryNm:"Luggage, Bags & Cases", bgTitle:"HANDBAG", bgImage:"bg_handbag.jpg", prod1Title:"Business Bags", prod1Image:"s_businessbags.jpg", prod2Title:"Camera Bag", prod2Image:"s_camerabag.jpg", prod3Title:"Backpack", prod3Image:"s_backpack.jpg"},
	                     {categoryId:"26", categoryNm:"Manufacturing & Processing Machinery", bgTitle:"PRINTING MACHINE", bgImage:"bg_printing_machine.jpg", prod1Title:"Sewing Machine", prod1Image:"sewing_machine.jpg", prod2Title:"Apparel Machinery", prod2Image:"apparel_machinery.jpg", prod3Title:"Mould", prod3Image:"mould.jpg"},
	                     {categoryId:"27", categoryNm:"Measurement & Analysis Instruments", bgTitle:"BATTERY TESTER", bgImage:"bg_battery_tester.jpg", prod1Title:"Digital Scale", prod1Image:"digital_scale.jpg", prod2Title:"Microscope", prod2Image:"microscope.jpg", prod3Title:"Telescope", prod3Image:"telescope.jpg"},
	                     {categoryId:"28", categoryNm:"Minerals & Metallurgy", bgTitle:"STEEL PIPE", bgImage:"bg_steel_pipe.jpg", prod1Title:"Aluminum Profile", prod1Image:"aluminum_profile.jpg", prod2Title:"Fiberglass", prod2Image:"fiberglass.jpg", prod3Title:"Wire Mesh", prod3Image:"wire_mesh.jpg"},
	                     {categoryId:"29", categoryNm:"Office & School Supplies", bgTitle:"WHITEBOARD", bgImage:"bg_whiteboard.jpg", prod1Title:"Copy Paper", prod1Image:"copy_paper.jpg", prod2Title:"Toner Cartridge", prod2Image:"toner_cartridge.jpg", prod3Title:"Pen", prod3Image:"pen.jpg"},
	                     {categoryId:"30", categoryNm:"Packaging & Paper", bgTitle:"COSMETICS PACKAGING", bgImage:"bg_cosmetics_packaging.jpg", prod1Title:"Paper Box", prod1Image:"paper_box.jpg", prod2Title:"Shopping Bag", prod2Image:"shopping_bag.jpg", prod3Title:"Jewellery Cases", prod3Image:"jewellery_cases.jpg"},
	                     {categoryId:"31", categoryNm:"Personal Care", bgTitle:"COSMETICS", bgImage:"bg_cosmetics.jpg", prod1Title:"Ipl Machine", prod1Image:"ip_machine.jpg", prod2Title:"Hair Dryer", prod2Image:"hair_dryer.jpg", prod3Title:"Soap", prod3Image:"soap.jpg"},
	                     {categoryId:"32", categoryNm:"Printing & Publishing", bgTitle:"GREETING CARD", bgImage:"bg_greeting_card.jpg", prod1Title:"Brochure", prod1Image:"brochure.jpg", prod2Title:"Stamping Foil", prod2Image:"stamping_foil.jpg", prod3Title:"Printing Machine", prod3Image:"printing_machine.jpg"},
	                     {categoryId:"33", categoryNm:"Rubber & Plastics", bgTitle:"HOSE", bgImage:"bg_hose.jpg", prod1Title:"Plastic", prod1Image:"plastic.jpg", prod2Title:"Pvc", prod2Image:"pvc.jpg", prod3Title:"Rubber", prod3Image:"rubber.jpg"},
	                     {categoryId:"34", categoryNm:"Security & Protection", bgTitle:"SECURITY_FENCE", bgImage:"bg_security_fence.jpg", prod1Title:"CCTV", prod1Image:"cctv.jpg", prod2Title:"DVR", prod2Image:"dvr.jpg", prod3Title:"Access Control Card", prod3Image:"Access_Control_Card.jpg"},
	                     {categoryId:"35", categoryNm:"Service Equipment", bgTitle:"POS SYSTEMS", bgImage:"bg_POS_Systems.jpg", prod1Title:"Display Racks", prod1Image:"Display_Racks.jpg", prod2Title:"Shopping Cart", prod2Image:"shopping_cart.jpg", prod3Title:"Banner Stand", prod3Image:"banner_stand.jpg"},
	                     {categoryId:"36", categoryNm:"Shoes & Accessories", bgTitle:"BABY SHOES", bgImage:"bg_Baby_Shoes.jpg", prod1Title:"Sandals", prod1Image:"Sandals.jpg", prod2Title:"Boots", prod2Image:"Boots.jpg", prod3Title:"Insoles", prod3Image:"Insoles.jpg"},
	                     {categoryId:"37", categoryNm:"Sports & Entertainment", bgTitle:"WHEY PROTEIN", bgImage:"bg_whey_protein.jpg", prod1Title:"Fitness Equipment", prod1Image:"fitness_equipment.jpg", prod2Title:"Coin Operated Games", prod2Image:"Coin_Operated_Games.jpg", prod3Title:"Camping Tent", prod3Image:"camping_tent.jpg"},
	                     {categoryId:"38", categoryNm:"Telecommunications", bgTitle:"ROUTERS", bgImage:"bg_Routers.jpg", prod1Title:"Fiber Optic Equipment", prod1Image:"Fiber_Optic_Equipment.jpg", prod2Title:"Mobile Phone Chargers", prod2Image:"Mobile_Phone_Chargers.jpg", prod3Title:"Mobile Phone LCDs", prod3Image:"Mobile_Phone_LCDs.jpg"},
	                     {categoryId:"39", categoryNm:"Textiles & Leather Products", bgTitle:"CURTAIN", bgImage:"bg_curtain.jpg", prod1Title:"Blanket", prod1Image:"blanket.jpg", prod2Title:"Cushion", prod2Image:"cushion.jpg", prod3Title:"Synthetic Fiber", prod3Image:"synthetic_fiber.jpg"},
	                     {categoryId:"40", categoryNm:"Timepieces, Jewelry, Eyewear", bgTitle:"FASHION JEWELRY", bgImage:"bg_fashion_jewelry.jpg", prod1Title:"Earring", prod1Image:"earring.jpg", prod2Title:"Necklace", prod2Image:"necklace.jpg", prod3Title:"Contact Lenses", prod3Image:"contact_lenses.jpg"},
	                     {categoryId:"41", categoryNm:"Tools", bgTitle:"GARDEN TOOLS", bgImage:"bg_garden_tools.jpg", prod1Title:"Hammers", prod1Image:"hammers.jpg", prod2Title:"Electric Saws", prod2Image:"electric_saws.jpg", prod3Title:"Brush Cutter", prod3Image:"brush_cutter.jpg"},
	                     {categoryId:"42", categoryNm:"Toys", bgTitle:"INFLATABLE TOYS", bgImage:"bg_inflatable_toys.jpg", prod1Title:"Stuffed Plush Toys", prod1Image:"stuffed_plush_toys.jpg", prod2Title:"RC Car", prod2Image:"rc_car.jpg", prod3Title:"Drone", prod3Image:"drone.jpg"},
	                     {categoryId:"43", categoryNm:"Transportation", bgTitle:"BICYCLE", bgImage:"bg_bicycle.jpg", prod1Title:"Boat", prod1Image:"boat.jpg", prod2Title:"Golf Carts", prod2Image:"golf_carts.jpg", prod3Title:"Trailer", prod3Image:"trailer.jpg"}];
	                     
	
	var userCatList = [];
	var memCate =JSON.parse(JSON.parse(getCookie("memCate")));
	if(memCate){
		if(memCate.gubun=="M"){
			userCatList.push.apply(userCatList, memCate.buyCat);
			var tempCatList = [];
			$.each(userCatList, function(idx, el){
				if($.inArray(el, tempCatList)===-1)tempCatList.push(el);
			});
			userCatList = tempCatList;
			userCatList.push.apply(userCatList, memCate.sellCat);
			$.each(userCatList, function(idx, el){
		        if($.inArray(el, tempCatList)===-1)tempCatList.push(el);
		    });
		    userCatList = tempCatList;
			if(userCatList.length>5){
				for (var shuffCnt = userCatList.length; shuffCnt; shuffCnt--) {
			        var j = Math.floor(Math.random() * shuffCnt);
			        [userCatList[shuffCnt - 1], userCatList[j]] = [userCatList[j], userCatList[shuffCnt - 1]];
			    }
			}
		}else if(memCate.gubun=="B"){
			userCatList.push.apply(userCatList, memCate.buyCat);
			var tempCatList = [];
			$.each(userCatList, function(idx, el){
		        if($.inArray(el, tempCatList)===-1)tempCatList.push(el);
		    });
		    userCatList = tempCatList;
			if(userCatList.length<5){
				userCatList.push.apply(userCatList, memCate.sellCat);
				var tempCatList = [];
			    $.each(userCatList, function(idx, el){
			        if($.inArray(el, tempCatList)===-1)tempCatList.push(el);
			    });
			    userCatList = tempCatList;
			}
		}else if(memCate.gubun=="S"){
			userCatList.push.apply(userCatList, memCate.sellCat);
			var tempCatList = [];
			$.each(userCatList, function(idx, el){
		        if($.inArray(el, tempCatList)===-1)tempCatList.push(el);
		    });
		    userCatList = tempCatList;
		    if(userCatList.length<5){
		    	userCatList.push.apply(userCatList, memCate.buyCat);
		    	var tempCatList = [];
		        $.each(userCatList, function(idx, el){
		            if($.inArray(el, tempCatList)===-1)tempCatList.push(el);
		        });
		        userCatList = tempCatList;
		    }
		}
	}
	var randList = [];
	for(var rCnt=1; rCnt<=43; rCnt++){
		var randNum = ""+rCnt;
		if(rCnt<10) randNum = "0"+randNum;
		randList.push(randNum);
	}
	for (var shuffCnt = randList.length; shuffCnt; shuffCnt--) {
	    var j = Math.floor(Math.random() * shuffCnt);
	    var tempVal = randList[shuffCnt-1];
	    randList[shuffCnt-1] = randList[j];
	    randList[j] = tempVal;
	}
	randList = randList.slice(0,5);
	
	if(userCatList.length<5){
		for(var randCnt = 0; randCnt<5; randCnt++){
			userCatList.push(randList[randCnt]);	
		}
	}
	var tempCatList = [];
	$.each(userCatList, function(idx, el){
	    if($.inArray(el, tempCatList)===-1)tempCatList.push(el);
	});
	userCatList = tempCatList;
	userCatList = userCatList.slice(0,5);
	
	//TODO remove
	userCatList = ["01","02","03","05","08","11","17","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43"];
	for (var shuffCnt = userCatList.length; shuffCnt; shuffCnt--) {
	    var j = Math.floor(Math.random() * shuffCnt);
	    var tempVal = userCatList[shuffCnt-1];
	    userCatList[shuffCnt-1] = userCatList[j];
	    userCatList[j] = tempVal;
	}
	userCatList = userCatList.slice(0,5);
	// TODO remove-END
	
	userCatList.sort();
	
	var recImagePath = "https://image.ec21.com/optimg/recommend/";
	var filterRecData = [];
	var recListHtml = "";
	var recContHtml = "";
	for(var recomCnt = 0; recomCnt<userCatList.length; recomCnt++){
	    filterRecData.push(recomProdList.filter(function(n){
	        return n.categoryId === userCatList[recomCnt];
	    }));
	}
	for(var recFilCnt = 0; recFilCnt<filterRecData.length; recFilCnt++){
	    var displayStyle="";
	    var classStyle="";
	    if(recFilCnt==0){
	        displayStyle="";
	        classStyle="class=\"on\"";
	    }else{
	        displayStyle="display:none;";
	        classStyle="";
	    }
	    
	    var addrBHtml = "";
	    var addrHtml = "";
	    var addrHtml2 = "";
	    var addrHtml3 = "";
	    
	    if(filterRecData[recFilCnt][0].bgTitle == "E-CIGARETTE" ){
	    	addrBHtml = "https://www.ec21.com/seller/e-cigarette";
	    }else if(filterRecData[recFilCnt][0].bgTitle == "FEMALE JACKETS" ){
	    	addrBHtml = "https://www.ec21.com/ec-market/Jackets--0215/Womens--attr272--1512.html";
	    }else if(filterRecData[recFilCnt][0].bgTitle == "ROUTERS" ){
	    	addrBHtml = "https://www.ec21.com/seller/router";
	    }else if(filterRecData[recFilCnt][0].bgTitle == "POS SYSTEMS" ){
	    	addrBHtml = "https://www.ec21.com/seller/pos-system";
	    }else{
	    	addrBHtml = "https://www.ec21.com/seller/"+getKeywordForUrl(filterRecData[recFilCnt][0].bgTitle.toLowerCase());
	    }
	    
	    
	    if(getKeywordForUrl(filterRecData[recFilCnt][0].prod1Title.toLowerCase()) == "hard-wood-charcoal" ){
	    	addrHtml = "https://www.ec21.com/ec-market/hard-wood-charcoal.html";
	    }else if(getKeywordForUrl(filterRecData[recFilCnt][0].prod1Title.toLowerCase()) == "chemical-anchor" ){
	    	addrHtml = "https://www.ec21.com/ec-market/chemical-anchor.html";
	    }else if(getKeywordForUrl(filterRecData[recFilCnt][0].prod1Title.toLowerCase()) == "camera-bag" ){
	    	addrHtml = "https://www.ec21.com/ec-market/Business-Bags-Cases--2504.html";
	    }else if(getKeywordForUrl(filterRecData[recFilCnt][0].prod1Title.toLowerCase()) == "t%252Dshirt" ){
	    	addrHtml = "https://www.ec21.com/seller/t-shirt";
	    }else if(getKeywordForUrl(filterRecData[recFilCnt][0].prod1Title.toLowerCase()) == "stuffed-plush-toys" ){
	    	addrHtml = "https://www.ec21.com/ec-market/stuffed-plush-toys.html";
	    }else if(getKeywordForUrl(filterRecData[recFilCnt][0].prod1Title.toLowerCase()) == "pos-systems" ){
	    	addrHtml = "https://www.ec21.com/ec-market/pos-systems.html";
	    }else if(getKeywordForUrl(filterRecData[recFilCnt][0].prod1Title.toLowerCase()) == "display-racks" ){
	    	addrHtml = "https://www.ec21.com/seller/display-rack";
	    }else if(getKeywordForUrl(filterRecData[recFilCnt][0].prod1Title.toLowerCase()) == "business-bags" ){
	    	addrHtml = "https://www.ec21.com/seller/business-bag";
	    }else if(getKeywordForUrl(filterRecData[recFilCnt][0].prod1Title.toLowerCase()) == "hammers" ){
	    	addrHtml = "https://www.ec21.com/seller/hammer";
	    }else{
	    	addrHtml = "https://www.ec21.com/seller/"+getKeywordForUrl(filterRecData[recFilCnt][0].prod1Title.toLowerCase());
	    }
	    
	    	
	    
	    if(getKeywordForUrl(filterRecData[recFilCnt][0].prod2Title.toLowerCase()) == "black-pepper"){
	    	addrHtml2 = "https://www.ec21.com/ec-market/Spices-Herbs--153407.html";
	    }else if (getKeywordForUrl(filterRecData[recFilCnt][0].prod2Title.toLowerCase()) == "black-pepper" ){
	    	addrHtml2 = "https://www.ec21.com/ec-market/hard-wood-charcoal.html";
	    }else if (getKeywordForUrl(filterRecData[recFilCnt][0].prod2Title.toLowerCase()) == "welding-holder" ){
	    	addrHtml2 = "https://www.ec21.com/ec-market/welding-holder.html";
	    }else if (getKeywordForUrl(filterRecData[recFilCnt][0].prod2Title.toLowerCase()) == "respiratory-equipment" ){
	    	addrHtml2 = "https://www.ec21.com/ec-market/Respiratory-Equipment--2134.html";
	    }else if  (getKeywordForUrl(filterRecData[recFilCnt][0].prod2Title.toLowerCase()) == "apparel-machinery" ){
	    	addrHtml2 = "https://www.ec21.com/ec-market/Apparel-Machinery--0203.html";
	    }else if  (getKeywordForUrl(filterRecData[recFilCnt][0].prod2Title.toLowerCase()) == "mobile-phone-chargers" ){
	    	addrHtml2 = "https://www.ec21.com/seller/mobile-phone-charger";
	    }else if  (getKeywordForUrl(filterRecData[recFilCnt][0].prod2Title.toLowerCase()) == "golf-carts" ){
	    	addrHtml2 = "https://www.ec21.com/seller/golf-cart";
	    }else if  (getKeywordForUrl(filterRecData[recFilCnt][0].prod2Title.toLowerCase()) == "electric-saws" ){
	    	addrHtml2 = "https://www.ec21.com/seller/electric-saw";
	    }else{
	    	addrHtml2 = "https://www.ec21.com/seller/"+getKeywordForUrl(filterRecData[recFilCnt][0].prod2Title.toLowerCase());
	    }
	    
	    if(getKeywordForUrl(filterRecData[recFilCnt][0].prod3Title.toLowerCase()) == "chestnut" ){
	    	addrHtml3 = "https://www.ec21.com/seller/chestnuts";
	    }else if (getKeywordForUrl(filterRecData[recFilCnt][0].prod3Title.toLowerCase()) == "press-parts"){
	    	addrHtml3 ="https://www.ec21.com/ec-market/press-parts.html";
	    }else if (getKeywordForUrl(filterRecData[recFilCnt][0].prod3Title.toLowerCase()) == "jewellery-cases"){
	    	addrHtml3 ="https://www.ec21.com/ec-market/Jewellery-Cases-Boxes--400304.html";
	    }else if (getKeywordForUrl(filterRecData[recFilCnt][0].prod3Title.toLowerCase()) == "insoles"){
	    	addrHtml3 ="https://www.ec21.com/seller/insole";
	    }else if (getKeywordForUrl(filterRecData[recFilCnt][0].prod3Title.toLowerCase()) == "mobile-phone-lcds"){
	    	addrHtml3 ="https://www.ec21.com/seller/mobile-phone-lcd";
	    }else{
	    	addrHtml3 ="https://www.ec21.com/seller/"+getKeywordForUrl(filterRecData[recFilCnt][0].prod3Title.toLowerCase());
	    }
	    
	    recListHtml += "<li><a href=\"javascript:void(0);\" "+classStyle+">"+filterRecData[recFilCnt][0].categoryNm+"</a></li>";
	    recContHtml += "<li style=\""+displayStyle+"\">";
	    recContHtml += "   <ul class=\"recommended_list\">";
	    recContHtml += "       <li>";
	    recContHtml += "           <a href=\""+addrBHtml+"\" title=\""+filterRecData[recFilCnt][0].bgTitle+"\">";
	    recContHtml += "               <p class=\"recommended_list_bg\" style=\"background-image:url("+recImagePath+filterRecData[recFilCnt][0].bgImage+");\"></p>";
	    recContHtml += "           </a>";
	    recContHtml += "       </li>";
	    recContHtml += "       <li>";
	    recContHtml += "           <a href=\""+addrHtml+"\" title=\""+filterRecData[recFilCnt][0].prod1Title+"\">";
	    recContHtml += "               <p class=\"recommended_list_txt\">"+filterRecData[recFilCnt][0].prod1Title+"</p>";
	    recContHtml += "               <p class=\"recommended_list_img\"><span><img src=\""+recImagePath+filterRecData[recFilCnt][0].prod1Image+"\" alt=\""+filterRecData[recFilCnt][0].prod1Title+"\"></span></p>";
	    recContHtml += "           </a>";
	    recContHtml += "       </li>";
	    recContHtml += "       <li>";
	    recContHtml += "           <a href=\""+addrHtml2+"\" title=\""+filterRecData[recFilCnt][0].prod2Title+"\">";
	    recContHtml += "               <p class=\"recommended_list_txt\">"+filterRecData[recFilCnt][0].prod2Title+"</p>";
	    recContHtml += "               <p class=\"recommended_list_img\"><span><img src=\""+recImagePath+filterRecData[recFilCnt][0].prod2Image+"\" alt=\""+filterRecData[recFilCnt][0].prod2Title+"\"></span></p>";
	    recContHtml += "           </a>";
	    recContHtml += "       </li>";
	    recContHtml += "       <li>";
	    recContHtml += "            <a href=\""+addrHtml3+"\" title=\""+filterRecData[recFilCnt][0].prod3Title+"\">";
	    recContHtml += "                <p class=\"recommended_list_txt\">"+filterRecData[recFilCnt][0].prod3Title+"</p>";
	    recContHtml += "                <p class=\"recommended_list_img\"><span><img src=\""+recImagePath+filterRecData[recFilCnt][0].prod3Image+"\" alt=\""+filterRecData[recFilCnt][0].prod3Title+"\"></span></p>";
	    recContHtml += "            </a>";
	    recContHtml += "        </li>";
	    recContHtml += "    </ul>";
	    recContHtml += "</li>";
	}
	$(".recProdList").html(recListHtml);
	$(".recommended_ul").html(recContHtml);
});
