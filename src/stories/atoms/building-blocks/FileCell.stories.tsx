import type { Meta, StoryObj } from '@storybook/react';
import { FileCell } from './FileCell';

const meta: Meta<typeof FileCell> = {
  title: 'Atoms/ZZ Building Blocks/FileCell',
  component: FileCell,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
File Cell component for displaying file information with selection controls.

Based on Figma designs, supports multiple variants:
- **file-w-select**: Checkbox + file icon + filename
- **file-w-select-and-size**: Checkbox + file icon + filename + file size
- **file-w-toggle**: Toggle + file icon + filename
- **file-w-toggle-and-size**: Toggle + file icon + filename + file size

Features file type detection, responsive design, and multiple background states.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default'],
      description: 'Cell size variant',
    },
    variant: {
      control: { type: 'select' },
      options: ['file-w-select', 'file-w-select-and-size', 'file-w-toggle', 'file-w-toggle-and-size'],
      description: 'Cell variant determines layout and content',
    },
    background: {
      control: { type: 'select' },
      options: ['white', 'alt-gray-50', 'alt-seafoam-25', 'hover', 'disabled'],
      description: 'Background variant',
    },
    fileName: {
      control: { type: 'text' },
      description: 'File name',
    },
    fileSize: {
      control: { type: 'text' },
      description: 'File size (e.g., "200 MB")',
    },
    fileType: {
      control: { type: 'select' },
      options: ['pdf', 'doc', 'docx', 'jpg', 'png', 'mp4', 'zip', 'txt', 'csv', 'xls', 'xlsx'],
      description: 'File type for icon',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Checkbox checked state',
    },
    toggleEnabled: {
      control: { type: 'boolean' },
      description: 'Toggle enabled state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    width: {
      control: { type: 'text' },
      description: 'Cell width',
    },
  },
  args: {
    size: 'default',
    variant: 'file-w-select',
    background: 'white',
    fileName: 'thisisafilename.pdf',
    fileSize: '200 MB',
    fileType: 'pdf',
    checked: false,
    toggleEnabled: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof FileCell>;

// Basic Variants
export const FileWithSelect: Story = {
  args: {
    variant: 'file-w-select',
    background: 'white',
  },
};

export const FileWithSelectAndSize: Story = {
  args: {
    variant: 'file-w-select-and-size',
    background: 'white',
  },
};

export const FileWithToggle: Story = {
  args: {
    variant: 'file-w-toggle',
    background: 'white',
  },
};

export const FileWithToggleAndSize: Story = {
  args: {
    variant: 'file-w-toggle-and-size',
    background: 'white',
  },
};

// Size Variants
export const SmallSize: Story = {
  args: {
    size: 'small',
    variant: 'file-w-select-and-size',
    background: 'white',
  },
};

export const SmallWithToggle: Story = {
  args: {
    size: 'small',
    variant: 'file-w-toggle-and-size',
    background: 'white',
  },
};

// Background Variants
export const SeafoamBackground: Story = {
  args: {
    variant: 'file-w-select-and-size',
    background: 'alt-seafoam-25',
  },
};

export const GrayBackground: Story = {
  args: {
    variant: 'file-w-select-and-size',
    background: 'alt-gray-50',
  },
};

export const HoverState: Story = {
  args: {
    variant: 'file-w-select-and-size',
    background: 'hover',
    checked: true,
  },
};

export const DisabledState: Story = {
  args: {
    variant: 'file-w-select-and-size',
    background: 'disabled',
    disabled: true,
  },
};

// Different File Types
export const DifferentFileTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Different File Types</h3>
      <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
        <FileCell variant="file-w-select-and-size" fileType="pdf" fileName="document.pdf" fileSize="2.5 MB" />
        <FileCell variant="file-w-select-and-size" fileType="doc" fileName="report.doc" fileSize="1.2 MB" />
        <FileCell variant="file-w-select-and-size" fileType="xlsx" fileName="spreadsheet.xlsx" fileSize="845 KB" />
        <FileCell variant="file-w-select-and-size" fileType="jpg" fileName="photo.jpg" fileSize="3.1 MB" />
        <FileCell variant="file-w-select-and-size" fileType="mp4" fileName="video.mp4" fileSize="15.7 MB" />
        <FileCell variant="file-w-select-and-size" fileType="zip" fileName="archive.zip" fileSize="8.9 MB" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows different file types with their appropriate icons and colors.',
      },
    },
  },
};

