"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, MessageSquare, FileX, CalendarX, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import Image from "next/image";

const problems = [
  {
    icon: <FileX className="h-6 w-6" />,
    title: "A4 출력물 + 단톡방 사진",
    description: "수행평가 공지 방식이 여전히 아날로그 방식에 의존하여 정보가 쉽게 유실됩니다.",
    stat: "공지 유실률 40%",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "친구가 사진 안 올리면 일정 누락",
    description: "단톡방에서 메시지가 섞여 내려가고, 친구가 깜빡하면 중요한 공지를 놓칩니다.",
    stat: "누락 발생률 50%",
  },
  {
    icon: <CalendarX className="h-6 w-6" />,
    title: "변경 사항 전달 어려움",
    description: "마감일이나 준비물이 변경되어도 모든 학생에게 정확히 전달하기 어렵습니다.",
    stat: "변경사항 미전달 30%",
  },
  {
    icon: <AlertCircle className="h-6 w-6" />,
    title: "준비물 오류·마감일 혼동",
    description: "정확한 준비물과 마감일 정보를 확인하지 못해 평가에서 불이익을 받는 경우가 발생합니다.",
    stat: "준비물 오류 25%",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "학부모는 정확한 정보를 얻기 어려움",
    description: "학생이 깜빡하면 학부모는 일정을 알 길이 없고, 정확한 준비물을 챙겨주기 어렵습니다.",
    stat: "정보 격차 60%",
  },
];

const problemData = [
  { category: "공지 유실", rate: 40 },
  { category: "일정 누락", rate: 50 },
  { category: "변경사항 미전달", rate: 30 },
  { category: "준비물 오류", rate: 25 },
  { category: "정보 격차", rate: 60 },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            중학생 수행평가,<br />왜 이렇게 어렵게 전달될까?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            매일 쏟아지는 수행평가, 하지만 공지 방식은 여전히 제자리에 머물러 있습니다.
            중요한 정보를 놓치고, 혼란스러웠던 경험, 없으셨나요?
          </p>
        </div>

        {/* 문제 통계 그래프 */}
        <div className="mb-16">
          <Card className="shadow-lg border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold text-foreground mb-8 text-center">
                현재 방식의 문제점 통계
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={problemData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="category" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  />
                  <YAxis 
                    label={{ value: '발생률 (%)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      padding: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    }}
                    labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 'bold', marginBottom: '4px' }}
                    itemStyle={{ color: 'hsl(var(--primary))' }}
                    cursor={{ fill: 'hsl(var(--muted) / 0.2)' }}
                  />
                  <Bar dataKey="rate" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]}>
                    <LabelList dataKey="rate" position="top" fill="hsl(var(--destructive))" fontSize={12} fontWeight="bold" formatter={(val: any) => `${val}%`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* 문제 카드 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-destructive hover:scale-[1.02] bg-card">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-destructive/10 rounded-xl text-destructive flex-shrink-0 group-hover:bg-destructive group-hover:text-destructive-foreground transition-colors">
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2 text-lg group-hover:text-destructive transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="inline-block px-3 py-1 text-xs font-semibold text-destructive bg-destructive/10 rounded-full">
                      {problem.stat}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 비주얼 설명 */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group border border-border">
            <Image
              src="/teacher.png"
              alt="칠판의 수행평가 공지 - 학생이 폰으로 찍는 모습"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-700 bg-gray-100 dark:bg-gray-900"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end transition-opacity duration-300">
              <div className="p-8 text-white w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-destructive/20 p-3 rounded-full w-fit mb-4 backdrop-blur-sm">
                  <FileX className="h-8 w-8 text-white" />
                </div>
                <p className="text-xl font-bold mb-2">칠판의 수행평가 공지</p>
                <p className="text-sm opacity-90 leading-relaxed text-gray-200">
                  학생들은 칠판의 공지를 폰으로 찍어서 단톡방에 올립니다.<br/>
                  하지만 화질이 좋지 않거나, 중요한 내용이 잘리는 경우가 많습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group border border-border">
            <Image
              src="/cacao.png"
              alt="카톡 단톡방에서 메시지가 섞여 내려가는 화면"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-700 bg-gray-100 dark:bg-gray-900"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end transition-opacity duration-300">
              <div className="p-8 text-white w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-blue-500/20 p-3 rounded-full w-fit mb-4 backdrop-blur-sm">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <p className="text-xl font-bold mb-2">카톡 단톡방의 한계</p>
                <p className="text-sm opacity-90 leading-relaxed text-gray-200">
                  수많은 잡담 속에 중요한 공지가 묻혀버립니다.<br/>
                  "공지 어디 갔어?"라고 묻는 친구들 때문에 스트레스받지 않으셨나요?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
