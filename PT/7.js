function order(tmp="Hot", coffee=1) {
    if(tmp=='Ice') {
        console.log(`${tmp} 아메리카노 ${coffee}잔은 ${1000*coffee}원`);
    }
    else {
        console.log(`${tmp} 아메리카노 ${coffee}잔은 ${500*coffee}원`);
    }
}
order();
order("Hot", 2);
order("Ice", 3);