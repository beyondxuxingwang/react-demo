export default [
    {
        title:'首页',
        key:'/home',
        type:'setting',
    },
    {
        title:'UI',
        key:'/ui',
        type:"mail",
        childern:[
            {
                title: '按钮',
                key: '/ui/buttons',
            },
            {
                title: '弹框',
                key: '/ui/modals',
            },
        ]
    },
    {
        title:'表格',
        key:'/table',
        type:'setting',
        childern:[
            {
                title:'表格1',
                key:'/table/table1',
            },
            {
                title:'表格2',
                key:'/table/table2',
            },
        ]
    },
    {
        title:'城市管理',
        key:'/city',
        type:'setting',
    }

];
// export default menuList;