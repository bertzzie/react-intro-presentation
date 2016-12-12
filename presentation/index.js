// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  Table, TableHeaderItem, TableRow, TableItem
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

require("./slides.css")

const images = {
  helloReactFiles: require("../assets/hello-react-files.png"),
  reactAnim: require("../assets/react-anim.gif"),
  reactLogo: require("../assets/react-logo.svg"),
  tokopediaOffice: require("../assets/tokopedia-office.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#00BD54",
  secondary: "#FFF"
}, {
  primary: { name: "Droid Serif", googleFont: true, styles: ["400", "700i"] },
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgImage={images.tokopediaOffice.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} fit lineHeight={1}>
              react.js:
            </Heading>
            <Heading size={1} fit>
              An Introduction
            </Heading>
            <Text margin="20px 0px 0px" italic textColor="#FFF">
              Alex Xandra Albert Sim - Skipper
            </Text>
          </Slide>

          <Slide transition={["slide", "zoom"]} bgColor="#FFF" textColor="primary">
            <Heading size={1} textColor="primary">react.js?</Heading>
            <ul className="item-list">
              <li><Appear fid="1"><Text textColor="primary">UI Library</Text></Appear></li>
              <li><Appear fid="2"><Text textColor="primary">Component Based</Text></Appear></li>
              <li><Appear fid="3"><Text textColor="primary">Declarative, efficient, flexible</Text></Appear></li>
              <li><Appear fid="4"><Text textColor="primary">Let's see some code!</Text></Appear></li>
            </ul>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading fit>
              Starting Command
            </Heading>
            <ul className="command-list">
              <li>
                <Appear fid="1">
                  <Code>$ npm install -g create-react-app</Code>
                </Appear>
              </li>
              <li>
                <Appear fid="2">
                  <Code>$ create-react-app &lt;app-name&gt;</Code>
                </Appear>
              </li>
              <li>
                <Appear fid="3">
                  <Code>$ cd &lt;app-name&gt;</Code>
                </Appear>
              </li>
              <li>
                <Appear fid="4">
                  <Code>$ npm start </Code>
                </Appear>
              </li>
            </ul>
          </Slide>

          <Slide transition={["zoom", "fade"]} className="fill-content">
            <Layout style={{ alignItems: "center", justifyContent: "center" }}>
              <Fill>
                <Heading className="side-header" textSize="4rem">Starting Files</Heading>
              </Fill>
              <Fill>
                <Image src={images.helloReactFiles.replace("/", "")} />
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide 
            transition={["zoom", "fade"]}
            lang="jsx"
            code={require("raw!../assets/code/0-App.example")}
            ranges={[
              { loc: [0, 17], title: "App.js" },
              { loc: [0, 3], title: "(ES6) Imports" },
              { loc: [4, 5], title: "Compnent Creation" },
              { loc: [5, 12], title: "Render function" }
            ]} />

          <Slide transition={["slide", "zoom"]} style={{margin: 0, padding: 0}}>
              <Image src={images.reactAnim.replace("/", "")} style={{margin: 0, width: "100%"}} />
          </Slide>

          <CodeSlide 
            transition={["zoom", "fade"]}
            lang="jsx"
            code={require("raw!../assets/code/0-App.example")}
            ranges={[
              { loc: [5, 12], title: "Render function" },
              { loc: [14, 15], title: "Export" }
            ]} />

            <CodeSlide
              transition={["zoom", "fade"]}
              lang="html"
              code={require("raw!../assets/code/1-index-html.example")}
              ranges={[
                { loc: [0, 9], title: "HTML" },
                { loc: [6, 7], title: "React Root Element" }
              ]}
            />

            <CodeSlide
              transition={["zoom", "fade"]}
              lang="jsx"
              code={require("raw!../assets/code/2-index-js.example")}
              ranges={[
                { loc: [1, 4], title: "ReactDOM" },
                { loc: [5, 10], title: "Render to DOM"}
              ]}
            />

            <Slide transition={["fade", "zoom"]}>
              <Heading size={2}>State and Lifecycle</Heading>
            </Slide>

            <CodeSlide
              transition={["zoom", "fade"]}
              lang="jsx"
              code={require("raw!../assets/code/3-App-state-didmount.example")}
              ranges={[
                { loc: [5, 8], title: "(Initial) State" },
                { loc: [9, 10], title: "Lifecycle" },
                { loc: [10, 16], title: "Set State" },
                { loc: [32, 39], title: "Use State Data" }
              ]}
              />

              <Slide transition={["slide", "fade"]}>
                <Heading className="mini-heading">React Lifecycle</Heading>
                <Table className="lifecycle-table">
                  <thead>
                    <TableRow>
                      <TableHeaderItem>Method</TableHeaderItem>
                      <TableHeaderItem>Fungsi</TableHeaderItem>
                    </TableRow>
                  </thead>
                  <tbody>
                    <TableRow>
                      <TableItem><Code>componentWillMount</Code></TableItem>
                      <TableItem>Mounting</TableItem>
                    </TableRow>
                    <TableRow>
                      <TableItem><Code>componentDidMount</Code></TableItem>
                      <TableItem>Mounting</TableItem>
                    </TableRow>
                    <TableRow>
                      <TableItem><Code>componentWillReceiveProps</Code></TableItem>
                      <TableItem>Updating</TableItem>
                    </TableRow>
                    <TableRow>
                      <TableItem><Code>shouldComponentUpdate</Code></TableItem>
                      <TableItem>Updating</TableItem>
                    </TableRow>
                    <TableRow>
                      <TableItem><Code>componentWillUpdate</Code></TableItem>
                      <TableItem>Updating</TableItem>
                    </TableRow>
                    <TableRow>
                      <TableItem><Code>componentDidUpdate</Code></TableItem>
                      <TableItem>Updating</TableItem>
                    </TableRow>
                    <TableRow>
                      <TableItem><Code>componentWillUnmount</Code></TableItem>
                      <TableItem>Unmounting</TableItem>
                    </TableRow>
                  </tbody>
                </Table>
              </Slide>

            <Slide transition={["fade", "zoom"]}>
              <Heading size={2}>Props</Heading>
            </Slide>

            <CodeSlide 
              transition={["zoom", "fade"]}
              lang="jsx"
              code={require("raw!../assets/code/4-Video.example")}
              ranges={[
                { loc: [0, 1], title: "Imports" },
                { loc: [16, 29], title: "Prop Types"},
                { loc: [3, 15], title: "Prop Usage" }
              ]}
              />

              <CodeSlide 
                transition={["zoom", "fade"]}
                lang="jsx"
                code={require("raw!../assets/code/5-Video-usage.example")}
                ranges={[
                  { loc: [0, 1], title: "Import" },
                  { loc: [9, 15], title: "Usage" },
                ]}
              />

              <Slide transition={["fade", "slide"]}>
                <Heading>Q & A</Heading>
              </Slide>

              <Slide transition={["fade", "slide"]}>
                <Heading>Thank you!</Heading>
              </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
