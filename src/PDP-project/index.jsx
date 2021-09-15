import React, { Component } from "react";
import Card from './Card'
// import bosh from './img/Bosh.png'
import bosh from "./img/Co.png";
import Imgss from "./imgs";
import Textss from "./Textss";
import Go from "./img/bosh.png";
import Goo from "./img/sss.png";
import Ui from "./img/Ui.png";
import al from "./img/alteryx.png";
import gu from "./img/google.png";
import ibn from "./img/ibm.png";
import mi from "./img/microsoft.png";
import mod from "./img/mode.png";
import { Browse, Container, Container2, Line, Line2, Main, Micro, Trust } from "./style";
// import { Text1 } from './imgs/style'

export default class index extends Component {
  render() {
    return (
      <Container>
        <Container2>
          <Main>
            <Imgss title="10000+ Online Course" icon={bosh} />
            <Imgss title="Expert Instruction" icon={Go} />
            <Imgss title="Lifetime Access" icon={Goo} />
          </Main>

          <Trust>Trusted By 500+ Leading Universiting And Companies </Trust>
          <Micro>
            <Textss text="" icon={Ui} />
            <Textss text="" icon={al} />
            <Textss text="" icon={gu} />
            <Textss text="" icon={ibn} />
            <Textss text="" icon={mi} />
            <Textss text="" icon={mod} />
          </Micro>
          <Browse>Browse Online Course Categoryies</Browse>
          <Line><Line2/></Line>
          <Card title='das' icon={mi}/>
        </Container2>
      </Container>
    )
  }
}
