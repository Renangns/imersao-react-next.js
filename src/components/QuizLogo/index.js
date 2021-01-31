import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <svg width="250" height="67" xmlns="http://www.w3.org/2000/svg">
      <g>
        <title>background</title>
        <rect fill="#044B94" fillOpacity="0.0" id="canvas_background" width="110" height="50" y="-1" x="-1"/>
        <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
        <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%"/>
        </g>
      </g>
      <g>
        <title>Layer 1</title>
        <text fontStyle="normal" fontWeight="normal" textAnchor="start" fontFamily="'Quicksand'" fontSize="32" id="svg_1" y="33.5" x="72.5" strokeWidth="0" stroke="#000" fill="#ffffff">Music Quiz</text>
      </g>
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};




const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;