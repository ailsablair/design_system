import type { Meta, StoryObj } from '@storybook/react';
import { FileTypeIcon } from '../../atoms/building-blocks/FileTypeIcon';

const meta = {
  title: 'Design System/Figma Showcase Files/FileTypeIcon',
  component: FileTypeIcon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete showcase of all file type icon variants from Figma design. This component supports 50+ file types across 3 sizes.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FileTypeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteFigmaShowcase: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 600 }}>File Type Icons - Complete Figma Showcase</h2>
      
      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Generic File Types</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '24px' }}>
          {(['default', 'folder', 'image', 'film', 'video', 'audio', 'adobe-pdf', 'text', 'sheet', 'code'] as const).map((type) => (
            <div key={type} style={{ textAlign: 'center' }}>
              <FileTypeIcon type={type} />
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#6d7280' }}>{type}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Image Files</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '24px' }}>
          {(['.img', '.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.tiff', '.eps'] as const).map((type) => (
            <div key={type} style={{ textAlign: 'center' }}>
              <FileTypeIcon type={type} />
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#6d7280' }}>{type}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Document Files</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '24px' }}>
          {(['.txt', '.doc', '.docx', '.pdf', '.ppt', '.pptx'] as const).map((type) => (
            <div key={type} style={{ textAlign: 'center' }}>
              <FileTypeIcon type={type} />
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#6d7280' }}>{type}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Spreadsheet Files</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '24px' }}>
          {(['.csv', '.xls', '.xlsx'] as const).map((type) => (
            <div key={type} style={{ textAlign: 'center' }}>
              <FileTypeIcon type={type} />
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#6d7280' }}>{type}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Video Files</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '24px' }}>
          {(['.mp4', '.mkv', '.avi', '.mpeg'] as const).map((type) => (
            <div key={type} style={{ textAlign: 'center' }}>
              <FileTypeIcon type={type} />
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#6d7280' }}>{type}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Audio Files</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '24px' }}>
          {(['.mp3', '.wav'] as const).map((type) => (
            <div key={type} style={{ textAlign: 'center' }}>
              <FileTypeIcon type={type} />
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#6d7280' }}>{type}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Code Files</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '24px' }}>
          {(['.js', '.json', '.html', '.css', '.sql', '.java', '.xml', '.rss'] as const).map((type) => (
            <div key={type} style={{ textAlign: 'center' }}>
              <FileTypeIcon type={type} />
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#6d7280' }}>{type}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Design Files</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '24px' }}>
          {(['.fig', '.ai', '.psd', '.indd', '.aep'] as const).map((type) => (
            <div key={type} style={{ textAlign: 'center' }}>
              <FileTypeIcon type={type} />
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#6d7280' }}>{type}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Archive & Executable Files</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '24px' }}>
          {(['.zip', '.rar', '.exe', '.dmg'] as const).map((type) => (
            <div key={type} style={{ textAlign: 'center' }}>
              <FileTypeIcon type={type} />
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#6d7280' }}>{type}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Size Variants</h3>
        <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-end' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Small (38px)</div>
            <FileTypeIcon type=".pdf" size="small" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Default (42px)</div>
            <FileTypeIcon type=".pdf" size="default" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Large (46px)</div>
            <FileTypeIcon type=".pdf" size="large" />
          </div>
        </div>
      </section>
    </div>
  ),
};

export const AllTypesSmall: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '16px' }}>
      {([
        'default', 'folder', 'image', 'film', 'video', 'audio', 'adobe-pdf', 'text', 'sheet', 'code',
        '.img', '.jpg', '.jpeg', '.png', '.webp', '.csv', '.txt', '.docx', '.doc', '.pdf',
        '.eps', '.svg', '.gif', '.tiff', '.xls', '.xlsx', '.ppt', '.fig', '.ai', '.psd',
        '.indd', '.aep', '.rss', '.css', '.html', '.mkv', '.avi', '.mpeg', '.mp4', '.wav',
        '.mp3', '.sql', '.js', '.json', '.java', '.xml', '.exe', '.dmg', '.zip', '.pptx', '.rar'
      ] as const).map((type) => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileTypeIcon type={type} size="small" />
          <div style={{ marginTop: '4px', fontSize: '11px', color: '#6d7280' }}>{type}</div>
        </div>
      ))}
    </div>
  ),
};

export const AllTypesDefault: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: '20px' }}>
      {([
        'default', 'folder', 'image', 'film', 'video', 'audio', 'adobe-pdf', 'text', 'sheet', 'code',
        '.img', '.jpg', '.jpeg', '.png', '.webp', '.csv', '.txt', '.docx', '.doc', '.pdf',
        '.eps', '.svg', '.gif', '.tiff', '.xls', '.xlsx', '.ppt', '.fig', '.ai', '.psd',
        '.indd', '.aep', '.rss', '.css', '.html', '.mkv', '.avi', '.mpeg', '.mp4', '.wav',
        '.mp3', '.sql', '.js', '.json', '.java', '.xml', '.exe', '.dmg', '.zip', '.pptx', '.rar'
      ] as const).map((type) => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileTypeIcon type={type} size="default" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#6d7280' }}>{type}</div>
        </div>
      ))}
    </div>
  ),
};

export const AllTypesLarge: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '24px' }}>
      {([
        'default', 'folder', 'image', 'film', 'video', 'audio', 'adobe-pdf', 'text', 'sheet', 'code',
        '.img', '.jpg', '.jpeg', '.png', '.webp', '.csv', '.txt', '.docx', '.doc', '.pdf',
        '.eps', '.svg', '.gif', '.tiff', '.xls', '.xlsx', '.ppt', '.fig', '.ai', '.psd',
        '.indd', '.aep', '.rss', '.css', '.html', '.mkv', '.avi', '.mpeg', '.mp4', '.wav',
        '.mp3', '.sql', '.js', '.json', '.java', '.xml', '.exe', '.dmg', '.zip', '.pptx', '.rar'
      ] as const).map((type) => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileTypeIcon type={type} size="large" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#6d7280' }}>{type}</div>
        </div>
      ))}
    </div>
  ),
};
