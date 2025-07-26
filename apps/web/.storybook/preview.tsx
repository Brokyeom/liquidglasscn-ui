import React from "react";
import type { Preview } from "@storybook/react";
import "@workspace/ui/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: {
        base: "light",
        brandTitle: "Liquid Glass Design System",
        brandUrl: "/",
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#f8f9fa",
        },
        {
          name: "dark",
          value: "#0a0a0a",
        },
        {
          name: "gradient",
          value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="antialiased">
        <Story />
      </div>
    ),
  ],
};

export default preview;