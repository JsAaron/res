https://www.cnblogs.com/2050/p/3877280.html
https://blog.csdn.net/qq_22844483/article/details/79730604
viewports剖析 http://www.w3cplus.com/css/viewports.html

1.viewprot 视区,移动设备上的viewport就是设备的屏幕上能用来显示我们的网页的那一块区域
分为3个视区
  1. layout viewport 页面需要布局的区域，这个一般默认980 1024较多  document.documentElement.clientWidth
  2. visual viewprot 手机屏幕的区域，可见屏幕区域尺寸  window.clientWidth
  3. idel viewprot 移动设备的理想viewport。ideal viewport的宽度等于移动设备的屏幕宽度，只要在css中把某一元素的宽度设为ideal viewport的宽度(单位用px)，那么这个元素的宽度就是设备屏幕的宽度了，也就是宽度为100%的效果

2.像素
  1.PC浏览器上：css中1个css像素 == 1个设备的物理像素
  2.移动端，1个css像素 可能等于多个 物理像素，比如Retina屏幕，手机屏幕可视区域不变，分辨率提高了很多倍
  3.Ihpone4 320*480（visual） =>retina 640*960(layout) 一个css像素是等于两个物理像素的
  4.安卓设备根据屏幕像素密度可分为ldpi、mdpi、hdpi、xhdpi等不同的等级
  5.缩放也会引起变化，页面放大一倍，那么1个css像素，代表物理像素也要多多一倍
  6.devicePixelRatio css像素与物理像素的比值关系  物理像素 / 独立像素(css中的px就可以看做是设备的独立像素)

3.利用meta标签对viewport进行控制，6个参数
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  该meta标签的作用是让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放。
  width=device-width 设置layout viewprot
  initial-scale=1.0 初始缩放值
  user-scalable 是否允许缩放

  基本废弃
  安卓可以单独设置target-densitydpi ，就是1css代表多少物理像素  high-dpi 、 medium-dpi、 low-dpi、 device-dpi
  target-densitydpi=device-dpi 时， css中的1px会等于物理像素中的1px。

  <meta name="viewport" content="initial-scale=1">
  同样达到了width=device-width的效果，因为initital-scale是相对于idel的

  最后，总结一下，要把当前的viewport宽度设为ideal viewport的宽度，既可以设置 width=device-width，也可以设置 initial-scale=1，但这两者各有一个小缺陷，就是iphone、ipad以及IE 会横竖屏不分，通通以竖屏的ideal viewport宽度为准。所以，最完美的写法应该是，两者都写上去，这样就 initial-scale=1 解决了 iphone、ipad的毛病，width=device-width则解决了IE的毛病：
