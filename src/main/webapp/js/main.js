"use strict";
$(function(){
	$("#edit").on("click",function(){
				$(".middle-page").fadeIn();
				$(".hide-content").show();
			});
			/*点击魔法布局*/
			$("#magic-layout").on("click",function(){
				$("#magic-module").hide();
				$("#magic-count-down").hide();
				$(".magic-cube1").hide();
				$(".setDate").slideUp();
				$(".middle-page").css({"width":"270px"});
				$("#magic-cube").fadeIn();
			});
			/*点击倒计时*/
			$("#count-down").on("click",function(){
				$("#magic-module").hide();
				$("#magic-cube").hide();
				$(".magic-cube1").hide();
				$(".middle-page").css({"width":"340px"});
				$(".setDate").slideDown();
				$("#magic-count-down").fadeIn();
			});
			/*点击应用按钮*/
				/*var col;
				var row;*/
			$("#apply").on("click",function(){
				var col = $("#column").val();
				var row = $("#line").val();
				var width = 270 / col;
				var width2 = 335 / col;
				console.log(width2);
				$(".middle-page-sudoku").empty();
				$(".edit-content").empty();
				for(var i=0;i< col*row; i++){
					$(".middle-page-sudoku").append($("<li>").addClass('sudoku-number ui-state-default')
						.append($("<span>").addClass("add")
						.append(i+1)));
					$(".edit-content").append($("<div>").addClass("edit-list").append($("<img>")));
				}
				$(".edit-list").css({"width": width2 +"px","height":width2 + "px"});
				$(".sudoku-number").css({"width": width+"px","height":width + "px","line-height":width +"px"});
			});	
			/*重置按钮*/
			$("#reset").on("click",function(){
				var col = $("#column").val("");
				var row = $("#line").val("");
				$(".middle-page-sudoku").empty();
			});
			
			/*移动手机生成的模块，出现显示的编辑和删除按钮*/
			$(document).on("mouseenter",".edit-content",function(){
						$(".edit-cube").slideDown();	
			});
			/*.on("mouseleave",".edit-content",function(){
					$(".edit-cube").slideUp();
			});*/

			/*点击魔方编辑按钮*/
			$("#magic-edit").click(function(){
				$("#magic-cube").hide();
				$("#magic-cube2").hide();
				$("#magic-cube1").show();
				$(".magic-cube1").css({"width":"320px"});
				$("#magic-cube3").show();
				magicCube();
			});
			/*点击手机屏幕中的比例模块*/
			var index;
			$(document).on("click",".edit-list",function(){
				index = $(this).index() ;
				$(".magic-cube1").css({"width":"320px"});
				$("#magic-cube").hide();
				$("#magic-cube1").show();
				$("#magic-cube2").show();
				$("#magic-cube3").show();
				magicCube();
			});
			/*点击魔方编辑相应按钮， 打开链接弹出框和图片库弹出框*/
			$(".link-btn").on("click",function(){
				$(".linkModel").show();
			});
			$(".img-btn").on("click",function(){
				$(".pictureModel").show();
			});

			/*取消链接弹出框*/
			$("#closeLink").on("click",function(){
				$(".linkModel").hide();
			});
			$("#closeImg").on("click",function(){
				$(".pictureModel").hide();
			});
			/* 双击链接文件夹，获取对应的链接，在单元格链接中显示*/
			$(".linkSelect >.thumbnail").on("click",function(){
				$(".linkSelect > .thumbnail").removeClass("bglink");
				$(this).addClass("bglink");
				/*var url = $(this).find('.linkName').attr("title");
				$(".magic-cube1-link").val(url);
				$(".linkModel").hide();*/
			});
			/*确定选择的链接*/
			$("#sureLink").on("click",function(){
				if($(".page-ul li").find(".thumbnail").hasClass("bglink")){
					$(".page-ul li").each(function(){
					if($(this).find(".thumbnail").hasClass("bglink")){
						var url = $(this).find('.linkName').attr("title");
						console.log(url);
						$(".magic-cube1-link").val(url);
						$(".linkModel").hide();
						$("#sureLink").attr("data-dismiss","modal");
						}
					});
				}else{
					alert("请选择链接");
				}
				
			});

			/*弹出框模块*/
			function magicCube(){
				var col = $("#column").val();
				var row = $("#line").val();
				var width = 285 / col;
				$(".edit-content2").empty();
				for(var i=0;i< col*row; i++){
					$(".edit-content2").append($("<div>").addClass("edit-list2").append($("<img>"))
						.append($("<span>").addClass("add")
						.append((i+1)+":"+(i+1))));
				}
				$(".edit-list2").css({"width": width +"px","height":width + "px","line-height":width+"px"});
			}

			/*拖动弹出框*/
			moveDIV(".linkModel");
			moveDIV(".pictureModel");
			function moveDIV(className){
				$(className).mousedown(function(e){
						/*console.log("我已经按下了弹出框了");*/
						$(this).css({"cursor":"move"});
						var offset = $(this).offset();
						var x = e.pageX - offset.left;
						var y = e.pageY - offset.top;
						$(document).bind("mousemove",function(ev){
							/*console.log("我已经拖动了弹出框了");*/
							var _x = ev.pageX - x;
							var _y = ev.pageY - y;
							$(className).css({"left":_x + "px","top":_y + "px"});
						});
				});
				$(document).mouseup(function(){
					/*console.log("我已经放下了弹出框了");*/
					$(this).unbind("mousemove");
				});
			}			
			/*点击空白，弹出框消失*/
			$(document).on("click",function(e){
				var target  = $(e.target);
				if(target.length == 0){
					$(".linkModel").hide();
				}
			})	


	/*新增文件夹*/
	$("#addDocument").on("click",function(){
		$("#document-main").append($("<li>").append($("<a>").addClass("enterImg").attr("href","javascript:")
			.append($("<div>").addClass("thumbnail border-radius-0")
				.append($("<div>").append($("<button>").addClass("close").append("x"))
					.append($("<img>").attr("src","images/2.png"))).append($("<div>").addClass("caption").append($("<span>").addClass("dname").append("logo1")))))
			);
	});
	/*删除文件夹*/
	$(document).on("click",".close",function(){
		$(this).parents('li').remove();
	});
	/*删除所有照片*/
	$("#deleteImg").on("click",function(){
		if(confirm("是否删除所有照片")){
			$("#document-main img").remove();
			alert("删除成功");
		}else{
			
		}
	});
	/*双击图片弹出框文件夹，跳到照片*/
	$(document).on("dblclick",".enterImg",function(){
		var name = $(this).find(".dname").text();
		$("#docName").text(" / "+name);
		$("#document-main").empty();
		picList("#document-main");
	});

	/*遍历照片*/
	function picList(className){
		for(var i=0; i<6;i++){
			$(className).append($("<li>").append($("<a>").addClass("selectImg").attr("href","javascript:")
			.append($("<div>").addClass("thumbnail border-radius-0 thumbnail2")
				.append($("<div>").addClass("docImg").append($("<button>").addClass("close").append("x"))
					.append($("<img>").attr("src","images/mayun.png"))).append($("<div>").addClass("caption").append($("<span>").addClass("dname").append("name" + (i+1)).attr("title","images/mayun.png")))))
			);
		};
	};

	/*选择图片*/
	$(document).on("click",".selectImg",function(){
		$("li").removeClass("bg");
		$(this).parents("li").addClass("bg");
	});

	/*插入图片，获取图片title,即url*/
	$('#saveImg').on("click",function(){
		 var li = $("#document-main").find("li");
		 var imgUrl="";
		 li.each(function(){
		 	console.log($(this).hasClass("bg")==true);
		 	if($(this).hasClass("bg")==true){
		 		imgUrl = $(this).find(".dname").attr("title");
				 $(".magic-cube1-img").val(imgUrl);
				 $(".pictureModel").hide();
				 $(".edit-list").eq(index).find("img").attr("src",imgUrl);
				 $(".edit-list2").eq(index).find("img").attr("src",imgUrl);
		 	};
		 });
		
	});
});