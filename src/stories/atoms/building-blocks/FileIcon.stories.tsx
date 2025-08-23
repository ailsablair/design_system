import type { Meta, StoryObj } from '@storybook/react';
import { FileIcon, type FileIconProps, type FileType } from './FileIcon';

const meta: Meta<typeof FileIcon> = {
  title: 'Atoms/Building Blocks/FileIcon',
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
