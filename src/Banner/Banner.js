import React, { useState } from 'react'
import './Banner.scss'

function Banner() {


    return (
        <>
            <div className='Banner'>
                <div className='imgLeft'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZD-SfOGjH56SvPm4CJZcfsubk3Dvh89QwqmkzeHRG_WcNKeZWPE1ykIflXFS_gj3loD0&usqp=CAU' />
                </div>
                <div className='imgRight'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNUoygeWNt-ppaSNRUPSf17Ui2aZ1scBgw9Lbn9K-_fM1_UThHPYS117QwNA1kenLEAo&usqp=CAU' />
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7fIoR1jmWLPoVvMl9dyvEd8NlWwyDUU0WrT573O8k7Vhkkw85rx9pNNdQDkVH0GFVp0&usqp=CAU' />
                </div>
            </div>

        </>

    )
}

export default Banner