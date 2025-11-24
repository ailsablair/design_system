import type { Meta, StoryObj } from '@storybook/react';
import { FileTypeIcon } from '../../atoms/building-blocks/FileTypeIcon';

const meta = {
  title: 'Design System/Figma Showcase Files/FileTypeIcon Figma Showcase',
  component: FileTypeIcon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'File type icon building blocks from Figma design. These icons are designed for use in tables and file management interfaces.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FileTypeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => {
    const sizes: Array<'small' | 'default' | 'large'> = ['small', 'default', 'large'];
    const fileTypes = [
      { label: 'Default', type: 'default' },
      { label: 'Folder', type: 'folder' },
      { label: 'Image', type: 'image' },
      { label: 'Film', type: 'film' },
      { label: 'Video', type: 'video' },
      { label: 'Audio', type: 'audio' },
      { label: 'Adobe PDF', type: 'adobe-pdf' },
      { label: 'Text', type: 'text' },
      { label: 'Sheet', type: 'sheet' },
      { label: 'Code', type: 'code' },
      { label: '.IMG', type: '.img' },
      { label: '.JPG', type: '.jpg' },
      { label: '.JPEG', type: '.jpeg' },
      { label: '.PNG', type: '.png' },
      { label: '.WEBP', type: '.webp' },
      { label: '.CSV', type: '.csv' },
      { label: '.TXT', type: '.txt' },
      { label: '.DOCX', type: '.docx' },
      { label: '.DOC', type: '.doc' },
      { label: '.PDF', type: '.pdf' },
      { label: '.EPS', type: '.eps' },
      { label: '.SVG', type: '.svg' },
      { label: '.GIF', type: '.gif' },
      { label: '.TIFF', type: '.tiff' },
      { label: '.XLS', type: '.xls' },
      { label: '.XLSX', type: '.xlsx' },
      { label: '.PPT', type: '.ppt' },
      { label: '.FIG', type: '.fig' },
      { label: '.AI', type: '.ai' },
      { label: '.PSD', type: '.psd' },
      { label: '.INDD', type: '.indd' },
      { label: '.AEP', type: '.aep' },
      { label: '.RSS', type: '.rss' },
      { label: '.CSS', type: '.css' },
      { label: '.HTML', type: '.html' },
      { label: '.MKV', type: '.mkv' },
      { label: '.AVI', type: '.avi' },
      { label: '.MPEG', type: '.mpeg' },
      { label: '.MP4', type: '.mp4' },
      { label: '.WAV', type: '.wav' },
      { label: '.MP3', type: '.mp3' },
      { label: '.SQL', type: '.sql' },
      { label: '.JS', type: '.js' },
      { label: '.JSON', type: '.json' },
      { label: '.JAVA', type: '.java' },
      { label: '.XML', type: '.xml' },
      { label: '.EXE', type: '.exe' },
      { label: '.DMG', type: '.dmg' },
      { label: '.ZIP', type: '.zip' },
      { label: '.PPTX', type: '.pptx' },
      { label: '.RAR', type: '.rar' },
    ];

    return (
      <div style={{ 
        padding: '32px',
        background: 'var(--neutral-gray-gray-50, #f9fafb)',
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 700, 
          marginBottom: '8px',
          fontFamily: 'var(--title-archivo-title-bold-font-family, Archivo, sans-serif)',
        }}>
          File Type Icons
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: 'var(--neutral-gray-gray-600, #4b5563)',
          marginBottom: '32px',
          fontFamily: 'var(--body-body-default-font-family, RobotoFlex, sans-serif)',
        }}>
          Building block icons for file type representation in tables and lists. Includes 153 variants across 51 file types and 3 sizes.
        </p>

        {/* Size Showcase */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            marginBottom: '16px',
            fontFamily: 'var(--subtitle-archivo-subtitle-semi-font-family, Archivo, sans-serif)',
          }}>
            Size Variants
          </h2>
          <div style={{ 
            display: 'flex', 
            gap: '32px', 
            alignItems: 'flex-end',
            padding: '24px',
            background: 'var(--base-white, #ffffff)',
            borderRadius: '8px',
            border: '1px solid var(--neutral-gray-gray-200, #e5e7eb)',
          }}>
            {sizes.map((size) => (
              <div key={size} style={{ textAlign: 'center' }}>
                <FileTypeIcon type=".pdf" size={size} />
                <div style={{ 
                  fontSize: '12px', 
                  marginTop: '8px',
                  fontWeight: 500,
                  textTransform: 'capitalize',
                  color: 'var(--neutral-gray-gray-700, #374151)',
                }}>
                  {size}
                </div>
                <div style={{ 
                  fontSize: '11px', 
                  color: 'var(--neutral-gray-gray-500, #6d7280)',
                }}>
                  {size === 'small' ? '40px' : size === 'default' ? '42px' : '46px'}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All File Types Grid */}
        <section>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            marginBottom: '16px',
            fontFamily: 'var(--subtitle-archivo-subtitle-semi-font-family, Archivo, sans-serif)',
          }}>
            All File Types
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
            gap: '16px',
            padding: '24px',
            background: 'var(--base-white, #ffffff)',
            borderRadius: '8px',
            border: '1px solid var(--neutral-gray-gray-200, #e5e7eb)',
          }}>
            {fileTypes.map(({ label, type }) => (
              <div key={type} style={{ 
                textAlign: 'center',
                padding: '12px 8px',
                borderRadius: '6px',
                transition: 'background 0.2s',
              }}>
                <FileTypeIcon type={type as any} />
                <div style={{ 
                  fontSize: '10px', 
                  marginTop: '8px',
                  color: 'var(--neutral-gray-gray-600, #4b5563)',
                  fontWeight: 500,
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Example */}
        <section style={{ marginTop: '48px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            marginBottom: '16px',
            fontFamily: 'var(--subtitle-archivo-subtitle-semi-font-family, Archivo, sans-serif)',
          }}>
            Usage in Table
          </h2>
          <div style={{
            background: 'var(--base-white, #ffffff)',
            borderRadius: '8px',
            border: '1px solid var(--neutral-gray-gray-200, #e5e7eb)',
            overflow: 'hidden',
          }}>
            <table style={{ 
              width: '100%',
              borderCollapse: 'collapse',
            }}>
              <thead>
                <tr style={{ 
                  background: 'var(--neutral-gray-gray-50, #f9fafb)',
                  borderBottom: '1px solid var(--neutral-gray-gray-200, #e5e7eb)',
                }}>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    fontWeight: 600,
                    fontSize: '14px',
                    color: 'var(--neutral-gray-gray-700, #374151)',
                  }}>Type</th>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    fontWeight: 600,
                    fontSize: '14px',
                    color: 'var(--neutral-gray-gray-700, #374151)',
                  }}>File Name</th>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    fontWeight: 600,
                    fontSize: '14px',
                    color: 'var(--neutral-gray-gray-700, #374151)',
                  }}>Size</th>
                  <th style={{ 
                    padding: '12px 16px', 
                    textAlign: 'left', 
                    fontWeight: 600,
                    fontSize: '14px',
                    color: 'var(--neutral-gray-gray-700, #374151)',
                  }}>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: '.pdf', name: 'Annual_Report_2024.pdf', size: '2.4 MB', date: 'Jan 15, 2024' },
                  { type: '.xlsx', name: 'Budget_Analysis.xlsx', size: '856 KB', date: 'Jan 14, 2024' },
                  { type: '.png', name: 'Screenshot_2024.png', size: '1.2 MB', date: 'Jan 13, 2024' },
                  { type: 'folder', name: 'Project_Documents', size: '--', date: 'Jan 12, 2024' },
                  { type: '.mp4', name: 'Training_Video.mp4', size: '45.8 MB', date: 'Jan 11, 2024' },
                  { type: '.docx', name: 'Meeting_Notes.docx', size: '124 KB', date: 'Jan 10, 2024' },
                  { type: '.zip', name: 'Archive_2023.zip', size: '128 MB', date: 'Jan 9, 2024' },
                ].map((row, idx) => (
                  <tr key={idx} style={{ 
                    borderBottom: '1px solid var(--neutral-gray-gray-200, #e5e7eb)',
                  }}>
                    <td style={{ padding: '12px 16px' }}>
                      <FileTypeIcon type={row.type as any} size="small" />
                    </td>
                    <td style={{ 
                      padding: '12px 16px',
                      fontSize: '14px',
                      color: 'var(--neutral-gray-gray-900, #111827)',
                    }}>
                      {row.name}
                    </td>
                    <td style={{ 
                      padding: '12px 16px',
                      fontSize: '14px',
                      color: 'var(--neutral-gray-gray-600, #4b5563)',
                    }}>
                      {row.size}
                    </td>
                    <td style={{ 
                      padding: '12px 16px',
                      fontSize: '14px',
                      color: 'var(--neutral-gray-gray-600, #4b5563)',
                    }}>
                      {row.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  },
};
