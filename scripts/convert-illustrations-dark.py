#!/usr/bin/env python3
"""
Convert black-line illustrations to white-line versions for dark mode.

Takes black ink on white/transparent background and converts to
white ink on transparent background.

Usage:
    python scripts/convert-illustrations-dark.py [--input FILE] [--all]

Options:
    --input FILE    Convert a single file
    --all           Convert all illustrations in public/illustrations/
    --force         Overwrite existing dark versions
    --preview       Show what would be converted without doing it

Examples:
    python scripts/convert-illustrations-dark.py --all
    python scripts/convert-illustrations-dark.py --input public/illustrations/train.png
"""

from PIL import Image
import os
import sys
import argparse
from pathlib import Path


def convert_to_white_lines_alpha(input_path: str, output_path: str) -> bool:
    """
    Convert black-line illustration to white-line on transparent background.

    Args:
        input_path: Path to source image (black lines on white/transparent)
        output_path: Path to save output image (white lines on transparent)

    Returns:
        True if successful, False otherwise
    """
    try:
        # Open the image and convert to RGBA
        img = Image.open(input_path).convert("RGBA")
        pixels = img.getdata()

        new_pixels = []
        for pixel in pixels:
            # pixel is (R, G, B, A)
            r, g, b, a = pixel

            # Calculate brightness (0 = black, 255 = white)
            brightness = (r + g + b) / 3

            # New alpha: inverse of brightness
            # Black (0) -> fully opaque (255)
            # White (255) -> fully transparent (0)
            new_alpha = int(255 - brightness)

            # If original had transparency, factor it in
            if a < 255:
                new_alpha = int(new_alpha * (a / 255))

            # Set pixel to pure white with calculated alpha
            new_pixels.append((255, 255, 255, new_alpha))

        img.putdata(new_pixels)
        img.save(output_path, "PNG")
        return True

    except Exception as e:
        print(f"  Error processing {input_path}: {e}")
        return False


def get_dark_output_path(input_path: str) -> str:
    """Generate the dark mode output path from input path."""
    path = Path(input_path)
    stem = path.stem.lower()  # Normalize to lowercase
    return str(path.parent / f"{stem}-dark.png")


def should_process(filename: str) -> bool:
    """Check if file should be processed (is an image, not already dark)."""
    path = Path(filename)
    stem = path.stem.lower()
    suffix = path.suffix.lower()

    # Skip if already a dark version
    if stem.endswith("-dark") or stem.endswith("_dark"):
        return False

    # Only process image files
    valid_extensions = {".png", ".jpg", ".jpeg", ".gif", ".webp"}
    if suffix not in valid_extensions:
        return False

    return True


def find_illustrations(base_path: str) -> list[str]:
    """Find all illustration files that need processing."""
    illustrations_dir = Path(base_path) / "public" / "illustrations"

    if not illustrations_dir.exists():
        print(f"Error: Illustrations directory not found: {illustrations_dir}")
        return []

    files = []
    for file in illustrations_dir.iterdir():
        if file.is_file() and should_process(str(file)):
            files.append(str(file))

    return sorted(files)


def main():
    parser = argparse.ArgumentParser(
        description="Convert black-line illustrations to white-line for dark mode"
    )
    parser.add_argument(
        "--input", "-i",
        type=str,
        help="Convert a single file"
    )
    parser.add_argument(
        "--all", "-a",
        action="store_true",
        help="Convert all illustrations in public/illustrations/"
    )
    parser.add_argument(
        "--force", "-f",
        action="store_true",
        help="Overwrite existing dark versions"
    )
    parser.add_argument(
        "--preview", "-p",
        action="store_true",
        help="Preview what would be converted"
    )

    args = parser.parse_args()

    # Find project root (where this script is in /scripts)
    script_dir = Path(__file__).parent
    project_root = script_dir.parent

    files_to_process = []

    if args.input:
        # Single file mode
        input_path = Path(args.input)
        if not input_path.is_absolute():
            input_path = project_root / input_path

        if not input_path.exists():
            print(f"Error: File not found: {input_path}")
            sys.exit(1)

        files_to_process = [str(input_path)]

    elif args.all:
        # Process all illustrations
        files_to_process = find_illustrations(project_root)

    else:
        parser.print_help()
        print("\nPlease specify --input FILE or --all")
        sys.exit(1)

    if not files_to_process:
        print("No files to process.")
        sys.exit(0)

    print(f"\nFound {len(files_to_process)} illustration(s) to process:\n")

    converted = 0
    skipped = 0
    failed = 0

    for input_path in files_to_process:
        output_path = get_dark_output_path(input_path)
        input_name = Path(input_path).name
        output_name = Path(output_path).name

        # Check if output already exists
        if Path(output_path).exists() and not args.force:
            print(f"  [SKIP] {input_name} -> {output_name} (already exists)")
            skipped += 1
            continue

        if args.preview:
            print(f"  [PREVIEW] {input_name} -> {output_name}")
            continue

        print(f"  Converting {input_name} -> {output_name}...", end=" ")

        if convert_to_white_lines_alpha(input_path, output_path):
            print("Done!")
            converted += 1
        else:
            failed += 1

    print(f"\n{'Preview' if args.preview else 'Summary'}:")
    print(f"  Converted: {converted}")
    print(f"  Skipped:   {skipped}")
    print(f"  Failed:    {failed}")

    if skipped > 0 and not args.force:
        print("\n  Tip: Use --force to overwrite existing dark versions")


if __name__ == "__main__":
    main()
