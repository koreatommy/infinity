"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Bell, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

const quickStats = [
  { icon: <Calendar className="h-5 w-5" />, label: "자동 캘린더", value: "100%" },
  { icon: <Bell className="h-5 w-5" />, label: "실시간 알림", value: "24/7" },
  { icon: <CheckCircle2 className="h-5 w-5" />, label: "누락률 감소", value: "80%↓" },
];

export default function HeroSection() {
  const { toast } = useToast();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast({
      title: "서비스 준비중입니다",
      description: "곧 만나볼 수 있습니다.",
      variant: "default",
    });
  };

  return (
    <section id="home" className="pt-32 md:pt-40 pb-20 bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 배경 장식 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left z-10">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              중학교 창업동아리 무한수행
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
              중학생 수행평가,
              <br />
              <span className="text-primary">
                이제는 놓치지 말자.
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              무한수행 — 수행평가 일정 자동 관리 플랫폼
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300">
              교사 → 학생 → 학부모까지<br className="hidden md:block"/>
              수행평가 공지를 정확하고 빠르게 전달합니다.
            </p>
            
            {/* 빠른 통계 */}
            <div className="grid grid-cols-3 gap-4 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              {quickStats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10">
                  <CardContent className="pt-4 pb-4">
                    <div className="text-primary mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-lg font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-9 duration-700 delay-500">
              <Button 
                size="lg" 
                className="text-lg px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                onClick={handleButtonClick}
              >
                지금 시작하기
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 h-12 border-primary/20 hover:bg-primary/5 text-foreground"
                onClick={handleButtonClick}
              >
                기능 소개 보기
              </Button>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
            {/* Hero 이미지 */}
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-border bg-card">
              <Image
                src="/placeholder-hero.svg"
                alt="무한수행 앱 화면 예시"
                width={1200}
                height={675}
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* 그라데이션 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>

            {/* 알림 팝업 시뮬레이션 */}
            <div className="absolute -right-6 -top-6 bg-card rounded-xl shadow-2xl p-4 border border-primary/20 animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">새로운 공지</div>
                  <div className="text-xs text-muted-foreground">수학 수행평가 안내</div>
                  <div className="text-[10px] text-primary mt-1 font-medium">방금 전</div>
                </div>
              </div>
            </div>

            {/* 배경 장식 */}
            <div className="absolute -z-10 -right-20 -bottom-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl opacity-70 animate-pulse duration-[5000ms]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
