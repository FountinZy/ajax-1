getHTML.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html');
    request.onreadystatechange = ()=>{
        console.log(request.readyState)
        if(request.readyState === 4){
            if(request.status>= 200 && request.status < 300){
                //创建style标签
                const div = document.createElement('div')
                //填写style内容
                div.innerHTML = request.response
                //插入head里面
                document.body.appendChild(div)       
            }else{
                alert('加载html失败')
                }
        }
    };
    request.send()
}

getCSS.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css');
        request.onreadystatechange = ()=>{
            console.log(request.readyState)
            if(request.readyState === 4){
                if(request.status>= 200 && request.status < 300){
                     //创建style标签
                    const style = document.createElement('style')
                     //填写style内容
                    style.innerHTML = request.response
                     //插入head里面
                    document.head.appendChild(style)  
                }else{
                    alert('加载css失败')
                    }
            }
        };

    request.send()
}

getJS.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange = ()=>{
        console.log(request.readyState)
        if(request.readyState === 4){
            if(request.status>= 200 && request.status < 300){
            //创建script标签
            const script = document.createElement('script')
            // 填写script内容
            script.innerHTML = request.response
            //插入到body里面
            document.body.appendChild(script)
            }else{
                alert('加载js失败')
                }
        }
    };
    request.send()
 }
    
 getXML.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status>= 200 && request.status < 300){
                // console.log(request.responseXML)
               const dom = request.responseXML;
               const text = dom.getElementsByTagName('warning')[0].textContent 
               console.log(text.trim())      
            }else{
                alert('加载xml失败')
                }
        }
    };
    request.send()
}

getJSON.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status>= 200 && request.status < 300){
                console.log(request.response) 
                const object = JSON.parse(request.response)    
                myName.textContent = object.name
            }else{
                alert('加载json失败')
                }
        }
    };
    request.send()
}

let n =1;
getPAGE.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`);
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status>= 200 && request.status < 300){
                const array = JSON.parse(request.response);
                array.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item.id;
                    xxx.appendChild(li);
                });
                n+=1
            }else{
                alert('加载page失败')
                }
        }
    };
    request.send()
}