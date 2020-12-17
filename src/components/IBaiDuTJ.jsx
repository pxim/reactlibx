/*
 * @Description: 百度统计接口   （度统计商业账号）
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020/3/30 11:28
 * @LastEditors: pengxiang
 * @LastEditTime: 2020/3/30 11:28
 */
import $ from 'jquery';
import React from "react";
import PropTypes from "prop-types";
import {css} from "glamor";

export default class IBaiDuTJ extends React.Component{
    static propTypes = {
        apiUrl: PropTypes.string,
        statsUrl: PropTypes.string, //百度统计代码安装的核心内容
    };
    static defaultProps = {
        apiUrl: '',
        statsUrl: "https://hm.baidu.com/hm.js?5fa65c52bd72727ce3d2c0ccdaa7187f",
    };
    constructor(props) {
        super(props);
        this.state = {
            nTotalPV : 0,
            nTodayPV : 0,
            nTotalVisitTime : 0,
        };

        this.getSitePv = this.getSitePv.bind(this);

        // PubSub.subscribe('res_page_add_event_track', this.onAddEventTrack.bind(this));
    }

    componentDidMount() {
        this.install();
        this.getSitePv();
        this.nTimer = window.setInterval(this.getSitePv, 1000*60*2);
        this.getResData();
    }
    componentWillUnmount() {
        window.clearInterval(this.nTimer);
    }

    onAddEventTrack(msg, data) {
        this.addEventTrack(data);
        this.addPageViewTrack(data);
    }
    addEventTrack(data) {
        // _hmt.push(['_trackEvent', category, action, opt_label, opt_value]);
        // _hmt.push(['_trackEvent', '导航', '点击', '播放按钮']);
        const _hmt = window._hmt || [];
        _hmt.push(['_trackEvent', data.category, data.action, data.optLabel, data.optValue]);
    }
    addPageViewTrack(data) {
        const _hmt = window._hmt || [];
        // _hmt.push(['_trackPageview', '/virtual/login']);
        _hmt.push(['_trackPageview', '/pages/' + data.optLabel]);
    }


    install() {
        const hm = document.createElement("script");
        hm.src = this.props.statsUrl;  // "https://hm.baidu.com/hm.js?5fa65c52bd72727ce3d2c0ccdaa7187f"
        const s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    }
    getSitePv() {
        this.getSiteTotalPv();
        this.getSiteTodayPv();
    }

    getSiteTotalPv() {
        const str = '/api/stats/site/pv/total';
        $.ajax({
            url: this.props.apiUrl + str,
            type:'get',
            // data:data,
            success:(data, status)=>{
                console.log(str, data, status);
                const nData = data["body"]["data"][0]["result"]["pageSum"];
                const nItem = nData[0];
                const totalPv = nItem[0];
                const totalVisitTime = nItem[1] * totalPv;
                this.setState({nTotalPV : totalPv, nTotalVisitTime: totalVisitTime});
            },
            error:(data, status, e)=>{
                console.log(str, data, status, e);
            }
        });
    }

    getSiteTodayPv() {
        const str = '/api/stats/site/pv/today';
        $.ajax({
            url: this.props.apiUrl + str,
            type:'get',
            // data:data,
            success:(data, status)=>{
                console.log(str, data, status);
                const aItems = data["body"]["data"][0]["result"]["items"][1];
                const todayItem = aItems[aItems.length - 1];
                const todayPv = todayItem[0];
                this.setState({nTodayPV: todayPv});
                // this.updateTJPVData(nData);
            },
            error:(data, status, e)=>{
                console.log(str, data, status, e);
            }
        });
    }

    getResData() {
        const str = '/api/stats/res/page/data';
        $.ajax({
            url: this.props.apiUrl + str,
            type:'get',
            // data:data,
            success:(data, status)=>{
                console.log(str, data, status);
            },
            error:(data, status, e)=>{
                console.log(str, data, status, e);
            }
        });
    }

    render() {
        return(
            <div className={styles.wrapper}>
                <span className={styles.txt} > 总PV：{this.state.nTotalPV} </span>
                {/*<span className={styles.txt} > 昨日IP：{this.state.nYesterdayIP} </span>*/}
                {/*<span className={styles.txt} > 昨日PV：{this.state.nYesterdayPV} </span>*/}
                {/*<span className={styles.txt} > 今日IP：{this.state.nTodayIP} </span>*/}
                <span className={styles.txt} > 今日PV：{this.state.nTodayPV} </span>

                {/*<span className={styles.txt} > 当前在线：{this.state.nTotalUV} </span>*/}
                {/*<span className={styles.txt} > 总时长：{this.state.nTotalTime} </span>*/}
            </div>
        )
    }
}


const styles = {
    wrapper: css({
        // position: 'absolute',
        border:'0px solid red',
        borderRadius: '5px',
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        fontSize: '12px',
    }),
    txt: css({
        // display: 'inline-block',
        // display:'block',
        // float: 'left',
        // clear: 'both',
        margin: '3px 3px 3px 3px',
        padding: '0',
        color: '#ffffff',
    }),
};




// 百度统计账号  必须要用百度商业账号，才能获取到token

// 百度统计登录网址
// https://tongji.baidu.com/web/welcome/login

// token获取教程
// https://blog.csdn.net/weixin_42327911/article/details/102758904

// token 获取
// https://ziyuan.baidu.com/linksubmit/index
// id获取
// https://tongji.baidu.com/web/10000173986/trend/latest?siteId=14930853

// Tongji API调试工具
// https://tongji.baidu.com/api/debug/#

//统计api文档
// https://tongji.baidu.com/api/manual/Chapter1/getSiteList.html
// https://tongji.baidu.com/open/api/more?p=tongjiapi_getData.tpl

//api使用
// https://tongji.baidu.com/open/api/more?p=tongjiapi_getData.tpl




//post测试工具
// http://coolaf.com/zh/tool/gp


