const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = 8000;
const app = express();
const bcrypt = require('bcrypt');

const {collection,addDoc, getFirestore,getDocs, where,query} = require('firebase/firestore');
const item = require("./components/item")

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// 서버와 클라이언트 연동 -> 서버에 접속할때는 8000 PORT로 접근

app.use(cors())
app.use(express.static(path.join(__dirname,'..','client/build')))

// 상품 리스트 반환 API
app.get('/items',async(req,res) =>{
    res.send(await item.getItems())
})

// 상품 리스트 등록 API
app.post('/uploaditem',async(req,res)=>{
    const {no,cat_name,name,price,img} = req.body;
    const result = await item.uploadItem(no,cat_name,name,price,img);
    res.json({"result":result})
})

// 회원가입 API
app.post('/signup',async(req,res)=>{
    const {id,name,email,phone,address} = req.body;
    const pw = bcrypt.hashSync(req.body.pw,10);

    let exist = false;
    const q = query(collection(db,'users'),where("id","==",id))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        exist = doc.exists();
    })
    
    if (exist==true){
        res.json({'result':'fail'})
    }else{
        try{
            await addDoc(collection(db,'users'),{
                "id": id,
                "pw": pw,
                "name":name,
                "email":email,
                "phone": phone,
                "address":address
            })
            res.json({'result':'success'})
        }catch(e){
            console.error("Error adding document: ", e);
        }
    }

    
})
app.post('/confirmId',async(req,res)=>{
    const {id} = req.body;
    let exist = false;
    const q = query(collection(db,'users'),where("id","==",id))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        exist = doc.exists();
    })
    res.json({"exist":exist})
})

app.listen(PORT,() =>{
    console.log(`Listening port ${PORT}...`)
});