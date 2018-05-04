class Parameter{
   static getCoverImg(pageNum,itemCount){
        let map = new Map();
        map.set('ac', 'getCoverImg')
            .set('pageNum', pageNum)
            .set('itemCount', itemCount);
        return map
    }

    static getCoverImgDetailed(irType,pageNum,itemCount){
        let map = new Map();
        map.set('ac', 'getCoverImg')
            .set('irType', irType)
            .set('pageNum', pageNum)
            .set('itemCount', itemCount);
        return map
    }
}

export default Parameter;