import React from 'react';
import { Card } from '../atoms/Card';
import type { CardProps } from '../atoms/Card';
import { Avatar } from '../atoms/Avatar';
import { Tag } from '../atoms/Tag';
import { EchoMUIButton as Button } from '../atoms/EchoMUIButton';
import './userCard.css';

export interface UserInfo {
  /** User's name */
  name: string;
  /** User's email */
  email?: string;
  /** User's role/title */
  role?: string;
  /** User's company/organization */
  company?: string;
  /** User's avatar image URL */
  avatar?: string;
  /** User's status */
  status?: 'online' | 'offline' | 'away' | 'busy';
  /** User's location */
  location?: string;
  /** User's skills/tags */
  skills?: string[];
  /** Last seen/activity */
  lastSeen?: string;
}

export interface UserCardProps extends Omit<CardProps, 'children' | 'title' | 'subtitle' | 'bodyText'> {
  /** User information */
  user: UserInfo;
  /** Card layout */
  layout?: 'horizontal' | 'vertical' | 'compact';
  /** Show user actions */
  showActions?: boolean;
  /** Show user skills/tags */
  showSkills?: boolean;
  /** Show status indicator */
  showStatus?: boolean;
  /** Show contact info */
  showContact?: boolean;
  /** Maximum number of skills to show */
  maxSkills?: number;
  /** Custom actions */
  actions?: Array<{
    label: string;
    type?: 'primary' | 'secondary' | 'ghost';
    icon?: React.ReactNode;
    onClick?: () => void;
  }>;
  /** Additional CSS classes */
  className?: string;
  /** User click handler */
  onUserClick?: (user: UserInfo) => void;
  /** Message action handler */
  onMessage?: (user: UserInfo) => void;
  /** Connect action handler */
  onConnect?: (user: UserInfo) => void;
}

const StatusIcon = ({ status }: { status: UserInfo['status'] }) => {
  const statusColors = {
    online: '#70CC67',
    offline: '#9CA3AF',
    away: '#F4A403',
    busy: '#CE2031',
  };

  const color = status ? statusColors[status] : statusColors.offline;

  return (
    <div 
      className={`user-status-indicator user-status-indicator--${status || 'offline'}`}
      style={{ backgroundColor: color }}
      title={status ? status.charAt(0).toUpperCase() + status.slice(1) : 'Offline'}
    />
  );
};

const MessageIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 3.5C2 2.67157 2.67157 2 3.5 2H12.5C13.3284 2 14 2.67157 14 3.5V10.5C14 11.3284 13.3284 12 12.5 12H4.5L2 14.5V3.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ConnectIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 8H10M8 6V10M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UserCard: React.FC<UserCardProps> = ({
  user,
  layout = 'vertical',
  showActions = true,
  showSkills = true,
  showStatus = true,
  showContact = true,
  maxSkills = 3,
  actions = [],
  className = '',
  onUserClick,
  onMessage,
  onConnect,
  ...cardProps
}) => {
  const userCardClasses = [
    'user-card',
    `user-card--${layout}`,
    className
  ].filter(Boolean).join(' ');

  const handleUserClick = () => {
    if (onUserClick) {
      onUserClick(user);
    }
  };

  const handleMessage = () => {
    if (onMessage) {
      onMessage(user);
    }
  };

  const handleConnect = () => {
    if (onConnect) {
      onConnect(user);
    }
  };

  // Default actions
  const defaultActions = [
    ...(onMessage ? [{
      label: 'Message',
      type: 'primary' as const,
      icon: <MessageIcon />,
      onClick: handleMessage,
    }] : []),
    ...(onConnect ? [{
      label: 'Connect',
      type: 'secondary' as const,
      icon: <ConnectIcon />,
      onClick: handleConnect,
    }] : []),
  ];

  const allActions = [...defaultActions, ...actions];
  const skillsToShow = showSkills && user.skills 
    ? user.skills.slice(0, maxSkills)
    : [];

  return (
    <Card
      {...cardProps}
      className={userCardClasses}
      onClick={onUserClick ? handleUserClick : undefined}
    >
      <div className="user-card-content">
        {/* Avatar Section */}
        <div className="user-card-avatar">
          <div className="user-card-avatar-container">
            <Avatar
              src={user.avatar}
              alt={user.name}
              initial={user.name.charAt(0)}
              size={layout === 'compact' ? 'small' : 'default'}
            />
            {showStatus && (
              <StatusIcon status={user.status} />
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="user-card-info">
          <div className="user-card-basic-info">
            <h3 className="user-card-name">{user.name}</h3>
            {user.role && (
              <p className="user-card-role">{user.role}</p>
            )}
            {user.company && (
              <p className="user-card-company">{user.company}</p>
            )}
          </div>

          {showContact && (user.email || user.location) && (
            <div className="user-card-contact">
              {user.email && (
                <p className="user-card-email">{user.email}</p>
              )}
              {user.location && (
                <p className="user-card-location">{user.location}</p>
              )}
            </div>
          )}

          {skillsToShow.length > 0 && (
            <div className="user-card-skills">
              {skillsToShow.map((skill, index) => (
                <Tag
                  key={index}
                  label={skill}
                  size="small"
                  variant="light-gray"
                  showClose={false}
                />
              ))}
              {user.skills && user.skills.length > maxSkills && (
                <Tag
                  label={`+${user.skills.length - maxSkills}`}
                  size="small"
                  variant="outline-blue"
                  showClose={false}
                />
              )}
            </div>
          )}

          {user.lastSeen && (
            <div className="user-card-meta">
              <p className="user-card-last-seen">Last seen {user.lastSeen}</p>
            </div>
          )}
        </div>

        {/* Actions Section */}
        {showActions && allActions.length > 0 && (
          <div className="user-card-actions">
            {allActions.map((action, index) => (
              <Button
                key={index}
                variant={(action.type === 'ghost' ? 'tertiary' : action.type) || 'secondary'}
                size={layout === 'compact' ? 'small' : 'default'}
                leadingIcon={action.icon}
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
