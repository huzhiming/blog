```zsh
环境变量
export GOPATH=/Users/项目根目录
export GOBIN=$GOPATH/bin

vscode setting.json
{
    "files.autoSave": "onWindowChange",
    "go.gopath": "/go",
    "go.inferGopath": true,
    "gopls": {
        "experimentalWorkspaceModule": true
    }
}
```

```go
// hello.go
package main // 申明当前文件属于哪个包
import "fmt" // 导入一个 fmt 包
func main() { // main代表整个程序的入口
    fmt.Println("Hello, 世界")
}

go run ch01/hello.go // 运行包
//在项目根目录输入以下命令，即可编译一个可执行文件(当前目录)
go build hello.go 
// 安装到 $GOBIN 目录
go install hello.go


const name =  "飞雪无情" // 定义一个常量
str := "字符串"
num := 123
isBool := false
pi:=&str 
*pi == str // true

const(
    one = iota+1
    two
    three
    four
)
fmt.Println(one,two,three,four) // 1、2、3、4

// 转换
i2s:=strconv.Itoa(num)
s2i,err:=strconv.Atoi(i2s)

```

```go
// 数组
array:=[5]string{"a","b","c","d","e"}
for i,v:=range array{
    fmt.Printf("数组索引:%d,对应值:%s\n", i, v)
}
// 基于数组生成切片
slice:=array[2:5] // [c,d,e] 包含头 不包含尾

// 切片
slice1:=make([]string,4,8) //声明切片，4表长度、8表容量 
slice1:=[]string{"a","b","c","d","e"} // 字面量
fmt.Println(len(slice1),cap(slice1))
slice[1] ="f" // 修改

// map 
nameAgeMap:=map[string]int{"飞雪无情":20} // 字面量申明
nameAgeMap["飞雪无情"] = 20 // map 赋值
age:=nameAgeMap["飞雪无情"] //获取指定 Key 对应的 Value
delete(nameAgeMap,"飞雪无情") // 删除key
for k,v:=range nameAgeMap{
    fmt.Println("Key is",k,",Value is",v)
}
len(nameAgeMap) // 获取大小（键值对的个数）

// 函数
func main(params) result { body } //函数签名
func sum(a int,b int) int{ // 实现
    return a+b
}
func sum(a, b int) (int,err){ //多值返回
    if a<0 || b<0 {
        return 0,errors.New("a或者b不能是负数")
    }
    return a + b,nil
}
res,err:=sum(-1,2)
res,_:=sum(-1,2) // _忽略

func sum2(a, b int) (sum int,err error){ // 命名返回参数
    if a<0 || b<0 {
        return 0,errors.New("a或者b不能是负数")
    }
    sum=a+b
    err=nil
    return 
}
func sum3(params ...int) int { // 可变参数params 类型为切片
	sum := 0
	for _, i := range params {
		sum += i
	}
	return sum
}

//同一个包中的函数哪怕是私有的（函数名称首字母小写）也可以被调用。如果不同包的函数要被调用，那么函数的作用域必须是公有的，也就是函数名称的首字母要大写，比如 Println。
函数名称首字母小写代表私有函数，只有在同一个包中才可以被调用；
函数名称首字母大写代表公有函数，不同的包也可以调用；
任何一个函数都会从属于一个包。


// 匿名函数和闭包
func main() {
    aa:=100;
    sum2 := func(a, b int) int {
        return a + b + aa // 访问外层变量
    }
    fmt.Println(sum2(1, 2)) // 103
}

```

###### 不同于函数的方法

> 在 Go 语言中，方法和函数是两个概念，但又非常相似，不同点在于方法必须要有一个接收者，这个接收者是一个类型，这样方法就和这个类型绑定在一起，称为这个类型的方法。

