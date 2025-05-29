---
title: EasyX图形库游戏开发第一天
series: EasyX图形库游戏开发
date: 2025-04-26 18:15:10
swiper_index: 2
tags:
    - C++
    - 游戏
    - EasyX
categories:
    - C++
    - 游戏
---

# EasyX图形库游戏开发第一天

我使用的是EasyX图形库+Clion来进行游戏开发

所以要额外进行一点配置，这是官网教程

[在 CLion、Dev-C++ 或 Code::Blocks 下面配置 EasyX（2025-1-17 更新） - CodeBus](https://codebus.cn/bestans/easyx-for-mingw)



# 配置详述（官网教程）

## CLion 配置 EasyX 的详细说明

### 1. 安装 CLion

官网下载 CLion（https://www.jetbrains.com.cn/clion/download/#section=windows）。为叙述方便，假设安装路径为：D:\App\CLion 。

本文以 CLion 2024.3.2 为例讲解配置方法，该版本默认带有编译器 MinGW-w64 13.1.0(posix)。



### 2. 配置 EasyX 到 CLion

下载 easyx4mingw_20240601.zip，解压缩。

将 include 文件夹下的 easyx.h 和 graphics.h 拷贝到 D:\App\CLion\bin\mingw\x86_64-w64-mingw32\include 文件夹里。

将 lib64\libeasyx.a 拷贝到 D:\App\CLion\bin\mingw\x86_64-w64-mingw32\lib 文件夹里。

安装完成。



### 3. 编写 EasyX 程序

打开 CLion，创建 New Project，选择 C++ Executable，在 Location 里填写项目路径，点 Create 按钮创建项目。

弹出 Open Project Wizard 窗口配置编译器，Toolset 选择默认的 Bundled MinGW，其他保持默认不变即可，点 OK。

双击打开 main.cpp，删除默认的所有代码，然后输入以下代码：

```cpp
#include <graphics.h>
#include <conio.h>

int main()
{
	initgraph(640, 480);
	circle(320, 240, 100);
	_getch();
	return 0;
}
```

双击编辑 CMakeLists.txt，链接 EasyX 相关的库文件。在 add_executable(...) 这行后面，增加链接库文件的指令：

```cmake
target_link_libraries(untitled libeasyx.a)
```

（注：untitled 是编译目标，可以根据项目的实际情况修改）

编译执行，即可看到画出了一个圆。



# 开发过程



## 1.创建文件

首先我创建一个cmake的C++可执行文件，我命名为game.cpp

同时为了方便管理头文件，我创建了一个game.h头文件来进行管理

然后我导入了三张图片-开始游戏，退出游戏，背景照片。

{% note danger simple %}

图片资源一定要放对位置和生成的程序.exe在同一个文件夹下面，我这边是cmake-build-debug文件夹,如果放错了就会像我一样生成的程序没有背景~~又花了半天时间去弄清楚~~

{% endnote %}



## 2.CLion 配置 EasyX

然后我按照教程进行了配置

这是我的CMakeLists.txt配置图片

![CMakeLists.txt配置图片](https://bu.dusays.com/2025/04/26/680ca60271bbf.png)



## 3.编写代码

### 编辑game.h头文件

```cpp
#ifndef GAME_H
#define GAME_H

#include <graphics.h>
#include <iostream>
using namespace std;

#define WIDHTH 1280
#define HIGETH 720

IMAGE bk;   //背景图片
IMAGE start;  //开始按钮图片
IMAGE quit;  //退出按钮图片

void startloadImg();

#endif //GAME_H
```



### 编写主程序

{% note info modern %}
记得先导入头文件
{% endnote %}

```cpp
#include "game.h"  //导入头文件
```



下面是我的代码

```cpp
#include "game.h"  //导入头文件

int main()  
{
    initgraph(WIDHTH,HIGETH);   // 创建绘图窗口，大小为 1280x720像素
        while (1)   //保持窗口存在
        {
            startloadImg();  //加载主界面图片
        }
}

void startloadImg()  
{
    loadimage(&bk, _T("image/background.png"),WIDTH,HEIGTH);  //背景
    loadimage(&start, _T("image/start.jpg"));  //开始游戏
    loadimage(&quit, _T("image/quit.jpg"));  //退出游戏

    putimage(0,0, &bk);
    putimage(WIDTH/2-88, HEIGTH/2-50,170,50, &start,0,0);
    putimage(WIDTH/2-88, HEIGTH/2+50,170,50, &quit,0,0);
};
```



### 运行程序

虽然十分简陋但是还是实现了主界面显示

最终得到以下界面

![简单的界面](https://bu.dusays.com/2025/04/26/680ca469010a2.png)