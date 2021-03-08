import React from 'react'
import appLogo from "../../../../Assets/Logo.png";

export default function AppLogo({width}) {
  return (
    <img
      src={appLogo}
      width={width}
      alt="ProxymTIPS"
      style={{ margin: "0px 10px" }}
    />
  );
}
