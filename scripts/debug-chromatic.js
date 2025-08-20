#!/usr/bin/env node

/**
 * Script to help debug Chromatic component errors
 * This script analyzes stories and identifies potential issues
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m'
};

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function findStoryFiles(dir) {
  const storyFiles = [];
  
  function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (file.endsWith('.stories.tsx') || file.endsWith('.stories.ts')) {
        storyFiles.push(filePath);
      }
    }
  }
  
  traverse(dir);
  return storyFiles;
}

function analyzeStoryFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  // Check for potential issues
  const patterns = [
    {
      pattern: /console\.error/g,
      severity: 'high',
      message: 'Contains console.error calls'
    },
    {
      pattern: /throw new Error/g,
      severity: 'high',
      message: 'Contains throw statements'
    },
    {
      pattern: /useEffect.*setInterval|setTimeout/g,
      severity: 'medium',
      message: 'Contains timers in useEffect (may cause issues in Chromatic)'
    },
    {
      pattern: /useState.*\[\s*\w+,\s*set\w+\s*\]\s*=\s*useState.*undefined/g,
      severity: 'low',
      message: 'Uses undefined as initial state'
    },
    {
      pattern: /\.map\(.*undefined/g,
      severity: 'medium',
      message: 'Maps over potentially undefined values'
    },
    {
      pattern: /chromatic:\s*{\s*disable:\s*false\s*}/g,
      severity: 'info',
      message: 'Explicitly enabled for Chromatic'
    },
    {
      pattern: /chromatic:\s*{\s*disable:\s*true\s*}/g,
      severity: 'info',
      message: 'Disabled in Chromatic'
    }
  ];
  
  patterns.forEach(({ pattern, severity, message }) => {
    const matches = content.match(pattern);
    if (matches) {
      issues.push({
        severity,
        message: `${message} (${matches.length} occurrence${matches.length > 1 ? 's' : ''})`
      });
    }
  });
  
  // Check for missing imports
  if (content.includes('React.') && !content.includes("import React")) {
    issues.push({
      severity: 'medium',
      message: 'Uses React but may be missing React import'
    });
  }
  
  return issues;
}

function main() {
  log('cyan', '🔍 Chromatic Story Analyzer');
  log('cyan', '==============================\n');
  
  const srcDir = path.join(__dirname, '..', 'src');
  const storyFiles = findStoryFiles(srcDir);
  
  log('blue', `Found ${storyFiles.length} story files to analyze\n`);
  
  let totalIssues = 0;
  const problemFiles = [];
  
  storyFiles.forEach(filePath => {
    const relativePath = path.relative(process.cwd(), filePath);
    const issues = analyzeStoryFile(filePath);
    
    if (issues.length > 0) {
      totalIssues += issues.length;
      problemFiles.push({ path: relativePath, issues });
      
      log('yellow', `📄 ${relativePath}`);
      issues.forEach(issue => {
        const color = issue.severity === 'high' ? 'red' : 
                     issue.severity === 'medium' ? 'yellow' : 
                     issue.severity === 'info' ? 'cyan' : 'reset';
        log(color, `  ${issue.severity.toUpperCase()}: ${issue.message}`);
      });
      console.log();
    }
  });
  
  // Summary
  if (totalIssues > 0) {
    log('magenta', '📊 Summary');
    log('magenta', '===========');
    log('yellow', `Total files with potential issues: ${problemFiles.length}`);
    log('yellow', `Total issues found: ${totalIssues}`);
    
    // Count by severity
    const severityCounts = problemFiles.reduce((acc, file) => {
      file.issues.forEach(issue => {
        acc[issue.severity] = (acc[issue.severity] || 0) + 1;
      });
      return acc;
    }, {});
    
    Object.entries(severityCounts).forEach(([severity, count]) => {
      const color = severity === 'high' ? 'red' : 
                   severity === 'medium' ? 'yellow' : 
                   severity === 'info' ? 'cyan' : 'reset';
      log(color, `${severity.toUpperCase()}: ${count}`);
    });
    
    console.log();
    log('cyan', '💡 Recommendations:');
    log('reset', '1. Fix HIGH severity issues first');
    log('reset', '2. Consider disabling problematic stories in Chromatic with: chromatic: { disable: true }');
    log('reset', '3. Wrap stories with error boundaries for better error handling');
    log('reset', '4. Test stories individually in Storybook before Chromatic deployment');
    
  } else {
    log('green', '✅ No obvious issues found in story files!');
    log('reset', 'If Chromatic is still failing, the issue might be:');
    log('reset', '- Runtime dependency issues');
    log('reset', '- CSS loading problems');
    log('reset', '- Network/timeout issues');
    log('reset', '- Environment differences between local and Chromatic');
  }
  
  console.log();
  log('cyan', '🔧 Next steps:');
  log('reset', '1. Check the Chromatic build URL for specific error details');
  log('reset', '2. Test problematic stories locally in Storybook');
  log('reset', '3. Use the ChromaticDebug stories to validate environment');
}

if (require.main === module) {
  main();
}

module.exports = { findStoryFiles, analyzeStoryFile };
