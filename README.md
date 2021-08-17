# frames 框架

## 结构思想

1. 企图把 ui 表现层独立分离
2. 场景通过 main 脚本,加载 Ctl,Ctl 初始化加载 View 和 Modele.

## 核心文件夹

1. script/commponent 公共模块
2. script/data 数据文件夹
3. script/manager 管理器文件夹
4. script/util 工具文件夹

## 核心类

1. PrData
2. PrLayerUtil
3. PrLoadResourceManager

### 2021.8.17

1. 重新整理类

### 2021.8.16

1. 新增了日志管理器
2. 整理路径和管理器

### 2021.8.16
1. 新增了日志管理器
2. 整理路径和管理器

### 2021.7.29

1. 新增了变更 ui 代码后,编辑器同步更新,并且把根节点下的 child 记录保存到指定 json 的功能

### 2021.7.26

1. 修改核心类名称
2. 新增 mvc 结构
3. 增加了 test 插件

### 2021.7.16

1. 新增了适配脚本
2. 新增了层级管理器
3. 新增了加载管理器
