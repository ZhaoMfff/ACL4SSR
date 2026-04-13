// 初始化计数器
const nameCount = {};
const processedProxies = [];

// 遍历并处理所有节点
$proxies.forEach(proxy => {
    // 使用 Object.assign 深拷贝，彻底避开某些客户端的“禁止修改原数组”保护机制
    const newProxy = Object.assign({}, proxy);
    const originalName = newProxy.name;
    
    // 如果名字已经存在
    if (nameCount[originalName]) {
        nameCount[originalName]++;
        // 添加序号，例如：HK (2)
        newProxy.name = originalName + " (" + nameCount[originalName] + ")";
    } else {
        // 第一次遇到
        nameCount[originalName] = 1;
    }
    
    processedProxies.push(newProxy);
});

// 将处理后的全新数组覆盖回全局变量
$proxies = processedProxies;
