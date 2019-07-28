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

];
// export default menuList;