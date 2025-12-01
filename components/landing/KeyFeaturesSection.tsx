"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CalendarDays, Bell, ListChecks, UserCog, ShieldCheck, Gem } from "lucide-react";

const features = [
  {
    icon: <CalendarDays className="h-8 w-8" />,
    title: "수행평가 자동 캘린더",
    description: "모든 수행평가를 과목별, 날짜별로 자동 정리하여 한눈에 파악할 수 있습니다. 월간/주간 보기로 충돌 일정을 미리 확인하세요.",
    color: "primary",
  },
  {
    icon: <Bell className="h-8 w-8" />,
    title: "놓칠 수 없는 알림 기능",
    description: "마감일 하루 전, 당일 아침에 자동 알림을 보내드립니다. 일정이 변경되면 즉시 알려주어 중요한 공지를 놓치지 않습니다.",
    color: "secondary",
  },
  {
    icon: <ListChecks className="h-8 w-8" />,
    title: "준비물 체크리스트",
    description: "평가별로 필요한 준비물이 자동으로 표시됩니다. 간편한 체크 UI로 빠짐없이 준비물을 챙길 수 있습니다.",
    color: "accent",
  },
  {
    icon: <UserCog className="h-8 w-8" />,
    title: "교사용 공지 관리",
    description: "반별, 과목별 공지 등록이 간편해집니다. 한 번의 등록으로 모든 학생과 학부모에게 정확한 정보가 전달됩니다.",
    color: "primary",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "안심 학부모 뷰",
    description: "자녀의 수행평가 일정만 깔끔하게 모아봅니다. 변경사항을 실시간으로 안내받아 자녀의 학습을 효과적으로 지원할 수 있습니다.",
    color: "secondary",
  },
  {
    icon: <Gem className="h-8 w-8" />,
    title: "뱃지 & 동기부여 시스템",
    description: "수행평가를 놓치지 않고 확인할 때마다 특별한 뱃지를 지급합니다. 게임처럼 재미있게 성취감을 느끼며 성장할 수 있습니다.",
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    icon: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20 hover:border-primary/50",
  },
  secondary: {
    icon: "text-secondary-foreground",
    bg: "bg-secondary",
    border: "border-secondary/50 hover:border-secondary",
  },
  accent: {
    icon: "text-accent-foreground",
    bg: "bg-accent",
    border: "border-accent/50 hover:border-accent",
  },
};

export default function KeyFeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            핵심 기능, 한눈에 보기
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            무한수행은 교사, 학생, 학부모 모두의 불편함을 해소하기 위해
            설계된 스마트한 기능들을 제공합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <Card 
                key={index} 
                className={`flex flex-col hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 bg-card ${colors.border}`}
              >
                <CardHeader>
                  <div className={`mb-6 p-4 rounded-2xl ${colors.bg} w-fit transition-transform group-hover:scale-110`}>
                    <div className={colors.icon}>
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
