import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Accordion } from '../building-blocks/Accordion';
import { AccordionBody } from './AccordionBody';
import '../building-blocks/accordion.css';
import './accordionBodyFigma.css';

const meta = {
  title: 'Atoms/Accordion/Body Showcase',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive showcase of accordion components with all body content types from Figma design.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== COMPLETE ACCORDION WITH DIFFERENT BODY TYPES =====

export const TextContentAccordion: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div style={{ maxWidth: '800px' }}>
        <Accordion
          type="simple"
          size="default"
          title="Accordion with Text Content"
          description="Click to expand and see text content"
          isOpen={isOpen}
          onToggle={setIsOpen}
        >
          <div className="accordion--size-default">
            <AccordionBody 
              contentType="text" 
              size="default"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
            />
          </div>
        </Accordion>
      </div>
    );
  },
};

export const ListContentAccordion: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div style={{ maxWidth: '800px' }}>
        <Accordion
          type="simple"
          size="default"
          title="Accordion with List Content"
          description="Click to expand and see list items"
          isOpen={isOpen}
          onToggle={setIsOpen}
        >
          <div className="accordion--size-default">
            <AccordionBody 
              contentType="list" 
              size="default"
              listItems={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien.',
              ]}
            />
          </div>
        </Accordion>
      </div>
    );
  },
};

export const TextImageContentAccordion: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div style={{ maxWidth: '800px' }}>
        <Accordion
          type="simple"
          size="default"
          title="Accordion with Text and Image"
          description="Click to expand and see text with image"
          isOpen={isOpen}
          onToggle={setIsOpen}
        >
          <div className="accordion--size-default">
            <AccordionBody 
              contentType="text-img" 
              size="default"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc."
            />
          </div>
        </Accordion>
      </div>
    );
  },
};

export const MetricsContentAccordion: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div style={{ maxWidth: '800px' }}>
        <Accordion
          type="simple"
          size="default"
          title="Accordion with Metrics"
          description="Click to expand and see project metrics"
          isOpen={isOpen}
          onToggle={setIsOpen}
        >
          <div className="accordion--size-default">
            <AccordionBody 
              contentType="metrics" 
              size="default"
              metrics={[
                { value: '235,000', label: 'Projects completed' },
                { value: 'On time', label: 'Project status' },
                { value: '3,500', label: 'Unique Users' },
              ]}
            />
          </div>
        </Accordion>
      </div>
    );
  },
};

// ===== ALL SIZE VARIANTS =====

