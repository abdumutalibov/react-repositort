import React, { Component } from 'react'
import { Back, Crucl, ImgCrucl, MainCrucl, TitleCrucl } from './style'

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
                <Back>
                    {this.props.sty}
                </Back>
                
            </MainCrucl>
            
        )
    }
}
