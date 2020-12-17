import React , { useState, useEffect} from "react";
import {css} from "glamor";
import {ImgButton} from "./ImgButton";

/*
 * @Description: 图片Tab按钮
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-10-14 17:38
 * @LastEditors: PengXiang
 * @LastEditTime: 2020-10-14 17:38
 */
export const ImgTabButton = (props) => {

    useEffect(()=>{

        return ()=>{};
    }, []);

    return(
        <div>
            {
                props.data.map((item, i)=>
                    <span>
                        <div
                            className={props.className}
                            key={i}
                            title={item.title || ''}
                        >
                            <img src={item.img || ''} alt={item.title || ''}/>
                        </div>
                    </span>
                )
            }
        </div>
    )
};


ImgTabButton.defaultProps = {
    // data: [], //按钮数组
    data:[
        {id:'1', title: '1a', img:'static/image/btn_R_0001.png'},
        {id:'2', title: '2a', img:'static/image/btn_N_0001.png'},
        {id:'3', title: '2a', img:'static/image/btn_D_0001.png'}
    ]
};
