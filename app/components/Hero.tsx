"use client";
import { Avatar, Button, Row, Col, Space } from "antd";

export default function Hero() {
  return (
    <Row gutter={[32, 32]} align="middle">
      <Col xs={24} md={14}>
        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight m-0">
            Hello! I’m Pin.
          </h1>
          <p className="text-xl md:text-2xl">Software Engineer</p>
          <p className="text-zinc-600 md:text-xl max-w-[520px]">
            Computer Engineering student with hands‑on experience in Software Engineer web development and IoT projects. Proficient in React, Next.js, Node.js, and PostgreSQL.
          </p>
          
          <Space wrap>
            <Button type="primary" shape="round" className="h-11 px-6 text-base md:text-lg">
              Build dashboards and robust APIs
             
            
            </Button>
            <Button shape="round" className="h-11 px-6 text-base md:text-lg">
               Solve problems with clean UX
            </Button>
             <Button shape="round" className="h-11 px-6 text-base md:text-lg">
               Teamwork, critical thinking, and adaptability
            </Button>
              
          </Space>
        </Space>
      </Col>
      <Col xs={24} md={10} style={{ textAlign: "center" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <div
            style={{
              position: "absolute",
              top: -30,
              left: -30,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, #ffd6e7, transparent 60%), radial-gradient(circle at 70% 30%, #d6f5ff, transparent 60%), radial-gradient(circle at 50% 70%, #fff3bf, transparent 60%)",
              filter: "blur(12px)",
            }}
          />
          <Avatar shape="square" size={260} src="/me.jpg" style={{ border: "1px solid #eee" }} />
        </div>
      </Col>
    </Row>
  );
}
