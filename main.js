anime({
    targets: 'div.box',
    translateY:[
        {value: 200, duration: 500},
        {value: 0, duration: 500},
    ],
    // Value in the translateY cooresponds to the distance this div moves along the Y axis
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine'
    },
    delay: function(el, i){
        return i * 1000
    } // for each element: el, this iteration, i, * 1000
});

anime({
    targets: 'svg.donut',
    translateX:[
        {value: 100, duration: 500},
        {value: -100, duration: 1000},
        {value: 0, duration: 500},
    ]
});
