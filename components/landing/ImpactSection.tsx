"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const beforeAfterData = [
  { name: "일정 누락률", before: 50, after: 10 },
  { name: "정보 전달 오류", before: 35, after: 5 },
  { name: "학부모 정보 격차", before: 60, after: 15 },
];

const impactStats = [
  { label: "일정 누락률 감소", value: "80% ↓", color: "text-green-600 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-900/20" },
  { label: "학생 부담 감소", value: "70% ↓", color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20" },
  { label: "교사 업무량 감소", value: "50% ↓", color: "text-purple-600 dark:text-purple-400", bgColor: "bg-purple-50 dark:bg-purple-900/20" },
  { label: "학부모 만족도", value: "95% ↑", color: "text-orange-600 dark:text-orange-400", bgColor: "bg-orange-50 dark:bg-orange-900/20" },
];

const benefitData = [
  { name: "교사", value: 35, color: "hsl(var(--primary))" },
  { name: "학생", value: 40, color: "hsl(var(--secondary-foreground))" },
  { name: "학부모", value: 25, color: "hsl(var(--accent-foreground))" },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            숫자로 증명하는 <span className="text-primary">무한수행의 효과</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            무한수행을 도입한 학교들의 실제 데이터입니다.<br/>
            수행평가 관리의 새로운 기준을 제시합니다.
          </p>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-3xl md:text-4xl font-extrabold ${stat.color}`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before/After 그래프 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-lg border-none bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Before & After 비교</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={beforeAfterData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                    cursor={{ fill: 'hsl(var(--muted) / 0.2)' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="before" fill="hsl(var(--destructive))" name="도입 전" radius={[4, 4, 0, 0]} barSize={40} />
                  <Bar dataKey="after" fill="hsl(var(--primary))" name="도입 후" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-none bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>사용자별 가치 창출</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={benefitData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {benefitData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
