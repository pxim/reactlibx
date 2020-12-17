import React , { useState, useEffect, useRef } from "react";
// import Player from 'griffith';
import 'video.js/dist/video-js.css';
import videojs from 'video.js'
import './style.less';

/*
 * @Description:
 * @Author: 彭祥 (Email:245803627@qq.com)
 * @Date: 2020-09-02 09:30
 * @LastEditors: 24580
 * @LastEditTime: 2020-09-02 09:30
 */

let player = null;
export const CVideo = (props) => {

    // const sources = {
    //     hd: {
    //         play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    //         width: 1920,
    //         height: 1080,
    //         bitrate: 0,
    //         duration: 0,
    //         format: 'mp4',
    //         size: 0,
    //     },
    //     // sd: {
    //     //     play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
    //     // },
    // };


    const videoNode = useRef(null);
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        sources: [{
            src: props.src || '', // https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4
            type: 'video/mp4'
        }],
        // preload: 'auto',
        controlBar: {
            volumePanel: {
                inline: false //默认是true,横着的bai
            },
            // liveDisplay: true,
            pictureInPictureToggle: false,
        },
        // fluid: true,
        // width: '100%',
        // height: '100%',
    };

    useEffect(()=>{
        player = videojs(videoNode.current, videoJsOptions, ()=>{
            console.log('onPlayerReady');
        });

        return ()=>{
            if (player) {
                player.dispose()
            }
        }
    }, []);

    useEffect(()=>{
        if(player){
            player.src(props.src);
        }
    }, [props.src])

    return (
        <div className={props.className}>
            {/*<Player id={''} sources={sources} cover={''} duration={0} standalone={false} disablePictureInPicture={false}/>*/}
            <div data-vjs-player>
                <video playsInline ref={videoNode} className={"vjs-big-play-centered video-js custom-video"}></video>
            </div>

            {/*<video playsInline className={'custom-video'} controls={true} autoPlay={true} name="media">*/}
            {/*    <source src={'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4'} type={'video/mp4'} />*/}
            {/*</video>*/}
        </div>
    );

};

CVideo.defaultProps = {
    className: '',
    src: '';
}
