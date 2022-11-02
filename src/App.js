import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InternshipGuide from '../src/components/internshipGuide'
import Overview from '../src/components/overview'

function App() {


  return (
    <section className="flex   ">
     <Overview/>
     <InternshipGuide/>
    </section>
  );
}

export default App;

// const Input = styled.input`
//   width: 100%;
//   padding: 1px;
//   height: 25px;
//   background-color: rgba(0, 0, 0, 0.1);
// `;
