import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'Design System/Color Palette',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ 
  name, 
  variable, 
  description 
}: { 
  name: string; 
  variable: string; 
  description?: string;
}) => (
  <div className="glass glass-border rounded-xl p-4">
    <div 
      className="w-full h-24 rounded-lg mb-3 border border-border"
      style={{ backgroundColor: `oklch(var(${variable}))` }}
    />
    <h3 className="font-medium text-sm">{name}</h3>
    <code className="text-xs text-muted-foreground">{variable}</code>
    {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
  </div>
);

export const CoreColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Core Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch 
            name="Background" 
            variable="--background" 
            description="주요 배경색"
          />
          <ColorSwatch 
            name="Foreground" 
            variable="--foreground" 
            description="주요 텍스트색"
          />
          <ColorSwatch 
            name="Primary" 
            variable="--primary" 
            description="주요 액션 색상"
          />
          <ColorSwatch 
            name="Secondary" 
            variable="--secondary" 
            description="보조 액션 색상"
          />
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-6">UI Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch 
            name="Card" 
            variable="--card" 
            description="카드 배경색"
          />
          <ColorSwatch 
            name="Popover" 
            variable="--popover" 
            description="팝오버 배경색"
          />
          <ColorSwatch 
            name="Muted" 
            variable="--muted" 
            description="비활성 상태"
          />
          <ColorSwatch 
            name="Accent" 
            variable="--accent" 
            description="강조 색상"
          />
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-6">Semantic Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch 
            name="Destructive" 
            variable="--destructive" 
            description="경고/삭제"
          />
          <ColorSwatch 
            name="Border" 
            variable="--border" 
            description="테두리"
          />
          <ColorSwatch 
            name="Input" 
            variable="--input" 
            description="입력 필드"
          />
          <ColorSwatch 
            name="Ring" 
            variable="--ring" 
            description="포커스 링"
          />
        </div>
      </div>
    </div>
  ),
};

export const ChartColors: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Chart Colors</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <ColorSwatch 
            key={num}
            name={`Chart ${num}`} 
            variable={`--chart-${num}`} 
          />
        ))}
      </div>
    </div>
  ),
};

export const GlassVariables: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Glass Effect Variables</h2>
      
      <div className="glass glass-border rounded-xl p-6">
        <h3 className="font-semibold mb-4">CSS Variables</h3>
        <div className="space-y-3 font-mono text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">--glass-blur:</span>
            <span>20px</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">--glass-saturation:</span>
            <span>1.8</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">--glass-brightness:</span>
            <span>1.1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">--glass-border:</span>
            <span>oklch(1 0 0 / 0.2)</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass glass-border rounded-xl p-6" style={{ '--glass-blur': '10px' } as React.CSSProperties}>
          <h4 className="font-medium mb-2">Blur: 10px</h4>
          <p className="text-sm text-muted-foreground">적은 블러</p>
        </div>
        <div className="glass glass-border rounded-xl p-6">
          <h4 className="font-medium mb-2">Blur: 20px</h4>
          <p className="text-sm text-muted-foreground">기본 블러</p>
        </div>
        <div className="glass glass-border rounded-xl p-6" style={{ '--glass-blur': '40px' } as React.CSSProperties}>
          <h4 className="font-medium mb-2">Blur: 40px</h4>
          <p className="text-sm text-muted-foreground">강한 블러</p>
        </div>
      </div>
    </div>
  ),
};