import React, { Component } from "react";
import Item from "./Item";
import Crucl from './Crucle'
import Logo from "../img/Bir.png";
import uy from "../img/uy.png";
import Gar from "../img/cat.png";
import Kaw from "../img/kaw.png";
import Res from "../img/gro.png";
import Cal from "../img/cal.png";
import Seet from "../img/set.png";
import Kok from "../img/sar.png";
import Qiz from "../img/qiz.png";
import Jig from "../img/kok.png";

import { LogoTitle, LogoWrapper, Menu, Racers, Sidebar } from "./style";
import { MainCrucl } from "./Crucle/style";

export default class Sidebare extends Component {
  render() {
    return (
      <div>
        <Sidebar>
          <LogoWrapper>
            <img src={Logo} width="26" height="26" />
            <LogoTitle>iffee</LogoTitle>
          </LogoWrapper>
          <Menu>Menu</Menu>
          <Item title="Home" icon={uy} />
          <Item title="Garage" icon={Gar} />
          <Item title="Service Menu" icon={Kaw} />
          <Item title="Racers" icon={Res} />
          <Item title="Calculator" icon={Cal} />
          <Item title="Settings" icon={Seet} />
          <Racers>Scheduled Races</Racers>
          <Crucl title='MotoGP 2022' icons={Kok}/>
          <Crucl title='Dynamics 22' icons={Qiz}/>
          <Crucl title='Olympics' icons={Jig}/>

        </Sidebar>
      </div>
    );
  }
}
