import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'Design System/Liquid Glass',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen w-full p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCard: Story = {
  render: () => (
    <div className="glass glass-border rounded-2xl p-8 max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Glass Card</h2>
      <p className="text-muted-foreground">
        이것은 liquid glass 효과를 적용한 기본 카드입니다. 배경의 그라데이션이 은은하게 비치며,
        부드러운 블러 효과로 깊이감을 표현합니다.
      </p>
    </div>
  ),
};

export const InteractiveButton: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <button className="glass glass-border glass-hover glass-active rounded-xl px-6 py-3 font-medium">
        Primary Action
      </button>
      <button className="glass glass-border glass-hover glass-active rounded-xl px-6 py-3 font-medium text-primary">
        Secondary Action
      </button>
      <button className="glass glass-border glass-hover glass-active rounded-full p-3">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  ),
};

export const GlowEffect: Story = {
  render: () => {
    React.useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const cards = document.querySelectorAll('.glass-glow');
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
          (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    
    return (
      <div className="glass glass-border glass-glow rounded-2xl p-8 max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Glow Card</h2>
        <p className="text-muted-foreground">
          마우스를 움직여보세요. 커서 위치에 따라 은은한 빛이 따라다닙니다.
        </p>
      </div>
    );
  },
};

export const LayeredCards: Story = {
  render: () => (
    <div className="relative max-w-lg">
      <div className="glass glass-border rounded-2xl p-6 mb-4">
        <h3 className="text-lg font-semibold mb-2">레이어 1</h3>
        <p className="text-sm text-muted-foreground">최상위 레이어</p>
      </div>
      <div className="glass glass-border rounded-2xl p-6 mb-4 -mt-8 ml-8 opacity-90">
        <h3 className="text-lg font-semibold mb-2">레이어 2</h3>
        <p className="text-sm text-muted-foreground">중간 레이어</p>
      </div>
      <div className="glass glass-border rounded-2xl p-6 -mt-8 ml-16 opacity-80">
        <h3 className="text-lg font-semibold mb-2">레이어 3</h3>
        <p className="text-sm text-muted-foreground">하위 레이어</p>
      </div>
    </div>
  ),
};

export const ComplexLayout: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <div className="glass glass-border rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-semibold">01</span>
          </div>
          <div>
            <h3 className="font-semibold">투명도</h3>
            <p className="text-sm text-muted-foreground">Transparency</p>
          </div>
        </div>
        <p className="text-sm">배경이 은은하게 비치는 반투명 효과로 공간감을 표현합니다.</p>
      </div>
      
      <div className="glass glass-border rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
            <span className="text-accent font-semibold">02</span>
          </div>
          <div>
            <h3 className="font-semibold">블러</h3>
            <p className="text-sm text-muted-foreground">Blur Effect</p>
          </div>
        </div>
        <p className="text-sm">backdrop-filter를 활용한 자연스러운 블러 효과입니다.</p>
      </div>
      
      <div className="glass glass-border rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center">
            <span className="font-semibold">03</span>
          </div>
          <div>
            <h3 className="font-semibold">그림자</h3>
            <p className="text-sm text-muted-foreground">Shadow Depth</p>
          </div>
        </div>
        <p className="text-sm">다층 그림자로 입체감과 부상감을 표현합니다.</p>
      </div>
      
      <div className="glass glass-border rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
            <span className="text-destructive font-semibold">04</span>
          </div>
          <div>
            <h3 className="font-semibold">애니메이션</h3>
            <p className="text-sm text-muted-foreground">Smooth Motion</p>
          </div>
        </div>
        <p className="text-sm">부드러운 전환 효과로 자연스러운 인터랙션을 제공합니다.</p>
      </div>
    </div>
  ),
};