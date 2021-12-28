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
    "test:watch": "jest",


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
  it('renders correctly', () => {
    expect(mount(<Button>Follow</Button>).render()).toMatchSnapshot();
  });
  // ... 可以有多个it测试语句
})

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

```