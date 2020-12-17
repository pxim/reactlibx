/*
 * @Description: 树列表
 * @Author: 彭祥 (Email:px.i@foxmail.com QQ:245803627)
 * @Date: 2020-06-23 10:17
 * @LastEditors: pengxiang
 * @LastEditTime: 2020-06-23 10:17
 */
import React , { useState, useRef } from "react";
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.dark.css';
import './styles/antd.dark.custom.css';
import { Tree } from 'antd';
import {TitleCard} from "./TitleCard";

const { TreeNode } = Tree;
// const treeData = [
//     {
//         title: '0-0',
//         key: '0-0',
//         children: [
//             {
//                 title: '0-0-0',
//                 key: '0-0-0',
//                 // children: [
//                 //     {
//                 //         title: '0-0-0-0',
//                 //         key: '0-0-0-0',
//                 //     },
//                 // ],
//             },
//             {
//                 title: '0-0-1',
//                 key: '0-0-1',
//             },
//             {
//                 title: '0-0-2',
//                 key: '0-0-2',
//             },
//         ],
//     }
// ];

export const TreeList = (props) => {
    // props.onCheck = ()=>{};
    const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1']);
    // const [checkedKeys, setCheckedKeys] = useState(['0-0-0']);
    const [checkedKeys, setCheckedKeys] = useState(['0-0']);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);

    const onExpand = expandedKeys => {
        // console.log('onExpand', expandedKeys); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.

        setExpandedKeys(expandedKeys);
        setAutoExpandParent(false);
    };

    const onCheck = checkedKeys => {
        // console.log('onCheck', checkedKeys);
        setCheckedKeys(checkedKeys);

        if(props.onCheck){props.onCheck(checkedKeys);}
    };

    const onSelect = (selectedKeys, info) => {
        // console.log('onSelect', info);
        setSelectedKeys(selectedKeys);
    };

    // const treeListEl = useRef(null);
    // const [treeListElDisplay, setTreeListElDisplay] = useState(true);
    // const onDownArrow = (event) => {
    //     // treeListEl.current.style.right = '-100%';
    //
    //     setTreeListElDisplay(false);
    //     treeListEl.current.style.right = treeListElDisplay === true ? '0' : '-90%';
    // };

    return (
        <div style={props.style}  >
            <TitleCard title={props.title} lineColor={props.lineColor} >
                <Tree style={{position:'relative', top: '10px', color:'#ffffff'}}
                      checkable
                      onExpand={onExpand}
                    // expandedKeys={expandedKeys}
                    // autoExpandParent={autoExpandParent}
                      onCheck={onCheck}
                      checkedKeys={checkedKeys}
                      onSelect={onSelect}
                      selectedKeys={selectedKeys}
                    // treeData={treeData}
                      treeData={props.data}
                    // expandAction = {false}
                    //   width={300}
                      height={props.treeHeight || 530}
                    //   height={'100%'}
                    // showLine
                      defaultExpandAll={true}
                      selectable={false}
                />
            </TitleCard>
        </div>
    );
};



