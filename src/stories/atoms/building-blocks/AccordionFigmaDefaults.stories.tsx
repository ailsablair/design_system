import type { Meta, StoryObj } from '@storybook/react';
import { AccordionHeader } from './AccordionHeader';
import { Accordion } from './Accordion';
import React from 'react';

const meta: Meta<typeof AccordionHeader> = {
  title: 'Atoms/Accordion/Figma Defaults',
  component: AccordionHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Accordion Figma Default States

This story showcases the exact default state implementations matching the provided Figma HTML specifications.

## Default State Variations

All accordions shown here match the exact Figma specifications for:
- **Typography**: Exact font sizes, line heights, and letter spacing
- **Colors**: Precise color values from Figma design
- **Spacing**: Exact padding and gap measurements
- **Border Radius**: Position-specific corner radius values
- **Icon Sizing**: Responsive icon sizing per component size

## Size Variants
- **Small**: 18px title, 18px bell icon, 20px toggle icon
- **Default**: 19px title, 22px bell icon, 28px toggle icon  
- **Large**: 24px title, 26px bell icon, 32px toggle icon

## Icon Styles
- **Chevron**: Up/down arrows for expand/collapse
- **Plus**: Plus/minus icons for expand/collapse

## Positions
- **Default**: Standard middle position
- **Top**: Rounded top corners for first in group
- **Bottom**: Rounded bottom corners for last in group
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
    iconStyle: {
      control: { type: 'select' },
      options: ['plus', 'default (chevron)'],
    },
    position: {
      control: { type: 'select' },
      options: ['default (middle)', 'top', 'bottom'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionHeader>;

// ===== EXACT FIGMA DEFAULT STATES ===== //

export const DefaultSizeChevron: Story = {
  name: 'Default Size + Chevron (Figma)',
  args: {
    size: 'default',
    iconStyle: 'default (chevron)',
    position: 'default (middle)',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is an accordion section title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Matches: size=default, icon-style=default (chevron), position=default (middle), content-type=N/A, open=False, state=default'
      }
    }
  }
};

export const LargeSizeChevron: Story = {
  name: 'Large Size + Chevron (Figma)',
  args: {
    size: 'large',
    iconStyle: 'default (chevron)',
    position: 'default (middle)',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is an accordion section title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Matches: size=large, icon-style=default (chevron), position=default (middle), content-type=N/A, open=False, state=default'
      }
    }
  }
};

export const SmallSizeChevron: Story = {
  name: 'Small Size + Chevron (Figma)',
  args: {
    size: 'small',
    iconStyle: 'default (chevron)',
    position: 'default (middle)',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is an accordion section title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Matches: size=small, icon-style=default (chevron), position=default (middle), content-type=N/A, open=False, state=default'
      }
    }
  }
};

export const DefaultSizePlus: Story = {
  name: 'Default Size + Plus (Figma)',
  args: {
    size: 'default',
    iconStyle: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is an accordion section title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Matches: size=default, icon-style=plus, position=default (middle), content-type=N/A, open=False, state=default'
      }
    }
  }
};

export const LargeSizePlus: Story = {
  name: 'Large Size + Plus (Figma)',
  args: {
    size: 'large',
    iconStyle: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is an accordion section title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Matches: size=large, icon-style=plus, position=default (middle), content-type=N/A, open=False, state=default'
      }
    }
  }
};

export const SmallSizePlus: Story = {
  name: 'Small Size + Plus (Figma)',
  args: {
    size: 'small',
    iconStyle: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is an accordion section title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Matches: size=small, icon-style=plus, position=default (middle), content-type=N/A, open=False, state=default'
      }
    }
  }
};

// ===== POSITION VARIANTS ===== //

export const TopPosition: Story = {
  name: 'Top Position (Figma)',
  args: {
    size: 'small',
    iconStyle: 'plus',
    position: 'top',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is an accordion section title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Matches: size=small, icon-style=plus, position=top, content-type=N/A, open=False, state=default'
      }
    }
  }
};

export const BottomPosition: Story = {
  name: 'Bottom Position (Figma)',
  args: {
    size: 'small',
    iconStyle: 'plus',
    position: 'bottom',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is an accordion section title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Matches: size=small, icon-style=plus, position=bottom, content-type=N/A, open=False, state=default'
      }
    }
  }
};

// ===== OPEN STATES ===== //

export const DefaultOpenChevron: Story = {
  name: 'Default Open + Chevron (Figma)',
  args: {
    size: 'default',
    iconStyle: 'default (chevron)',
    position: 'default (middle)',
    contentType: 'N/A',
    open: true,
    state: 'selected',
    title: 'This is an accordion section title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Matches: size=default, icon-style=default (chevron), position=default (middle), content-type=N/A, open=True, state=selected'
      }
    }
  }
};

export const DefaultOpenPlus: Story = {
  name: 'Default Open + Plus (Figma)',
  args: {
    size: 'default',
    iconStyle: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    open: true,
    state: 'selected',
    title: 'This is an accordion section title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Matches: size=default, icon-style=plus, position=default (middle), content-type=N/A, open=True, state=selected'
      }
    }
  }
};

// ===== COMPLETE ACCORDION COMPONENT EXAMPLES ===== //

export const CompleteAccordionDefault: Story = {
  name: 'Complete Accordion - Default (Figma)',
  render: (args) => (
    <Accordion
      type="simple"
      size="default"
      openIcon="chevron"
      position="default"
      title="This is an accordion section title"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia."
      showIcon={true}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete accordion component matching Figma default specifications with header and expandable content.'
      }
    }
  }
};

export const CompleteAccordionGroup: Story = {
  name: 'Accordion Group (Figma)',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      <Accordion
        type="simple"
        size="default"
        openIcon="chevron"
        position="top"
        title="This is an accordion section title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        showIcon={true}
      />
      <Accordion
        type="simple"
        size="default"
        openIcon="chevron"
        position="default"
        title="This is an accordion section title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        showIcon={true}
      />
      <Accordion
        type="simple"
        size="default"
        openIcon="chevron"
        position="bottom"
        title="This is an accordion section title"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        showIcon={true}
        isOpen={true}
        interactionState="selected"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete accordion group showing top, middle, and bottom positions with proper border radius and one expanded item.'
      }
    }
  }
};
