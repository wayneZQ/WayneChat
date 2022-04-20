window.app = {
	
	/**
	 * 后端服务器发布地址
	 */
	serverUrl: "http://192.168.1.103:8080/im_bird_sys/",
	/**
	 * 图片服务器地址
	 */
	ImgServerUrl:"http://119.91.87.151:8888/group1/",
	
	/**
	 * @param {Object} str
	 * return true 说明内容为空
	 * return false 说明内容不为空
	 */
	isNotNull:function(str){
		if(str != null && str != "" && str != undefined){
			return true;
		}
		return false;
	},
	/**
	 * 封装消息提示框
	 * @param {Object} msg
	 * @param {Object} type
	 */
	showToast:function(msg,type){
		plus.nativeUI.toast(msg,
			{ icon: "../images/"+ type + ".png", verticalAlign: "center" })
	},
	/**
	 * 保存用户全局对象
	 * @param {Object} user
	 */
	setUserGlobalInfo:function(user){
		var UserInfoStr = JSON.stringify(user);
		plus.storage.setItem("userInfo",UserInfoStr)
	},
	/**
	 * 获取用户全局对象
	 */
	getUserGlobalInfo:function(){
		var userInfoStr = plus.storage.getItem("userInfo");
		return JSON.parse(userInfoStr);
	},
	/**
	 * 退出登录
	 */
	userLogout:function(){
		plus.storage.removeItem("userInfo")
	},
	/**
	 * 保存用户的联系人列表
	 */
	setContactList:function(MyFriendList){
		var contactListStr = JSON.stringify(MyFriendList)
		plus.storage.setItem("contactList",contactListStr)
	},
	
	/**
	 * 获取本地缓存中的联系人列表
	 */
	getContactList: function(){
		var contractListStr = plus.storage.getItem("contactList");
		// 为空，没有联系人
		if(!this.isNotNull(contractListStr)){
			return [];
		}
		return JSON.parse(contractListStr);
	}
}