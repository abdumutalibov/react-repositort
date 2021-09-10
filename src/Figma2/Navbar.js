import React, { Component } from "react";
import "./Navbar.css";
import {
  Card,
  Crkle,
  Get,
  Home,
  Hoow,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Lets,
  Linee,
  Livin,
  Lucos,
  Main,
  Our,
  Paset,
  Pasete,
  Pasete2,
  Spice,
  Text1,
  Text10,
  Text11,
  Text12,
  Text13,
  Text2,
  Text3,
  Text4,
  Text5,
  Text6,
  Text7,
  Text8,
  Text9,
} from "./style";
import Uy from "./img/uy.png";
import Rang from "./img/rang.png";
import Kres from "./img/kres.png";
import Devan from "./img/devan.png";
import Erow from "./img/errow.png";
import Pasha from "./img/pasha.png";
import Room from "./img/room.png";
import Room2 from "./img/room2.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Main">
        <Card>
          <Home>
            <img src={Uy} />
          </Home>
          <Lucos>
            Locus
            <Text1>
              Home
              <Text2>Contact </Text2>
              <Text2> Locatin</Text2>
              <Text2>
                {" "}
                About Us<Text3>Sign Up</Text3>
              </Text2>
            </Text1>
          </Lucos>
        </Card>
        <Get>Get the inspiration </Get>
        <Get>of interior design </Get>
        <Get>
          here
          <Text4>architecture not only about </Text4>
          <Text4>engineering, it even lands to </Text4>
          <Text4>you will get a residentical </Text4>
          <Text4>design with an extrationary </Text4>
          <Text4>touch of art. </Text4>
          <Lets>
            Let's go
            <Img2>
              <img src={Rang} />
            </Img2>
            <Img1>
              <img src={Kres} />
            </Img1>
          </Lets>
          <Hoow>
            How it works
            <Spice> Spice up your space even </Spice>
            <Spice> simpler than you think</Spice>
            <Img3>
              <img src={Devan} />

              <Text5>
                <Text6>We provide design and build </Text6>
                <Text6>for commercial building, </Text6>
                <Text6>interior and furniture to improve </Text6>
                <Text6>the better life.</Text6>
                <Text7>SEE VIDEO</Text7>
              </Text5>

              <Crkle>
                <img src={Erow} />
              </Crkle>
            </Img3>
            <Img4>
              <img src={Pasha} />

              <Text8>
                <Text9>Our missino is to </Text9>
                <Text9>deliver aesthetic visual </Text9>
                <Text9>for your home</Text9>
                <Pasete></Pasete>
                <Text10>By applying bacis psychology principles, </Text10>
                <Text10>we are going to explain how perception </Text10>
                <Text10>works and how we can use this understanding </Text10>
                <Text10>to maximise the space that we occupy in </Text10>
                <Text10>our homes.</Text10>
              </Text8>
            </Img4>
            <Our>Our project</Our>
            <Text11>Introducing our first official project</Text11>
            <Linee></Linee>
            <Linee></Linee>
            <Pasete2></Pasete2>
            <Livin>Project Livingroom</Livin>
            <Text12>A simple guide to create the perfect livingro-</Text12>
            <Text12> om for . Night Watc works beautifully in a wi- </Text12>
            <Text12>de gamut of arrangements. </Text12>
            <Img5>
              <img src={Room} />
            </Img5>
            <Img6>
              <img src={Room2} />
            </Img6>
            <Text13>Project workspace</Text13>
          </Hoow>
        </Get>
      </div>
    );
  }
}
