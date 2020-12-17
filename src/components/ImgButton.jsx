import React , { useState} from "react";
import {css} from "glamor";
import {isMobile} from "react-device-detect";

/*
 * @Description: 图片按钮
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-07-13 17:08
 * @LastEditors: pengxiang
 * @LastEditTime: 2020-07-13 17:08
 */
export const ImgButton = (props) => {
    const [btnState, setBtnState] = useState('out');
    const [actionEnabled, setActionEnabled] = useState(props.actionEnabled);

    const onOverDiv = event => {
        setBtnState('over');
        // console.log('mouseover');
    };
    const onOutDiv = event => {
        setBtnState('out');
        // console.log('mouseout');
    };
    const onDownDiv = event =>{
        if(actionEnabled === true){return false;}
        props.onDown(event.currentTarget, this);
        // console.log('mousedown');
    };
    const onUpDiv = event => {
        if(actionEnabled === true){return false;}
        props.onUp(event.currentTarget, this);
        // console.log('mouseup');
    };

    // event.preventDefault();
    const onTouchStartDiv = event => {
        setBtnState('over');
        // props.onTouchStart(event.currentTarget, this);
        props.onDown(event.currentTarget, this);
        // console.log('touchstart');
    };
    const onTouchEndDiv = event => {
        setBtnState('out');
        // props.onTouchEnd(event.currentTarget, this);
        props.onUp(event.currentTarget, this);
        // console.log('touchend');
    };

    const setEnabled = bool => {
        // this.actionEnabled = bool;
        setActionEnabled(bool);
    };

    const getImgPath = (href, searchStr, replaceStr)=> {
        searchStr = '_' + searchStr;
        replaceStr = '_' + replaceStr;
        const nowHref =  href.replace(searchStr || '0001', replaceStr || '0002');
        return nowHref;
    };


    // const btnEl = useRef(null);

    // const bgImg = "url("+ img + ")";
    const styles = {
        wrap: css({
            // backgroundImage: "url("+ img + ")",
            // backgroundRepeat: 'no-repeat',
            // width: props.width,
            // height: props.height,
            // width: '100%',
            // height: '100%',
            display:'inline-block',
            touchCallout: 'none',
            userSelect: 'none',
            border: 0,
            outline: 'none',
            hideFocus: "true",
            tabIndex: '-1',
        }),
        img: {
            pointerEvents: 'none',
            // margin: '8px 8px 8px 8px',
            width: props.width || '100%',
            height: props.height || '100%',
        }
    };


    const Img =  <img style={styles.img} alt={props.title}

                      src={btnState === 'over' ? getImgPath(props.img, 'up', 'down') : getImgPath(props.img, 'down', 'up')}
                />;

    return(

        <span>
            {isMobile === false ?
                <div
                    {...styles.wrap}
                    className={props.className}
                    style={props.style}
                    id={props.id}
                    title={props.title}
                    onMouseOver={onOverDiv}
                    onMouseOut={onOutDiv}

                    onMouseDown={onDownDiv}
                    onMouseUp={onUpDiv}

                    // onTouchStart={onTouchStartDiv}
                    // onTouchEnd={onTouchEndDiv}
                    // ref={btnEl}
                >
                    {Img}
                </div>
                :
                <div
                    {...styles.wrap}
                    className={props.className}
                    style={props.style}
                    id={props.id}
                    title={props.title}
                    // onMouseOver={onOverDiv}
                    // onMouseOut={onOutDiv}

                    // onMouseDown={onDownDiv}
                    // onMouseUp={onUpDiv}
                    //
                    onTouchStart={onTouchStartDiv}
                    onTouchEnd={onTouchEndDiv}
                    // ref={btnEl}
                >
                    {Img}
                </div>
            }
        </span>
    );
};



ImgButton.defaultProps = {
    title: '',
    img: '',
    actionEnabled: false,
    width: '100%',
    height: '100%',
    onDown: ()=>{},
    onUp: ()=>{},
    // onTouchStart: ()=>{},
    // onTouchEnd: ()=>{},
};



