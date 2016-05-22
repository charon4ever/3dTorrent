/**
 * Created by Administrator on 2016/1/21.
 */
var Tracker=require('bittorrent-tracker/server');

var server=new Tracker({
    udp:false,
    http:false,
    ws:true
});
server.listen(9090,function(){
    console.log("we strat listen");
});

server.on('listening',function(){
    console.log("start listen requests on",server.http.address());
});
server.on('start',function(peerdId,params){
    console.log("start service:peerId is"+peerdId+"params"+params);
});
server.on('complete',function(peerdId,params){
    console.log("complete service:peerId is"+peerdId+"params"+params);
});
server.on('update',function(peerdId,params){
    console.log("update service:peerId is"+peerdId+"params"+params);
});
server.on('stop',function(peerdId,params){
    console.log("stop service:peerId is"+peerdId+"params"+params);
});
server.ws.on("connection",function(socket){
	console.log("connect:",socket);
});
