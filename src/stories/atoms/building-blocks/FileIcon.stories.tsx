import type { Meta, StoryObj } from '@storybook/react';
import { FileIcon, type FileIconProps, type FileType } from './FileIcon';

const meta: Meta<typeof FileIcon> = {
  title: 'Atoms/🧱 Building Blocks/FileIcon',
  component: FileIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The FileIcon component displays file type icons with configurable labels and sizes. 
It supports a wide range of file formats with appropriate color coding.

## Features
- **50+ File Types**: Comprehensive support for image, document, media, code, and archive formats
- **3 Sizes**: Small (40px), Medium (42px), and Large (46px)
- **Color Coded**: Automatic color assignment based on file type category
- **Interactive**: Optional click handlers with hover and focus states
- **Accessible**: Full keyboard navigation and screen reader support
- **Responsive**: Adapts to mobile viewports

## File Type Categories
- **Images**: Purple theme for IMG, JPG, PNG, SVG, etc.
- **Documents**: Blue for Office files, Red for PDFs, Green for spreadsheets
- **Code**: Purple/Blue theme for HTML, CSS, JS, JSON, etc.
- **Media**: Pink for audio, Blue for video formats
- **Archives**: Dark theme for ZIP, RAR files
        `
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'img', 'jpg', 'jpeg', 'png', 'webp', 'tiff', 'gif', 'svg', 'eps',
        'pdf', 'doc', 'docx', 'txt', 'csv', 'xls', 'xlsx', 'ppt', 'pptx',
        'fig', 'ai', 'psd', 'indd', 'aep',
        'mp3', 'wav', 'mp4', 'mpeg', 'avi', 'mkv',
        'html', 'css', 'rss', 'sql', 'js', 'json', 'java', 'xml', 'exe', 'dmg',
        'zip', 'rar', 'file'
      ],
      description: 'The file type to display'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the file icon'
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the file extension label'
    },
    customLabel: {
      control: 'text',
      description: 'Custom text for the label (overrides default)'
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function'
    }
  },
  args: {
    type: 'pdf',
    size: 'medium',
    showLabel: true
  }
};

export default meta;
type Story = StoryObj<typeof FileIcon>;

// Basic Examples
export const Default: Story = {
  args: {
    type: 'pdf'
  }
};

export const WithoutLabel: Story = {
  args: {
    type: 'pdf',
    showLabel: false
  }
};

export const CustomLabel: Story = {
  args: {
    type: 'pdf',
    customLabel: 'CUSTOM'
  }
};

export const Clickable: Story = {
  args: {
    type: 'pdf',
    onClick: () => alert('File icon clicked!')
  }
};

// Size Variants
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'end', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <FileIcon type="pdf" size="small" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Small</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileIcon type="pdf" size="medium" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Medium</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <FileIcon type="pdf" size="large" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Large</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'FileIcon component in all available sizes'
      }
    }
  }
};

// Image Formats
export const ImageFormats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '600px' }}>
      {(['img', 'jpg', 'jpeg', 'png', 'webp', 'tiff', 'gif', 'svg', 'eps'] as FileType[]).map(type => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileIcon type={type} />
          <div style={{ marginTop: '4px', fontSize: '10px', color: '#666' }}>{type.toUpperCase()}</div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All supported image file formats with purple color theme'
      }
    }
  }
};

// Document Formats
export const DocumentFormats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '600px' }}>
      {(['pdf', 'doc', 'docx', 'txt', 'csv', 'xls', 'xlsx', 'ppt', 'pptx'] as FileType[]).map(type => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileIcon type={type} />
          <div style={{ marginTop: '4px', fontSize: '10px', color: '#666' }}>{type.toUpperCase()}</div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Document formats with color coding: Red for PDFs/PPT, Blue for Word/Office, Green for spreadsheets, Dark for text'
      }
    }
  }
};

// Design Formats
export const DesignFormats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '400px' }}>
      {(['fig', 'ai', 'psd', 'indd', 'aep'] as FileType[]).map(type => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileIcon type={type} />
          <div style={{ marginTop: '4px', fontSize: '10px', color: '#666' }}>{type.toUpperCase()}</div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Creative design file formats with distinct colors for each application'
      }
    }
  }
};

// Media Formats
export const MediaFormats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '500px' }}>
      {(['mp3', 'wav', 'mp4', 'mpeg', 'avi', 'mkv'] as FileType[]).map(type => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileIcon type={type} />
          <div style={{ marginTop: '4px', fontSize: '10px', color: '#666' }}>{type.toUpperCase()}</div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Audio (pink) and video (blue) file formats'
      }
    }
  }
};

// Code Formats
export const CodeFormats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '600px' }}>
      {(['html', 'css', 'js', 'json', 'java', 'xml', 'sql', 'exe', 'dmg', 'rss'] as FileType[]).map(type => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileIcon type={type} />
          <div style={{ marginTop: '4px', fontSize: '10px', color: '#666' }}>{type.toUpperCase()}</div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Programming and development file formats with blue/purple theme'
      }
    }
  }
};

// Archive Formats
export const ArchiveFormats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '200px' }}>
      {(['zip', 'rar'] as FileType[]).map(type => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileIcon type={type} />
          <div style={{ marginTop: '4px', fontSize: '10px', color: '#666' }}>{type.toUpperCase()}</div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Archive file formats with dark theme'
      }
    }
  }
};

// Interactive Examples
export const InteractiveGrid: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '600px' }}>
      {(['pdf', 'doc', 'jpg', 'mp4', 'zip', 'js', 'fig', 'ai'] as FileType[]).map(type => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileIcon 
            type={type} 
            onClick={() => alert(`Clicked ${type.toUpperCase()} file!`)}
          />
          <div style={{ marginTop: '4px', fontSize: '10px', color: '#666' }}>Click me!</div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive file icons with click handlers and hover effects'
      }
    }
  }
};

// Without Labels
export const WithoutLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '400px' }}>
      {(['pdf', 'doc', 'jpg', 'mp4', 'zip', 'js'] as FileType[]).map(type => (
        <div key={type} style={{ textAlign: 'center' }}>
          <FileIcon type={type} showLabel={false} />
          <div style={{ marginTop: '4px', fontSize: '10px', color: '#666' }}>{type.toUpperCase()}</div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'File icons without extension labels, showing just the document shape'
      }
    }
  }
};

// Custom Labels
export const CustomLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '400px' }}>
      <FileIcon type="pdf" customLabel="DOC" />
      <FileIcon type="jpg" customLabel="IMAGE" />
      <FileIcon type="mp4" customLabel="VIDEO" />
      <FileIcon type="zip" customLabel="ARCHIVE" />
      <FileIcon type="js" customLabel="SCRIPT" />
      <FileIcon type="file" customLabel="MISC" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'File icons with custom labels overriding the default file extension'
      }
    }
  }
};

// Alignment Test
export const AlignmentTest: Story = {
  render: () => (
    <div style={{ padding: '24px', backgroundColor: '#F9FAFB' }}>
      <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: 600 }}>
        FileIcon Alignment Tests
      </h3>

      {/* Test 1: Inline with text */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>
          Inline with Text
        </h4>
        <p style={{ fontSize: '16px', lineHeight: '24px', margin: 0 }}>
          Here is some text with inline file icons: <FileIcon type="pdf" size="small" /> PDF file,
          <FileIcon type="jpg" size="small" /> image file, and <FileIcon type="zip" size="small" /> archive file.
          All should align properly with the text baseline.
        </p>
      </div>

      {/* Test 2: Grid alignment */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>
          Grid Alignment (All Sizes)
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
          gap: '16px',
          alignItems: 'start',
          padding: '16px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #E5E7EB'
        }}>
          <FileIcon type="pdf" size="small" />
          <FileIcon type="doc" size="small" />
          <FileIcon type="jpg" size="small" />
          <FileIcon type="mp4" size="small" />
          <FileIcon type="zip" size="small" />
          <FileIcon type="js" size="small" />
        </div>
      </div>

      {/* Test 3: Mixed sizes alignment */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>
          Mixed Sizes Alignment
        </h4>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
          padding: '16px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #E5E7EB'
        }}>
          <FileIcon type="pdf" size="small" />
          <FileIcon type="pdf" size="medium" />
          <FileIcon type="pdf" size="large" />
          <FileIcon type="doc" size="small" />
          <FileIcon type="doc" size="medium" />
          <FileIcon type="doc" size="large" />
        </div>
      </div>

      {/* Test 4: Flex container alignment */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>
          Flex Container Alignment
        </h4>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '12px',
          padding: '16px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #E5E7EB'
        }}>
          <span>Files:</span>
          <FileIcon type="pdf" />
          <span>and</span>
          <FileIcon type="jpg" />
          <span>and</span>
          <FileIcon type="zip" />
          <span>should align with this text.</span>
        </div>
      </div>

      {/* Test 5: With and without labels */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>
          With and Without Labels
        </h4>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
          padding: '16px',
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #E5E7EB'
        }}>
          <FileIcon type="pdf" showLabel={true} />
          <FileIcon type="pdf" showLabel={false} />
          <FileIcon type="jpg" showLabel={true} />
          <FileIcon type="jpg" showLabel={false} />
          <FileIcon type="zip" showLabel={true} />
          <FileIcon type="zip" showLabel={false} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive alignment tests to verify FileIcon positioning in various contexts including inline text, grids, and flex containers.'
      }
    }
  }
};
