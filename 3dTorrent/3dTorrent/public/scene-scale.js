/**
 * Created by Administrator on 2016/1/5.
 */

/* @param {Object=} opts
 * @param {int} opts.maxX
 * @param {int} opts.minX
 * @param {int} opts.maxY
 * @param {int} opts.minY
 * @param {int} opts.stepX
 * @param {int} opts.stepY 
 * */
function SceneScale(opts){
    var self=this;
    self.minX=opts.minX;
    self.minY=opts.minY;
    self.maxX=opts.maxX;
    self.maxY=opts.maxY;
    if(self.minX>=self.maxX||self.minY>=self.maxY){
        console.log("wrong input:min>=max");
        throw new Error("wrong input");
    }
    self.stepX=opts.stepX;
    self.stepY=opts.stepY;
    var xLength=self.maxX-self.minX;
    var yLength=self.maxY-self.minY;
    if(self.stepX>xLength||self.stepY>yLength){
        console.log("wrong input:grid>length");
        throw new Error("wrong input");
    }
    self.gridX=Math.ceil((self.maxX-self.minX)/self.stepX);
    self.gridY=Math.ceil((self.maxY-self.minY)/self.stepY);
}

/* @param {Object=} ps
 * @param {int} ps.x
 * @param {int} ps.y
 * */
SceneScale.prototype.locateCell=function(ps){
    var self=this;
    if(ps.x<this.maxX && ps.y<this.maxY && ps.x>this.minX && ps.y>this.minY) {
        this.xCell =Math.ceil((ps.x - this.minX) / this.stepX);
        this.yCell =Math.ceil((ps.y - this.minY) / this.stepY);
    }else{
        console.log("position (%d,%d) is not in the range (%d,%d)-(%d,%d)",ps.x,ps.y,self.minX,self.minY,self.maxX,self.maxY);
    }
};