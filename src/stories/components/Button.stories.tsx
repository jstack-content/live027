import { Button } from "@/components/Button";
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    onClick: action('onClick'),
  },
  argTypes: {
    asChild: {
      name: 'asChild (renders the child as the actual button)',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: {
        type: 'inline-radio',
        labels: {
          sm: 'sm (Small)',
          lg: 'lg (Large)',
        },
      },
      table: {
        category: 'Appearance',
        type: {
          summary: 'enum (string)',
          detail: "'default' | 'sm' | 'lg' | 'icon'",
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    variant: {
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: 'select',
      table: {
        category: 'Appearance',
        type: {
          summary: 'enum (string)',
          detail: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    onClick: {
      table: {
        category: 'Event Listeners',
      },
    },
    onMouseEnter: {
      table: {
        category: 'Event Listeners',
        subcategory: 'Mouse Events',
      },
    },
    onMouseLeave: {
      table: {
        category: 'Event Listeners',
        subcategory: 'Mouse Events',
      },
    },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Primário',
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
  render: (props) => (
    <Button {...props}>
      <span className="mr-1">🔥</span>
      Secondary
    </Button>
  ),
};

export const Outline: Story = {
  args: {
    children: 'Outline Content',
    variant: 'outline',
  },
};
