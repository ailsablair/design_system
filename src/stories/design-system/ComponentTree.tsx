import React from 'react';

interface ComponentNode {
  name: string;
  type: 'category' | 'component' | 'story';
  children?: ComponentNode[];
  link?: string;
}

interface ComponentTreeProps {
  data: ComponentNode[];
}

const TreeNode: React.FC<{ node: ComponentNode; depth: number }> = ({ node, depth }) => {
  const [isOpen, setIsOpen] = React.useState(depth < 2);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ marginLeft: depth > 0 ? '20px' : '0', marginBottom: '4px' }}>
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          cursor: hasChildren ? 'pointer' : 'default',
          padding: '4px 8px',
          borderRadius: '4px',
          backgroundColor: node.type === 'category' ? 'var(--neutral-gray-gray-100)' : 'transparent',
          border: node.type === 'category' ? '1px solid var(--neutral-gray-gray-200)' : 'none',
          transition: 'background-color 0.2s'
        }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        onMouseEnter={(e) => {
          if (node.type !== 'category') e.currentTarget.style.backgroundColor = 'var(--primary-blue-blue-50)';
        }}
        onMouseLeave={(e) => {
          if (node.type !== 'category') e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        {hasChildren && (
          <span style={{ marginRight: '8px', fontSize: '10px', width: '12px', display: 'inline-block' }}>
            {isOpen ? '▼' : '▶'}
          </span>
        )}
        {!hasChildren && <span style={{ marginRight: '8px', width: '12px', display: 'inline-block' }}>•</span>}
        
        {node.link ? (
          <a 
            href={node.link} 
            target="_top"
            style={{ 
              textDecoration: 'none', 
              color: node.type === 'category' ? 'var(--base-black)' : 'var(--primary-blue-blue)',
              fontWeight: node.type === 'category' ? 'bold' : 'normal',
              fontSize: node.type === 'category' ? '16px' : '14px',
              fontFamily: 'var(--font-family-base)'
            }}
          >
            {node.name}
          </a>
        ) : (
          <span style={{ 
            color: node.type === 'category' ? 'var(--base-black)' : 'var(--neutral-gray-gray-700)',
            fontWeight: node.type === 'category' ? 'bold' : 'normal',
            fontSize: node.type === 'category' ? '16px' : '14px',
            fontFamily: 'var(--font-family-base)'
          }}>
            {node.name}
          </span>
        )}

        {node.type === 'component' && (
          <span style={{ 
            marginLeft: '8px', 
            fontSize: '10px', 
            backgroundColor: 'var(--primary-seafoam-100)', 
            color: 'var(--primary-seafoam-700)',
            padding: '2px 6px',
            borderRadius: '10px',
            textTransform: 'uppercase',
            fontWeight: 'bold'
          }}>
            Component
          </span>
        )}
      </div>
      
      {isOpen && hasChildren && (
        <div style={{ borderLeft: '1px solid var(--neutral-gray-gray-200)', marginLeft: '14px' }}>
          {node.children!.map((child, index) => (
            <TreeNode key={index} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const ComponentTree: React.FC<ComponentTreeProps> = ({ data }) => {
  return (
    <div style={{ 
      padding: '24px', 
      backgroundColor: 'var(--base-white)', 
      borderRadius: '8px', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{ 
        fontFamily: 'var(--font-family-heading)', 
        fontSize: '24px', 
        marginBottom: '20px',
        borderBottom: '2px solid var(--primary-blue-blue)',
        paddingBottom: '10px'
      }}>
        Echo UI Component Tree Map
      </h2>
      <p style={{ 
        fontFamily: 'var(--font-family-base)', 
        color: 'var(--neutral-gray-gray-600)',
        marginBottom: '24px'
      }}>
        A hierarchical overview of all components, foundations, and documentation within the Echo Design System.
      </p>
      {data.map((category, index) => (
        <TreeNode key={index} node={category} depth={0} />
      ))}
    </div>
  );
};
