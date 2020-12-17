import React from "react";
import PropTypes from "prop-types";

/*
 * @Description: 友盟统计
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020/4/7 16:50
 * @LastEditors: pengxiang
 * @LastEditTime: 2020/4/7 16:50
 */
export default class ICNZZ extends React.Component{
    static propTypes = {
        apiUrl: PropTypes.string,
        statsUrl: PropTypes.string, //当前统计安装代码的核心内容
    };
    static defaultProps = {
        apiUrl: "",
        statsUrl: "https://v1.cnzz.com/z_stat.php?id=1278849360&web_id=1278849360",
    };
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.install();
    }
    componentWillUnmount() {
    }

    onAddEventTrack(msg, data) {
        this.addEventTrack(data);
        this.addPageViewTrack(data);
    }
    addEventTrack(data) {
        // _czc.push(["_trackEvent",category,action,label,value,nodeid]);
        const _czc = window._czc || [];
        _czc.push(['_trackEvent', data.category, data.action, data.optLabel, data.optValue, '']);
    }
    addPageViewTrack(data) {
        // _czc.push(["_trackPageview",content_url,referer_url]);
        const _czc = window._czc || [];
        // _czc.push(['_trackPageview', '/virtual/login']);
        _czc.push(['_trackPageview', '/' + data.optLabel]);
    }

    install() {
        // document.write('<div style="display:none;">' + code + '</div>');

        // 隐藏cnzz的图标 在统计代码 javascript 中的 ducument.write(unescape("%3Cspan 和 id='cnzz_stat_icon'中间加上 style='display:none;'
        // document.write(unescape("%3Cspan style='display:none;' id='cnzz_stat_icon_1278849360'%3E%3C/span%3E%3Cscript src='https://v1.cnzz.com/z_stat.php%3Fid%3D1278849360%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));

        // document.write(unescape(this.props.statsUrl));

        const hm = document.createElement("script");
        hm.src = this.props.statsUrl;  // "https://hm.baidu.com/hm.js?5fa65c52bd72727ce3d2c0ccdaa7187f"
        const s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);

    }


    render() {
        return(
            <div>
            </div>
        )
    }
}



//cnzz API技术文档
//https://open.cnzz.com/a/new/trackevent/
