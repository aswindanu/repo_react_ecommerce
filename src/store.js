import createStore from 'unistore';
import axios from 'axios';

const initialState ={
    // Users
    listUser:[],
    User:[],
    id:"",
    username:"",
    password:"",
    confirm:"",
    fullname:"",
    address:"",
    zip_code:"",
    image_user:"",
    status_user:"",
    status_code:"",
    code_admin:"",
    is_login:false,
    token_id:"",
    type:"",
    page:1,
    search:"",

    // Stuff
    listStuff:[],
    Stuff:[],
    resi_stuff:"",
    barang:"",
    image_stuff:"",
    deskripsi_stuff:"",
    jenis_stuff:"",
    harga_stuff:0,
    status_stuff:"",
    jumlah_stuff:0,
    
    // Cart
    listCart:[],
    id_cart:"",
    jumlah_cart:0,
    jml_tambah:0,
    jml_kurang:0,
    status_cart:"",
    
    // Bank
    listBank:[],
    Bank:[],
    id_bank:0,
    nama_bank:"",
    no_rek:0,
    owner:"",
    image_bank:"",
    
    // Courier
    listCour:[],
    Cour:[],
    id_kurir:"",
    nama_kurir:"",
    mode_pengiriman:"",
    image_cur:"",
    rek_pembayar:"",
    nama_pembayar:"",
    
    // Transaksi
    listTrans:[],
    Trans:[],
    total:0,
    pembayaran:"",
    pengiriman:"",
    status_bayar:"",
    id_trans:""
}

