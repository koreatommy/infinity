"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, GraduationCap, Users, BarChart3, CheckCircle2, Calendar, Bell, FileText, Shield } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const teacherStats = [
  { month: "1월", 공지수: 12, 확인률: 85 },
  { month: "2월", 공지수: 15, 확인률: 92 },
  { month: "3월", 공지수: 18, 확인률: 95 },
];

const studentStats = [
  { month: "1월", 확인수: 45, 누락수: 8 },
  { month: "2월", 확인수: 52, 누락수: 4 },
  { month: "3월", 확인수: 58, 누락수: 2 },
];

const teacherFeatures = [
  { icon: <FileText className="h-5 w-5" />, text: "공지 등록" },
  { icon: <Users className="h-5 w-5" />, text: "반/학년 선택" },
  { icon: <BarChart3 className="h-5 w-5" />, text: "확인률 대시보드" },
  { icon: <CheckCircle2 className="h-5 w-5" />, text: "자동 전달" },
];

const studentFeatures = [
  { icon: <Calendar className="h-5 w-5" />, text: "캘린더" },
  { icon: <FileText className="h-5 w-5" />, text: "평가 상세" },
  { icon: <CheckCircle2 className="h-5 w-5" />, text: "체크리스트" },
  { icon: <Bell className="h-5 w-5" />, text: "D-Day 알림" },
];

const parentFeatures = [
  { icon: <Calendar className="h-5 w-5" />, text: "자녀 일정 보기" },
  { icon: <Bell className="h-5 w-5" />, text: "알림 수신" },
  { icon: <Shield className="h-5 w-5" />, text: "안전한 정보 접근" },
];

export default function AudienceSection() {
  return (
    <section id="audience" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            누구를 위한 서비스인가요?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            교사, 학생, 학부모 모두를 위한 맞춤형 기능을 제공합니다.<br/>
            각자의 입장에서 필요한 기능만을 담았습니다.
          </p>
        </div>

        {/* 교사용 섹션 */}
        <div className="mb-24 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500/20 rounded-full -ml-4 md:-ml-8 hidden md:block" />
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-indigo-500/10 rounded-2xl">
              <User className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">교사용 기능</h3>
              <p className="text-muted-foreground">반복되는 공지 업무를 자동화하세요</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-indigo-100 dark:border-indigo-900/50 bg-card">
              <CardHeader>
                <CardTitle>주요 기능</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {teacherFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-100 hover:bg-indigo-100 dark:hover:bg-indigo-950/50 transition-colors">
                      <div className="text-indigo-600 dark:text-indigo-400">{feature.icon}</div>
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed bg-muted p-4 rounded-xl">
                  <strong className="text-indigo-600 dark:text-indigo-400">Smart Point:</strong> 미확인 학생에게만 선별적으로 재알림을 보낼 수 있어 효율적인 관리가 가능합니다.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-indigo-100 dark:border-indigo-900/50 bg-card">
              <CardHeader>
                <CardTitle>공지 확인률 추이</CardTitle>
                <CardDescription>실시간으로 확인률이 집계됩니다</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={teacherStats} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
                      cursor={{ fill: 'hsl(var(--muted)/0.2)' }}
                    />
                    <Bar dataKey="확인률" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 학생용 섹션 */}
        <div className="mb-24 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500/20 rounded-full -ml-4 md:-ml-8 hidden md:block" />
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-purple-500/10 rounded-2xl">
              <GraduationCap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">학생용 기능</h3>
              <p className="text-muted-foreground">수행평가를 놓치지 않고 준비하세요</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-purple-100 dark:border-purple-900/50 bg-card">
              <CardHeader>
                <CardTitle>주요 기능</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {studentFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 text-purple-900 dark:text-purple-100 hover:bg-purple-100 dark:hover:bg-purple-950/50 transition-colors">
                      <div className="text-purple-600 dark:text-purple-400">{feature.icon}</div>
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed bg-muted p-4 rounded-xl">
                  <strong className="text-purple-600 dark:text-purple-400">Smart Point:</strong> D-Day 알림으로 마감 기한을 절대 놓치지 않도록 도와줍니다.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300 border-purple-100 dark:border-purple-900/50 bg-card">
              <CardHeader>
                <CardTitle>수행평가 관리 현황</CardTitle>
                <CardDescription>나의 수행평가 관리 습관을 확인하세요</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={studentStats} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
                      cursor={{ fill: 'hsl(var(--muted)/0.2)' }}
                    />
                    <Bar dataKey="확인수" fill="hsl(var(--secondary-foreground))" stackId="a" radius={[0, 0, 4, 4]} barSize={30} />
                    <Bar dataKey="누락수" fill="hsl(var(--destructive))" stackId="a" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 학부모용 섹션 */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500/20 rounded-full -ml-4 md:-ml-8 hidden md:block" />
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-pink-500/10 rounded-2xl">
              <Users className="h-8 w-8 text-pink-600 dark:text-pink-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">학부모용 기능</h3>
              <p className="text-muted-foreground">자녀의 학교 생활을 든든하게 지원하세요</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {parentFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-pink-100 dark:border-pink-900/50 bg-card hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 bg-pink-50 dark:bg-pink-950/30 rounded-full w-fit mb-4 text-pink-600 dark:text-pink-400">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.text}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    학교 알림장보다 더 빠르고 정확하게<br/>자녀의 일정을 확인하세요.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

