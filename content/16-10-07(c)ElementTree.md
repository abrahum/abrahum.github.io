---
title: (c)ElemantTree模块快速使用
tags: [xml,Python]
date: 2016-10-07 14:23:23
taxonomies:
    tags: [code]
---

*以下使用ET指代本模组*

## xml的打开和基本操作

在ET中使用`ElementTree`类代表整个xml树，`Element`表示树上的节点，其中`root`特指根节点。

`ET.parse('filename.xml')`从Path读取xml树。

`ET.fromstring(string)`从string读取xml树。

`ElementTree.getroot()`从`ElementTree`获取`root`节点。

<!-- more -->

## `Element`类型

属性：

1. `tag`：`string`对象，表示数据代表的种类。

2. `attrib`：`dictionary`对象，表示`Elwment`的属性。

3. `text`：表示`Element`的内容，`string`对象。

4. `tail`：`string`对象，`Element`闭合后的尾迹

5. 子节点。

创建`Element`对象：

创建`Element`的方法有`ET.Element()`和`SubElement()`两种。

`ele = Element(tag,*)`构建一个独立的Element对象。

`ele.SubElement(tag,*)`添加一个子节点的Element对象。*暂时不会用这货*

> *可以使用`key:value`添加属性。*

`Element`的遍历与查询：

对于`Element`对象可以直接使用`Element[number]`直接访问子节点。

`Element.iter(tag=None)`：遍历所有子节点，如指定tag则仅遍历该tag。

`Element.findall(tag)`：list返回所有tag或Path匹配节点。

`Element.find(tag)`：返回匹配的首个节点。

`Element.get(key,default=None)`：获得指定key对应的属性值，没有该属性则返回default值。

`Element.append(SubElement)`或`Element.ET.extend(SubElement)`：添加直系子节点。

`Element.findtext(tag)`：获得首个匹配的节点并返回text值。

`Element.insert(index,SubElement)`：指定位置插入节点。

`Element.clear()`：清空所有。

`Element.set(key,value)`：设置新的属性。

`Element.remove(SubElement)`：删除子节点。

## `ElementTree`类型

`ElementTree`的操作：

`ElementTree.write(Path,encoding=None)`：保存xml树至Path。
