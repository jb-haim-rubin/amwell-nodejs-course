function getBeef(whenBeefIsReadyFunction) {
    const beef = 'Beef' //Do something that take long time
    whenBeefIsReadyFunction(beef)
}

function cookBeef(beef, whenCookBeefReadyFunction) {
    const beefCooked = beef + '_cooked' //Do something that take long time
    whenCookBeefReadyFunction(beefCooked)
}

function getBuns(whenBunsIsReadyFunction) {
    const buns = 'buns' //Do something that take long time
    whenBunsIsReadyFunction(buns)
}

function putBeefBetweenBuns(buns, beef, whenBurgerIsReadyFunction) {
    const cookedBeefInsideBuns = beef + ' inside ' + buns + ' = burger'
    whenBurgerIsReadyFunction(cookedBeefInsideBuns)
}

const makeBurger = (onBurgerReady) => {
    getBeef(function (beef) {
        cookBeef(beef, function (cookedBeef) {
            getBuns(function (buns) {
                putBeefBetweenBuns(buns, cookedBeef, function (burger) {
                    onBurgerReady(burger)
                })
            })
        })
    })
}

makeBurger(function (burger) {
    console.log(burger)
})
