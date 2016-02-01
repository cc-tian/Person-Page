
		//下拉菜单
		$('.main-li').on({
			mouseover:function(){$(this).children('.sub-ul').show();return false;},
			mouseout:function(){$(this).children('.sub-ul').hide();return false;}
		})
		//下滑
		$('#banner .inner .more a').click(function(){
  		
			$('body,html').animate(
				{'scrollTop':765}
			,100)		
		})
		
		//图标

		// $('.wrapper .icon span').on({
		// 	mouseover:function(){
		// 		$(this).animate(
		// 			{
		// 				opacity:'0.5',
		// 				borderTopLeftRadius: '60px',
		// 				borderTopRightRadius: '0px',
		// 				borderBottomLeftRadius: '0px',
		// 				borderBottomRightRadius: '60px'
		// 			}
		// 		,300,'linear',function(){
		// 			$(this).animate(
		// 			{
		// 				opacity:'1',
		// 				borderTopLeftRadius: '0px',
		// 				borderTopRightRadius: '60px',
		// 				borderBottomLeftRadius: '60px',
		// 				borderBottomRightRadius: '0px'
		// 			},200,'swing',function(){
		// 			$(this).animate(
		// 			{
		// 				opacity:'0.5',
		// 				borderTopLeftRadius: '60px',
		// 				borderTopRightRadius: '0px',
		// 				borderBottomLeftRadius: '0px',
		// 				borderBottomRightRadius: '60px'
		// 			},100)
		// 		})				
		// 		})
		// 	},
		// 	mouseout:function(){
		// 		$(this).animate(
		// 			{
		// 				opacity: '1',
		// 				borderTopLeftRadius: '0px',
		// 				borderTopRightRadius: '70px',
		// 				borderBottomLeftRadius: '70px',
		// 				borderBottomRightRadius: '0px'
		// 			}
		// 		,300,'linear',function(){
		// 			$(this).animate(
		// 			{
		// 				opacity:'0.5',
		// 				borderTopLeftRadius: '70px',
		// 				borderTopRightRadius: '0px',
		// 				borderBottomLeftRadius: '0px',
		// 				borderBottomRightRadius: '70px'
		// 			},200,'swing',function(){
		// 			$(this).animate(
		// 			{
		// 				opacity:'1',
		// 				borderTopLeftRadius: '0px',
		// 				borderTopRightRadius: '70px',
		// 				borderBottomLeftRadius: '70px',
		// 				borderBottomRightRadius: '0px'
		// 			},300)
		// 		})				
		// 		})				
		// 	}
		// })

		// $('.wrapper .icon span').on({
		// 	mouseover:function(){
		// 		$(this).css('-webkit-animation-play-state','paused');
		// 	},
		// 	mouseout:function(){
		// 		$(this).css('-webkit-animation-play-state','running');
		// 	}
		// })
					
		//按钮
		$('button').on({
			mouseover:function(){
				$(this).animate(
					{
						padding:'15px',
						marginBottom: '6.5px'
					}
				,100,'linear')
			},
			mouseout:function(){
				$(this).animate(
					{
						padding:'8px 25px',
						marginBottom: '20px'
					}
				,100,'linear')				
			}
		})
