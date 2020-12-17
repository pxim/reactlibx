import React , { useState, useRef } from "react";
import {css} from "glamor";
import {ImgButton} from "./ImgButton";

/*
 * @Description: 带标题的背景卡片
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020/7/6 13:31
 * @LastEditors: pengxiang
 * @LastEditTime: 2020/7/6 13:31
 */
export const TitleCard = (props) => {

    const styles = {
        warp:css({
            // position: 'relative',
            backgroundColor: 'rgba(0, 0, 0, 0.40)',
            // border:'5px solid red',
            borderRadius:'5px',
            // background:  "url(static/image/tree_bar_bg.png) repeat-x", //no-repeat // #00FF00 url(bgimage.gif) no-repeat fixed top;
            height: '100%',
            color:'#ffffff',
        }),
    };

    return(
        <div className={props.className || styles.warp}  >
            <div style={{ position: 'relative', top: '5px', color:'#ffffff'}} >
                <span style={{textAlign: 'center', display:'block',}}>{props.title || ''}</span>
            </div>
            <div style={{position: 'relative', top: '8px', left: '2%'}}>
                <div style={{display:'block',  width: '96%', height: '1px', borderTop: 'solid 1px', borderTopColor:props.lineColor || '#ffffff'}}> </div>
            </div>
            <div style={{position: 'relative', top: '10px', height: '100%', color:'#ffffff'}}>
                {props.children}
            </div>
            {props.close ? <ImgButton style={{position:"absolute", top:'2px', right:'2px', cursor:'pointer'}} src={props.close} onDown={()=>{props.onDownClose(this);}}/> : null}

        </div>
    );
};

TitleCard.defaultProps = {
    close: null, //是否具有 关闭按钮？如有，则 填图片地址 ：否则，空着
    onDownClose: ()=>{}, //关闭按钮点击事件
    title: '', //标题
    children: null, //
};
