// ================================
// function defaultEquals(a,b) {
//   return a === b
// }

// // 节点
// class LinkedNode {
//   element: any
//   next: undefined
//   constructor(element) {
//     this.element = element
//     this.next = undefined
//   }
// }
// class LinkedList {
//   count: number
//   head: any
//   equalsFn: (a: unknown, b: unknown) => boolean
//   constructor(equalsFn = defaultEquals) {
//     this.count = 0
//     this.head = undefined
//     this.equalsFn = equalsFn
//   }
//   // 向链表尾部添加一个新元素
//   push(element) {
//     const node = new LinkedNode(element)
//     let current;
//     if (!this.head) {
//       this.head = node
//     } else {
//       current = this.head

//       // 从头开始，直到获得最后一项
//       while (current.next) {
//         current = current.next
//       }

//       // 将其next赋值给新元素，建立链接
//       current.next = node
//     }

//     this.count ++
//   }
//   // 向链表的特定位置插入一个新元素
//   insert(element, position) {
//     // 检查越界值
//     if (position > 0 && position < this.count) {
//       let node = new LinkedNode(element)
//       // 在第一个位置插入
//       if (position === 0) {
//         const current = this.head
//         node.next = current

//         this.head = node
//       } else {
//         const previous = this.getElementAt(position - 1)
//         const current = previous.next

//         node.next = current
//         previous.next = node
//       }
//       this.count ++ // 更新链表的长度
//       return true
//     }
//     return false
//   }
//   // 返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined
//   getElementAt(position) {
//     // 检查越界值
//     if (position > 0 && position < this.count) {
//       let current = this.head
//       for (let index = 0; index < position && !!current; index++) {
//         current = current.next
//       }
//       return current
//     }
//     return undefined
//   }
//   // 从链表中移除一个元素
//   remove(element) {

//   }
//   // 返回元素在链表中的索引。如果链表中没有该元素则返回-1
//   indexOf(element) {

//   }
//   // 从链表的特定位置移除一个元素，并返回移除的元素
//   removeAt(position) {

//     // 检查越界值
//     if (position > 0 && position < this.count) {
//       let current = this.head

//       if (position===0) {
//         this.head = current.next
//       } else {
//         let previous = this.getElementAt(position - 1)
//         current = previous.next

//         // 将previous与current的下一项链接起来：跳过current，从而移除它
//         previous.next = current.next
//       }
//       this.count --

//       return current.element
//     }
//     return undefined
//   }
//   // 返回链表是否为空
//   isEmpty() {

//   }
//   // 返回链表包含的元素个数，与数组的length属性类似
//   size() {

//   }
//   // 返回整个链表的字符串。由于列表项使用了Node类，就需要充血继承自Js对象默认的toString方法，让其输出元素的值
//   toString() {

//   }
// }

// var list = new LinkedList()
// list.push(10)
// list.push(15)

// console.log(list);



