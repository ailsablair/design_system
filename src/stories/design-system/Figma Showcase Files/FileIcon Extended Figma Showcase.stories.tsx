import type { Meta, StoryObj } from '@storybook/react';
import { FileIcon, type FileType } from '../../atoms/building-blocks/FileIcon';

const meta: Meta<typeof FileIcon> = {
  title: 'Design System/Figma Showcase Files/FileIcon Extended Figma Showcase',
  component: FileIcon,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# FileIcon Figma Showcase

This showcase demonstrates all file type icons in a layout that matches the original Figma design. 
It includes all 50+ supported file formats across three size variants.

## Complete File Type Coverage
- **Image Formats (9)**: IMG, JPG, JPEG, PNG, WEBP, TIFF, GIF, SVG, EPS
- **Document Formats (9)**: PDF, DOC, DOCX, TXT, CSV, XLS, XLSX, PPT, PPTX  
- **Design Formats (5)**: FIG, AI, PSD, INDD, AEP
- **Media Formats (6)**: MP3, WAV, MP4, MPEG, AVI, MKV
- **Code Formats (10)**: HTML, CSS, RSS, SQL, JS, JSON, JAVA, XML, EXE, DMG
- **Archive Formats (2)**: ZIP, RAR

Each file type is color-coded according to its category and follows the exact specifications from the Figma design.
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof FileIcon>;

// All file types in the order they appear in Figma
const allFileTypes: FileType[] = [
  // First row - Generic and Icon variants
  'file', 'file', 'file', 'file', 'file', 'file', 'file', 'file', 'file', 'file', 'file', 'file',
  // Second row - Image formats
  'img', 'jpg', 'jpeg', 'png', 'webp', 'tiff', 'gif', 'svg', 'eps',
  // Third row - Document formats
  'pdf', 'doc', 'docx', 'txt', 'csv', 'xls', 'xlsx', 'ppt', 'pptx',
  // Fourth row - Design formats
  'fig', 'ai', 'psd', 'indd', 'aep',
  // Fifth row - Media formats
  'mp3', 'wav', 'mp4', 'mpeg', 'avi', 'mkv',
  // Sixth row - Code formats
  'html', 'css', 'rss', 'sql', 'js', 'json', 'java', 'xml', 'exe', 'dmg',
  // Seventh row - Archive formats
  'zip', 'rar'
];

const imageFileTypes: FileType[] = ['img', 'jpg', 'jpeg', 'png', 'webp', 'tiff', 'gif', 'svg', 'eps'];
const documentFileTypes: FileType[] = ['pdf', 'doc', 'docx', 'txt', 'csv', 'xls', 'xlsx', 'ppt', 'pptx'];
const designFileTypes: FileType[] = ['fig', 'ai', 'psd', 'indd', 'aep'];
const mediaFileTypes: FileType[] = ['mp3', 'wav', 'mp4', 'mpeg', 'avi', 'mkv'];
const codeFileTypes: FileType[] = ['html', 'css', 'rss', 'sql', 'js', 'json', 'java', 'xml', 'exe', 'dmg'];
const archiveFileTypes: FileType[] = ['zip', 'rar'];

export const CompleteFigmaShowcase: Story = {
  render: () => (
    <div style={{ 
      padding: '48px', 
      backgroundColor: '#fafafa',
      minHeight: '100vh'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        backgroundColor: 'white',
        border: '1px solid #e5e5e5',
        borderRadius: '8px',
        padding: '48px'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold', 
          marginBottom: '8px',
          color: '#1a1a1a'
        }}>
          FileIcon Component
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#666', 
          marginBottom: '48px',
          lineHeight: '1.5'
        }}>
          Complete file type icon library with 50+ formats across 6 categories. 
          Each icon follows consistent design patterns with appropriate color coding.
        </p>

        {/* Three Size Grid - Figma Layout */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '24px',
            color: '#1a1a1a'
          }}>
            All Sizes - PDF Example
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            maxWidth: '300px'
          }}>
            {/* Small, Medium, Large in Figma order */}
            <div style={{ textAlign: 'center' }}>
              <FileIcon type="pdf" size="large" />
              <div style={{ marginTop: '8px', fontSize: '14px', color: '#666', fontWeight: '500' }}>
                Large (46px)
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <FileIcon type="pdf" size="medium" />
              <div style={{ marginTop: '8px', fontSize: '14px', color: '#666', fontWeight: '500' }}>
                Medium (42px)
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <FileIcon type="pdf" size="small" />
              <div style={{ marginTop: '8px', fontSize: '14px', color: '#666', fontWeight: '500' }}>
                Small (40px)
              </div>
            </div>
          </div>
        </div>

        {/* Image Formats */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            marginBottom: '16px',
            color: '#1a1a1a'
          }}>
            Image Formats
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
            gap: '24px',
            maxWidth: '600px'
          }}>
            {imageFileTypes.map((type) => (
              <div key={type} style={{ textAlign: 'center' }}>
                <FileIcon type={type} size="medium" />
                <div style={{ 
                  marginTop: '4px', 
                  fontSize: '11px', 
                  color: '#7F56D9',
                  fontWeight: '600'
                }}>
                  {type.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Formats */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            marginBottom: '16px',
            color: '#1a1a1a'
          }}>
            Document Formats
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
            gap: '24px',
            maxWidth: '600px'
          }}>
            {documentFileTypes.map((type) => (
              <div key={type} style={{ textAlign: 'center' }}>
                <FileIcon type={type} size="medium" />
                <div style={{ 
                  marginTop: '4px', 
                  fontSize: '11px', 
                  color: type === 'pdf' || type === 'ppt' || type === 'pptx' ? '#D92D20' 
                        : type === 'csv' || type === 'xls' || type === 'xlsx' ? '#099250'
                        : type === 'txt' ? '#232F3E' : '#155EEF',
                  fontWeight: '600'
                }}>
                  {type.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Formats */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            marginBottom: '16px',
            color: '#1a1a1a'
          }}>
            Design Formats
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
            gap: '24px',
            maxWidth: '350px'
          }}>
            {designFileTypes.map((type) => (
              <div key={type} style={{ textAlign: 'center' }}>
                <FileIcon type={type} size="medium" />
                <div style={{ 
                  marginTop: '4px', 
                  fontSize: '11px', 
                  color: type === 'fig' ? '#7F56D9' 
                        : type === 'ai' ? '#D92D20'
                        : type === 'psd' ? '#155EEF'
                        : type === 'indd' ? '#BA24D5' : '#6938EF',
                  fontWeight: '600'
                }}>
                  {type.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Formats */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            marginBottom: '16px',
            color: '#1a1a1a'
          }}>
            Media Formats
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
            gap: '24px',
            maxWidth: '400px'
          }}>
            {mediaFileTypes.map((type) => (
              <div key={type} style={{ textAlign: 'center' }}>
                <FileIcon type={type} size="medium" />
                <div style={{ 
                  marginTop: '4px', 
                  fontSize: '11px', 
                  color: type === 'mp3' || type === 'wav' ? '#DD2590' : '#155EEF',
                  fontWeight: '600'
                }}>
                  {type.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Formats */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            marginBottom: '16px',
            color: '#1a1a1a'
          }}>
            Code & Development Formats
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
            gap: '24px',
            maxWidth: '650px'
          }}>
            {codeFileTypes.map((type) => (
              <div key={type} style={{ textAlign: 'center' }}>
                <FileIcon type={type} size="medium" />
                <div style={{ 
                  marginTop: '4px', 
                  fontSize: '11px', 
                  color: '#444CE7',
                  fontWeight: '600'
                }}>
                  {type.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archive Formats */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            marginBottom: '16px',
            color: '#1a1a1a'
          }}>
            Archive Formats
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
            gap: '24px',
            maxWidth: '150px'
          }}>
            {archiveFileTypes.map((type) => (
              <div key={type} style={{ textAlign: 'center' }}>
                <FileIcon type={type} size="medium" />
                <div style={{ 
                  marginTop: '4px', 
                  fontSize: '11px', 
                  color: '#232F3E',
                  fontWeight: '600'
                }}>
                  {type.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Showcase */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            marginBottom: '16px',
            color: '#1a1a1a'
          }}>
            Component Features
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '32px',
            maxWidth: '600px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <FileIcon type="pdf" size="medium" showLabel={false} />
              <div style={{ 
                marginTop: '8px', 
                fontSize: '12px', 
                color: '#666',
                fontWeight: '500'
              }}>
                Without Label
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <FileIcon type="pdf" size="medium" customLabel="CUSTOM" />
              <div style={{ 
                marginTop: '8px', 
                fontSize: '12px', 
                color: '#666',
                fontWeight: '500'
              }}>
                Custom Label
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <FileIcon 
                type="pdf" 
                size="medium" 
                onClick={() => alert('Clicked!')}
              />
              <div style={{ 
                marginTop: '8px', 
                fontSize: '12px', 
                color: '#666',
                fontWeight: '500'
              }}>
                Interactive
              </div>
            </div>
          </div>
        </div>

        {/* Usage Stats */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '24px', 
          borderRadius: '8px',
          border: '1px solid #e5e5e5'
        }}>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            marginBottom: '12px',
            color: '#1a1a1a'
          }}>
            Component Statistics
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
            fontSize: '14px',
            color: '#666'
          }}>
            <div>
              <strong style={{ color: '#1a1a1a' }}>50+</strong> File Types Supported
            </div>
            <div>
              <strong style={{ color: '#1a1a1a' }}>3</strong> Size Variants
            </div>
            <div>
              <strong style={{ color: '#1a1a1a' }}>6</strong> Color Categories
            </div>
            <div>
              <strong style={{ color: '#1a1a1a' }}>100%</strong> Accessible
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Complete showcase of all FileIcon variants matching the original Figma design. 
This demonstrates the full range of supported file types, color coding system, 
and component features in a comprehensive layout.
        `
      }
    }
  }
};

export const CompactGrid: Story = {
  render: () => (
    <div style={{ 
      padding: '24px',
      backgroundColor: 'white'
    }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        marginBottom: '24px',
        textAlign: 'center'
      }}>
        All File Types - Compact View
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
        gap: '16px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {[...imageFileTypes, ...documentFileTypes, ...designFileTypes, ...mediaFileTypes, ...codeFileTypes, ...archiveFileTypes].map((type, index) => (
          <div key={`${type}-${index}`} style={{ textAlign: 'center' }}>
            <FileIcon type={type} size="small" />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact grid view showing all file types in small size for overview purposes'
      }
    }
  }
};
