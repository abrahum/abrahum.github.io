---
title: Script languages in Rust
date: 2022-08-21 16:55:00
taxonomies:
    tags: [Code, Rust]
---

调查对比目前 Rust 实现的几种脚本语言，比较的标准并不统一，纯个人向，方向大概会包含脚本语言本身是否**美观**易用、与 Rust 的**互操作**是否方便、目前解释器的**实现进度**等。

<!-- more -->

入选的语言：

- [duckscript](https://github.com/sagiegurari/duckscript)
- [gluon](https://github.com/gluon-lang/gluon)
- [Mun](https://github.com/mun-lang/mun)
- [dyon](https://github.com/PistonDevelopers/dyon)
- [rhai](https://github.com/rhaiscript/rhai)
- [rune](https://github.com/rune-rs/rune)

其他落选语言：

- [GameLisp](https://github.com/fleabitdev/glsp): 2022.3 起不再维护
- [ketos](https://github.com/murarth/ketos): Last update at 2020.1

## duckscript

duckscript 的目标是简单、可扩展的可嵌入脚本语言。

Example:

```sh ,linenos
# print the text "Hello World"
echo Hello World 
# print the text "Hello World"
echo "Hello World"
# print the text 'hello "world"'
echo "hello \"world\""

out = set "Hello World"
# This will print: "The out variable holds the value: Hello World"
echo The out variable holds the value: ${out}
# This will print: "To use the out variable just write: ${out}"
echo To use the out variable just write: \${out}

# Labels
goto :good
echo error!!!!
:good echo yay!!!!

# Function
fn print_first_and_second_argument
    echo ${1} ${2}
    return printed
end

values = range 1 10
for i in ${values}
    for j in ${values}
        echo i: ${i} j: ${j}
    end
end
```

语言观感上非常像 Haskell，基本没有多少小括号，语言非常精简，通过 Command 扩展整个语言体系。

一个 Command 扩展的例子：

```Rust ,linenos
struct SetCommand {}

impl Command for SetCommand {
    fn name(&self) -> String {
        "set".to_string()
    }

    fn run(&self, arguments: Vec<String>) -> CommandResult {
        let output = if arguments.is_empty() {
            None
        } else {
            Some(arguments[0].clone())
        };
        CommandResult::Continue(output)
    }
}
```

嵌入运行：

```Rust
let mut context = Context::new();
duckscriptsdk::load(&mut context.commands)?;
runner::run_script_file(file, context)?;
```

总体来说 duckscript 似乎太过简易了一些，缺少 oop 的设计，对于一些简单的嵌入脚本可以胜任，但是语言本身并不能胜任复杂的需求。

## gulon

静态类型（static type）、类型推断（type inference）、易于嵌入（simple embedding）、UTF-8、GC 小堆设计、线程安全

Example:

```Rust ,linenos
let io = import! std.io
io.print "Hello world!"

// An identifier
abc123_
// An integer literal
42
// A float literal
3.14
// A string literal
"Hello world"
// A raw string literal
r"Can contain newlines
world"
r#"With # as delimiters raw strings can also contain quotes without escaping `"` "#
r###" "## "###
// A character literal
'e'

// Function
let factorial n : Int -> Int =
    if n < 2
    then 1
    else n * factorial (n - 1)

// Type
type Op = | Add | Sub | Div | Mul
type Expr = | Int Int | Binop Expr Op Expr

let x = 1 + 2 in x // Returns 3
```

看语法基本就是跑在 Rust 构建的 Vm 上的 Haskell，模式匹配、函数式

> todo