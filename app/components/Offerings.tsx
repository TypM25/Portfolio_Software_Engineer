"use client";
import { Card, Col, Row } from "antd";
import { useEffect, useRef, useState } from "react";

export default function Offerings() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => setVisible(entries[0].isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const items = [
    { title: "Web Development", desc: "React, Next.js, Node.js, PostgreSQL" },
    { title: "Dashboards & Data Visualization", desc: "Admin panels, charts, filters" },
    { title: "Desktop/IoT Integrations", desc: "Electron.js, Arduino sensors" },
  ];
  return (
    <div ref={ref} className={`mt-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <h3 className="text-2xl md:text-3xl font-semibold m-0">WHAT I’M OFFERING</h3>
      <Row gutter={[24, 24]}>
        {items.map((o, i) => (
          <Col xs={24} md={8} key={i}>
            <Card>
              <Card.Meta title={<span className="text-lg md:text-xl">{o.title}</span>} description={<span className="text-base md:text-lg text-zinc-600">{o.desc}</span>} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}