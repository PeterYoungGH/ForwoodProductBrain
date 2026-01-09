#!/usr/bin/env tsx
/**
 * Build-time validation script for roadmap markdown files
 * Validates structure and checks for required sections
 */

import * as fs from 'fs';
import * as path from 'path';

const ROADMAP_DIR = path.join(__dirname, '../..');
const ROADMAP_FILES = [
  '01-strategic-roadmap.md',
  '02-portfolio-roadmap.md',
  '03-delivery-roadmap.md',
  'roadmap-hierarchy.md',
];

interface ValidationResult {
  file: string;
  valid: boolean;
  errors: string[];
  warnings: string[];
}

function validateFile(filePath: string): ValidationResult {
  const result: ValidationResult = {
    file: path.basename(filePath),
    valid: true,
    errors: [],
    warnings: [],
  };

  if (!fs.existsSync(filePath)) {
    result.valid = false;
    result.errors.push(`File not found: ${filePath}`);
    return result;
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Check for required sections based on file
  if (filePath.includes('01-strategic-roadmap.md')) {
    if (!content.includes('## Strategic Vision')) {
      result.warnings.push('Missing "Strategic Vision" section');
    }
    if (!content.includes('## Strategic Themes')) {
      result.errors.push('Missing required "Strategic Themes" section');
      result.valid = false;
    }
    if (!content.includes('## Strategic Pillars')) {
      result.warnings.push('Missing "Strategic Pillars" section');
    }
  }

  if (filePath.includes('02-portfolio-roadmap.md')) {
    if (!content.includes('### Now')) {
      result.warnings.push('Missing "Now" section');
    }
    if (!content.includes('### Next')) {
      result.warnings.push('Missing "Next" section');
    }
    if (!content.includes('## Launch Moments')) {
      result.warnings.push('Missing "Launch Moments" section');
    }
  }

  if (filePath.includes('03-delivery-roadmap.md')) {
    if (!content.includes('## Release Pipeline')) {
      result.warnings.push('Missing "Release Pipeline" section');
    }
  }

  return result;
}

function main() {
  console.log('Validating roadmap files...\n');

  const results: ValidationResult[] = [];
  let hasErrors = false;

  for (const file of ROADMAP_FILES) {
    const filePath = path.join(ROADMAP_DIR, file);
    const result = validateFile(filePath);
    results.push(result);

    if (!result.valid) {
      hasErrors = true;
    }
  }

  // Print results
  for (const result of results) {
    console.log(`\n${result.file}:`);
    if (result.valid && result.errors.length === 0 && result.warnings.length === 0) {
      console.log('  ✓ Valid');
    } else {
      if (result.errors.length > 0) {
        console.log('  ✗ Errors:');
        result.errors.forEach(err => console.log(`    - ${err}`));
      }
      if (result.warnings.length > 0) {
        console.log('  ⚠ Warnings:');
        result.warnings.forEach(warn => console.log(`    - ${warn}`));
      }
    }
  }

  if (hasErrors) {
    console.log('\n❌ Validation failed. Please fix errors before building.');
    process.exit(1);
  } else {
    console.log('\n✓ All roadmap files validated successfully.');
    process.exit(0);
  }
}

main();


