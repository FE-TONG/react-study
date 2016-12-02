
import React from 'react'

import Card from './card'
const TitleBar = Card.TitleBar
const Title = Card.Title
const ContentBar = Card.ContentBar
const Content = Card.Content

var AntStudy = React.createClass({
    getInitialState:function () {
        return {
            current:2
        }
    },
    render:function () {
        return (
            <div>
                <Card current={this.state.current}>
                    <TitleBar>
                        <Title index={1} onClick={(e)=>this.setState({current:1})}>title-111</Title>
                        <Title index={2} onClick={(e)=>this.setState({current:2})}>title-222</Title>
                        <Title index={3} onClick={(e)=>this.setState({current:3})}>title-333</Title>
                    </TitleBar>

                    <ContentBar>
                        <Content index={1}>content-111</Content>
                        <Content index={2}>content-222</Content>
                        <Content index={3}>content-333</Content>
                    </ContentBar>

                </Card>
            </div>
        )
    },
    handleClick:function (index) {
        this.setState({
            current:index
        })
    }

})

export default AntStudy