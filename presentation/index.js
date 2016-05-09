// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
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
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  facebookV8: require("../assets/facebook-j1.jpg"),
  facebookWork: require("../assets/facbook-work.png"),
  workflow: require("../assets/workflow.png"),
  slackMoney: require("../assets/slackMoney.png"),
  email: require("../assets/email-slack.png"),
  wechat: require("../assets/wechat.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="tertiary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Funworking Groupware
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Trend?</ListItem></Appear>
              <Appear><ListItem>Goals?</ListItem></Appear>
              <Appear><ListItem>Specification?</ListItem></Appear>
              <Appear><ListItem>Tech?</ListItem></Appear>
              <Appear><ListItem>Schedule?</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={4} caps fit textColor="primary" textFont="primary">
              Trend
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.facebookV8.replace("/", "")} margin="0px auto 40px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.facebookWork.replace("/", "")} margin="0px auto"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Office, messaging and verbs</Quote>
              <Cite>Benedict Evans</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.workflow.replace("/", "")} margin="0px auto"/>
            <Image src={images.wechat.replace("/", "")} margin="0px auto"/>
            <Image src={images.slackMoney.replace("/", "")} margin="0px auto"/>
            <Image src={images.email.replace("/", "")} margin="0px auto"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={4} caps fit textColor="primary" textFont="primary">
              Goals & Concept
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                For Developer
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                Intelligence Bots
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="primary">
                Easy Custom
              </Heading>
            </Appear>
            <Appear fid="4">
              <Heading size={2} caps fit textColor="tertiary">
                With Connect
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={4} caps fit textColor="primary" textFont="primary">
              Specification
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>조직관리</ListItem></Appear>
              <Appear><ListItem>전자결재</ListItem></Appear>
              <Appear><ListItem>일정관리</ListItem></Appear>
              <Appear><ListItem>프로젝트관리</ListItem></Appear>
              <Appear><ListItem>SNS</ListItem></Appear>
              <Appear><ListItem>메모</ListItem></Appear>
              <Appear><ListItem>이메일</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={4} caps fit textColor="primary" textFont="primary">
              Tech
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                React + Reduce
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                React Native
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={4} caps fit textColor="primary" textFont="primary">
              And Server ?
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                Spring Boot + JPA ?
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                Node JS ?
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="primary">
                Scala ?
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={4} caps fit textColor="primary" textFont="primary">
              Schedule
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                React 익숙해지기 + 기본 디자인
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                SNS , 조직도만 우선 2016. 05
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                0.1v milestone
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                SNS , 조직도만 우선 2016. 07
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                0.2v milestone
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                일정관리, 전자결재 Start 2016. 12
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                0.3v milestone
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                Refactoring + Reduce 2017. 02
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                0.4v milestone
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                Design  2017. 04
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                0.5v milestone => Alpha
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                전자결재, SNS 강화 2017.05
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                0.6v milestone
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                일정관리 강화, 프로젝트관리 2017.08
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                Beta milestone
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                2018년 초 가능하면 같이 모여서 20일정도만 코딩!
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={4} caps fit textColor="primary" textFont="primary">
              번외 (SNS 기획의도?)
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="primary">
                With Connect by Everythings
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                Relation Article
              </Heading>
            </Appear>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
