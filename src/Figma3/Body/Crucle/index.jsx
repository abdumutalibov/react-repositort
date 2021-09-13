import React, { Component } from 'react'
import { Crucl, ImgCrucl, MainCrucl, TitleCrucl } from './style'

export default class index extends Component {
    render() {
        return (
            <MainCrucl>
                <ImgCrucl>
                
                <img src={this.props.icons}/>
                </ImgCrucl>
                <TitleCrucl>
                    {this.props.title}
                </TitleCrucl>
            </MainCrucl>
            
        )
    }
}
