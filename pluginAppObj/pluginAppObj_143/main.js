function skill_bar_pluginAppObj_143(){function drawSkill(){resizeCircle();drawCircle()}function drawBar(){$("#skill_bar_pluginAppObj_143 .count-bar").animate({width:getPercentage()+"%"},499)}function drawCircle(){function animate_circle(){var force_value=!1;degrees>getPercentage()*3.6-3&&(clearInterval(animation_loop),force_value=!0);degrees=degrees+3;drawCircleInCanvas(force_value)}function drawCircleInCanvas(force_value){var radians,text;ctx.clearRect(0,0,width,height);ctx.beginPath();ctx.strokeStyle="rgba(255, 255, 255, 1)";ctx.lineWidth=thickness;ctx.arc(width/2,height/2,width/2-thickness/2,0,Math.PI*2,!1);ctx.stroke();radians=degrees*Math.PI/180;ctx.beginPath();ctx.strokeStyle="rgba(0, 0, 0, 1)";ctx.lineWidth=thickness;ctx.arc(width/2,height/2,width/2-thickness/2,0-Math.PI/2,radians-Math.PI/2,!1);ctx.stroke();!0&&(ctx.fillStyle="rgba(0, 0, 0, 1)",ctx.font="  48px Tahoma",text=force_value?65:Math.floor(degrees/360*100),text_width=ctx.measureText(text).width,ctx.textBaseline="middle",ctx.fillText(text,width/2-text_width/2,height/2))}var canvas=$("#skill_canvas_pluginAppObj_143").get(0),ctx=canvas.getContext("2d"),width=canvas.width,height=canvas.height,thickness=15,animation_loop,degrees=0;animation_loop=setInterval(animate_circle,1497/(getPercentage()*3.6))}function resizeCircle(){$("#skill_canvas_pluginAppObj_143").attr("width",Math.min(150,$("#pluginAppObj_143").width()));$("#skill_canvas_pluginAppObj_143").attr("height",Math.min(150,$("#pluginAppObj_143").width()))}function getPercentage(){return 65}function isElementInViewport(el){var win=$(window),viewport={top:win.scrollTop(),left:win.scrollLeft()},bounds;return viewport.right=viewport.left+win.width(),viewport.bottom=viewport.top+win.height(),bounds=el.offset(),bounds.right=bounds.left+el.outerWidth(),bounds.bottom=bounds.top+el.outerHeight(),!(viewport.right<bounds.left||viewport.left>bounds.right||viewport.bottom<bounds.top||viewport.top>bounds.bottom)}function firstTimeVisible(el,callback){if(!isElementInViewport(el))$(window).on("DOMContentLoaded.ftv_pluginAppObj_143 load.ftv_pluginAppObj_143 resize.ftv_pluginAppObj_143 scroll.ftv_pluginAppObj_143",function(){isElementInViewport(el)&&($(window).off(".ftv_pluginAppObj_143"),typeof callback=="function"&&callback())})}$(document).ready(function(){isElementInViewport($("#skill_pluginAppObj_143"))?drawSkill():firstTimeVisible($("#skill_pluginAppObj_143"),drawSkill)});$("#imContent").on("breakpointChangedOrFluid",function(){drawSkill()})}