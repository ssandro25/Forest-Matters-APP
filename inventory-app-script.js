function requiredShow () {
    let notRequiredItem = document.querySelectorAll('.not_required_item')

    notRequiredItem.forEach(node => node.setAttribute('not-required', 'true'))

    if (document.querySelector('.not_required_item').hasAttribute('not-required', 'true')) {
        document.getElementById('itemOne').style.order='1'
        document.getElementById('itemTwo').style.order='2'
        document.getElementById('itemThree').style.order='3'
        document.getElementById('itemFour').style.order='4'
        document.getElementById('itemFive').style.order='5'
        document.getElementById('itemSix').style.order='6'
        document.getElementById('itemSeven').style.order='7'
        document.getElementById('itemEight').style.order='8'
        document.getElementById('itemNine').style.order='9'
        document.getElementById('itemTen').style.order='10'
        document.getElementById('itemEleven').style.order='11'
        document.getElementById('itemTwelve').style.order='12'
        document.getElementById('itemThirteen').style.order='13'
        document.getElementById('itemFourteen').style.order='14'
        document.getElementById('itemFiveteen').style.order='15'
        document.getElementById('itemSixteen').style.order='16'
        document.getElementById('itemSeventeen').style.order='17'
        document.getElementById('itemEightteen').style.order='18'
        document.getElementById('itemNineteen').style.order='19'
        document.getElementById('itemTwenty').style.order='20'
        document.getElementById('itemTwentyOne').style.order='21'
        document.getElementById('itemTwentyTwo').style.order='22'
        document.getElementById('itemTwentyThree').style.order='23'
        document.getElementById('itemTwentyFour').style.order='24'
        document.getElementById('itemTwentyFive').style.order='25'
        document.getElementById('itemTwentySix').style.order='26'
        document.getElementById('itemTwentySeven').style.order='27'
        document.getElementById('itemTwentyEight').style.order='28'
        document.getElementById('itemTwentyNine').style.order='29'
        document.getElementById('itemThirty').style.order='30'
        document.getElementById('itemThirtyOne').style.order='31'
        document.getElementById('itemThirtyTwo').style.order='32'
        document.getElementById('itemThirtyThree').style.order='33'
        document.getElementById('itemThirtyFour').style.order='34'
    }
}

function notRequiredShow () {
    let notRequiredItem = document.querySelectorAll('.not_required_item')

    notRequiredItem.forEach(node => node.setAttribute('not-required', 'false'))

    if (document.querySelector('.not_required_item').hasAttribute('not-required', 'false')) {
        document.getElementById('itemOne').style.order=''
        document.getElementById('itemTwo').style.order=''
        document.getElementById('itemThree').style.order=''
        document.getElementById('itemFour').style.order=''
        document.getElementById('itemFive').style.order=''
        document.getElementById('itemSix').style.order=''
        document.getElementById('itemSeven').style.order=''
        document.getElementById('itemEight').style.order=''
        document.getElementById('itemNine').style.order=''
        document.getElementById('itemTen').style.order=''
        document.getElementById('itemEleven').style.order=''
        document.getElementById('itemTwelve').style.order=''
        document.getElementById('itemThirteen').style.order=''
        document.getElementById('itemFourteen').style.order=''
        document.getElementById('itemFiveteen').style.order=''
        document.getElementById('itemSixteen').style.order=''
        document.getElementById('itemSeventeen').style.order=''
        document.getElementById('itemEightteen').style.order=''
        document.getElementById('itemNineteen').style.order=''
        document.getElementById('itemTwenty').style.order=''
        document.getElementById('itemTwentyOne').style.order=''
        document.getElementById('itemTwentyTwo').style.order=''
        document.getElementById('itemTwentyThree').style.order=''
        document.getElementById('itemTwentyFour').style.order=''
        document.getElementById('itemTwentyFive').style.order=''
        document.getElementById('itemTwentySix').style.order=''
        document.getElementById('itemTwentySeven').style.order=''
        document.getElementById('itemTwentyEight').style.order=''
        document.getElementById('itemTwentyNine').style.order=''
        document.getElementById('itemThirty').style.order=''
        document.getElementById('itemThirtyOne').style.order=''
        document.getElementById('itemThirtyTwo').style.order=''
        document.getElementById('itemThirtyThree').style.order=''
        document.getElementById('itemThirtyFour').style.order=''
    }
}