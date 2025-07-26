import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'Components/Glass Components',
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'gradient',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormElements: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div className="glass glass-border rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">로그인</h3>
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-2">이메일</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 rounded-lg bg-input/50 border border-border focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-2">비밀번호</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 rounded-lg bg-input/50 border border-border focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="remember" 
              className="w-4 h-4 rounded border-border bg-input/50"
            />
            <label htmlFor="remember" className="text-sm">로그인 상태 유지</label>
          </div>
          <button className="w-full glass glass-border glass-hover glass-active bg-primary/10 text-primary font-medium rounded-lg py-2.5">
            로그인
          </button>
        </form>
      </div>
    </div>
  ),
};

export const Navigation: Story = {
  render: () => (
    <nav className="glass glass-border rounded-2xl p-2 max-w-2xl">
      <ul className="flex items-center gap-1">
        <li>
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-accent/20 transition-colors block">
            홈
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-accent/20 transition-colors block">
            제품
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium block">
            서비스
          </a>
        </li>
        <li>
          <a href="#" className="px-4 py-2 rounded-lg hover:bg-accent/20 transition-colors block">
            고객지원
          </a>
        </li>
        <li className="ml-auto">
          <button className="glass glass-border glass-hover glass-active rounded-lg px-4 py-2 font-medium">
            문의하기
          </button>
        </li>
      </ul>
    </nav>
  ),
};

export const Cards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
      <div className="glass glass-border rounded-2xl p-6 hover:scale-[1.02] transition-transform">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"/>
          </svg>
        </div>
        <h3 className="font-semibold text-lg mb-2">레이어드 디자인</h3>
        <p className="text-sm text-muted-foreground">
          다층 구조로 깊이감 있는 인터페이스를 구성합니다.
        </p>
      </div>
      
      <div className="glass glass-border rounded-2xl p-6 hover:scale-[1.02] transition-transform">
        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="text-accent"/>
            <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-accent opacity-50"/>
          </svg>
        </div>
        <h3 className="font-semibold text-lg mb-2">부드러운 애니메이션</h3>
        <p className="text-sm text-muted-foreground">
          자연스러운 전환 효과로 사용자 경험을 향상시킵니다.
        </p>
      </div>
      
      <div className="glass glass-border rounded-2xl p-6 hover:scale-[1.02] transition-transform">
        <div className="w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
            <rect x="7" y="7" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
          </svg>
        </div>
        <h3 className="font-semibold text-lg mb-2">반응형 컴포넌트</h3>
        <p className="text-sm text-muted-foreground">
          모든 디바이스에서 일관된 경험을 제공합니다.
        </p>
      </div>
    </div>
  ),
};

export const Modal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <>
        <button 
          onClick={() => setIsOpen(true)}
          className="glass glass-border glass-hover glass-active rounded-xl px-6 py-3 font-medium"
        >
          모달 열기
        </button>
        
        {isOpen && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="glass glass-border rounded-2xl p-6 max-w-md w-full animate-in fade-in zoom-in-95 duration-200">
              <h2 className="text-xl font-semibold mb-4">알림</h2>
              <p className="text-muted-foreground mb-6">
                이것은 liquid glass 스타일의 모달 창입니다. 배경이 은은하게 블러 처리되어 
                콘텐츠에 집중할 수 있습니다.
              </p>
              <div className="flex gap-3 justify-end">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  취소
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="glass glass-border glass-hover glass-active bg-primary/10 text-primary font-medium rounded-lg px-4 py-2"
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  },
};

export const Notification: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div className="glass glass-border rounded-xl p-4 flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V8L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary"/>
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm">업데이트 알림</h4>
          <p className="text-sm text-muted-foreground mt-1">
            새로운 버전이 출시되었습니다.
          </p>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      <div className="glass glass-border rounded-xl p-4 flex items-start gap-3 border-l-4 border-l-destructive">
        <div className="w-8 h-8 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5V8M8 11H8.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-destructive"/>
            <path d="M2.5 13.5L8 2L13.5 13.5H2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-destructive"/>
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm">오류 발생</h4>
          <p className="text-sm text-muted-foreground mt-1">
            요청을 처리하는 중 문제가 발생했습니다.
          </p>
        </div>
      </div>
      
      <div className="glass glass-border rounded-xl p-4 flex items-start gap-3 border-l-4 border-l-accent">
        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8L7.5 9.5L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent"/>
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" className="text-accent"/>
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-sm">작업 완료</h4>
          <p className="text-sm text-muted-foreground mt-1">
            파일이 성공적으로 업로드되었습니다.
          </p>
        </div>
      </div>
    </div>
  ),
};