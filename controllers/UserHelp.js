define(["../lib/Query"],function(query){
	var $ = query;
	var Controller =  function(parameters,template){
		me = this;
		this.init = function(){
			
		};
		
		this.listenEvents = function(){
			this.navAs.on("click",function(event,index){
				me.navAs.removeClass("current");
				me.navAs.eq(index).addClass("current");
				me.quessionContainers.addClass("hide");
				me.quessionContainers.eq(index).removeClass("hide");
			});
		}
		
		this.pageInit = function(){
			this.navAs = $(".quessionNav").find("a");
			this.quessionContainers = $(".quessionContainer").find("ul");
			this.quessionContainers.eq(0).removeClass("hide");
			this.listenEvents();
		};
		
		this.getInitDatas = function(){
			return {
				datas : [{
					"details":[{
						"quession":"地推大狮客户端收费吗？",
						"answer":"现阶段，地推大狮手机客户端是免费提供给用户使用的。您只需在手机上安装客户端软件，使用您在地推大狮的登录帐号即可登录。"
					},{
						"quession":"怎么保证用户的数据安全？",
						"answer":"地推大狮采用SSL传输加密技术，可以在手机客户端与后台系统服务器、PC与后台系统服务器之间搭建基于SSL的传输通道，保证数据传输的私密性。"
					},{
						"quession":"没有收到短信验证码怎么办？",
						"answer":"1、请查看自己的验证手机号，号码是否为你当前所使用的号码；<br/>2、请您核实手机是否开启屏蔽系统短信，或安装了一些拦截短信的软件，建议您手机卡换到其他的手机上操作一下；<br/>3、确定手机是否在有信号的地区，停机和欠费状态下是不能够收到短信；<br/>4、经过网关时，网络通讯异常可能会造成短信丢失，或延时收到短信，请您耐心等待一下."
					}]
				},{
					"details":[{
						"quession":"地推大狮手机客户端登陆后，PC端可同时登陆吗？",
						"answer":"支持同时登陆；您在地推大狮手机客户端上报数据的同时，可在PC端用相同的账号进行数据查询。"
					},{
						"quession":"用户的数据安全有保障吗？",
						"answer":"企业在注册时可以参看我们提供的保密条款，从法律承诺上也会保证用户数据安全。"
					},{
						"quession":"如何使用扫码登录？",
						"answer":"通过使用地推大狮手机App的扫一扫功能，扫描电脑端登录二维码，从而更快速、更安全的登录电脑端管理页面。请使用最新版本进行扫码，如登陆出现问题：<br/>1、请检查您的手机网络设置，确认网络通畅;<br/>2、如手机网络正常，请刷新登录二维码重试."
					}]
				},{
					"details":[{
						"quession":"地推大狮手机客户端支持哪些手机？",
						"answer":"目前市面上的主流手机，能够上网且满足以下操作系统都可以使用手机客户端：IOS系统5.1.1以上;Android系统4.0或更高版本。"
					},{
						"quession":"如何获取地推大狮手机客户端安装包？",
						"answer":"在安智市场、安卓市场、360手机助手、百度手机助手、应用宝或者App Store中通过搜索地推大狮关键字。"
					},{
						"quession":"地推大狮手机客户端会产生费用吗？",
						"answer":"通过手机上网下载客户端以及在客户端的使用过程中会产生流量费，是由当地运营商进行收取的，详情请致电当地运营商咨询。"
					},{
						"quession":"地推大狮对使用哪个运营商的手机卡有要求么？",
						"answer":"您好，地推大狮对使用哪个运营商的手机卡没有要求，移动、电信、联通都可以使用，只要手机可以上网（开通数据服务），那么都可以使用。由于每个运营商的网络情况不同，所以我们的软件也是会受限于网速，略有区别。"
					}]
				}]
			}
		}
	}
	return Controller;
});