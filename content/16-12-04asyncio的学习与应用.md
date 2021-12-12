---
title: asyncio的学习与应用
date: 2016-12-04 16:16:12
taxonomies:
    tags: [Python, Code]
---

一直在制作完善pixiv的爬虫，最近遇到了一个问题，学校的网络环境太差了，导致了IO阻塞时间过长，常常出现线程长时间阻塞，占用了时间和内存。

为了解决这个问题，我决定尝试制定一个超时的图片删除重新爬取的过程，三次爬取不全则log报错不再爬取。

同时将整个脚本搬运至3.5版本，重新用asyncio异步编写，减少线程使用。

<!-- more -->

首先上一个asyncio的例子：

``` python,linenos
import asyncio

@asyncio.coroutine
def hello():
    print("Hello world!")
    # 异步调用asyncio.sleep(1):
    r = yield from asyncio.sleep(1)
    print("Hello again!")

# 获取EventLoop:
loop = asyncio.get_event_loop()
# 执行coroutine
loop.run_until_complete(hello())
loop.close()
```

`@asyncio.coroutine`把一个generator标记为coroutine类型，然后把这个coroutine放入EventLoop中执行。

## 2017年更新

经过测试，协程的大数据IO使用协程爬取效率并没有想象的高，考虑到这一丢丢的进程不会达到吃电脑性能的程度，不再全面使用协程。这里仅记录下一些代码，一便下次查阅：

``` python,linenos
loop = asyncio.get_event_loop()
s = requests.session()
s.headers = headers1


def get(url, asession=s):
    return loop.run_in_executor(None, asession.get, url)


def async_save(dataids, cookies, path):
    s.cookies = requests.utils.cookiejar_from_dict(cookies)
    tasks = []
    for i in dataids:
        tasks.append(simgle_async_save(i, path))
    loop.run_until_complete(asyncio.wait(tasks))
    loop.close()
    return 0


async def simgle_async_save(i, path, ceiling=4):
    b = 0
    ·······
        if not is_exists:
            pic = await get(originaltu)
            fp = open(path, 'wb')
            fp.write(pic.content)
            fp.close()  # 保存图片
            '''print(i+'-'+str(b) + ' download is Success')'''
```