const Heroku = "https://cors-anywhere.herokuapp.com/"
// const BaseUrl = "http://0.0.0.0:5002"
const BaseUrl = "https://api.dota2store.site"
export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value }
    },

    resiStuff: (state, e) =>{
        return{resi_stuff : e}
    },

    prevPage: (state) =>{
        if (state.page > 1){
            var data = state.page - 1
            return { page : data }}
        else{
            return { page : state.page }
        }
    },

    nextPage: (state) =>{
        if (state.type == "listUser"){
            if (state.listUser.length === 5){
                var data = state.page + 1
                return { page : data }}}
        if (state.type == "listStuff"){
            if (state.listStuff.length === 5){
                var data = state.page + 1
                return { page : data }}}
        if (state.type == "listCart"){
            if (state.listCart.length === 5){
                var data = state.page + 1
                return { page : data }}}
        if (state.type == "listBank"){
            if (state.listBank.length === 5){
                var data = state.page + 1
                return { page : data }}}
        if (state.type == "listCour"){
            if (state.listCour.length === 5){
                var data = state.page + 1
                return { page : data }}}
        if (state.type == "listTrans"){
            if (state.listTrans.length === 5){
                var data = state.page + 1
                return { page : data }}}
        else{
            return { page : state.page }
        }
    },

    plusCart: (state) =>{
        var data = state.jml_tambah + 1
        return { jml_tambah : data }
        // }
    },

    minCart: (state) =>{
        var data = state.jml_kurang - 1
        return { jml_kurang : data }
        // }
    },

    // get all users (admin)
    getAll: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .get( Heroku + BaseUrl + "/admin?p=" + state.page, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listUser:response.data})
            console.log("respon user",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, 

    // post user
    postAdmin: async (state, a) =>{
        console.log("a", a)
        const data = {"username":a, "password":"blablabla", "fullname":"ASWIN", "address":"MALANG", "zip_code":"23232","image":"http://pbs.twimg.com/profile_images/808475349671493632/nvi7WJf4_400x400.jpg", 'code_admin':'warcr4ft'}
        console.log("b", data)
        await axios
        .post( Heroku + BaseUrl + "/admin", data, {headers:{'Access-Control-Content-Type':"application/json", 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result post user",response.data);
            // store.setState({listUser:response.data});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    // put user
    putAdmin: async (state) =>{
        // console.log("a", a)
        const data = {"id":state.id}
        console.log("b", data)
        await axios
        .put( Heroku + BaseUrl + "/admin", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result post user",response.data);
            store.setState({User:response.data});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    // del user
    delAdmin: async (state) =>{
        // console.log("a", a)
        // const data = {"id":a}
        console.log("b", state.id)
        await axios
        .delete( Heroku + BaseUrl + "/admin/" + state.id, {headers:{'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result post user",response.data);
            store.setState({User:response.data});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    // post user
    postUser: async (state, a) =>{
        // console.log("a", a)
        const data = {"username":state.username, "password":state.password, "fullname":state.fullname, "address":state.address, "zip_code":state.zip_code,"image":state.image_user}
        console.log("data", data)
        await axios
        .post( Heroku + BaseUrl + "/client", data, {headers:{'Access-Control-Content-Type':"application/json", 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result post user",response.data);
            store.setState({User:response.data});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    // get users 1
    getUser: async (state) =>{
        // console.log("a", a)
        // const data = {"username":a, "password":"blabla"}
        // console.log("b", data)
        await axios
        .get( Heroku + BaseUrl + "/client", {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result get user",response.data);
            store.setState({User:response.data});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    // put users 1
    putUserPass: async (state, a) =>{
        // console.log("a", a)
        const data = {"username":state.username, "password":state.password, 'new_password':state.confirm}
        // console.log("b", data)
        await axios
        .put( Heroku + BaseUrl + "/client", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result put user",response.data);
            store.setState({User:response.data, is_login:false, token_id:""});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    putUser: async (state, a) =>{
        // console.log("a", a)
        const data = {"username":state.username, "password":state.password, "fullname":state.fullname, 'address':state.address, 'zip_code':state.zip_code, 'image':state.image_user}
        // console.log("b", data)
        await axios
        .put( Heroku + BaseUrl + "/client", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result put user",response.data);
            store.setState({User:response.data, is_login:false, token_id:""});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    // del users 1
    delUser: async (state, a, b) =>{
        console.log("a", a)
        const data = {"username":a, "password":b}
        // console.log("b", data)
        await axios
        .delete( Heroku + BaseUrl + "/client", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result del user",response.data);
            // store.setState({listUser:response.data});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    // get stuff
    cariStuff: async state =>{
        await axios
        // .get("https://dota2store.site/stuff")
        .get( Heroku + BaseUrl + "/stuff", {headers:{'Access-Control-Content-Type':"application/json", 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "Access-Control-X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result get stuff",response.data);
            store.setState({listStuff:response.data});
            console.log("data save stuff", state.listStuff)
        })
        .catch(function(error){
        console.log(error);
        });
    },
    
    cariStuffAdmin: async state =>{
        await axios
        // .get("https://dota2store.site/stuff")
        .get( Heroku + BaseUrl + "/stuff?p=" + state.page, {headers:{'Access-Control-Content-Type':"application/json", 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result get stuff",response.data);
            store.setState({listStuff:response.data});
            console.log("data save stuff", state.listStuff)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    getStuff: async (state) =>{
        // console.log("a", a)
        // const data = {"username":a, "password":"blabla"}
        // console.log("b", data)
        await axios
        .get( Heroku + BaseUrl + "/stuff?resi=" + state.resi_stuff, {headers:{'Access-Control-Content-Type':"application/json", 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result get user",response.data);
            store.setState({Stuff:response.data});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    // post stuff
    postStuff: async (state) =>{
        // console.log("a", a)
        const data = {'barang':state.barang, 'image':state.image_stuff, 'deskripsi':state.deskripsi_stuff, 'jenis':state.jenis_stuff, 'harga':state.harga_stuff, 'jumlah':state.jumlah_stuff}
        console.log("b", data)
        console.log("tokenz", state.token_id)
        await axios
        .post( Heroku + BaseUrl + "/stuff", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result post stuff",response.data);
            store.setState({Stuff:response.data, barang:"", image:"", deskripsi:"", jenis:"", harga:"", jumlah:""});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    // edit stuff
    putStuff: async (state) =>{
        // console.log("a", a)
        const data = {"resi":state.resi_stuff,'barang':state.barang, 'image':state.image_stuff, 'deskripsi':state.deskripsi_stuff, 'jenis':state.jenis_stuff, 'harga':state.harga_stuff, 'jumlah':state.jumlah_stuff}
        console.log("b", data)
        console.log("tokenz", state.token_id)
        await axios
        .put( Heroku + BaseUrl + "/stuff", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result put stuff",response.data);
            store.setState({Stuff:response.data, barang:"", image:"", deskripsi:"", jenis:"", harga:"", jumlah:""});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    delStuff: async (state) =>{
        // console.log("a", a)
        // const data = {"resi":state.resi_stuff,'barang':state.barang, 'image':state.image_stuff, 'deskripsi':state.deskripsi_stuff, 'jenis':state.jenis_stuff, 'harga':state.harga_stuff, 'jumlah':state.jumlah_stuff}
        // console.log("b", data)
        // console.log("tokenz", state.token_id)
        await axios
        .delete( Heroku + BaseUrl + "/stuff/" + state.resi_stuff, {headers:{'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result put stuff",response.data);
            store.setState({Stuff:response.data, barang:"", image:"", deskripsi:"", jenis:"", harga:"", jumlah:""});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    // post cart
    // getCart: async (state) =>{
    //     await axios
    //     .get( BaseUrl + "/cart", {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
    //     .then(function(response){
    //         console.log("result get cart",response.data);
    //         // store.setState({listUser:response.data});
    //         // console.log("data save user", state.listUser)
    //     })
    //     .catch(function(error){
    //     console.log(error);
    //     });
    // },

    getCart: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .get( Heroku + BaseUrl + "/cart", {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listCart:response.data})
            console.log("respon cart",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    
    getCartAdmin: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .get( Heroku + BaseUrl + "/cart?p=" + state.page, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listCart:response.data})
            console.log("respon cart",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    // post cart
    postCart: async (state) =>{
        // console.log("a", a)
        const data = {'resi':state.id_cart, 'jumlah':state.jumlah_cart}
        console.log("b", data)
        await axios
        .post( Heroku + BaseUrl + "/cart", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result post cart",response.data);
            store.setState({Cart:response.data, status_cart:response.status});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    // put cart
    putCart: async (state) =>{
        // console.log("a", a)
        // var b = state.jml_tambah
        // var c = state.jml_kurang
        // if (b === 0 ) { b=null }
        // if (c === 0 ) { c=null }
        const data = {'id': state.id_cart, 'jumlah_tambah':state.jml_tambah,'jumlah_kurang':state.jml_kurang}
        console.log("b", data)
        await axios
        .put( Heroku + BaseUrl + "/cart", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(function(response){
            console.log("result post cart",response.data);
            store.setState({Cart:response.data});
            // console.log("data save user", state.listUser)
        })
        .catch(function(error){
        console.log(error);
        });
    },

    delCart: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .delete( Heroku + BaseUrl + "/cart/" + state.id_cart , {headers:{'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({Cart:response.data})
            console.log("respon cart",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    delCartAdmin: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .delete( Heroku + BaseUrl + "/cart/" + state.id_cart + "?username=" + state.username, {headers:{'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({Cart:response.data})
            console.log("respon cart",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    // get all bank
    getBank: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .get( Heroku + BaseUrl + "/bank", {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listBank:response.data})
            console.log("respon bank",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    getBankAdmin: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .get( Heroku + BaseUrl + "/bank?p=" + state.page, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listBank:response.data})
            console.log("respon bank",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    // get all bank
    postBank: async (state) => {
        console.log("token-admin", state.token_id.token);
        const data = {
            "nama_bank":state.nama_bank,
            "no_rekening":state.no_rek,
            "nama_pemilik":state.owner,
            "image": state.image_bank
        }
        await axios
        .post( Heroku + BaseUrl + "/bank", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({Bank:response.data})
            console.log("respon bank",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    putBank: async (state, a, b, c, d) => {
        console.log("token-admin", state.token_id.token);
        const data = {
            "nama_bank":a,
            "no_rekening":b,
            "nama_pemilik":c,
            "image": d
        }
        await axios
        .put( Heroku + BaseUrl + "/bank", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listBank:response.data})
            console.log("respon bank",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    delBankAdmin: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .delete( Heroku + BaseUrl + "/bank/" + state.id_bank, {headers:{'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({Bank:response.data})
            console.log("respon cart",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    // get all courier
    getCour: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .get( Heroku + BaseUrl + "/courier", {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listCour:response.data})
            console.log("respon courier",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    getCourAdmin: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .get( Heroku + BaseUrl + "/courier?p=" + state.page, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listCour:response.data})
            console.log("respon courier",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    // get all bank
    postCour: async (state) => {
        console.log("token-admin", state.token_id.token);
        const data = {
            "nama_kurir":state.nama_kurir,
            "mode_pengiriman":state.mode_pengiriman
        }
        await axios
        .post( Heroku + BaseUrl + "/courier", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listBank:response.data})
            console.log("respon bank",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    putCour: async (state, a, b, c, d) => {
        console.log("token-admin", state.token_id.token);
        const data = {
            "id":a,
            "nama_kurir":b,
            "mode_pengiriman":c
        }
        await axios
        .put( Heroku + BaseUrl + "/courier", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listBank:response.data})
            console.log("respon bank",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    delCourAdmin: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .delete( Heroku + BaseUrl + "/courier/" + state.id_kurir, {headers:{'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({Cour:response.data})
            console.log("respon cart",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    getTrans: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .get( Heroku + BaseUrl + "/transaction", {headers:{'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({Trans:response.data})
            console.log("respon transaction",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    getTransAdmin: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .get( Heroku + BaseUrl + "/transaction?p=" + state.page, {headers:{ 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listTrans:response.data})
            console.log("respon transaction",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    postTrans: async (state) => {
        console.log("token-admin", state.token_id.token);
        const data = {
            "pembayaran":state.pembayaran,
            "pengiriman":state.pengiriman,
            "rekening_bayar":state.rek_pembayar,
            "nama_pembayar":state.nama_pembayar
        }
        await axios
        .post( Heroku + BaseUrl + "/transaction", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({Trans:response.data, status_bayar:response.status})
            console.log("respon bank",response);
        })
        .catch(error => {
            console.log(error);
        })
    },

    putTrans: async (state) => {
        // console.log("token-admin", state.token_id.token);
        const data = {
            "status":state.User.id
        }
        await axios
        .put( Heroku + BaseUrl + "/transaction", data, {headers:{'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({Trans:response.data, status_bayar:response.status})
            console.log("respon bank",response);
        })
        .catch(error => {
            console.log(error);
        })
    },

    delTrans: async (state) => {
        // console.log("token-admin", state.token_id.token);
        // const data = {
        //     "status":state.User.id
        // }
        await axios
        .delete( Heroku + BaseUrl + "/transaction", {headers:{'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({Trans:response.data, status_bayar:response.status})
            console.log("respon bank",response);
        })
        .catch(error => {
            console.log(error);
        })
    },

    delTransAdmin: async (state) => {
        // console.log("token-admin", state.token_id.token);
        // const data = {
        //     "status":state.User.id
        // }
        await axios
        .delete( Heroku + BaseUrl + "/transaction/" + state.id_trans, {headers:{'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({Trans:response.data, status_bayar:response.status})
            console.log("respon bank",response);
        })
        .catch(error => {
            console.log(error);
        })
    },

    // get all courier
    getCour: async state => {
        console.log("token-admin", state.token_id.token);
        await axios
        .get( Heroku + BaseUrl + "/courier", {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listCour:response.data})
            console.log("respon courier",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    // get all bank
    postCour: async (state, a, b, c, d) => {
        console.log("token-admin", state.token_id.token);
        const data = {
            "nama_kurir":a,
            "mode_pengiriman":b
        }
        await axios
        .post( Heroku + BaseUrl + "/bank", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listBank:response.data})
            console.log("respon bank",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    putCour: async (state, a, b, c, d) => {
        console.log("token-admin", state.token_id.token);
        const data = {
            "id":a,
            "nama_kurir":b,
            "mode_pengiriman":c
        }
        await axios
        .put( Heroku + BaseUrl + "/bank", data, {headers:{'Access-Control-Content-Type':"application/json", 'Authorization': 'Bearer '+ state.token_id.token, 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            store.setState({listBank:response.data})
            console.log("respon bank",response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    searchStuff: async (state,keyword) => {
        // console.log("search Movie by", keyword);
        if(keyword.length>2){
            try{
                const response = await axios.get(
                    BaseUrl + "/stuff"                 
                );
                console.log("Iki datane",response.data);
                // var parseString = require('xml2js').parseString;
                // var xml = response.data;
                // parseString(xml,
                //     function(err,result){
                //     console.log(result);
                //     if(result.ann.manga !== undefined){store.setState({listNews:result.ann.manga});};
                //     if(result.ann.anime !== undefined){store.setState({listNews:result.ann.anime});}
                // });
                // return state.listNews
            }
            catch (error){
                console.error(error);
            }
        }
    },

    // get admin token
    signIn: async state => {
        console.log('user pass', state.username)
        const data = {"username":state.username, "password":state.password}
        
        await axios
        .post( Heroku + BaseUrl + "/auth", data, {headers:{'Access-Control-Content-Type':"application/json", 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
        .then(response => {
            // if (response.data.type == "admin"){
            store.setState({is_login: true, token_id:response.data, status_code:response.status, username:response.data.username, type:response.data.type})
            console.log("respon login",response.data);
        // })
            
            // if (response.data.hasOwnProperty("id")) {
            //     store.setState({
            //         is_login: true,
            //         id:response.data.id,
            //         type: response.data.type,
            //         username:response.data.username,
            //         password:response.data.password,
            //         fullname:response.data.fullname,
            //         address:response.data.address,
            //         zip_code:response.data.zip_code,
            //         image_user:response.data.image,
            //         status_user:response.data.status
            //     });
            // }
        })
        .catch(error => {
            console.log(error);
        })
    },

    // // get client token
    // signInClient: async state => {
    //     console.log("pass e",state.password)
    //     const data = {"username":state.username, "password":state.password}
        
    //     await axios
    //     .post( BaseUrl + "/auth", data, {headers:{'Access-Control-Content-Type':"application/json", 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Methods":"DELETE, POST,PUT, GET, OPTIONS", "X-Requested-With":BaseUrl}})
    //     .then(response => {
    //         // if (response.data.type == "admin"){
    //         store.setState({is_login: true, token_id:response.data, status_code:response.status})
    //         console.log("respon login",response);
    //     // })
            
    //         // if (response.data.hasOwnProperty("id")) {
    //         //     store.setState({
    //         //         is_login: true,
    //         //         id:response.data.id,
    //         //         type: response.data.type,
    //         //         username:response.data.username,
    //         //         password:response.data.password,
    //         //         fullname:response.data.fullname,
    //         //         address:response.data.address,
    //         //         zip_code:response.data.zip_code,
    //         //         image_user:response.data.image,
    //         //         status_user:response.data.status
    //         //     });
    //         // }
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },

    signOut: state =>{
        store.setState ({is_login: false, token_id:""});
        // store.clear()
    },
});
