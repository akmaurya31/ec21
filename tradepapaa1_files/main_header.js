$(document).ready(function () {
    var $window = $(window);
    if ($window.width() <= 743) {
        //$(".searchBar02_bottom_sch").width($(".searchWrap").width() + 4);
        //$(".popularSch").css("width", $(".searchWrap").css("width"))
    } else {
        //$(".searchBar02_bottom_sch").css("width", "100%");
        //$(".popularSch").css("width", $(".searchBar02").css("width"))
    }
    if ($window.scrollTop() > 300) 
        $("#topBtn").show();
    else 
        $("#topBtn").hide();
    $("#topBtn").on({
        click: function () {
            $("html, body").animate({scrollTop: 0})
        }
    });
    $window.scroll(function () {
        if ($window.scrollTop() > 300) 
            $("#topBtn").slideDown();
        else 
            $("#topBtn").slideUp()
    });
    var w = $(window).width();
    $(window).resize(function () {
        if ($(window).width() <= 743) {
            //$(".searchBar02_bottom_sch").width($(".searchWrap").width() + 4);
            //$(".popularSch").css("width", $(".searchWrap").css("width"))
        } else {
            //$(".searchBar02_bottom_sch").css("width", "100%");
            //$(".popularSch").css("width", $(".searchBar02").css("width"))
        }
        if (w == $(window).width()) 
            return false;
        else 
            w = $(window).width();
        if ($(window).width() >= 1071) {
            $(".bwCategory .categoryWrap").show();
            $(".bwCategory .categoryWrap ul:first").show()
        } else {
            $(".bwCategory .categoryWrap").hide();
            $(".bwCategory .categoryWrap ul:first").hide()
        }
        $(".rightMenu_wrap").hide();
        $(".categoryWrap").removeAttr("style");
        $(".categoryWrap ul:first").removeAttr("style");
        if ($(window).width() <= 553) 
            if ($(".categoryWrap").css("display") == "none") {
                $(".hRightId").removeClass("hRight");
                $(".hRightId").addClass("hRight")
            } else 
                $(".hRightId").removeClass("hRight");
    else {
            $(".hRightId").removeClass("hRight");
            $(".hRightId").addClass("hRight")
        }
    });
    $(".topM").on({
        mouseenter: function () {
            $(".topM").removeClass("on");
            $(this).addClass("on");
            $(this)
                .find("ul:first")
                .stop()
                .slideDown(100)
        },
        mouseleave: function () {
            $(".topM").removeClass("on");
            $(this)
                .find("ul:first")
                .stop()
                .slideUp(100)
        },
        click: function () {
            $(this)
                .find("ul:first")
                .stop()
                .slideToggle(100)
        }
    });
    $(".bwCategory").on({
        mouseenter: function () {
            if ($window.width() < 1071 && $window.width() > 768) {
                $(this)
                    .find(".categoryWrap")
                    .stop()
                    .slideDown(100);
                $(this)
                    .find("ul:first")
                    .stop()
                    .slideDown(100);
                if ($window.width() <= 768) {
                    /* if ($(".categoryWrap").css("display") == "none") 
                        $(".hRightId").addClass("hRight");
                    else 
                        $(".hRightId").removeClass("hRight"); */
                }
            }else {
            }
        },
        mouseleave: function () {
            if ($window.width() < 1071 && $window.width() > 768) {
                $(this)
                    .find("h3:first")
                    .removeClass("on");
                $(this)
                    .find("ul:first")
                    .stop()
                    .slideUp(100)
            }
        },
        click: function () {
            if ($window.width() < 1071 && $window.width() > 768) {
                $(this).find(".categoryWrap").stop().slideToggle(100, function () {
                    if ($window.width() <= 768){
                        if ($(".categoryWrap").css("display") == "none")
                            $(".hRightId").addClass("hRight");
                        else
                            $(".hRightId").removeClass("hRight")
                    }
                })
            }
        }
    });
    $(".categoryWrap li").on({
        mouseenter: function () {
            if ($window.width() >= 1071 && $(this).data("id")) {
                $(".categoryWrap li div").removeClass("on02");
                $(this).find("div:first").addClass("on02");
                $(this).find(".ctgyM").css("display", "block");
                $(this).find(".ctgyM_ls ul").css("display", "block");
                $(this).find(".weekTen ul").css("display", "block")
            } else if ($window.width() > 768 && $window.width() < 1071) {
                if ($window.width() <= 743 && $(this).data("id") || $window.width() > 768) {
                    $(".categoryWrap li").removeClass("on");
                    $(this).addClass("on");
                    $(this).find(".ctgyM").css("display", "block");
                    $(this).find(".ctgyM_ls ul").css("display", "block");
                    $(this).find(".weekTen ul").css("display", "block")
                }
            } else if ($window.width() <= 553) ;
        },
        mouseleave: function () {
            if ($window.width() >= 1071) {
                $(".categoryWrap li div").removeClass("on02");
                $(this).find(".ctgyM").css("display", "");
                $(this).find(".ctgyM_ls ul").css("display", "");
                $(this).find(".weekTen ul").css("display", "")
            } else if ($window.width() < 1071 && $window.width() > 768) {
                $(".categoryWrap li div").removeClass("on02");
                $(".categoryWrap li").removeClass("on");
                $(this).find(".ctgyM").css("display", "");
                $(this).find(".ctgyM_ls ul").css("display", "");
                $(this).find(".weekTen ul").css("display", "")
            }
        },
        click: function () {
            /* mobile */
            if ($window.width() <= 768) {
                let $this = $(this)
                if( $this.hasClass('on') ){
                    $this.removeClass('on')
                }else{
                    $(".categoryWrap li").removeClass("on")
                    $this.addClass('on')
                }
            }
        }
    });
    $(".btn-bwCategory-menu").click(() => {
        $('.categoryWrap').slideDown(100)
    });
    $(".btn-bwCategory-close").click(() => {
        $('.categoryWrap').slideUp(100)
    });
    $(".myec21Btn").on({
        mouseover: function () {
            $(this)
                .find("ul")
                .stop()
                .show()
        },
        mouseout: function () {
            $(this)
                .find("ul")
                .stop()
                .hide()
        },
        click: function () {
            $(this)
                .find("ul")
                .stop()
                .toggle()
        }
    });
    $(".areaTopNavi").on({
        mouseover: function () {
            if ($(window).width() > 743) {
                $(this)
                    .find("a:first")
                    .addClass("on");
                $(this)
                    .find(".tabletMenu div")
                    .addClass("on")
            }
        },
        mouseout: function () {
            $(this)
                .find("a:first")
                .removeClass("on");
            $(this)
                .find(".tabletMenu div")
                .removeClass("on")
        },
        click: function () {
            /* if ($(window).width() <= 768) {
                
            } */
        }
    });

    $(".areaTopNavi a").click(function () {
        $(".areaTopNavi .rightMenu_wrap").slideDown(100)
    })
    $(".rightMenu_wrap .rightM_close").click(function () {
        $(".rightMenu_wrap").slideUp(100)
    });
    $(".rightMenu_wrap .rightM>ul>li>a").click(function () {
        if( $(this).parent().hasClass('on') ){
            $(this).parent().removeClass('on')
        }else{
            $(".rightMenu_wrap .rightM>ul>li").removeClass('on')
            $(this).parent().addClass('on')
        }
    });

    $(".topSchInput").bind({
        "click": function () {
            if ($(this).val() == "" && $(".sbSelector").text() == "Products") 
                $(".popularSch")
                    .stop()
                    .toggle()
            },
        "keydown": function () {
            $(".popularSch").hide()
        }
    });
    $(".popularSch_item").click(function () {
        window.location = $(this)
            .find("a")
            .attr("href")
    });
    /* $(document).click(function (e) {
        if (e.target.id != "AKCKwd") 
            $(".popularSch").hide()
    }) */

    /*  */
    let timeoutId;

    $('.btn-header-signin').mouseenter(function() {
      clearTimeout(timeoutId);
      $('.signin__popup').addClass('active');
      $('.btn-header-signin').addClass('active')
    });

    $('.btn-header-signin').mouseleave(function() {
      // 타임아웃 설정하여 팝업으로 이동하는 시간 제공
      timeoutId = setTimeout(function() {
        if (!$('.signin__popup:hover').length) {
          $('.signin__popup').removeClass('active');
          $('.btn-header-signin').removeClass('active')
        }
      }, 300); // 300ms 지연 시간 (필요에 따라 조정)
    });

    $('.signin__popup').mouseenter(function() {
      clearTimeout(timeoutId);
    });

    $('.signin__popup').mouseleave(function() {
      $('.signin__popup').removeClass('active');
      $('.btn-header-signin').removeClass('active')
    });
});
function trim_keyword(value){
    return value.replace(/^\s+|\s+$/g, "");
}
function isKwdValid(kwd){
    var isValid=true;
    if (kwd.length>150){
        alert("You can enter up to 150 letters for your keyword.");
        isValid=false;
    }else if (kwd.indexOf(">") > -1 || kwd.indexOf("<") > -1) {
        alert("Please do not enter these signs <  ,  >  in the keyword.");
        isValid=false;
    }
    return isValid;
}
function getCategoryEnmForUrl(sTar) {
	sTar = sTar.replace(/[ "]/g, "-");
	sTar = sTar.replace(/\'s/g, "s");
	sTar = sTar.replace(/[/()+:,&]/g, "-");
	sTar = sTar.replace(/__*/g, "-");
	sTar = sTar.replace(/^-*/g, "");
	return sTar;
}
function getKeywordForUrl(sTark) {
	sTark = sTark.trim();
	sTark = sTark.replace(/\-/g, "%2D");
	sTark = sTark.replace(/[ "]/g, "-");
	sTark = sTark.replace(/__*/g, "-");
	sTark = sTark.replace(/\//g, "%2F");
	sTark = sTark.replace(/\;/g, "%3B");
	sTark = sTark.replace(/\+/g, "-");

	sTark = escape(sTark);
	do {
		sTark = sTark.replace(/(\-\-)/g, "-");
	} while (sTark.indexOf("--") > -1);
	
	if(sTark.charAt(sTark.length-1)=="-"){
		sTark = sTark.slice(0,-1);
	}
	return sTark;
}
function KeyworReplace(buf) {
    buf = buf.replace(/\'/g, '');
    buf = buf.replace(/\"/g, '');
    if ((buf.indexOf('%5C') > -1) || (buf.indexOf('%255C') > -1)) {
        if (buf.indexOf('%5C') == 0) {
            buf = buf.replace(/%5C/g, '');
        } else if (buf.indexOf('%255C') == 0) {
            buf = buf.replace(/%255C/g, '');
        } else {
            buf = buf.replace(/%5C/g, '');
            buf = buf.replace('%5C', ' ');
            buf = buf.replace(/%255C/g, '');
            buf = buf.replace('%255C', ' ');
        }
    } else {
    }
    buf = buf.replace(/ %5C/g, '');
    buf = buf.replace(/%5C /g, '');
    buf = buf.replace(/ %5C /g, '');
    return buf;
}
function redirect(url) {
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var referLink = document.createElement('a');
        referLink.href = url;
        document.body.appendChild(referLink);
        referLink.click();
    } else {
        location.href = url;
    }
}

function SearchGNBForMain() {
    var f = document.forms["GNBsearchForm"];
    var keyword = f.keyword.value;
    var l_path;
    if (keyword.length < 1 || keyword == 'What are you sourcing for?') {
        alert('Please input a keyword.');
        f.keyword.focus();
        return false;
    } else {
        keyword = trim_keyword(keyword);
        if (keyword.length < 1) {
            alert('Pleas input a keyword.');
            f.keyword.focus();
            return false;
        }
        if (!isKwdValid(keyword))
            return false;
    }
    var re = /^[\x20-\x7e]*$/g;
    if (!keyword.match(re)) {
        alert("Sorry. The keywords you have input is not in English.\nPlease input keywords in English only.");
        f.keyword.focus();
        return false;
    }
    keyword = getKeywordForUrl(keyword);
    var temp = keyword;
    temp = KeyworReplace(temp);
    keyword = temp;
    l_path = keyword + '.html';
    if (f.st.value == '0') {
        redirect('https://www.ec21.com/ec-market/' + l_path);
        return false;
    } else if (f.st.value == '1') {
        redirect('https://www.ec21.com/offers/' + l_path);
        return false;
    } else if (f.st.value == '2') {
        redirect('https://importer.ec21.com/' + l_path);
        return false;
    } else if (f.st.value == '3') {
        redirect('https://www.ec21.com/companies/' + l_path);
        return false;
    }
    return false;
}
function parseString(OrgStr, Delimiter) {
    param = new Array()
    if (OrgStr == null || OrgStr == "") {
        return param;
    }
    var pos = 0;
    var i = 0;
    var Val = "";
    while ((pos = OrgStr.indexOf(Delimiter)) > 0) {
        Val = OrgStr.substring(0, pos);
        param[i] = Val;
        OrgStr = OrgStr.substring(pos + 1, OrgStr.length);
        ++i;
    }
    return param;
}
function firstUpperWords(keyword) {
    var s = keyword;
    var i, tag = [];
    var str_arr = s.split(" ");
    var tot = str_arr.length;
     
    for(i=0; i<tot; i++) {
        tag[i] = str_arr[i].substring(0, 1).toUpperCase() + str_arr[i].substring(1, str_arr[i].length).toLowerCase();
    }
    return tag.join(' ');
}
function getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            var end = document.cookie.indexOf(";", j);
            if (end == -1) {
                end = document.cookie.length;
            }
            return unescape(document.cookie.substring(j, end));
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) {
            break;
        }
    }
    return null;
}