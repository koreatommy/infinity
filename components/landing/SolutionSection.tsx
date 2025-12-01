"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Calendar, Bell, Users, FileText, Zap } from "lucide-react";
import Image from "next/image";

const solutionFeatures = [
  "자동 캘린더 생성",
  "D-Day 알림",
  "준비물 체크",
  "일정 변경 즉시 안내",
  "반별/과목별 공지 자동 분류",
];

const flowSteps = [
  { icon: <FileText className="h-6 w-6" />, label: "교사 공지 등록", bgColor: "bg-primary/10", textColor: "text-primary" },
  { icon: <ArrowRight className="h-6 w-6" />, label: "자동 전달", bgColor: "bg-muted", textColor: "text-muted-foreground" },
  { icon: <Calendar className="h-6 w-6" />, label: "학생 캘린더 반영", bgColor: "bg-secondary", textColor: "text-secondary-foreground" },
  { icon: <Bell className="h-6 w-6" />, label: "알림 전달", bgColor: "bg-accent", textColor: "text-accent-foreground" },
  { icon: <Users className="h-6 w-6" />, label: "학부모 확인", bgColor: "bg-green-100 dark:bg-green-900/30", textColor: "text-green-600 dark:text-green-400" },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Zap className="w-4 h-4 mr-2 fill-current" />
              Our Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              무한수행으로 모든 일정이<br />
              <span className="text-primary">한 번에 해결됩니다.</span>
            </h2>
            <div className="text-lg text-muted-foreground mb-8 space-y-2">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
                교사가 올린 수행평가 공지가
              </p>
              <p className="flex items-center gap-3">
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-2" />
                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">2</span>
                학생 캘린더에 자동 등록
              </p>
              <p className="flex items-center gap-3">
                <ArrowRight className="w-4 h-4 text-muted-foreground ml-2" />
                <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">3</span>
                학부모도 동일하게 확인 가능
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solutionFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 group">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-card-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            {/* 솔루션 다이어그램 이미지 */}
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-card bg-card mb-8 transform hover:rotate-1 transition-transform duration-500">
              <Image
                src="/placeholder-solution.svg"
                alt="무한수행 솔루션 다이어그램"
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>

            {/* 통계 카드 */}
            <div className="grid grid-cols-3 gap-4 absolute -bottom-6 left-4 right-4">
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-primary/20 bg-card/95 backdrop-blur-sm hover:-translate-y-1">
                <CardContent className="pt-4 pb-4">
                  <div className="text-2xl font-bold text-primary">1회</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">등록으로</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-secondary/50 bg-card/95 backdrop-blur-sm hover:-translate-y-1">
                <CardContent className="pt-4 pb-4">
                  <div className="text-2xl font-bold text-secondary-foreground">100%</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">자동 전달</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-accent/50 bg-card/95 backdrop-blur-sm hover:-translate-y-1">
                <CardContent className="pt-4 pb-4">
                  <div className="text-2xl font-bold text-accent-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">실시간</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
