---
title: Pyinstaller打包PyQt5踩的坑
date: 2017-01-27 09:58:52
taxonomies:
    tags: [Python, Code]
---

在做完一个[P站的爬虫](https://coding.net/u/Abrahum/p/pixiv2.0/git)后,我决定为之制作一个UI界面，并使用Pyinstaller打包为exe发布。

然后呢，我不出意料的踩了很多坑\_(:3」∠)_

<!-- more -->

## 原文

首先第一个就是关于Pyinstaller，它会生成两个文件夹（build和dist），其中build是工程文件夹（全是过程文件，没什么卵用），而dist才是最后生成的程序，年少无知的我在build里傻傻得找了很久exe文件。

然后是关于bin检索的问题，PyQt5的一些模块不能正常的被识别，需要`-p C:\Python35\Lib\site-packages\PyQt5\Qt\bin`增加检索的目录。

接着是api-ms-win-crt-runtime错误，原本本地编译完运行毫无问题，但是发个一win7-64bit的同学运行后报错dll丢失。
查到[简书](http://www.jianshu.com/p/c1e75244b6f3)：

> PyInstaller打包之后的程序运行的时候发生api-ms-win-crt-runtime动态库之类的错误，似乎只有在Python 3.5下打包才会遇到。
因为Universal CRT（KB2999226）缺失，可以通过安装此更新来解决问题。
或者直接下载 Visual C++ Redistributable ([x86](http://download.microsoft.com/download/9/3/F/93FCF1E7-E6A4-478B-96E7-D4B285925B00/vc_redist.x86.exe) ,[x64](http://download.microsoft.com/download/9/3/F/93FCF1E7-E6A4-478B-96E7-D4B285925B00/vc_redist.x64.exe) )。

最后遇到的是在PyQt5中使用的ico文件不能正常的打包如exe，最后pyrcc5解决，使用命令

```
pyrcc5 -o images.py images.qrc
```

images.qrc代码如下：

```
<RCC>
  <qresource prefix="/" >
    <file>img/image1.png</file>
    <file>img/image2.png</file>
    <file>img/image3.png</file>
  </qresource>
</RCC>
```

最后将`import images`，使用例如`':/img/image1.png'`引用即可。这个方法同样来自[简书](http://www.jianshu.com/p/c1e75244b6f3)

## 正月初一更新

最近又发现了一个把资源文件打包进exe里的方法，在spec文件里`a.datas,`下一行加上行`[(filename,filepath,'DATA')],`即可。

这个方法最好的地方是可以用来打包-i参数加入的图标文件。

接下来想要做的是做个进度条，当然要先结果目前一阻塞窗口就未响应的问题······

## 正月初三更新

今天解决了之前的两大问题，使用QThread来保证UI不被阻塞。需要建立一个类继承`QtCore.QThread`然后重写run()函数

```Python
class myQThread(QtCore.QThread):
    done = QtCore.pyqtSignal()
    def __init__(self):
        super(myQThread, self).__init__()
        self.mod = ''

    def run(self):
        time.sleep(1)
        self.done.emit()

AQThread = myQThread()
AQThread.start()
AQThread.done.connect(donefun)
```

为了解决进度条的问题修改了之前的爬取内核，所以把新的版本就改为Ver.2.1～

```Python
class dw(QWidget):
    def __init__(self):
        super(dw, self).__init__()
        self.timer = QtCore.QBasicTimer()

    def timerEvent(self, e):
        dosomething()

w = dw()
w.show()
w.timer.start(100, w)
```

以上代码重写了timeEvent函数，当计时器超时就会触发该函数，然后重绘ui，达到进度条等动态效果。

转战Android，脚本保持维护，GUI版本不准备再更新了。

## [Pixiv-2.1-GUI](http://pan.baidu.com/s/1slplXFn)

Password: 1c3e