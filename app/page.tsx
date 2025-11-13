"use client";
import "@ant-design/v5-patch-for-react-19";
import Hero from "./components/Hero";
// import CategoryBar from "./components/CategoryBar";
import Offerings from "./components/Offerings";
import ExperienceList from "./components/ExperienceList";
import CaseStudyGrid from "./components/CaseStudyGrid";
import Sections, { SkillsScroll } from "./components/Sections";
import { useEffect, useState } from "react";
import {
  Layout,
  Menu,
  Button,
  Dropdown,
  Typography,
  Row,
  Col,
  Space,
  Divider,
  Switch,
  ConfigProvider,
  theme,
} from "antd";
import {
  MailOutlined,
  GithubOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches;
  });
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }, [isDark]);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, []);

  const baseNavItems = [
    { key: "about", label: "ABOUT" },
    { key: "skills", label: "SKILLS" },
    { key: "offerings", label: "OFFER" },
    { key: "experience", label: "EXP" },
    { key: "projects", label: "WORKS" },
  ];
  const mobileExtras = [
    {
      key: "download",
      label: (
        <span className="inline-flex">
          <a href="/cv.pdf" download onClick={(e) => e.stopPropagation()}>
            <Button shape="round" size="small">Download CV</Button>
          </a>
        </span>
      ),
    },
  ];
  const sideNavItems = baseNavItems;
  const mobileMenu = { items: [...baseNavItems, { type: "divider" as const }, ...mobileExtras] };

  const handleSideNavClick = (key: string) => {
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const headerStyle = {
    position: "sticky" as const,
    top: 0,
    zIndex: 1000,
    backdropFilter: "saturate(180%) blur(8px)",
    background: isDark ? "rgba(11,18,32,0.85)" : "rgba(255,255,255,0.9)",
    borderBottom: `1px solid ${isDark ? "#223049" : "#e5e7eb"}`,
    paddingInline: 24,
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "transparent" }}>
      {/* Top Navigation (minimal) */}
      <Header style={headerStyle} className="text-base md:text-lg">
        {isMobile ? (
          <Row align="middle" justify="space-between">
            <Col>
              <Text strong style={{ fontSize: 16 }}>Portfolio</Text>
            </Col>
            <Col>
              <Space>
                <Button
                  shape="circle"
                  onClick={() => setIsDark(!isDark)}
                  aria-label={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
                >
                  {isDark ? "🌙" : "☀️"}
                </Button>
                <Dropdown
                  menu={{
                    ...mobileMenu,
                    onClick: ({ key }) => {
                      if (["download"].includes(key as string)) return;
                      handleSideNavClick(key as string);
                    },
                  }}
                  overlayClassName="mobile-menu"
                  placement="bottomRight"
                >
                  <Button shape="circle" icon={<EllipsisOutlined />} />
                </Dropdown>
              </Space>
            </Col>
          </Row>
        ) : (
          <Row align="middle" justify="space-between">
            <Col>
              <Text strong style={{ fontSize: 16 }}>Portfolio</Text>
            </Col>
            <Col flex="auto">
              <Menu
                mode="horizontal"
                items={sideNavItems}
                onClick={(e) => handleSideNavClick(e.key as string)}
                overflowedIndicator={<EllipsisOutlined />}
                style={{ background: "transparent" }}
              />
            </Col>
            <Col>
              <Space>
                <a href="/cv.pdf" download>
                  <Button shape="round" className="h-10 px-5 text-base md:text-lg">Download CV</Button>
                </a>
                <Switch
                  checked={isDark}
                  onChange={(checked) => setIsDark(checked)}
                  checkedChildren="NIGHT"
                  unCheckedChildren="DAY"
                />
              </Space>
            </Col>
          </Row>
        )}
      </Header>

      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: isDark
            ? {
                colorPrimary: "#4C8DFF",
                colorBgBase: "#0B1220",
                colorTextBase: "#E6E9FF",
                colorBorder: "#223049",
                colorBgContainer: "#0F1629",
                fontFamily:
                  "Golane, Montserrat, Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
              }
            : {
                colorPrimary: "#4C8DFF",
                colorBgBase: "#ffffff",
                colorTextBase: "#0B1220",
                colorBorder: "#4C8DFF",
                colorBgContainer: "#ffffff",
                fontFamily:
                  "Golane, Montserrat, Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
              },
        }}
      >
        <Content className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 md:py-14 lg:py-20 ">
          <Space direction="vertical" size={32} style={{ width: "100%" }}>
            <div id="about" className="section-anchor">
              <Hero />
            </div>
            <Divider/>
            <Sections />
            <Divider/>
            <div id="skills" className="section-anchor">
              <SkillsScroll />
            </div>
            <div id="offerings" className="section-anchor">
              <Offerings />
            </div>
            <div id="experience" className="section-anchor">
              <ExperienceList />
            </div>
            <div id="projects" className="section-anchor">
              <CaseStudyGrid />
            </div>
           
          </Space>
        </Content>
      </ConfigProvider>

      <Footer style={{ background: "transparent" }}>
        <Row justify="space-between" align="middle">
          <Col>
            <h2 >Gmail :</h2>
            <Text >thanyamusik@gmail.com</Text>
          </Col>
          <Col>
            <Space>
              <Button shape="round" icon={<GithubOutlined />} href="https://github.com/TypM25?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</Button>
              <Button shape="round" icon={<MailOutlined />} href="mailto:thanyamusik@gmail.com">Email</Button>
            </Space>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}
