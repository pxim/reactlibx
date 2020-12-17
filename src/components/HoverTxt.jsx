import React from "react";
import PropTypes from "prop-types";

/*
 * @Description: 鼠标悬停文本
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020/5/6 13:22
 * @LastEditors: pengxiang
 * @LastEditTime: 2020/5/6 13:22
 */
export class HoverTxt extends React.Component{
    static propTypes = {
        textContent: PropTypes.string,  //图片数组
        visible: PropTypes.bool,
        x: PropTypes.number,
        y: PropTypes.number,
    };
    static defaultProps = {
        textContent: 'HoverTxt',
        visible: true,
        x: 0,
        y: 0,
    };

    constructor(props) {
        super(props);
        this.state = {
            textContent: this.props.textContent,
            visible: this.props.visible,
            x: this.props.x,
            y: this.props.y,
        };
    }

    componentDidUpdate() {
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }

    setVisible(visible, textContent, x, y) {
        this.setState({
            visible: visible,
            textContent: textContent,
            x: x,
            y: y,
        });
    }

    render() {
        const styles = {
            display: this.state.visible ? 'block' : 'none',
            position: 'absolute',
            left: this.state.x + 'px',
            top: this.state.y + 'px',
            color: 'white',
            fontSize: '20px',
            zIndex: '500',
            pointerEvents: 'none',
            margin: 0,
            borderRadius: '5px',
            marginTop: '-1em',
            padding: '2px 5px 2px 5px',
            backgroundColor: 'rgba(0, 0, 0, 0.50)',
        };

        return(
            <div className={this.props.className} style={styles} >
                {this.state.textContent}
            </div>
        )
    }
}
