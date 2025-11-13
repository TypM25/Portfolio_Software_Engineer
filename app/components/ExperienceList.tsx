"use client";
import { List, Space, Tag } from "antd";

import { useEffect, useRef, useState } from "react";

export default function ExperienceList() {
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
  const data = [
    {
      title: "NU Robot Club",
      desc: "Organized Science Fair, mentored juniors in robotics demos.",
      years: "2023–2024",
    },
  ];

  return (
    <div ref={ref} className={`mt-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <h3 className="text-2xl md:text-3xl font-semibold m-0">EXPERIENCE</h3>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Space>
                  <span className="text-lg md:text-xl">{item.title}</span>
                  <Tag>{item.years}</Tag>
                </Space>
              }
              description={<span className="text-base md:text-lg text-zinc-600">{item.desc}</span>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}