import React from 'react';

import './css/Portpolio.css';

import PortItem from './PortItems';
//props로 전달해줘야 할것 name lang link imgLink
class Portfolio extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="Container_Port">
                <div className="itemContainer">
                    <PortItem className="watch" name="React Watch" lang="React(JS)" link="http://mgt-react-port2.herokuapp.com" word="watch" about="React로 만든 시계 입니다"/>
                    <PortItem className="snow" name="Canvas Snow" lang="Canvas" link="http://mgtsweb.dothome.co.kr" word="snow" about="Canvas를 이용한 눈내리기 효과"/>
                    <PortItem className="todo" name="To do List" lang="React(JS)" link="http://mgt-todo-list.herokuapp.com" word="todo" about="할일 목록 리스트" />
                    <PortItem className="introduce" name="Introduce Site" lang="React(JS)" link="http://mgt-react-port1.herokuapp.com" word="introduce" about="React로 만든 자기소개 페이지"/>
                    <PortItem className="counter" name="Redux Counter" lang="React(JS)" link="http://mgt-redux-counter.herokuapp.com" word="counter" about="Redux를 사용한 카운터" />
                    <PortItem className="never" name="Never(크롬 개추)" lang="Naver API" link="http://mgt-react-express.herokuapp.com" word="never" about="네이버 검색 API" />
                </div>
            </div>
        )
    }
}

export default Portfolio;