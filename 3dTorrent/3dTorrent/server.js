/**
 * Created by Administrator on 2016/1/5.
 * This is the server of the dve system,which provide the function of downloading,signaling and tracking
 */

var fs=require('fs');
var express=require('express');
var path=require('path');

var app=express();
app.listen(80);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/peer', function(req, res) {
    res.sendfile(__dirname + '/peer.html');
});
app.get('/send', function(req, res) {
    res.sendfile(__dirname + '/sendPeer.html');
});
app.get('/testP', function(req, res) {
    res.sendfile(__dirname + '/testP2P.html');
});
app.get("/data/sceneData/sceneData.json",function(req,res){
    var url=req.url;
    fs.readFile(url,function(err,data){
        res.send(data);
    });
});
app.get("/data/modelData/"+/\d{4,5}/+".json",function(req,res){
    var url=req.url;
    fs.readFile(url,function(err,data){
        res.send(data);
    });
});
