// 封装视频解析接口
export const getData = () => {
	layui.use(['element', 'form', 'layer'], function() {
		var element = layui.element,
			$ = layui.jquery,
			form = layui.form,
			upload = layui.upload,
			layer = layui.layer;
	
		var data = [
			{
				name: "万能接口（推荐可用）",
				url: "http://www.sfsft.com/admin.php?url="
      },
      {
				name: "万能接口备用（推荐可用）",
				url: "https://jx.aidouer.net/?url="
      },
      {
				name: "B站接口（推荐可用）",
				url: "https://jx.jsonplayer.com/player/?url="
      },
      {
				name: "B站备用接口（推荐可用）",
				url: "https://okjx.cc/?url="
			},
      {
				name: "纯净接口（推荐可用）",
				url: "https://z1.m1907.top/?jx="
      },
      {
				name: "优酷超清接口（推荐可用）",
				url: "http://www.82190555.com/index/qqvod.php?url="
			},
			{
				name: "其它接口（推荐可用）",
				url: "https://jx.dj6u.com/?url="
      },
      {
				name: "爱奇艺",
				url: "https://jx.blbo.cc:4433/?url="
			},
			{
				name: "万能接口3",
				url: "https://www.gai4.com/?url="
			},
			{
				name: "万能接口4",
				url: "http://www.662820.com/xnflv/index.php?url="
			},
			{
				name: "万能接口5",
				url: "http://api.91exp.com/svip/?url="
			},
			{
				name: "万能接口6",
				url: "http://player.jidiaose.com/supapi/iframe.php?v="
			},
			{
				name: "爱奇艺超清接口1",
				url: "http://api.pucms.com/?url="
			},
			{
				name: "爱奇艺超清接口2",
				url: "http://api.baiyug.cn/vip/index.php?url="
			},
			{
				name: "爱奇艺超清接口3",
				url: "https://api.flvsp.com/?url="
			},
			{
				name: "芒果TV超清接口",
				url: "http://api.xfsub.com/index.php?url="
			},
			{
				name: "芒果TV手机接口",
				url: "http://65yw.2m.vc/chaojikan.php?url="
			},
			{
				name: "搜狐视频接口",
				url: "http://vip.jlsprh.com/index.php?url="
			},
			{
				name: "乐视视频接口",
				url: "http://2gty.com/apiurl/yun.php?url="
			},
		];
	
		for (let i in data) {
			var $option = $("<option value=" + data[i].url + ">" + data[i].name + "</option>");
			$("#api").append($option);
		}
		form.render()
		$('.play').click(function() {
			var url = $('.url').val();
			var api = $('#api').val();
			if (url == '' || url == null) {
				layer.open({
					type: 0,
					icon: 0,
					time: 2000,
					title: "错误信息",
					offset: '150px',
					content: "请输入解析地址！"
				});
			} else if (url.indexOf('http')) {
				layer.open({
					type: 0,
					icon: 0,
					time: 2000,
					title: "错误信息",
					offset: '150px',
					content: "请输入正确的网址！"
				});
			} else if(api == '' || api == null) {
				layer.open({
					type: 0,
					icon: 0,
					time: 2000,
					title: "错误信息",
					offset: '150px',
					content: "请选择解析接口！"
				});
			} else {
				layer.open({
					type: 2,
					title: "播放界面",
					content: [api + url, 'no'],
					area: ['1060px', '640px'],
					maxmin: true,
					closeBtn: 1,
					success: function(layero, index) {
						  $('iframe').attr('allowfullscreen','true');
					}
				});
			}
	
		});
		$('.url').on('click',function() {
			layer.tips('如果视频无法正常播放，请切换解析地址！', 'input', {
			  tips: [3, '#393D49'],
			  time: 4000
			});
		})
	});
}
