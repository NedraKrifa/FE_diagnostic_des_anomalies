import React from 'react'
import styled from 'styled-components';
import appLogo from "../../../../Assets/Logo.png";

export default function AppLogo({width,style}) {
  return <img src={appLogo} width={width} alt="ProxymTIPS" style={style} />;
}
