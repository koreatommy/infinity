"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { handleLinkClick } from "@/lib/link-validator";

const footerLinks = {
  서비스: [
    { label: "서비스 소개", href: "#features" },
    { label: "교사용 기능", href: "#for-teachers" },
    { label: "학생용 기능", href: "#for-students" },
    { label: "학부모용 기능", href: "#for-parents" },
  ],
  지원: [
    { label: "도입 안내", href: "#onboarding" },
    { label: "자주 묻는 질문", href: "#faq" },
    { label: "문의하기", href: "#contact" },
  ],
  법적: [
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용약관", href: "/terms" },
    { label: "서비스 정책", href: "/policy" },
  ],
};

export default function Footer() {
  const { toast } = useToast();

  const handleLinkValidation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 앵커 링크는 기본 동작 허용
    if (href.startsWith('#')) {
      return;
    }

    const isValid = handleLinkClick(e, href, () => {
      toast({
        title: "서비스 준비중입니다",
        description: "곧 만나볼 수 있습니다.",
        variant: "default",
      });
    });

    if (!isValid) {
      return;
    }
  };

  const handleSocialButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast({
      title: "서비스 준비중입니다",
      description: "곧 만나볼 수 있습니다.",
      variant: "default",
    });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 회사 정보 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">무한수행</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                중학교 창업동아리 무한수행에서 만든<br />
                대한민국 1등 수행평가 일정 관리 플랫폼
              </p>
            </div>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span>lisciencelip@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span>0010-8227-1730</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>립사이언스</span>
              </div>
            </div>
          </div>

          {/* 링크 섹션 */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkValidation(e, link.href)}
                      className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-slate-800" />

        {/* 하단 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © 2024 무한수행 Team. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter, Github].map((Icon, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="icon" 
                className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                onClick={handleSocialButtonClick}
              >
                <Icon className="h-5 w-5" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