export const SmallSizeVariants: Story = {
  render: () => {
    const [openStates, setOpenStates] = useState({
      text: false,
      list: false,
      textImg: false,
      metrics: false,
    });

    const toggleAccordion = (key: keyof typeof openStates) => {
      setOpenStates(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
        <h2>Small Size - All Content Types</h2>
        
        <Accordion
          type="simple"
          size="small"
          title="Text Content"
          description="Small accordion with text"
          isOpen={openStates.text}
          onToggle={() => toggleAccordion('text')}
        >
          <div className="accordion--size-small">
            <AccordionBody contentType="text" size="small" />
          </div>
        </Accordion>

        <Accordion
          type="simple"
          size="small"
          title="List Content"
          description="Small accordion with list"
          isOpen={openStates.list}
          onToggle={() => toggleAccordion('list')}
        >
          <div className="accordion--size-small">
            <AccordionBody contentType="list" size="small" />
          </div>
        </Accordion>

        <Accordion
          type="simple"
          size="small"
          title="Text with Image"
          description="Small accordion with text and image"
          isOpen={openStates.textImg}
          onToggle={() => toggleAccordion('textImg')}
        >
          <div className="accordion--size-small">
            <AccordionBody contentType="text-img" size="small" />
          </div>
        </Accordion>

        <Accordion
          type="simple"
          size="small"
          title="Metrics"
          description="Small accordion with metrics"
          isOpen={openStates.metrics}
          onToggle={() => toggleAccordion('metrics')}
        >
          <div className="accordion--size-small">
            <AccordionBody contentType="metrics" size="small" />
          </div>
        </Accordion>
      </div>
    );
  },
};

export const DefaultSizeVariants: Story = {
  render: () => {
    const [openStates, setOpenStates] = useState({
      text: false,
      list: false,
      textImg: false,
      metrics: false,
    });

    const toggleAccordion = (key: keyof typeof openStates) => {
      setOpenStates(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
        <h2>Default Size - All Content Types</h2>
        
        <Accordion
          type="simple"
          size="default"
          title="Text Content"
          description="Default accordion with text"
          isOpen={openStates.text}
          onToggle={() => toggleAccordion('text')}
        >
          <div className="accordion--size-default">
            <AccordionBody contentType="text" size="default" />
          </div>
        </Accordion>

        <Accordion
          type="simple"
          size="default"
          title="List Content"
          description="Default accordion with list"
          isOpen={openStates.list}
          onToggle={() => toggleAccordion('list')}
        >
          <div className="accordion--size-default">
            <AccordionBody contentType="list" size="default" />
          </div>
        </Accordion>

        <Accordion
          type="simple"
          size="default"
          title="Text with Image"
          description="Default accordion with text and image"
          isOpen={openStates.textImg}
          onToggle={() => toggleAccordion('textImg')}
        >
          <div className="accordion--size-default">
            <AccordionBody contentType="text-img" size="default" />
          </div>
        </Accordion>

        <Accordion
          type="simple"
          size="default"
          title="Metrics"
          description="Default accordion with metrics"
          isOpen={openStates.metrics}
          onToggle={() => toggleAccordion('metrics')}
        >
          <div className="accordion--size-default">
            <AccordionBody contentType="metrics" size="default" />
          </div>
        </Accordion>
      </div>
    );
  },
};

export const LargeSizeVariants: Story = {
  render: () => {
    const [openStates, setOpenStates] = useState({
      text: false,
      list: false,
      textImg: false,
      metrics: false,
    });

    const toggleAccordion = (key: keyof typeof openStates) => {
      setOpenStates(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
        <h2>Large Size - All Content Types</h2>
        
        <Accordion
          type="simple"
          size="large"
          title="Text Content"
          description="Large accordion with text"
          isOpen={openStates.text}
          onToggle={() => toggleAccordion('text')}
        >
          <div className="accordion--size-large">
            <AccordionBody contentType="text" size="large" />
          </div>
        </Accordion>

        <Accordion
          type="simple"
          size="large"
          title="List Content"
          description="Large accordion with list"
          isOpen={openStates.list}
          onToggle={() => toggleAccordion('list')}
        >
          <div className="accordion--size-large">
            <AccordionBody contentType="list" size="large" />
          </div>
        </Accordion>

        <Accordion
          type="simple"
          size="large"
          title="Text with Image"
          description="Large accordion with text and image"
          isOpen={openStates.textImg}
          onToggle={() => toggleAccordion('textImg')}
        >
          <div className="accordion--size-large">
            <AccordionBody contentType="text-img" size="large" />
          </div>
        </Accordion>

        <Accordion
          type="simple"
          size="large"
          title="Metrics"
          description="Large accordion with metrics"
          isOpen={openStates.metrics}
          onToggle={() => toggleAccordion('metrics')}
        >
          <div className="accordion--size-large">
            <AccordionBody contentType="metrics" size="large" />
          </div>
        </Accordion>
      </div>
    );
  },
};

// ===== COMPLETE FIGMA SHOWCASE =====

export const CompleteFigmaShowcase: Story = {
  name: '🎨 Complete Figma Body Showcase',
  render: () => {
    const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());

    const toggleAccordion = (id: string) => {
      setOpenAccordions(prev => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
        return newSet;
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '1000px', padding: '24px' }}>
        <div>
          <h1 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '32px', color: '#191E3C' }}>
            Accordion Body Components
          </h1>
          <p style={{ color: '#6D7280', fontFamily: 'Roboto Flex', fontSize: '16px', lineHeight: '1.5' }}>
            Complete showcase of all accordion body content types from Figma design specifications.
          </p>
        </div>

        <section>
          <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
            Small Size Variants
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Accordion
              type="simple"
              size="small"
              title="Text Content"
              description="Simple paragraph text"
              isOpen={openAccordions.has('small-text')}
              onToggle={() => toggleAccordion('small-text')}
            >
              <div className="accordion--size-small">
                <AccordionBody contentType="text" size="small" />
              </div>
            </Accordion>

            <Accordion
              type="simple"
              size="small"
              title="List Content"
              description="Bulleted list with checkmarks"
              isOpen={openAccordions.has('small-list')}
              onToggle={() => toggleAccordion('small-list')}
            >
              <div className="accordion--size-small">
                <AccordionBody contentType="list" size="small" />
              </div>
            </Accordion>

            <Accordion
              type="simple"
              size="small"
              title="Text with Image"
              description="Text content with image placeholder"
              isOpen={openAccordions.has('small-text-img')}
              onToggle={() => toggleAccordion('small-text-img')}
            >
              <div className="accordion--size-small">
                <AccordionBody contentType="text-img" size="small" />
              </div>
            </Accordion>

            <Accordion
              type="simple"
              size="small"
              title="Metrics Display"
              description="Statistics and metrics"
              isOpen={openAccordions.has('small-metrics')}
              onToggle={() => toggleAccordion('small-metrics')}
            >
              <div className="accordion--size-small">
                <AccordionBody contentType="metrics" size="small" />
              </div>
            </Accordion>
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
            Default Size Variants
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Accordion
              type="simple"
              size="default"
              title="Text Content"
              description="Simple paragraph text"
              isOpen={openAccordions.has('default-text')}
              onToggle={() => toggleAccordion('default-text')}
            >
              <div className="accordion--size-default">
                <AccordionBody contentType="text" size="default" />
              </div>
            </Accordion>

            <Accordion
              type="simple"
              size="default"
              title="List Content"
              description="Bulleted list with checkmarks"
              isOpen={openAccordions.has('default-list')}
              onToggle={() => toggleAccordion('default-list')}
            >
              <div className="accordion--size-default">
                <AccordionBody contentType="list" size="default" />
              </div>
            </Accordion>

            <Accordion
              type="simple"
              size="default"
              title="Text with Image"
              description="Text content with image placeholder"
              isOpen={openAccordions.has('default-text-img')}
              onToggle={() => toggleAccordion('default-text-img')}
            >
              <div className="accordion--size-default">
                <AccordionBody contentType="text-img" size="default" />
              </div>
            </Accordion>

            <Accordion
              type="simple"
              size="default"
              title="Metrics Display"
              description="Statistics and metrics"
              isOpen={openAccordions.has('default-metrics')}
              onToggle={() => toggleAccordion('default-metrics')}
            >
              <div className="accordion--size-default">
                <AccordionBody contentType="metrics" size="default" />
              </div>
            </Accordion>
          </div>
        </section>

        <section>
          <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', color: '#191E3C' }}>
            Large Size Variants
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Accordion
              type="simple"
              size="large"
              title="Text Content"
              description="Simple paragraph text"
              isOpen={openAccordions.has('large-text')}
              onToggle={() => toggleAccordion('large-text')}
            >
              <div className="accordion--size-large">
                <AccordionBody contentType="text" size="large" />
              </div>
            </Accordion>

            <Accordion
              type="simple"
              size="large"
              title="List Content"
              description="Bulleted list with checkmarks"
              isOpen={openAccordions.has('large-list')}
              onToggle={() => toggleAccordion('large-list')}
            >
              <div className="accordion--size-large">
                <AccordionBody contentType="list" size="large" />
              </div>
            </Accordion>

            <Accordion
              type="simple"
              size="large"
              title="Text with Image"
              description="Text content with image placeholder"
              isOpen={openAccordions.has('large-text-img')}
              onToggle={() => toggleAccordion('large-text-img')}
            >
              <div className="accordion--size-large">
                <AccordionBody contentType="text-img" size="large" />
              </div>
            </Accordion>

            <Accordion
              type="simple"
              size="large"
              title="Metrics Display"
              description="Statistics and metrics"
              isOpen={openAccordions.has('large-metrics')}
              onToggle={() => toggleAccordion('large-metrics')}
            >
              <div className="accordion--size-large">
                <AccordionBody contentType="metrics" size="large" />
              </div>
            </Accordion>
          </div>
        </section>
      </div>
    );
  },
};
