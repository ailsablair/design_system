import type { Meta as StorybookMeta, StoryObj } from '@storybook/react';
import AccordionGroupHeader from './AccordionGroupHeader';
import AccordionGroup from './AccordionGroup';
import type { AccordionProps } from './Accordion';
import AccordionStatus from './AccordionStatus';
import './accordion.css';
import './accordionGroup.css';
import './accordionStatus.css';
import './accordionGroupHeader.css';
import './accordionGroupHeader.stories.css';

const meta: StorybookMeta<typeof AccordionGroupHeader> = {
  title: 'Atoms/🧱 Building Blocks/Accordion Group Header',
  component: AccordionGroupHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Header building block for grouped accordions, using Echo design tokens for typography, spacing, and borders. Supports size, position, and selected state variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Header title text',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    position: {
      control: 'select',
      options: ['top', 'middle', 'bottom'],
      description: 'Position of the header within an accordion group',
    },
    contentType: {
      control: 'select',
      options: ['default', 'header'],
      description: 'Content type styling',
    },
    isSelected: {
      control: 'boolean',
      description: 'Selected/active state styling',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controls chevron direction and color state',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AccordionGroupHeader>;

export const DefaultHeader: Story = {
  args: {
    title: 'Accordion group header',
    size: 'default',
    position: 'top',
    contentType: 'header',
    isSelected: true,
    isOpen: true,
  },
};

export const WithStatusIcon: Story = {
  render: (args) => (
    <div className="accordion-group-header-story-root">
      <div className="accordion-group-header-story-section-title">Header with status icon</div>
      <div className="accordion-group-header-story-row">
        <AccordionGroupHeader
          {...args}
          leadingIcon={<AccordionStatus type="complete" size="small" />}
          isSelected
          isOpen
        />
      </div>
    </div>
  ),
  args: {
    title: 'Safety checks',
    size: 'default',
    position: 'top',
    contentType: 'header',
  },
};

export const GroupWithHeader: Story = {
  render: () => {
    const accordions: AccordionProps[] = [
      {
        type: 'simple',
        size: 'default',
        title: 'Reactor overview',
        description: 'High-level summary of current status and key metrics.',
      },
      {
        type: 'simple',
        size: 'default',
        title: 'Cooling systems',
        description: 'Detailed breakdown of cooling loop performance.',
      },
      {
        type: 'simple',
        size: 'default',
        title: 'Maintenance schedule',
        description: 'Upcoming inspections and scheduled maintenance.',
      },
    ];

    return (
      <div className="accordion-group-header-story-root">
        <div className="accordion-group-header-story-section-title">Accordion group with header</div>
        <div className="accordion-group-header-story-row">
          <AccordionGroupHeader
            title="Operations overview"
            size="default"
            position="top"
            contentType="header"
            isSelected
            isOpen
            leadingIcon={<AccordionStatus type="notifications" size="small" />}
          />
          <AccordionGroup
            accordions={accordions}
            allowMultiple
            defaultOpenIndices={[0]}
            spacing="medium"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates how the AccordionGroupHeader building block composes with AccordionGroup and Accordion to create a complete grouped accordion pattern.',
      },
    },
  },
};
