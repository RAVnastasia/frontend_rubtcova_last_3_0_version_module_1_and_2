#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import { readdir, stat, mkdir } from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];
const IMAGE_DIR = './img';
const OUTPUT_DIR = './img/webp';

async function ensureDirectory(dir) {
  try {
    await mkdir(dir, { recursive: true });
  } catch (error) {
    console.error(`Error creating directory ${dir}:`, error);
  }
}

async function convertToWebP(inputPath, outputPath) {
  try {
    // Using sharp-cli to convert images
    const command = `npx sharp-cli -i "${inputPath}" -o "${outputPath}" -f webp -q 85`;
    await execAsync(command);
    console.log(`✅ Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
  }
}

async function processImages() {
  console.log('🖼️  Starting image optimization...\n');

  await ensureDirectory(OUTPUT_DIR);

  try {
    const files = await readdir(IMAGE_DIR);
    const imageFiles = files.filter((file) =>
      SUPPORTED_FORMATS.includes(path.extname(file).toLowerCase())
    );

    console.log(`Found ${imageFiles.length} images to convert\n`);

    for (const file of imageFiles) {
      const inputPath = path.join(IMAGE_DIR, file);
      const outputName = path.basename(file, path.extname(file)) + '.webp';
      const outputPath = path.join(OUTPUT_DIR, outputName);

      const stats = await stat(inputPath);
      if (stats.isFile()) {
        await convertToWebP(inputPath, outputPath);
      }
    }

    console.log('\n✨ Image optimization complete!');
    console.log(`📁 WebP images saved to: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
