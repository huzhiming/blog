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

```

