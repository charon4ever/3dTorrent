/**
 * Created by Administrator on 2015/7/27.
 */
importScripts("/matrix4.js");

onmessage=function(event){
    var geometry=null;
    var node=null;
    switch (event.data.type){
        case "waitForLoad":
            node=event.data.node;
            geometry=event.data.geometry;
            handleWaitList(node,geometry);
            break;
        case "done":
            geometry=event.data.geometry;
            node=event.data.node;
            handleDone(node,geometry);
            break;
        default:break;
    }
};

function handleDone(node,geometry){
    var qGeometry=geometry;
    for(var p=0;p<geometry.vertices.length;p++){
        var a=new Matrix4(geometry.vertices[p].x,geometry.vertices[p].y,geometry.vertices[p].z,
            1,0,0,0,0,0,0,0,0,0,0,0,0);
        var tempMatrix=new Matrix4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
        tempMatrix.multiplyMatrices(a,node.finalTransform);
        qGeometry.vertices[p].x= tempMatrix.elements[0];
        qGeometry.vertices[p].y= tempMatrix.elements[8];
        qGeometry.vertices[p].z= tempMatrix.elements[4];
    }
    postMessage({type:"done",qGeometry:qGeometry});
}

function handleWaitList(node,geometry){
    var fGeometry=geometry;
    for(var p=0;p<geometry.vertices.length;p++){
        var a=new Matrix4(geometry.vertices[p].x,geometry.vertices[p].y,geometry.vertices[p].z,
                1,0,0,0,0,0,0,0,0,0,0,0,0);
        var tempGeometry=new Matrix4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
        tempGeometry.multiplyMatrices(a,node.finalTransform);
        fGeometry.vertices[p].x= tempGeometry.elements[0];
        fGeometry.vertices[p].y= tempGeometry.elements[8];
        fGeometry.vertices[p].z= tempGeometry.elements[4];
    }
    postMessage({type:"waitForLoad",fGeometry:fGeometry});
}

