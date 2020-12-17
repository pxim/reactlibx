/*
 * @Description: 网页div自适应缩放包围盒
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020/3/31 13:46
 * @LastEditors: pengxiang
 * @LastEditTime: 2020/3/31 13:46
 */
import React from "react";
import PropTypes from "prop-types";
import {pageResponse} from "devlibx";

export class PageAutoSizeWrapper extends React.Component{
    static propTypes = {
        className: PropTypes.string,
        mode: PropTypes.string,
        pageWidth: PropTypes.number,
        pageHeight: PropTypes.number,
        origin: PropTypes.string,
    };
    static defaultProps = {
        className: 'pageSizeWrapper',
        mode : 'contain',
        pageWidth: 1920,
        pageHeight: 1080,
        origin: 'left top 0',
    };
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.handlePageResize = this.handlePageResize.bind(this);
        this.handlePageResize();
        // window.onload = window.onresize = this.handlePageResize;
        window.addEventListener('resize', this.handlePageResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handlePageResize);
    }

    handlePageResize(event) {
        pageResponse({
            selectors : '.' + this.props.className,     //模块选择器，使用querySelectorAll的方法
            mode : this.props.mode,     // auto || contain || cover ，默认模式为auto
            width : this.props.pageWidth,      //输入页面的宽度，只支持输入数值，默认宽度为320px
            height : this.props.pageHeight,      //输入页面的高度，只支持输入数值，默认高度为504px
            origin: this.props.origin,  //缩放中心点，可选，在contain和cover模式下无效，默认为"left top 0"
        })
    }

    render() {
        return(
            <div className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}
