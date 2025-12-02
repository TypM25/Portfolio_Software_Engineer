"use client";
import Image from "next/image";
import university from "@/public/university.png";
import iron from "@/public/iron.png";
import dashboard from "@/public/dashboard.png";
import bank from "@/public/bank.png";
import { Card, Col, Row } from "antd";
import { useEffect, useRef, useState } from "react";

export default function CaseStudyGrid() {
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
  const projects = [
    { name: "University Simulation Website", note: "Roles: Student/Teacher/Admin, chat & grading" , image: university},
    { name: "Iron QC App (Electron.js)", note: "Arduino test rig, pass/fail analytics" , image: iron },
    { name: "QC Dashboard", note: "Factory quality control visualization" , image: dashboard },
    { name: "Bank Dashboard Website", note: "Deposit data per user with filters", image: bank },
  ];
  return (
    <div ref={ref} className={`mt-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <h3 className="text-2xl md:text-3xl font-semibold m-0">PROJECTS</h3>
      <Row gutter={[24, 24]}>
        {projects.map((p, i) => (
          <Col xs={24} md={12} lg={8} key={i}>
            <Card
              cover={
                <div className="relative w-full h-48">
                  <Image
                    src={p.image}
                    alt="case"
                    fill
                    className="object-contain"
                  />
                </div>
              }
            >
              <Card.Meta
                title={<span className="text-lg md:text-xl">{p.name}</span>}
                description={<span className="text-base md:text-lg text-zinc-600">{p.note}</span>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
