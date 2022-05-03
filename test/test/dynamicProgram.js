

// 3 days get highest expect
 const arr = [
     {name:"天安门广场",day:0.5,value:9},
     {name:"故宫",day:2,value:9},
     {name:"颐和园",day:1,value:9},
     {name:"八达岭长城",day:0.5,value:7},
     {name:"天坛",day:0.5,value:6},
     {name:"圆明园",day:1,value:8},
     {name:"恭王府",day:0.5,value:5}
    ];

function getBestTour(arr,daySize){
    const arr2 = [[]];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<daySize;j++){
            if(i==0){
                arr2[i][j] = arr[i]
            }else{
                let spareSpace = j+1 - arr[i].day;
                if(spareSpace<0){
                    arr2[i][j] =  arr2[i-1][j] 
                }else{
                    let preRow = i -1
                    let preRowValue = arr2[preRow][j].value
                    let curTourVal = arr[i].value
                    if(spareSpace>0) curTourVal+=arr2[preRow][spareSpace-1].value
                    if(preRowValue >= curTourVal){
                        arr2[i][j] = arr2[preRow][j]
                    }else{
                        if(spareSpace==0){
                            arr2[i][j] = el(curTourVal,arr[i])
                        }else{
                            
                        }
                    }
                }

            }
        }
    }
}