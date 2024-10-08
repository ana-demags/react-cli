import React, { useState } from "react";

import { ReactTerminal } from "react-terminal";

import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState("ana");

  const themes = {
    ana: {
      themeBGColor: "#09181A",
      themeToolbarColor: "#09181A",
      themeColor: "#EDEDED",
      themePromptColor: "#EDEDED",
      errorColor: "#FFABAB",
      successColor: "#9EFF9E",
      linkColor: "#7DC0FF",
    },
    // matrix: {
    //   themeBGColor: "#0D0208",
    //   themeToolbarColor: "#0D0208",
    //   themeColor: "#00FF41",
    //   themePromptColor: "#008F11",
    //   errorColor: "#008F11",
    //   successColor: "#008F11",
    //   linkColor: "#00FF41",
    //},
    // ocean: {
    //   themeBGColor: "#224fbc",
    //   themeToolbarColor: "#216dff",
    //   themeColor: "#e5e5e5",
    //   themePromptColor: "#00e5e5",
    //   errorColor: "#e5e500",
    //   linkColor: "#e5e5e5",
    // },
    // test: {
    //   themeBGColor: "#fdf6e4",
    //   themeToolbarColor: "#d8d8d8",
    //   themeColor: "#333",
    //   themePromptColor: "#4495D4",
    //   errorColor: "#FF443E",
    //   successColor: "#5B9E47",
    //   linkColor: "#4495D4",
    // },
  };

  const error = {
    color: themes[theme].errorColor,
    fontWeight: "regular",
  };
  const success = {
    color: themes[theme].successColor,
    fontWeight: "regular",
  };
  const link = {
    color: themes[theme].linkColor,
    textDecoration: "underline",
    cursor: "pointer",
  };

  const indent1 = { marginLeft: 16 };
  const indent2 = { marginLeft: 32 };

  const minMessageLength = 10;
  const maxMessageLength = 1500;
  const minFromLength = 2;
  const maxFromLength = 25;

  const isMobile = window.matchMedia("(max-width: 550px)").matches;

  const welcomeMessage = (
    <span>
      Welcome! Type and run `tips` (without the backticks) for a list of ways to
      get started.
      <br />
      <br />
    </span>
  );

  function validateMessage(input) {
    const cleanedMessage = input
      .replace(/^['"`]|^\[/, "")
      .replace(/['"`]$|\]$/, "");
  }

  const commands = {


    intro: (input) => {
      // this introduces bio
      if (!input) {
        return (
          <span>
            <br></br>Howdy! I'm Ana, a San Francisco-based Product Designer with
            a background in Clinical Counseling and an affinity for developer
            tools, accessibility, and Developer Experience. These days, you can
            find me at <a href="https://www.apollographql.com">ApolloGraphQL</a>
            , where I work with several of our Engineering teams leading design
            spanning Apollo’s web app, CLI, and{" "}
            <a href="https://www.apollographql.com">Odyssey</a>, our open-source
            education platform.<br></br>
          </span>
        );
      }
    },

    contact: (input) => {
      if (!input) {
        return (
          <ul>
            <a href="https://read.cv/anademags" target="_blank">
              resume
            </a>{" "}
            <br></br>
            <a
              href="https://www.linkedin.com/in/anademagalhaes/"
              target="_blank"
            >
              linkedin
            </a>
            <br></br>
            <a href="mailto:anademags@gmail.com" target="_blank">
              email
            </a>
          </ul>
        );
      }
    },

    work: (input) => {
      // this list total number of projects
      if (!input) {
        return (
          <ul>
            📄{" "}
            <a href="link.com" target="_blank">
              schema-proposals.txt
            </a>{" "}
            <br></br>
            📄{" "}
            <a href="link.com" target="_blank">
              graph-visualization.txt
            </a>
            <br></br>
            📄{" "}
            <a href="link.com" target="_blank">
              graphos-onboarding.txt
            </a>
          </ul>
        );
      }
    },

    tips: (input) => {
      if (!input) {
        return (
          <span>
            <br></br>
            Available commands:
            <ul>
              <span>👋🏽 intro: tells you a bit about me ◡̈</span>
              <br></br>
              <span>📁 work: lists available projects</span>
              <br></br>
              <span>
                📨 contact: lists quick links to resume, email, and linkedin
              </span>
              <br></br>
              <span>🧽 clear: tidies up your terminal window</span>
            </ul>
          </span>
        );
      }
    },
  };

  return (
    <div
      className="text-class"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#EDEDED",
      }}
    >
      <div
        style={{
          height: 560,
          maxHeight: "100vh",
          width: 800,
          maxWidth: "100vw",
          padding: "24px",
        }}
      >
        <ReactTerminal
          commands={commands}
          prompt="$"
          welcomeMessage={welcomeMessage}
          errorMessage={
            <span style={error}>
              Command not found. Run `help` for a list of available commands.
            </span>
          }
          themes={themes}
          theme={theme}
        />
      </div>
    </div>
  );
}
