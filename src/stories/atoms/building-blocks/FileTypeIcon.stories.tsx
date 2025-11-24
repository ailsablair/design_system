import type { Meta, StoryObj } from '@storybook/react';
import { FileTypeIcon } from './FileTypeIcon';

const meta = {
  title: 'Atoms/Building Blocks/FileTypeIcon',
  component: FileTypeIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'File type icons for use in tables and file displays. Supports various file types with three size options.',
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
        '.mp3',
        '.wav',
        '.mp4',
        '.mpeg',
        '.avi',
        '.mkv',
        '.html',
        '.css',
        '.rss',
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
      description: 'The size of the icon',
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

export const Small: Story = {
  args: {
    type: '.pdf',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    type: '.pdf',
    size: 'large',
  },
};

export const AllGenericTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type="default" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type="folder" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Folder</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type="image" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Image</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type="film" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Film</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type="video" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Video</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type="audio" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Audio</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type="adobe-pdf" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Adobe PDF</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type="text" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Text</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type="sheet" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Sheet</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type="code" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Code</div>
      </div>
    </div>
  ),
};

export const AllImageTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      {['.img', '.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.tiff', '.eps'].map((type) => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileTypeIcon type={type as any} />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>{type}</div>
        </div>
      ))}
    </div>
  ),
};

export const AllDocumentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      {['.pdf', '.doc', '.docx', '.txt', '.csv', '.xls', '.xlsx', '.ppt', '.pptx'].map((type) => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileTypeIcon type={type as any} />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>{type}</div>
        </div>
      ))}
    </div>
  ),
};

export const AllMediaTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      {['.mp3', '.wav', '.mp4', '.mpeg', '.avi', '.mkv'].map((type) => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileTypeIcon type={type as any} />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>{type}</div>
        </div>
      ))}
    </div>
  ),
};

export const AllCodeTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      {['.html', '.css', '.js', '.json', '.java', '.xml', '.sql', '.rss'].map((type) => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileTypeIcon type={type as any} />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>{type}</div>
        </div>
      ))}
    </div>
  ),
};

export const AllDesignTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      {['.fig', '.ai', '.psd', '.indd', '.aep'].map((type) => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileTypeIcon type={type as any} />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>{type}</div>
        </div>
      ))}
    </div>
  ),
};

export const AllArchiveTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '20px' }}>
      {['.zip', '.rar', '.dmg', '.exe'].map((type) => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileTypeIcon type={type as any} />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>{type}</div>
        </div>
      ))}
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type=".pdf" size="small" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Small</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type=".pdf" size="default" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileTypeIcon type=".pdf" size="large" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Large</div>
      </div>
    </div>
  ),
};

export const InTableContext: Story = {
  render: () => (
    <table style={{ 
      borderCollapse: 'collapse', 
      width: '100%',
      fontFamily: 'var(--body-body-default-font-family, system-ui, sans-serif)',
    }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
          <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>File</th>
          <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Name</th>
          <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Size</th>
          <th style={{ padding: '12px', textAlign: 'left', fontWeight: 600 }}>Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
          <td style={{ padding: '12px' }}><FileTypeIcon type=".pdf" size="small" /></td>
          <td style={{ padding: '12px' }}>Report_2024.pdf</td>
          <td style={{ padding: '12px' }}>2.4 MB</td>
          <td style={{ padding: '12px' }}>2024-01-15</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
          <td style={{ padding: '12px' }}><FileTypeIcon type=".xlsx" size="small" /></td>
          <td style={{ padding: '12px' }}>Budget.xlsx</td>
          <td style={{ padding: '12px' }}>856 KB</td>
          <td style={{ padding: '12px' }}>2024-01-14</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
          <td style={{ padding: '12px' }}><FileTypeIcon type=".png" size="small" /></td>
          <td style={{ padding: '12px' }}>Screenshot.png</td>
          <td style={{ padding: '12px' }}>1.2 MB</td>
          <td style={{ padding: '12px' }}>2024-01-13</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
          <td style={{ padding: '12px' }}><FileTypeIcon type="folder" size="small" /></td>
          <td style={{ padding: '12px' }}>Documents</td>
          <td style={{ padding: '12px' }}>--</td>
          <td style={{ padding: '12px' }}>2024-01-12</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
          <td style={{ padding: '12px' }}><FileTypeIcon type=".mp4" size="small" /></td>
          <td style={{ padding: '12px' }}>Presentation.mp4</td>
          <td style={{ padding: '12px' }}>45.8 MB</td>
          <td style={{ padding: '12px' }}>2024-01-11</td>
        </tr>
      </tbody>
    </table>
  ),
};

export const AllVariants: Story = {
  render: () => {
    const allTypes = [
      { category: 'Generic', types: ['default', 'folder', 'image', 'film', 'video', 'audio', 'adobe-pdf', 'text', 'sheet', 'code'] },
      { category: 'Images', types: ['.img', '.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.tiff', '.eps'] },
      { category: 'Documents', types: ['.pdf', '.doc', '.docx', '.txt', '.csv', '.xls', '.xlsx', '.ppt', '.pptx'] },
      { category: 'Media', types: ['.mp3', '.wav', '.mp4', '.mpeg', '.avi', '.mkv'] },
      { category: 'Code', types: ['.html', '.css', '.js', '.json', '.java', '.xml', '.sql', '.rss'] },
      { category: 'Design', types: ['.fig', '.ai', '.psd', '.indd', '.aep'] },
      { category: 'Archive', types: ['.zip', '.rar', '.dmg', '.exe'] },
    ];

    return (
      <div style={{ padding: '20px' }}>
        {allTypes.map(({ category, types }) => (
          <div key={category} style={{ marginBottom: '40px' }}>
            <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>{category}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '16px' }}>
              {types.map((type) => (
                <div key={type} style={{ textAlign: 'center', padding: '8px' }}>
                  <FileTypeIcon type={type as any} />
                  <div style={{ fontSize: '11px', marginTop: '8px', color: '#6d7280' }}>{type}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
