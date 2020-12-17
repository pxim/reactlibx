import React from "react";
import {css} from "glamor";

/*
 * @Description: 图像中间文本 （一个 带图像和文本，文本在图像正中间的组件）
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-07-09 14:55
 * @LastEditors: pengxiang
 * @LastEditTime: 2020-07-09 14:55
 */
export const ImgMiddleText = (props) => {
    // console.log(props);

    const styles = {
        warp:css({ //根节点的css设置参考
            position: 'absolute',
            // fontFamily:'微软雅黑',
            // fontWeight: 'Regular', //bold
            fontSize: props.fontSize || '30px',
            color: props.color || 'white', //#5AD58D
            left: props.left || '50%',
            // right: '50%',
            top: props.top || '20px',
            transform: 'translate(-50%)',
            // translateX:'(-50%)',
            pointerEvents: 'none',
            // backgroundColor: 'rgba(0, 0, 0, 0.40)',
            // borderRadius:'5px',
            // background:  "url(static/image/bg_title.png) no-repeat", //no-repeat
            // width: '520px',
            // height: '70px',
            // padding: '0 10px 0 10px',
        }),
        txt:css({
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
        })
    };

    return(
        <div className={props.className || styles.warp} >
            <img src={props.img || ''} />
            <div className={styles.txt}>{props.txt || ''} </div>
        </div>
    );
};

