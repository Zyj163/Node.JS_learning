//大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。
// 包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是
// EventEmitter 的子类

//引入events模块
var events = require('events');

//创建事件发射器实例
var eventEmitter = new events.EventEmitter();

//绑定connection事件处理(事件名称是自己起的)
eventEmitter.on('connection', function(arg1, arg2){
    console.log('connect success', arg1, arg2);

    eventEmitter.emit('data_received', 'arg1')
});

//绑定data_received事件处理
eventEmitter.on('data_received', function(arg1){
    console.log('receive success', arg1)
});

//可以给同一事件创建多个监听,会被先后调用
var callback = function(){
    console.log('receive success')
};
eventEmitter.on('data_received', callback);

//为指定事件添加一个监听器到监听器数组的尾部
eventEmitter.addListener('data_received', function(){
    console.log('receive success by listener')
});

//为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器
eventEmitter.once('data_received', function(){
    console.log('receive success once')
});

//为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃
eventEmitter.on('error', function(){
    console.log('error')
});

//返回指定事件的所有监听器
var listeners = eventEmitter.listeners('data_received');
console.log(listeners.length);

//返回指定事件的监听器的个数
var count = events.EventEmitter.listenerCount(eventEmitter, 'data_received');
console.log(count);

//移除指定事件的一个已经注册的监听器
eventEmitter.removeListener('data_received', callback);

//移除指定事件的所有监听器
eventEmitter.removeAllListeners('data_received');

//触发connection事件
eventEmitter.emit('connection', 'arg1', 'arg2');

console.log('end');