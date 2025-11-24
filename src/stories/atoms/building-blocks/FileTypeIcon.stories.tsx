import type { Meta, StoryObj } from '@storybook/react';
import { FileTypeIcon } from './FileTypeIcon';

const meta = {
  title: 'Atoms/Building Blocks/FileTypeIcon',
  component: FileTypeIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'File type icon component for use in tables and file listings. Supports various file types and three sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'default',
        'folder',
        'image',
        'film',
        'video',
        'audio',
        'adobe-pdf',
        'text',
        'sheet',
        'code',
        '.img',
        '.jpg',
        '.jpeg',
        '.png',
        '.webp',
        '.csv',
        '.txt',
        '.docx',
        '.doc',
        '.pdf',
        '.eps',
        '.svg',
        '.gif',
        '.tiff',
        '.xls',
        '.xlsx',
        '.ppt',
        '.pptx',
        '.fig',
        '.ai',
        '.psd',
        '.indd',
        '.aep',
        '.rss',
        '.css',
        '.html',
        '.mkv',
        '.avi',
        '.mpeg',
        '.mp4',
        '.wav',
        '.mp3',
        '.sql',
        '.js',
        '.json',
        '.java',
        '.xml',
        '.exe',
        '.dmg',
        '.zip',
        '.rar',
      ],
      description: 'The file type to display',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size of the icon',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof FileTypeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
    size: 'default',
  },
};

export const Folder: Story = {
  args: {
    type: 'folder',
    size: 'default',
  },
};

export const Image: Story = {
  args: {
    type: 'image',
    size: 'default',
  },
};

export const PDF: Story = {
  args: {
    type: '.pdf',
    size: 'default',
  },
};

export const Document: Story = {
  args: {
    type: '.docx',
    size: 'default',
  },
};

export const Spreadsheet: Story = {
  args: {
    type: '.xlsx',
    size: 'default',
  },
};

export const Code: Story = {
  args: {
    type: '.js',
    size: 'default',
  },
};

export const Video: Story = {
  args: {
    type: '.mp4',
    size: 'default',
  },
};

export const Audio: Story = {
  args: {
    type: '.mp3',
    size: 'default',
  },
};

export const SmallSize: Story = {
  args: {
    type: '.pdf',
    size: 'small',
  },
};

export const LargeSize: Story = {
  args: {
    type: '.pdf',
    size: 'large',
  },
};

export const AllGenericTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <FileTypeIcon type="default" />
      <FileTypeIcon type="folder" />
      <FileTypeIcon type="image" />
      <FileTypeIcon type="film" />
      <FileTypeIcon type="video" />
      <FileTypeIcon type="audio" />
      <FileTypeIcon type="adobe-pdf" />
      <FileTypeIcon type="text" />
      <FileTypeIcon type="sheet" />
      <FileTypeIcon type="code" />
    </div>
  ),
};

export const AllImageTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <FileTypeIcon type=".img" />
      <FileTypeIcon type=".jpg" />
      <FileTypeIcon type=".jpeg" />
      <FileTypeIcon type=".png" />
      <FileTypeIcon type=".webp" />
      <FileTypeIcon type=".svg" />
      <FileTypeIcon type=".gif" />
      <FileTypeIcon type=".tiff" />
      <FileTypeIcon type=".eps" />
    </div>
  ),
};

export const AllDocumentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <FileTypeIcon type=".txt" />
      <FileTypeIcon type=".doc" />
      <FileTypeIcon type=".docx" />
      <FileTypeIcon type=".pdf" />
    </div>
  ),
};

export const AllSpreadsheetTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <FileTypeIcon type=".csv" />
      <FileTypeIcon type=".xls" />
      <FileTypeIcon type=".xlsx" />
    </div>
  ),
};

export const AllVideoTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <FileTypeIcon type=".mp4" />
      <FileTypeIcon type=".mkv" />
      <FileTypeIcon type=".avi" />
      <FileTypeIcon type=".mpeg" />
    </div>
  ),
};

export const AllAudioTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <FileTypeIcon type=".mp3" />
      <FileTypeIcon type=".wav" />
    </div>
  ),
};

export const AllCodeTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <FileTypeIcon type=".js" />
      <FileTypeIcon type=".json" />
      <FileTypeIcon type=".html" />
      <FileTypeIcon type=".css" />
      <FileTypeIcon type=".sql" />
      <FileTypeIcon type=".java" />
      <FileTypeIcon type=".xml" />
    </div>
  ),
};

export const AllDesignTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <FileTypeIcon type=".fig" />
      <FileTypeIcon type=".ai" />
      <FileTypeIcon type=".psd" />
      <FileTypeIcon type=".indd" />
      <FileTypeIcon type=".aep" />
    </div>
  ),
};

export const AllArchiveTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <FileTypeIcon type=".zip" />
      <FileTypeIcon type=".rar" />
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end' }}>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type=".pdf" size="small" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Small</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type=".pdf" size="default" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type=".pdf" size="large" />
        <div style={{ marginTop: '8px', fontSize: '12px' }}>Large</div>
      </div>
    </div>
  ),
};

export const InTableContext: Story = {
  render: () => (
    <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '600px' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
          <th style={{ padding: '12px', textAlign: 'left' }}>File</th>
          <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
          <th style={{ padding: '12px', textAlign: 'left' }}>Size</th>
          <th style={{ padding: '12px', textAlign: 'left' }}>Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
          <td style={{ padding: '12px' }}><FileTypeIcon type=".pdf" size="small" /></td>
          <td style={{ padding: '12px' }}>Document.pdf</td>
          <td style={{ padding: '12px' }}>2.4 MB</td>
          <td style={{ padding: '12px' }}>2 hours ago</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
          <td style={{ padding: '12px' }}><FileTypeIcon type=".xlsx" size="small" /></td>
          <td style={{ padding: '12px' }}>Spreadsheet.xlsx</td>
          <td style={{ padding: '12px' }}>1.2 MB</td>
          <td style={{ padding: '12px' }}>1 day ago</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
          <td style={{ padding: '12px' }}><FileTypeIcon type=".jpg" size="small" /></td>
          <td style={{ padding: '12px' }}>Photo.jpg</td>
          <td style={{ padding: '12px' }}>3.8 MB</td>
          <td style={{ padding: '12px' }}>3 days ago</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
          <td style={{ padding: '12px' }}><FileTypeIcon type="folder" size="small" /></td>
          <td style={{ padding: '12px' }}>Projects</td>
          <td style={{ padding: '12px' }}>--</td>
          <td style={{ padding: '12px' }}>1 week ago</td>
        </tr>
      </tbody>
    </table>
  ),
};
