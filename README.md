ModalDialog
===========

#简介
css实现的模态对话框，显示的时候运用了css的动画效果，不支持动画效果效果的浏览器就只有简单的显示和隐藏效果

#使用
引入ModalDialog.js和ModalDialog.css文件，js文件依赖于jquery

	<div class="md_overlay">
		<span id="md_modal_verline2" class="md_modal_verline"></span>

		//这里为对话框的起始html，可以随便更改，
		//要更改动画效果增加相应的class(这里添加的是md_effect_slideInRight)，
		//对话框的其他style(比如大小等等)可写在另一个class中，不需要定义为行内style
		<div class="md_modal md_effect_slideInRight" style="width:350px; height:300px; border: 1px solid #FF0">

			//这里可以随意添加模态对话框的内容
			<span style="color:white">hello world</span>
		</div>
	</div>

按照以上模板书写，将相应代码加入到body中

#目前提供的几种动画效果
* .md\_effect\_smallBig      : 对话框从小变到大
* .md\_effect\_slideInRight  : 对话框从右边滑进
* .md\_effect\_slit          : 对话框由远及近的从Y轴90度旋转到0度

#API
	ModalDialog.show(DialogNode)
显示对话框，DialogNode为对话框节点，可以是jquery对象也可以试dom对象

	ModalDialog.hide(DialogNode)
隐藏对话框，DialogNode为对话框节点，可以是jquery对象也可以试dom对象

#例子
请查看项目文件中 demo/demo.html 文件。

#感谢
其中的好多动画效果来源于http://tympanus.net/codrops/2013/06/25/nifty-modal-window-effects/    
mixins.less中的有些mixin来源于bootstrap
