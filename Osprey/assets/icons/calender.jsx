import * as React from "react"
import Svg, { Path } from "react-native-svg";

const Calender = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
  <Path d="M18 2V5M6 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M19.5 3.5H4.5C3.39543 3.5 2.5 4.39543 2.5 5.5V20C2.5 21.1046 3.39543 22 4.5 22H19.5C20.6046 22 21.5 21.1046 21.5 20V5.5C21.5 4.39543 20.6046 3.5 19.5 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M2.5 8.5H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export default Calender;