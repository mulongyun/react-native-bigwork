// 封装一下

import queryString from 'query-string';
let rootUrl = 'https://www.fastmock.site/mock/d8669197280b95233097dfe9aea8ed58/api';

let myFetch={
    get(url,queryParams){//queryParams查询参数
        url=rootUrl+url;
        if(queryParams){
            url+='?'+queryString.stringify(queryParams);
        }
        console.log(url);
        return fetch(url)
                    .then(res => res.json())
    },
    post(url,body){
        return fetch(rootUrl+url,{
            method:'POST',
            headers:{
                "Accept":'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
            .then(res => res.json())
    }
}

export{myFetch};

