[jest](https://facebook.github.io/jest/)是facebook推出的一款测试框架，集成了Mocha和chai，jsdom，sinon等功能

Jest中文文档地址：https://jestjs.io/zh-Hans/docs/getting-started

```typescript
// 安装
yarn add --dev jest
npm install --save-dev jest

yarn add --dev @types/jest // 类型工具包

// package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll",
		"coverage": "jest --coverage"
  }
}


// 结构形式如下
test('期望得到xxx', () => {
    expect({
        server: 'http://localhost',
        port: '8080',
        time: new Date()
    }).toEqual({
      server: 'http://localhost',
      port: '8080',
      time: expect.any(Date)
    })
  
    expect(generateConfig()).toMatchSnapshot({
    	time: expect.any(Date)
    })
})

// react 组件测试 enzyme框架为类jquery语法操作dom
import { mount, render } from 'enzyme';
describe('Button', () => {
	// 这是mocha的玩法，jest可以直接兼容
  it('renders correctly', () => {
    expect(mount(<Button>Follow</Button>).render()).toMatchSnapshot();
  });
  // ... 可以有多个it测试语句
           
  // 这是jest的玩法，推荐用这种
  test('两数相加结果为两个数字的和', () => {
    expect(3).toBe(3);
  })
})

// jest的常用断言
expect(x).toBe(y)//判断相等，使用Object.is实现
expect({a:1}).toBe({a:1})//判断两个对象是否相等
expect(1).not.toBe(2)//判断不等
expect(n).toBeNull();//判断是否为null
expect(n).toBeUndefined();//判断是否为undefined
expect(n).toBeDefined();//判断结果与toBeUndefined相反
expect(n).toBeTruthy();//判断结果为true
expect(n).toBeFalsy();//判断结果为false
expect(value).toBeGreaterThan(3);//大于3
expect(value).toBeGreaterThanOrEqual(3.5);//大于等于3.5
expect(value).toBeLessThan(5);//小于5
expect(value).toBeLessThanOrEqual(4.5);//小于等于4.5
expect(value).toBeCloseTo(0.3); // 浮点数判断相等
expect('Christoph').toMatch(/stop/);//正则表达式判断
expect(['one','two']).toContain('one'); // 不解释

function compileAndroidCode() {
  throw new ConfigError('you are using the wrong JDK');
}
test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(ConfigError);//判断抛出异常
}）
  
  
// 模拟函数
const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);
// 此 mock 函数被调用了两次
expect(mockCallback.mock.calls.length).toBe(2);
// 第一次调用函数时的第一个参数是 0
expect(mockCallback.mock.calls[0][0]).toBe(0);
// 第二次调用函数时的第一个参数是 1
expect(mockCallback.mock.calls[1][0]).toBe(1);
// 第一次函数调用的返回值是 42
expect(mockCallback.mock.results[0].value).toBe(42);
```



```typescript
// 配置文件
"jest": {
  	// 匹配测试文件
    "testRegex": "./src/test/.*.test.js$",
    // 在webpack中经常会用到别名，而jest测试时，如果文件中引用了别名会出现找不到文件的问题。毕竟jest测试时没有经过webpack处理
    // 配置 common 别名
    "moduleNameMapper": {
      "^common(.*)$": "<rootDir>/plugins/common$1",
    }
}
```