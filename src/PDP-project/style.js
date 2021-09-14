import styled from "styled-components";
import React from "react";

const StyledTitle = styled.div`
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  width: ${(props) => props.width};
`;
export const Title = (props) => {
  return <StyledTitle {...props} />;
};

export const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  /* flex-direction: column; */
  flex: 1;
  width: 1449px;
  height: 882px;
  background: #f3f1fd; ;
`;
export const Container2 = styled.div`
  width: 1200px;
  /* display:flex; */
  /* justify-content: center; */
  height: 882px;
  /* background: #F3F1FD; */
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1200px;
  height: 128px;

  background: #ffffff;
  box-shadow: 4px 1px 22px 2px rgba(102, 82, 218, 0.1);
  border-radius: 15px;
  /* margin:0 120px 0 120px; */
`;

export const Trust = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 77px 0;

  /* width: 662px;
height: 29px; */

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  /* text-transform: capitalize; */

  /* Black */

  color: #3d3d3d;
`;

export const Micro = styled.div`
  display: flex;
  justify-content: space-between;

  /* background-color:red; */

  /* padding:30px; */
`;

export const Browse = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 46px;
  text-transform: capitalize;

  /* Black */

  color: #3d3d3d;
  display: flex;
  justify-content: center;
`;
