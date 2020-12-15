### webpack: 多页面+vue单页面 老项目jq升级
```
- router
	- index.js  组合文件
  - resource.js 资源文件
  - router.js 路由文件
- src
	- common 公用的部分
  	- css
    - js
    - images
  - pages 老项目的对应关系
  	- index
        - index.html
        - index.js
        - index.css
    - activity
        - index.html
        - index.js
        - index.css
    - ....
  - utils 工具库
    	index.js
  - public 难以做处理文件
    - images
    - lib
- package.json
- webpack.config.js
```