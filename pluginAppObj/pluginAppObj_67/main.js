function accordiontext_pluginAppObj_67(){function getNumStyle(nstyle){return(nstyle.match(/I/g)||[]).length}function init(){for(initProperty(),i=0;i<15;i++)containerTitles[i]!=undefined&&containerTitles[i]!=""&&containerDescriptions[i]!=undefined&&containerDescriptions[i]!=""&&(initBox(libBase.br(containerTitles[i]),containerDescriptions[i],totBoxes,i),totBoxes+=1);setHeightDesc();initStyle();initEvent()}function initProperty(){accordionContainer=$("#pluginAppObj_67_accordion_container");numStyle=getNumStyle("styleI");descStyle="styleI";t_animation=400;fontSizeTitle=18.62;boxOpenedOnLoad=7;svgOpened='<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(59, 180, 55, 1)")+'" id="Group" transform="translate(-48.000000, -528.000000)"><path d="M56,544 C51.5817218,544 48,540.418278 48,536 C48,531.581722 51.5817218,528 56,528 C60.4182782,528 64,531.581722 64,536 C64,540.418278 60.4182782,544 56,544 Z M52,535 L52,537 L60,537 L60,535 Z M52,535" id="Oval 210 copy 2"/><\/g><\/g><\/svg>';svgClosed='<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(64, 64, 64, 1)")+'" id="Group" transform="translate(0.000000, -528.000000)"><path d="M4,535 L4,537 L7,537 L7,540 L9,540 L9,537 L12,537 L12,535 L9,535 L9,532 L7,532 L7,535 Z M8,544 C3.58172178,544 0,540.418278 0,536 C0,531.581722 3.58172178,528 8,528 C12.4182782,528 16,531.581722 16,536 C16,540.418278 12.4182782,544 8,544 Z M8,544" id="Oval 210 copy"/><\/g><\/g><\/svg>';svgArrow='<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/><\/g><\/svg>';containerTitles=["сколько длится ремонт?","сколько стоит змена стекла?","вы ремонтируете айфоны?","у вас есть гарантия?","","хочу починить телефон в вашем сервисе, что делать?","","","","","","","","",""];containerDescriptions=["Мы стараемся произвести ремонт максимум за 1 рабочий день, а в особых случаях и за несколько часов ","Стоимость замены экрана в среднем составляет порядка 50-80 рублей в зависимости от марки телефона, однако и на этот случай у нас есть рассрочка по оплате.","Мы ремонтируем все виды телефонов, ноутбуков, планшетов и другие гаджеты.просто позвоните нам и опишите проблему. ","Да, для нас это закон. Мы всегда и на все наши запчасти и виды работ даем свою гарантию.","","Позвоните нам, опишите проблему. Мы назовем стоимость и договоримся когда курьер сможет забрать ваше устройсто. все просто. ","","","","","","","","",""]}function initBox(title,description,pos,i){var clEl,clDesc,html;$(accordionContainer).addClass(descStyle);clEl="accordion_el";clDesc="collapse";i==boxOpenedOnLoad&&(clEl+=" selected",clDesc+=" in");html="";html+="<div class='"+clEl+"' data-position='"+pos+"'>";html+="<div class='accordion_title'>";numStyle==1?(html+="<div class='accordion_title_text'>",html+=title,html+="<\/div>"):numStyle==2?(html+="<div class='accordion_title_text'>",html+=title,html+="<\/div>",html+="<div class='accordion_title_icon'>",html+="<div class='ic'><\/div>",html+="<\/div>"):numStyle==5||numStyle==6?html+=title:(html+="<div class='accordion_title_text'>",html+=title,html+="<\/div>",html+=pos==boxOpenedOnLoad?"<div class='accordion_title_icon' style='visibility:hidden'>":"<div class='accordion_title_icon'>",html+=svgArrow,html+="<\/div>");html+="<\/div>";html+="<div class='accordion_desc "+clDesc+"'>";html+=libBase.br(description);html+="<\/div>";html+="<\/div>";$(accordionContainer).append(html)}function setHeightDesc(){if(0){var availableSpace=$("#pluginAppObj_67_accordion_container .accordion_el").outerHeight(!0)*totBoxes;numStyle!=4&&(availableSpace-=30);availableSpace=250-availableSpace;availableSpace=availableSpace<40?40:availableSpace;$("#pluginAppObj_67_accordion_container .accordion_el .accordion_desc.collapse").css("height",availableSpace)}$("#pluginAppObj_67_accordion_container .accordion_el .accordion_desc.collapse.in").css("display","block")}function initStyle(){var childAccordionContainer,i;for($("#pluginAppObj_67_accordion_container").find("[data-position='"+boxOpenedOnLoad+"']").addClass("openedchild"),childAccordionContainer=document.getElementById("pluginAppObj_67_accordion_container").querySelectorAll("[data-position]"),i=0;i<childAccordionContainer.length;i++)childAccordionContainer[i].dataset.position==totBoxes-1&&$(childAccordionContainer[i]).addClass("lastchild");numStyle==2?($("#pluginAppObj_67_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic").append(svgClosed),$("#pluginAppObj_67_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon .ic").empty().append(svgOpened)):(numStyle==3||numStyle==4)&&($("#pluginAppObj_67_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon").addClass("opened"),setTimeout(function(){$("#pluginAppObj_67_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon").css("visibility","visible")},75))}function initEvent(){$("#pluginAppObj_67_accordion_container .accordion_el").click(function(){var desc=$(this).find(".accordion_desc"),itemClickedIsClosed=!$(desc).hasClass("in");$("#pluginAppObj_67_accordion_container .accordion_el .accordion_desc.collapse").slideUp(t_animation);$("#pluginAppObj_67_accordion_container .accordion_el .accordion_desc.collapse").removeClass("in");itemClickedIsClosed&&($(desc).slideDown(t_animation),$(desc).addClass("in"));$("#pluginAppObj_67_accordion_container .accordion_el").removeClass("selected");itemClickedIsClosed&&$(this).addClass("selected");(numStyle==2||numStyle==3||numStyle==4)&&($("#pluginAppObj_67_accordion_container .accordion_el .accordion_title .accordion_title_icon").removeClass("opened"),itemClickedIsClosed&&$(this).find("div.accordion_title_icon").addClass("opened"),numStyle==2&&($("#pluginAppObj_67_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic").empty().append(svgClosed),itemClickedIsClosed&&$("#pluginAppObj_67_accordion_container .accordion_el .accordion_title .accordion_title_icon.opened .ic").empty().append(svgOpened)))})}var accordionContainer="",t_animation="",containerTitles=[],containerDescriptions=[],totBoxes=0,numStyle=1,descStyle="",svgOpened="",svgClosed="",svgArrow="",fontSizeTitle=0,boxOpenedOnLoad="";x5engine.boot.push(function(){init()})}