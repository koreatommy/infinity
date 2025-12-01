"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, BookOpen, FileText, Smartphone, Users, CheckCircle2, ArrowDown } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: <UserPlus className="h-6 w-6" />,
    title: "교사 가입",
    description: "간단한 이메일 인증만으로 교사 계정을 생성하고 바로 시작하세요.",
    color: "primary",
  },
  {
    step: 2,
    icon: <BookOpen className="h-6 w-6" />,
    title: "반/과목 등록",
    description: "담당하는 반과 과목을 등록하여 관리 체계를 설정합니다.",
    color: "secondary",
  },
  {
    step: 3,
    icon: <FileText className="h-6 w-6" />,
    title: "수행평가 공지 등록",
    description: "평가 일정, 준비물, 상세 내용을 입력하면 준비가 완료됩니다.",
    color: "accent",
  },
  {
    step: 4,
    icon: <Smartphone className="h-6 w-6" />,
    title: "학생 앱 자동 연결",
    description: "학생들은 학교 코드로 간편하게 앱에 연결되어 공지를 받습니다.",
    color: "primary",
  },
  {
    step: 5,
    icon: <Users className="h-6 w-6" />,
    title: "학부모 연동",
    description: "학부모님도 앱을 통해 실시간으로 자녀의 일정을 확인합니다.",
    color: "secondary",
  },
];

const colorClasses = {
  primary: {
    icon: "text-primary",
    bg: "bg-primary/10",
    badge: "bg-primary hover:bg-primary/90",
  },
  secondary: {
    icon: "text-secondary-foreground",
    bg: "bg-secondary",
    badge: "bg-secondary-foreground hover:bg-secondary-foreground/90",
  },
  accent: {
    icon: "text-accent-foreground",
    bg: "bg-accent",
    badge: "bg-accent-foreground hover:bg-accent-foreground/90",
  },
};

export default function OnboardingSection() {
  return (
    <section id="onboarding" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            10분이면 충분합니다
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            복잡한 절차 없이, 5단계로 간편하게 시작하는 무한수행 도입 가이드
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* 연결선 (데스크톱) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20" />

          <div className="grid md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              return (
                <div key={step.step} className="relative group">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className={`w-24 h-24 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 relative z-10 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-border`}>
                      <div className={colors.icon}>{step.icon}</div>
                      <Badge className={`absolute -top-3 -right-3 w-8 h-8 p-0 flex items-center justify-center rounded-full border-2 border-background ${colors.badge}`}>
                        {step.step}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* 화살표 (모바일) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-6 text-muted-foreground/30">
                      <ArrowDown className="h-6 w-6 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-lg">
            <p className="text-foreground font-medium flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              지금 도입하면 <span className="text-primary font-bold">첫 1개월 무료</span> 체험 가능
            </p>
            <div className="h-4 w-px bg-border hidden md:block" />
            <div className="flex gap-2">
              <Badge variant="secondary" className="px-3 py-1">신규 학교 특가</Badge>
              <Badge variant="secondary" className="px-3 py-1">전담 매니저 지원</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
