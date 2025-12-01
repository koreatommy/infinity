"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const stats = [
  { label: "사용 학교", value: "150+", icon: "🏫" },
  { label: "활성 사용자", value: "15,000+", icon: "👥" },
  { label: "누적 공지", value: "50,000+", icon: "📢" },
  { label: "만족도", value: "4.8/5", icon: "⭐" },
];

const benefits = [
  "수행평가 일정 누락률 80% 감소",
  "학생 부담 70% 감소",
  "교사 업무량 50% 감소",
  "학부모 만족도 95%",
];

export default function CtaSection() {
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
    <section id="cta" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* 배경 패턴 - CSS Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            지금 바로 무한수행을<br/>시작하세요
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-medium">
            더 이상 수행평가 때문에 스트레스 받지 마세요.<br/>
            완벽한 일정 관리가 지금 시작됩니다.
          </p>

          {/* 통계 카드 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* 혜택 리스트 */}
          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-white" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 h-auto font-bold shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
              onClick={handleButtonClick}
            >
              <Download className="mr-2 h-5 w-5" />
              앱 다운로드
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 h-auto bg-transparent border-white text-white hover:bg-white/10 hover:text-white w-full sm:w-auto"
              onClick={handleButtonClick}
            >
              교사용 시작하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="mt-8 text-white/60 text-sm font-medium">
            * 학교 도입 문의는 고객센터로 연락주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