// Figma Design Showcase
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>File Cell Variants - Figma Implementation</h3>
        <p style={{ margin: '0 0 24px 0', color: '#6D7280', fontSize: '14px' }}>
          Pixel-perfect implementation matching the Figma designs
        </p>
      </div>

      {/* Original Figma Designs - Seafoam Background */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '500' }}>Default Size - Seafoam Background</h4>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
          <FileCell
            size="default"
            variant="file-w-select"
            background="alt-seafoam-25"
            fileName="thisisafilename.pdf"
            fileType="pdf"
          />
          <FileCell
            size="default"
            variant="file-w-select-and-size"
            background="alt-seafoam-25"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            fileType="pdf"
          />
          <FileCell
            size="default"
            variant="file-w-toggle"
            background="alt-seafoam-25"
            fileName="thisisafilename.pdf"
            fileType="pdf"
            toggleEnabled={true}
          />
          <FileCell
            size="default"
            variant="file-w-toggle-and-size"
            background="alt-seafoam-25"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            fileType="pdf"
            toggleEnabled={true}
          />
        </div>
      </div>

      {/* Small Size - Seafoam Background */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '500' }}>Small Size - Seafoam Background</h4>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
          <FileCell
            size="small"
            variant="file-w-select"
            background="alt-seafoam-25"
            fileName="thisisafilename.pdf"
            fileType="pdf"
          />
          <FileCell
            size="small"
            variant="file-w-select-and-size"
            background="alt-seafoam-25"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            fileType="pdf"
          />
          <FileCell
            size="small"
            variant="file-w-toggle"
            background="alt-seafoam-25"
            fileName="thisisafilename.pdf"
            fileType="pdf"
            toggleEnabled={true}
          />
          <FileCell
            size="small"
            variant="file-w-toggle-and-size"
            background="alt-seafoam-25"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            fileType="pdf"
            toggleEnabled={true}
          />
        </div>
      </div>

      {/* White Background */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '500' }}>Default Size - White Background</h4>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
          <FileCell
            size="default"
            variant="file-w-select"
            background="white"
            fileName="thisisafilename.pdf"
            fileType="pdf"
          />
          <FileCell
            size="default"
            variant="file-w-select-and-size"
            background="white"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            fileType="pdf"
          />
          <FileCell
            size="default"
            variant="file-w-toggle"
            background="white"
            fileName="thisisafilename.pdf"
            fileType="pdf"
            toggleEnabled={true}
          />
          <FileCell
            size="default"
            variant="file-w-toggle-and-size"
            background="white"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            fileType="pdf"
            toggleEnabled={true}
          />
        </div>
      </div>

      {/* Gray Background */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '500' }}>Default Size - Gray Background</h4>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
          <FileCell
            size="default"
            variant="file-w-select"
            background="alt-gray-50"
            fileName="thisisafilename.pdf"
            fileType="pdf"
          />
          <FileCell
            size="default"
            variant="file-w-select-and-size"
            background="alt-gray-50"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            fileType="pdf"
          />
          <FileCell
            size="default"
            variant="file-w-toggle"
            background="alt-gray-50"
            fileName="thisisafilename.pdf"
            fileType="pdf"
            toggleEnabled={true}
          />
          <FileCell
            size="default"
            variant="file-w-toggle-and-size"
            background="alt-gray-50"
            fileName="thisisafilename.pdf"
            fileSize="200 MB"
            fileType="pdf"
            toggleEnabled={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all FileCell variants matching the exact Figma designs with all sizes, backgrounds, and interaction states.',
      },
    },
  },
};

// Interactive Examples
export const InteractiveExample: Story = {
  render: () => {
    const [fileStates, setFileStates] = React.useState({
      file1: { checked: false, toggleEnabled: true },
      file2: { checked: true, toggleEnabled: false },
      file3: { checked: false, toggleEnabled: true },
      file4: { checked: true, toggleEnabled: true },
    });

    const handleCheckboxChange = (fileId: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFileStates(prev => ({
        ...prev,
        [fileId]: { ...prev[fileId], checked: event.target.checked },
      }));
    };

    const handleToggleChange = (fileId: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFileStates(prev => ({
        ...prev,
        [fileId]: { ...prev[fileId], toggleEnabled: event.target.checked },
      }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Interactive File List</h3>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '500px' }}>
          <FileCell
            variant="file-w-select-and-size"
            fileName="annual-report.pdf"
            fileSize="2.5 MB"
            fileType="pdf"
            checked={fileStates.file1.checked}
            onCheckboxChange={handleCheckboxChange('file1')}
          />
          <FileCell
            variant="file-w-select-and-size"
            background="alt-gray-50"
            fileName="budget-2024.xlsx"
            fileSize="1.2 MB"
            fileType="xlsx"
            checked={fileStates.file2.checked}
            onCheckboxChange={handleCheckboxChange('file2')}
          />
          <FileCell
            variant="file-w-toggle-and-size"
            fileName="presentation.pptx"
            fileSize="8.7 MB"
            fileType="pptx"
            toggleEnabled={fileStates.file3.toggleEnabled}
            onToggleChange={handleToggleChange('file3')}
          />
          <FileCell
            variant="file-w-toggle-and-size"
            background="alt-gray-50"
            fileName="photo-album.zip"
            fileSize="45.2 MB"
            fileType="zip"
            toggleEnabled={fileStates.file4.toggleEnabled}
            onToggleChange={handleToggleChange('file4')}
          />
        </div>
        <p style={{ fontSize: '14px', color: '#6D7280', margin: '8px 0 0 0' }}>
          Checkboxes and toggles are interactive - click them to see state changes!
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example demonstrating functional checkboxes and toggles with different file types.',
      },
    },
  },
};
