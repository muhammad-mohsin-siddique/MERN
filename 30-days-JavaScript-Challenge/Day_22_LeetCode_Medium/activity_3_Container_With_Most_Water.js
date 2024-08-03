var maxArea = function(height) {
    let i = 0, j = height.length - 1;
    let maximumVolume = 0;
    while(i < j){
        if(height[i] >= height[j]){
            maximumVolume = Math.max(maximumVolume, height[j] * (j-i));
            j--;
        }else{
            maximumVolume = Math.max(maximumVolume, height[i] * (j-i));
            i++;
        }
    }

    return maximumVolume;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]));