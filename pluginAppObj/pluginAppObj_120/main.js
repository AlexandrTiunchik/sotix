function socialicons_pluginAppObj_120(){function resizeSocials_pluginAppObj_120(){var buttonPerRow,fact;$("#pluginAppObj_120 .social-icon").removeClass("last-item-row");$("#pluginAppObj_120 .social-icon").removeClass("last-row");$("#pluginAppObj_120 .social-icon").removeClass("one-row");containerWidth=$("#pluginAppObj_120").width();buttonPerRow=1;!0&&(buttonPerRow=getButtonPerRow());buttonPerRow==1?$("#pluginAppObj_120 .social-icon:last-child").addClass("last-row"):numBtn==buttonPerRow?($("#pluginAppObj_120 .social-icon").addClass("last-row"),$("#pluginAppObj_120 .social-icon:last-child").addClass("last-item-row")):($("#pluginAppObj_120 .social-icon:nth-child("+buttonPerRow+"n)").addClass("last-item-row"),$("#pluginAppObj_120 .social-icon:nth-child(n+"+parseInt(buttonPerRow+1)+")").addClass("last-row"));fact=containerWidth<btnWidth?containerWidth/btnWidth:1;$("#pluginAppObj_120 .social-icon, #pluginAppObj_120 .sides-container").css({width:btnWidth*fact,height:btnHeight*fact})}function getButtonPerRow(){for(var remaining=containerWidth-btnWidth,count=1;remaining>=btnWidth+(count==numBtn-1?0:btnMargin);){if(count++,count==numBtn)break;remaining-=btnWidth+btnMargin}return count}var containerWidth,btnWidth,btnHeight,btnMargin,numBtn;x5engine.boot.push(function(){btnWidth=50;btnHeight=50;btnMargin=0;numBtn=$("#pluginAppObj_120 .social-icon").length;$("#imContent").on("breakpointChangedOrFluid",function(){resizeSocials_pluginAppObj_120()});resizeSocials_pluginAppObj_120()})}